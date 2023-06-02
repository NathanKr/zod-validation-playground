<h2>Motivation</h2>
Play with zod - a validation library for node and client side. Integrated nicely with typescript

<h2>Repo content</h2>
<ul>
<li>validateString : validate string with zod</li>
<li>validateObject : validate object with zod</li>
<li>validateFormWithoutZod : validate form without zod</li>
<li>validate form with zod : get is valid status and errors</li>
</ul>

<h2>Points of interest</h2>
<ul>
<li>it seems possible to make validateFormWithZod much more compact by enumerating over the schema keys</li>
<li>valueAsNumber property of age input element is used to get number instead of string using value(not related to zod)</li>
<li>use enum to represent class name in the form (not related to zod)</li>
<ul>
