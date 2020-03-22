const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const handleInput = () => {
  textRef.style.fontSize = inputRef.value + "px";
  inputRef.setAttribute("min", 14);
  inputRef.setAttribute("max", 40);
};
inputRef.addEventListener("input", handleInput);
