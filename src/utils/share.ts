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
