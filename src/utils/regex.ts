export const phoneRegex =
    /(^8|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/;
export const onlyDigitsRegex = /^\+?\d+$/;

export const cleanPhoneNumber = (phone: string) => {
    return phone.replace(/[()\-\s]/g, ''); // Убираем скобки, дефисы и пробелы
};
