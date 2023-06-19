const initState = {
  todos: [
    { id: 1, todo: "buy milk" },
    { id: 2, todo: "buy bread" }
  ],
  posts: [{ id: 1, post: "egg hunt with yoshi" }]
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.todo] };
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.post] };
    case "DELETE_TODO":
      let modifiedTodo = state.todos.filter((todo) => todo.id !== action.id);
      return { ...state, todos: modifiedTodo };
    case "DELETE_POST":
      let modifiedPost = state.posts.filter((post) => post.id !== action.id);
      return { ...state, posts: modifiedPost };
    default:
      return state;
  }
};

export default reducer;
