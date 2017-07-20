# Intermediate

**********************************************

## Objectives

* Use the <form></form> tag
* Use the <input> tag
* Use the <label></label> tag
* Write Simple Validations

```html

<!-- A Simple form  -->
<h1>Sign In</h1>

<form action="/sign-in-url" method="post">
    <input type="text">
    <input type="password">
    <button>Login</button>
</form>

<!-- Using labels  -->

<form action="/sign-in-url" method="post">
    <label for="username">Username:</label>
    <input id="username" type="text">
    <label for="password">Password:</label>
    <input id="password" type="password">
    <button>Login</button>
</form>

<!-- Simple validations  -->

<!-- The 'required' attribute validates that an input is not empty -->

<!-- There are also type validations.  Try changing "type" from "text" to "email" -->

<form action="/sign-in-url" method="post">
    <label for="email">Email:</label>
    <input id="email" type="email" required>
    <label for="password">Password:</label>
    <input id="password" type="password" required>
    <button>Login</button>
</form>





  ```
