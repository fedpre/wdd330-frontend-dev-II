const form = document.forms["search"];
const [input, button] = form.elements;

/* Events fired when the input box is in focus */
//input.addEventListener("focus", () => alert("focused"), false);
/* Events focus after the user clicks away from the input box in focus */
//input.addEventListener("blur", () => alert("blurred"), false);input.addEventListener('change', () => alert('changed'), false);
/* Events fires after the user changes the value in the input box and click away */
//input.addEventListener("change", () => alert("changed"), false);

form.addEventListener("submit", search, false);

function search(event) {
  alert(`You searched for: ${input.value}`);
  event.preventDefault();
}
