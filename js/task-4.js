const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
  },
  decrement() {
    this.counterValue -= 1;
  }
};

const incrementRef = document.querySelector('button[data-action="increment"]');
const decrementRef = document.querySelector('button[data-action="decrement"]');
const valueRef = document.querySelector("#value");

incrementRef.addEventListener("click", () => {
  counter.increment();
  valueOutput();
});
decrementRef.addEventListener("click", () => {
  counter.decrement();
  valueOutput();
});

const valueOutput = () => (valueRef.textContent = counter.counterValue);
