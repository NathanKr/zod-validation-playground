import { buttons, getButtonElems } from "./lib/document-utils";
import { validateFormWithZod } from "./lib/form-validation";
import { UserFromClass } from "./types/e-user-form";
// import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>zod validation for typescript in particular</h1>
    <h2>string and object validation</h2>
    <p>click a button and check the console</p>
    ${getButtonElems()}
    <h2>User From</h2>
    <p>click Submit to see validation error</p>
    <form class='${UserFromClass.form}'>
      <label>Name</label>
      <input class='${UserFromClass.name}'/>
      <p class='${UserFromClass.nameErr}'></p>
      <label>Email</label>
      <input class='${UserFromClass.email}' type='email'/>
      <p class='${UserFromClass.emailErr}'></p>
      <label>Age</label>
      <input class='${UserFromClass.age}' type='number'/>
      <p class='${UserFromClass.ageErr}'></p>
      <input type='submit' value='Submit'/>
    </form>
  </div>
`;

document.querySelector("form")!.addEventListener("submit", (e) => {
  e.preventDefault();
  // validateFormWithoutZod();
  validateFormWithZod();
});

buttons.forEach((button, i) => {
  document
    .querySelectorAll("button")
    [i].addEventListener("click", button.func);
});

