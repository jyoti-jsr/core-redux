import "./styles.css";
import { connect } from "react-redux";
import { deletePostAction, addPostAction } from "./store/actions/postActions";
import { deleteTodoAction, addTodoAction } from "./store/actions/todoActions";

function App({ todos, posts, addNewTodo, addNewPost, deleteTodo, deletePost }) {
  // console.log(todos);
  // console.log(posts);

  return (
    <div className="App">
      <h2>TODOS</h2>
      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.todo}{" "}
          <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </p>
      ))}
      <button
        onClick={() => {
          addNewTodo();
        }}
      >
        ADD TODO
      </button>
      <h2>POSTS</h2>
      {posts.map((post) => (
        <p key={post.id}>
          {post.post}{" "}
          <button onClick={() => deletePost(post.id)}>delete</button>
        </p>
      ))}
      <button
        onClick={() => {
          addNewPost();
        }}
      >
        ADD POST
      </button>
    </div>
  );
}

// get state data from the store
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    posts: state.posts
  };
};
// dispatch an action
const mapDispatchToProps = (dispatch) => {
  return {
    addNewTodo: () => {
      // dispatch({ type: "ADD_TODO", todo: { id: 3, todo: "buy butter" } });
      dispatch(addTodoAction());
    },
    addNewPost: () => {
      dispatch(addPostAction());
    },
    deleteTodo: (id) => {
      dispatch(deleteTodoAction(id));
    },
    deletePost: (id) => {
      // dispatch({ type: "DELETE_POST", id: id });
      dispatch(deletePostAction(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
