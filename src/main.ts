import { validateObject, validateString } from "./lib/demo";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>zod validation for typescript in particular</h1>
    <p>check the console</p>
  </div>
`;

validateString();
validateObject();