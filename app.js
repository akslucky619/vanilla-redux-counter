const d = document;
var counter = d.getElementById("value");
var increment = d.getElementById("increment");
var decrement = d.getElementById("decrement");
var resetbtn = d.getElementById("reset");


function reducer(state = 0, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return (state = 0);
  }
}

const reset = () => {
  store.dispatch({ type: "reset" });
};

const store = Redux.createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
  counter.textContent = store.getState();
});

increment.addEventListener("click", () => {
  store.dispatch({ type: "increment" });
});

decrement.addEventListener("click", () => {
  store.dispatch({ type: "decrement" });
});

resetbtn.addEventListener("click", reset);
