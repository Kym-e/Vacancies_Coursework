// noinspection JSDeprecatedSymbols

// Top 10 most recent vacancies
let topTenVacancies = "https://api.lmiforall.org.uk/api/v1/vacancies/search?limit=10&keywords=most%20recent"

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
        console.log("Ten recent vacancies")
        console.log(data)

        for (let i = 0; i < 10; i++) {
            // Button
            const buttonTag = document.createElement("button");
            buttonTag.className = 'collapsible';
            const buttonTextNode = document.createTextNode(data[i].title + " with " + data[i].company + " | " + "Location: " + data[i].location.location);
            buttonTag.appendChild(buttonTextNode);
            const vacancyResults = document.getElementById("vacancies-results");
            vacancyResults.appendChild(buttonTag);

            // Div - content - Job description
            const divTag = document.createElement("div");
            divTag.className = 'content';
            const divTagText = document.createTextNode(data[i].summary);
            divTag.appendChild(divTagText);
            vacancyResults.appendChild(divTag);

            // Break
            const br = document.createElement('br');
            divTag.appendChild(br);

            // link
            const a = document.createElement('a');
            const link = document.createTextNode("Apply Here | Link to application")
            a.appendChild(link);
            a.title = "Apply Here";
            a.href = data[i].link;
            divTag.appendChild(a);

        }
        // Show and hide vacancies
        const coll = document.getElementsByClassName("collapsible");
        let j;

        for (j = 0; j < coll.length; j++) {
            coll[j].addEventListener("click", function() {
                this.classList.toggle("active");
                let content = this.nextElementSibling;

                if (content.style.maxHeight){
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }
    })

// Search for vacancies

document.getElementById("vacanciesForm").addEventListener("submit", vacanciesApiCall);
function vacanciesApiCall(evt) {
    evt.preventDefault();

    let jobSearch = document.getElementById("vacancies-search-bar").value;
    console.log(jobSearch)

    let baseUrl = "https://api.lmiforall.org.uk/api/v1/vacancies/search?keywords=";

    let baseUrlJobDescriptions = "https://api.lmiforall.org.uk/api/v1/soc/search?q=";


    // sanitise input
    jobSearch = jobSearch.toLowerCase();

    // encodes the URI component to turn special characters into a suitable format for a URL
    jobSearch = encodeURIComponent(jobSearch);

    let url = baseUrl + jobSearch;
    console.log(url);

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
            console.log("Search Results")
            console.log(data)

            displayJobDetails(data, "Results")

            const element = document.getElementById("vacancies-results"); element.remove();

            // // new code
            // let url2 = baseUrlJobDescriptions + "tester";
            // return fetch(url2);
        })

        // .then(response => response.json())
        // .then(response => {
        //     console.log(response);
        // })

}

function displayJobDetails(data, header) {
    let dataLength = data.length;  // Used if I want to show all vacancies (max 50 as per API)

    // Loop through results
    for (let i = 0; i < 10; i++){
        // Button
        const buttonTag1 = document.createElement("button");
        buttonTag1.className = 'collapsible1';
        // console.log(data[i]);
        const buttonTextNode1 = document.createTextNode(
            data[i].title
            + " with " + data[i].company
            + " | " + "Location: " + data[i].location.location
        );
        buttonTag1.appendChild(buttonTextNode1);
        const vacancySearchResults = document.getElementById("vacancies-search-results");
        vacancySearchResults.appendChild(buttonTag1);

        // Div - content
        const divTag1 = document.createElement("div");
        divTag1.className = 'content1';
        const divTagText1 = document.createTextNode(data[i].summary);
        divTag1.appendChild(divTagText1);
        vacancySearchResults.appendChild(divTag1);

        // Break
        const br1 = document.createElement('br');
        divTag1.appendChild(br1);

        // link
        const a1 = document.createElement('a');
        const link1 = document.createTextNode("Apply Here | Link to application")
        a1.appendChild(link1);
        a1.title = "Apply Here";
        a1.href = data[i].link;
        divTag1.appendChild(a1);

        // new code
        let baseUrlJobDescriptions = "https://api.lmiforall.org.uk/api/v1/soc/search?q=";
        let url2 = baseUrlJobDescriptions + data[i].title;
        console.log(url2)

        fetch(url2)
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
                console.log("API2 | " + data[i].title)
                console.log(data[i])
            })

    }
    // Show and hide vacancies
    const coll1 = document.getElementsByClassName("collapsible1");
    let j;

    for (j = 0; j < coll1.length; j++) {
        coll1[j].addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling;

            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

// FIXME: On search, results append if search completed before.  May need to replace?
// TODO: Add header to results

