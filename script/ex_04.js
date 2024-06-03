window.onload = function() {
    const footer = document.getElementsByTagName("footer");
    const div = footer[0].getElementsByTagName("div")[0];
    longeur = 0;

    document.onkeydown = function (e) {

        if (longeur < 42 && e.key.length == 1) {
            div.innerHTML += e.key;
            longeur++;
        }

        else if (longeur == 42 && e.key.length == 1) {
            div.innerHTML = div.innerHTML.substring(1)
            div.innerHTML += e.key;
        }
    }
}