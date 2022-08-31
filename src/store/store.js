import { createStore } from "redux";
import { ReducerStore } from "./reducer";
import { throttle } from "lodash";

export const store = createStore(ReducerStore);

store.subscribe(
   throttle(() => {
      store.getState();
      console.log("storegetstate", store.getState());
   }),
   1000
);
