// const a = function(){
//   const exercice =document.getElementsByClassName('exercice');
//   const footer = exercice.getElementsByTagNameNS('footer');
//   const div = footer.getElementsByTagName('div').innerHTML = 'Hello World';
//   console.log("in function");
// }

window.onload = function() {
  const footer = document.getElementsByTagName("footer");
  const div = footer[0].getElementsByTagName("div")[0];
  div.innerHTML = "Hello World"
}