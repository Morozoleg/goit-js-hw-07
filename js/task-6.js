const inputRef = document.querySelector("#validation-input");

const handleInputBlur = event => {
  Number(event.target.getAttribute("data-length")) === event.target.value.length
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
};
const handleInputFocus = () => {
  inputRef.classList.remove("valid", "invalid");
};

inputRef.addEventListener("focus", handleInputFocus);
inputRef.addEventListener("blur", handleInputBlur);
