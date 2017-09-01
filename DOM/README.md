# The DOM

## Methods

The document comes with a bunch of methods for selecting elements.  We're going to learn about the following 5:

* document.getElementById()
* document.getElementsByClassName()
* document.getElementsByTagName()
* document.querySelector()
* document.querySelectorAll()

## TextContent
* Returns a string of all the text contained in a given element.

``` html
<p>
  This is an <strong>awesome</strong> paragraph
</p>
```

```javascript

/Select the <p> tag:
var tag = document.querySelector("p");

//Retrieve the textContent:
tag.textContent //"This is an awesome paragraph"

//alter the textContent:
tag.textContent = "blah blah blah";

```
## innerHTML
* Similar to textContent, except it returns a string of all the HTML contained in a given element.


``` html
<p>
  This is an <strong>awesome</strong> paragraph
</p>
```

```javascript

//Select the <p> tag:
var tag = document.querySelector("p");

tag.innerHTML
//"This is an <strong>awesome</strong> paragraph"

```
