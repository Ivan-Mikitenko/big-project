type Mods = Record<string, boolean | string>;

// light версия бибилотеки classNames
export const classNames = (
  cls: string,
  mods: Mods,
  additional: string[],
): string => [
  cls,
  ...additional.filter(Boolean),
  ...Object.entries(mods) // => кортеж
    .filter(([_, bool]) => Boolean(bool)) // => фильтруем каждый кортеж по boolean
    .map(([className]) => className), // => возвращаем первое значние из кортежа
].join(' ');
