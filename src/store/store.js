import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer);

// store.subscribe(() => store.getState());

// action - is js object having two properties 1.type and 2.payload
// const todoAction1 = { type: "ADD_TODO", todo: "buy milk" };
// const todoAction2 = { type: "ADD_TODO", todo: "buy bread" };
// const postAction1 = { type: "ADD_POST", post: "egg hunt with yoshi" };
// store.dispatch(todoAction1);
// store.dispatch(todoAction2);
// store.dispatch(postAction1);

export default store;
