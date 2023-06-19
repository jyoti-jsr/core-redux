export const deletePostAction = (id) => {
  return {
    type: "DELETE_POST",
    id: id
  };
};

export const addPostAction = () => {
  return {
    type: "ADD_POST",
    post: { id: 2, post: "going to visit tajmahal" }
  };
};
