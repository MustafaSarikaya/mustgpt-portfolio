import dictionary from '../dictionary.json';

type NestedKeyOf<T> = {
  [K in keyof T & (string | number)]: T[K] extends object
    ? `${K}` | `${K}.${NestedKeyOf<T[K]>}`
    : `${K}`;
}[keyof T & (string | number)];

export const getText = (path: NestedKeyOf<typeof dictionary>) => {
  return path.split('.').reduce((obj, key) => obj?.[key], dictionary as any) as string;
};
