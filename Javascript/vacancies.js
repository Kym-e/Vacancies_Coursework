document.getElementById("vacanciesForm").addEventListener("submit", vacanciesApiCall);
function vacanciesApiCall(evt) {
    evt.preventDefault();

    let jobSearch = document.getElementById("vacancies-search-bar").value;
    let baseUrl = "https://api.lmiforall.org.uk/api/v1/vacancies/search?keywords=";

    let baseUrlJobDescriptions = "https://api.lmiforall.org.uk/api/v1/soc/search";
    let jobDescriptionCode;

    // sanitise input
    jobSearch = jobSearch.toLowerCase();

    // encodes the URI component to turn special characters into a suitable format for a URL
    jobSearch = encodeURIComponent(jobSearch);

    let url = baseUrl + jobSearch;
    console.log(url);

    let apiMethod = "fetch";
    console.log("API call using fetch");

    fetch(url)
        .then(response => {
            // Error handling
            if (response.status == 404) {
                alert("Job not found");
                throw new Error("Job not found")
            }
            return response;
        })

        .then(response => response.json())

        .then(data => {
            console.log(data);

            displayJobDetails(data)

        })
}


function displayJobDetails(data) {
    let dataLength = data.length;

    let text;
    text = "<h1>Results</h1>";
    text += "<hr>"

    for (let i = 0; i < 5; i++){
        // displayJobDetails(data);
        text += "<h2>";
        text += data[i].title;
        text += "</h2>";
        console.log(data[i])
    }

    // console.log(data)
    document.getElementById("vacancies-results").style.display = "block";
    document.getElementById("vacancies-results").innerHTML = text;
}

