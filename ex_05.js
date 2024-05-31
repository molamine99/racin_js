window.onload = function(){

    var taille = 16;

    var sel = document.getElementsByTagName("select")[0];
     sel.onchange = function(e) {
        document.body.style.backgroundColor = e.target.value;
    }
    
    var plus = document.getElementsByTagName("button")[0];

    plus.onclick = function() {
        taille++;
        document.body.style.fontSize = taille + "px";
    }
    var moins = document.getElementsByTagName("button")[1];

    moins.onclick = function() {
        taille--;
        document.body.style.fontSize = taille + "px";
    }

}