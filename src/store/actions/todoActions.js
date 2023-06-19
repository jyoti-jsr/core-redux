export const deleteTodoAction = (id) => {
  return {
    type: "DELETE_TODO",
    id: id
  };
};
export const addTodoAction = () => {
  return {
    type: "ADD_TODO",
    todo: { id: 3, todo: "buy butter" }
  };
};
