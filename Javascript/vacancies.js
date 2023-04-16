// noinspection JSDeprecatedSymbols

// Top 10 most recent vacancies
let topTenVacancies = "http://api.lmiforall.org.uk/api/v1/vacancies/search?limit=10&keywords=most%20recent"
console.log(topTenVacancies)

fetch(topTenVacancies)
    .then(response => {

    if (response.status === 404) {
        alert("Vacancies top 10 not found");
        throw new Error("Vacancies top 10 not found");
    }
    return response;

})
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for (let i = 0; i < 10; i++) {
            console.log(data);
            // Results box header
            let text;
            text = "<h1>10 Most recent results</h1>";
            text += "<hr>"

            // Loop through results
            for (let i = 0; i < 10; i++){
                let vacancyTitle = "<h2>" + data[i].title + "</h2>";
                let vacancyCompany = "<h3> With " + data[i].company;
                let vacancyLocation = data[i].location.location + "</h3>";
                let vacancyLink = "<h4></h4><a href='" + data[i].link + "'>Apply here</a></h4>";
                let vacancySummary = "<p>Job Description: " + data[i].summary + + "</p>";

                text += vacancyTitle;
                text += vacancyCompany + " | " + vacancyLocation;
                text += vacancyLink;
                text += vacancySummary;
                text += "<hr>"
                console.log(data[i])
            }

            // Display results
            document.getElementById("vacancies-results").style.display = "block";
            document.getElementById("vacancies-results").innerHTML = text;

        }
    })

// Search for vacancies

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

    // let apiMethod = "fetch";
    console.log("API call using fetch");

    fetch(url)
        .then(response => {
            // Error handling
            if (response.status === 404) {
                alert("Job not found");
                throw new Error("Job not found")
            }
            return response;
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayJobDetails(data, "Vacancies")
        })
}

function displayJobDetails(data, header) {
    let dataLength = data.length;

    // Results box header
    let text;
    text = "<h1>" + dataLength + " " + header + "</h1>";
    text += "<hr>"

    // Loop through results
    for (let i = 0; i < dataLength; i++){
        vacancyDetails(i);
        console.log(data[i])
    }

    // Display results
    document.getElementById("vacancies-results").style.display = "block";
    document.getElementById("vacancies-results").innerHTML = text;

    function vacancyDetails(i) {

        let vacancyTitle = "<h2>" + data[i].title + "</h2>";
        let vacancyCompany = "<h3> With " + data[i].company;
        let vacancyLocation = data[i].location.location + "</h3>";
        let vacancyLink = "<h4></h4><a href='" + data[i].link + "'>Apply here</a></h4>";
        let vacancySummary = "<p>Job Description: " + data[i].summary + + "</p>";

        text += vacancyTitle;
        text += vacancyCompany + " | " + vacancyLocation;
        text += vacancyLink;
        text += vacancySummary;
        text += "<hr>"
    }
}

