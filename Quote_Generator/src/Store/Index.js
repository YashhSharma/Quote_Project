// import { createStore } from "redux";

// const initialState = {
//   quoteBody: "Give a man a fish and feed him for a day. Don't teach a man to fish… and feed yourself. He's a grown man. And fishing's not that hard."
// };

// const storeReducer = (store = initialState, action) => {
//     let quote
//   if (action.type === "FETCH") {
//     fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
//       .then(response => response.json())
//       .then(data => {
//         console.log(data[0]);
//       return  initialState.quoteBody=data[0];
//       })
//       .catch(error => {
//           console.error("Error:", error);
//           });
//         console.log(`${initialState.quoteBody} task`);
//   }
//   return store;
// };

// const store = createStore(storeReducer);
// export default store;


import { createStore } from "redux";

const initialState = {
  quoteBody: "Give a man a fish and feed him for a day. Don't teach a man to fish… and feed yourself. He's a grown man. And fishing's not that hard."
};

const storeReducer = (state = initialState, action) => {
    
    
  switch (action.type) {
    case "FETCH_QUOTE":
      return {
        ...state,
        quoteBody: action.payload
      };
    default:
      return state;
  }
   ;
};



const store = createStore(storeReducer);
// export { store, fetchQuote };
export default store;
