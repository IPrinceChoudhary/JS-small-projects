const btn = document.querySelector(".switch");
const body = document.body;

btn.addEventListener("click", (e)=>{
  console.log(e.target.parentNode.parentNode)
  if (e.target.classList.contains("crimson")) {
    const span = e.target.parentNode.parentNode;
    span.style.backgroundColor = "crimson";
    span.style.color = "white";
  }
  if(e.target.classList.contains("white")) {
    const span = e.target.parentNode.parentNode;
    span.style.backgroundColor = "white";
    span.style.color = "black";
  }
  if(e.target.classList.contains("yellow")) {
    const span = e.target.parentNode.parentNode;
    span.style.backgroundColor = "yellow";
    span.style.color = "black";
  }
  if(e.target.classList.contains("aqua")) {
    const span = e.target.parentNode.parentNode;
    span.style.backgroundColor = "aqua";
    span.style.color = "black"
}})
