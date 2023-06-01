import './style.css'
import { validateStringParse, validateStringSafeParse } from './lib/string-validators';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>zod validation for typescript in particular</h1>
    <p>check the console</p>
  </div>
`

console.log(validateStringSafeParse("111")); //  { success: true, data: "111" }
console.log(validateStringSafeParse(111)); // { success: false, error: Getter }
console.log(validateStringSafeParse(true)); // { success: false, error: Getter }


validateStringParse("111"); // ok
console.log('validateStringParse("111") does not throw');

try {
  validateStringParse(111); // throw  
} catch (err) {
  console.log(err);
}
try {
  validateStringParse(true); // throw  
} catch (err) {
  console.log(err);
}

 

