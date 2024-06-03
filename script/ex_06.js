window.onload = function(){

    let div = document.getElementsByTagName("div")[2];

    let url = "https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?select=*&limit=25"
    
    fetch(url)
    .then(async (response) => {
      let res = await response.json();

        res.results.forEach((data) => {
            div.textContent += `${data.nom_commune} ${data.nom_etablissement} ${data.mail}`;
        })
    })
    .then((data) => {
      let authors = data;
    })
}