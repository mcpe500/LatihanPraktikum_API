export const getKeyFromLocalStorage = (key: string): string => {
  const value: string | null = localStorage.getItem(key);
  if (value) {
    return value;
  }
  return "";
};
export const setKeyInLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};
