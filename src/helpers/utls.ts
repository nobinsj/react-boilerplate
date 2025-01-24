export const getItemFromLocalStorage = (id: string) => {
  const item = localStorage.getItem(id);
  return item ? JSON.parse(item) : null;
};
