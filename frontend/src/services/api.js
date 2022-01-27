export const addTodo = async ({ item }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ item });
    }, 3000);
  });
};

export const fetchTodos = async () => {
  return new Promise((resolve) => {
    const mockData = [
      { id: 1, title: "Pay credit card bills", status: true },
      { id: 2, title: "Shop for groceries", status: true },
      { id: 3, title: "Complete assignment", status: false },
    ];
    resolve({ data: mockData });
  });
};
