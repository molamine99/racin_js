window.onload = function() {
    let a = 0;

    const footer = document.getElementsByTagName("footer");
    const div = footer[0].getElementsByTagName("div")[0];
    div.addEventListener("click", () => {
        a++;
        div.innerHTML = a;
    });
  }