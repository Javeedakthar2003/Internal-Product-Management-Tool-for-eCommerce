const DB_KEY = "ecomm-tool-data";

export const loadData = () => {
  const data = localStorage.getItem(DB_KEY);
  return data ? JSON.parse(data) : { categories: [], products: [] };
};

export const saveData = (data) => {
  localStorage.setItem(DB_KEY, JSON.stringify(data));
};
