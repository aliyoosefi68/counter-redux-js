import {
  counterIncrease,
  counterDecrease,
  counterReset,
} from "./actionsTypes.js";

const increaseCreatore = () => {
  return {
    type: counterIncrease,
  };
};
const decreaseCreatore = () => {
  return {
    type: counterDecrease,
  };
};
const resetCreatore = () => {
  return {
    type: counterReset,
  };
};

export { increaseCreatore, decreaseCreatore, resetCreatore };
