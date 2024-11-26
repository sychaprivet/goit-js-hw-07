const nameIn = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");

nameIn.addEventListener("input", () => {
  const nameTrim = nameIn.value.trim();
  if (nameTrim.length > 0) {
    nameOut.textContent = nameTrim;
  } else {
    nameOut.textContent = "Anonymous";
  }
});
