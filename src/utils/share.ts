import heic2any from 'heic2any';

/**
 * Получить нормальный путь к картинкам
 */
export const getImagePath = (path?: string) => {
    if (!path) return '';

    const host = import.meta.env.VITE_SERVER_URL || '';

    const normalPath = path.replace('files/', 'uploads/');

    return host + normalPath;
};

/**
 * Функция-переключатель для массива
 * @param array Исходный массив
 * @param value Значение, которое нужно добавить или удалить
 * @param compareFn Функция для сравнения элементов (опционально)
 * @returns Новый массив с применёнными изменениями
 */
export function toggleArrayItem<T>(
    array: T[],
    value: T,
    compareFn?: (a: T, b: T) => boolean
): T[] {
    const comparator = compareFn || ((a, b) => a === b);
    const index = array.findIndex((item) => comparator(item, value));

    if (index === -1) {
        return [...array, value]; // Добавляем элемент
    } else {
        return array.filter((_, i) => i !== index); // Удаляем элемент
    }
}

/**
 * Получить файл по url
 */
export async function urlToFile(url: string): Promise<File> {
    const res = await fetch(url);
    const blob = await res.blob();

    // Пытаемся получить имя файла из URL
    const urlParts = url.split('/');
    const fileName = urlParts[urlParts.length - 1] || 'file';

    // Определяем MIME-тип из заголовка ответа
    const contentType =
        res.headers.get('Content-Type') || 'application/octet-stream';

    return new File([blob], fileName, {type: contentType});
}

/**
 * Проверка поддержки heic в браузере
 */
export const isHeicSupported = () => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/heic').indexOf('data:image/heic') === 0;
};

/**
 * Перевод heic в png
 */
export const convertHeicToPng = async (file: File): Promise<File | null> => {
    if (
        file.type !== 'image/heic' &&
        !file.name.toLowerCase().endsWith('.heic')
    )
        return null;
    try {
        const convertedBlob = await heic2any({
            blob: file,
            toType: 'image/png',
            quality: 0.9,
        });

        const pngFile = new File(
            [convertedBlob as Blob],
            file.name.replace(/\.heic$/i, '.png'),
            {type: 'image/png'}
        );

        return compressImageToWebP(pngFile);
    } catch (err) {
        console.error('Ошибка конвертации HEIC:', err);
        return null;
    }
};

/**
 * Оптимизация изображения
 */
export const compressImageToWebP = async (
    file: File,
    maxSizeMB = 5,
    quality = 0.8
): Promise<File | null> => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        const reader = new FileReader();

        reader.onload = () => {
            if (typeof reader.result !== 'string')
                return reject('Invalid data');
            image.src = reader.result;
        };

        image.onload = () => {
            const canvas = document.createElement('canvas');
            const MAX_WIDTH = 2000;
            const scaleSize = MAX_WIDTH / image.width;

            canvas.width = image.width > MAX_WIDTH ? MAX_WIDTH : image.width;
            canvas.height =
                image.width > MAX_WIDTH
                    ? image.height * scaleSize
                    : image.height;

            const ctx = canvas.getContext('2d');
            if (!ctx) return reject('Canvas error');
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

            canvas.toBlob(
                (blob) => {
                    if (!blob) return reject('Failed to compress');
                    if (blob.size / 1024 / 1024 > maxSizeMB) {
                        return reject(
                            'Image is too large even after compression'
                        );
                    }

                    const compressedFile = new File(
                        [blob],
                        file.name.replace(/\.\w+$/, '.webp'),
                        {
                            type: 'image/webp',
                        }
                    );
                    resolve(compressedFile);
                },
                'image/webp',
                quality
            );
        };

        reader.onerror = (e) => reject(e);
        reader.readAsDataURL(file);
    });
};
