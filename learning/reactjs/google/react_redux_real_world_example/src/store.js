import {createStore,applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import RootReducer from "./reducers";

// ONE WAY

// const getMiddleware=()=>{
//     if(process.env.NODE_ENV==="production"){
//         return applyMiddleware(createLogger());
//     } else {
//         return applyMiddleware(createLogger())
//     }
// }

// export default function(){
//     return createStore(RootReducer,composeWithDevTools(getMiddleware()))
// } 

// SECOND WAY
let store;

export default{
    configure:(initialState)=>{
           
      if(initialState){
          store=createStore(RootReducer,initialState, applyMiddleware(createLogger()));
          return store;
      }

      store=createStore(RootReducer,composeWithDevTools(applyMiddleware(createLogger())));

      return store;
    },

    currentStore:()=>{
        return store;
    }
}