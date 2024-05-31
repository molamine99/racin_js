window.onload = function() {

    const footer = document.querySelector("footer>div");

    footer.addEventListener("click", () => {
        let reponse = prompt("What is your name ?");

        if(reponse ){
            alert(`Are you sure ${reponse} is your name ?`);
            footer.innerHTML = `Hello ${reponse} !`;
        }
    });

}