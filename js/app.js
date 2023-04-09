//imports
import {
  counterIncrease,
  counterDecrease,
  counterReset,
} from "../Redux/actionsTypes.js";

import {
  increaseCreatore,
  decreaseCreatore,
  resetCreatore,
} from "../Redux/actionCreator.js";

const decBtn = document.querySelector(".dec");
const incBtn = document.querySelector(".inc");
const resetBtn = document.querySelector(".reset");

const numberElement = document.querySelector("#num");

//Declare Counter Reducer

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case counterIncrease: {
      return state + 1;
    }
    case counterDecrease: {
      return state - 1;
    }
    case counterReset: {
      return 0;
    }
    default: {
      return state;
    }
  }
};

const store = Redux.createStore(counterReducer);
console.log(store);

//Handler event
decBtn.addEventListener("click", () => {
  store.dispatch(decreaseCreatore());
  numberElement.innerHTML = store.getState();
});

incBtn.addEventListener("click", () => {
  store.dispatch(increaseCreatore());
  numberElement.innerHTML = store.getState();
});

resetBtn.addEventListener("click", () => {
  store.dispatch(resetCreatore());
  numberElement.innerHTML = store.getState();
});
