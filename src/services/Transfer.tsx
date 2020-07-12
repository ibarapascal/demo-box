export const pascalToLisp = (str: string) =>
  str
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase();

export const camelToLisp = (str: string) =>
  str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
