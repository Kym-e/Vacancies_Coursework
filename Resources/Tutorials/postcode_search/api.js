document.getElementById("postcodeForm").addEventListener("submit", postcodeApiCall);

function postcodeApiCall(evt) {
    evt.preventDefault();

    let postcode = document.getElementById("postcode").value;
    let baseUrl = "https://api.postcodes.io/scotland/postcodes/"

    let baseUrlConstituencies = "https://data.parliament.scot/api/constituencies";
    let constituencyCode;

    // sanitise input
    postcode = postcode.toLowerCase();
    // encodes the URI component to turn special characters into a suitable format for an URL
    postcode = encodeURIComponent(postcode);

    let url = baseUrl + postcode;
    console.log(url);


    // This exercise shows two ways of making API calls: fetch and XHR.
    // we utilse an "if" statement to decide which method to use.
    // In practice, you would only use one method  and could therefore remove the if statement. But this is to show you both.
    // change the apiMethod variable to "fetch" to use fetch, or "xhr" to use XHR
    let apiMethod = "fetch";

    if (apiMethod == "fetch") {
        console.log("API call using fetch");
        fetch(url)
            .then(response => {
                // error handling
                if (response.status == 404) {
                    alert("Postcode not found");
                    // Throwing an error ensures that the rest of the code is not executed
                    throw new Error("Postcode not found");
                }
                // If the status code is not 404, we can assume that we have received data 
                // and we can return the response
                return response;
            })
            .then(response => response.json()) // 
            .then(data => {
                console.log(data);
                displayConstituency(data);
                // set the constituency code
                constituencyCode = data.result.codes.scottish_parliamentary_constituency;
                return fetch(baseUrlConstituencies);
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                // find the constituency name
                
                // longer way
                // for (let i = 0; i < response.length; i++) {
                //    if (response[i].ConstituencyCode == constituencyCode) {
                //        displayConstituencyShortName(response[i].ShortName);
                //    }
                //}

                // more efficient way
                // the .find() applied to an array returns the first element that meets the condition specified in the arrow function
                let shortName = response.find(constituency => constituency.ConstituencyCode == constituencyCode);
                displayConstituencyShortName(shortName.ShortName);
                
            }
            )
        
    }
    
    else if (apiMethod == "xhr") {
        console.log("API call using XHR");
        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4 && this.status === 200) {
                // this.responseText is the string that we receive from the API
                // The response is a string, so we need to parse it into JSON
                // The data is then turned into a JavaScript object which is much easier to access
                let data = JSON.parse(this.responseText);
                console.log(data);
                displayConstituency(data);
            } else if (this.readyState === 4 && this.status === 404) {
                alert("Postcode not found");
            }


        });
        xhr.open("GET", url);
        xhr.send();
    }
    else if (apiMethod == "jquery") {
        console.log("API call using jQuery");
        $.ajax({
            url: url,
            type: "GET",
            success: data => {
                console.log(data);
                displayConstituency(data);
            },
            error: () => {
                alert("Postcode not found");
            }
        })
    }
        

}

function displayConstituency(data) {
    // TODO 2: Add this function to the fetch chain and the XHR request
    console.log(data);


    // TODO 3: Show the results section using the "display: block" CSS property
    document.getElementById("result_section").style.display = "block";

    // TODO 4: Display the constituency name in the results section
    document.getElementById("constituency").innerHTML = data.result.scottish_parliamentary_constituency;
}

function displayConstituencyShortName(shortName) {
    document.getElementById("constituencyShort").innerText = shortName;
  }
