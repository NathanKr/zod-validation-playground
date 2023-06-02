import { validateObject, validateString } from "./lib/demo";
import {
  validateFormWithZod,
  validateFormWithoutZod,
} from "./lib/form-validation";
import { UserFromClass } from "./types/e-user-form";
// import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>zod validation for typescript in particular</h1>
    <h2>string and object validation</h2>
    <p>click and check the console</p>
    <button>validate string</button>
    <button>validate object</button>
    <h2>User From</h2>
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

document
  .querySelectorAll("button")[0]
  .addEventListener("click", validateString);
document
  .querySelectorAll("button")[1]
  .addEventListener("click", validateObject);
document.querySelector("form")!.addEventListener("submit", (e) => {
  e.preventDefault();

  // validateFormWithoutZod();
  validateFormWithZod();
});
