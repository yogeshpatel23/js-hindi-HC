# Projects related to Dom

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("Yogesh");
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.style.backgroundColor = button.id;
  button.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.id;
  });
});
```
