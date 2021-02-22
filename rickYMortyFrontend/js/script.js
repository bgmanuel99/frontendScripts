var actualPage = "https://rickandmortyapi.com/api/character?page=1"

const chargeData = (page) => {
    fetch(page).then((response) => {
        return response.json()
    }).then(data => {
        var results = data.results
        var html = ""
        for(var i = 0; i < results.length; i++){
            html += "<div class='mini'>"
            html += "<img class='thumbnail' src='" + results[i].image + "'/>"
            html += "<strong id='charName'>" + results[i].name + "</strong>"
            html += "<div class='information'"
            html += "<p>Species: " + results[i].species + "</p>"
            html += "<p>Gender: " + results[i].gender + "</p>"
            html += "<p>Origin: " + results[i].origin.name + "</p>"
            html += "<p>Location: " + results[i].location.name + "</p>"
            html += "</div>"
            html += "</div>"
        }
        document.getElementById("contenedor").innerHTML = html
    })
}

const changePage = (election) => {
    if((election === "next") && (actualPage.slice(-2) !== "34")){
        var number = actualPage.split("=")
        actualPage = number[0] + "=" + (parseInt(number[1])+1)
        var pageNumber = document.getElementById("page").innerHTML.split(" ")
        document.getElementById("page").innerHTML = pageNumber[0] + " " + (parseInt(pageNumber[1])+1)
    }else if((election === "prev") && (actualPage.split("=")[1] !== "1")) {
        var number = actualPage.split("=")
        actualPage = number[0] + "=" + (parseInt(number[1])-1)
        var pageNumber = document.getElementById("page").innerHTML.split(" ")
        document.getElementById("page").innerHTML = pageNumber[0] + " " + (parseInt(pageNumber[1])-1)
    }

    chargeData(actualPage)
}