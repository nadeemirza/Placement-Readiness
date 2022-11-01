const buttons = Array.from(document.querySelectorAll("button"));
let input = document.querySelector(".screen");
buttons.map((button) => {
  button.addEventListener("click", function (e) {
    switch (e.target.innerText) {
      case "=":
        try {
          input.innerText = eval(input.innerText);
        } catch {
          input.innerText = "Error";
        }
        break;
      case "C":
        input.innerText = "";
        break;
      case "Del":
        input.innerText = input.innerText.slice(0, -1);
        break;
      default:
        input.innerText += e.target.innerText;
    }
  });
});
