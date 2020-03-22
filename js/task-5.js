const inputRef = document.querySelector("#name-input");
const nameLabelRef = document.querySelector("#name-output");

const handleInput = event => {
  event.target.value.length === 0
    ? (nameLabelRef.textContent = "незнакомец")
    : (nameLabelRef.textContent = event.target.value);
};

inputRef.addEventListener("input", handleInput);
