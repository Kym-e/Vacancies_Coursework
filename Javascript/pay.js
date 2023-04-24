"use strict";

let form = document.getElementById("payForm");
form.addEventListener("submit", results);
// form.addEventListener("submit", newPage);

function results(evt) {
    evt.preventDefault();

    // Get User input
    let jobTitle = document.getElementById("pay-job-title").value;
    let wage = document.getElementById("pay-wages").value;
    let timeFrame = document.getElementById("pay-wage-timeframe").value;
    let weeklyHours = document.getElementById("pay-weekly-hours").value;

    console.log("User Input")
    console.log("Job Title: " + jobTitle);
    console.log("Wage: " + wage);
    console.log("Time Frame: " + timeFrame);
    console.log("Weekly Hours: " + weeklyHours);

    let hourly;
    let weekly;
    let yearly;
    let monthly;

    switch (timeFrame) {
        case "Hourly":
            hourly = +wage;
            weekly = +hourly * weeklyHours;
            yearly = +weekly * 52;
            monthly = +yearly / 12;

            hourly  = hourly.toFixed(2);
            weekly = weekly.toFixed(2);
            yearly = yearly.toFixed(2);
            monthly = monthly.toFixed(2);

            console.log("Hourly Switch case");

            break;
        case "Weekly":
            hourly = +wage / weeklyHours;
            weekly = +wage;
            yearly = +wage * 52;
            monthly = +yearly / 12;

            hourly  = hourly.toFixed(2);
            weekly = weekly.toFixed(2);
            yearly = yearly.toFixed(2);
            monthly = monthly.toFixed(2);

            console.log("Weekly Switch case");

            break;
        case "Monthly":
            monthly  = +wage;
            yearly = +wage * 12;
            weekly = +yearly / 52;
            hourly = +weekly / weeklyHours;

            hourly  = hourly.toFixed(2);
            weekly = weekly.toFixed(2);
            yearly = yearly.toFixed(2);
            monthly = monthly.toFixed(2);

            console.log("Monthly Switch case")

            break;
        case "Annually":
            yearly = +wage;
            monthly = +wage / 12;
            weekly = +wage / 52;
            hourly = +weekly / weeklyHours;

            hourly  = hourly.toFixed(2);
            weekly = weekly.toFixed(2);
            yearly = yearly.toFixed(2);
            monthly = monthly.toFixed(2);

            console.log("Annually Switch case")

            break;
    }
    console.log("Hourly: " + hourly);
    console.log("Weekly: " + weekly);
    console.log("Yearly: " + yearly);
    console.log("Monthly: " + monthly);

    // Get the result card
    let results = document.getElementById("pay-calculation-results-body")
    results.innerHTML = "";

    // Create Header
    let cardTitle = document.createElement("h4");
    cardTitle.className = 'card-title';
    cardTitle.innerHTML = "Job: " + "<b>" + jobTitle + "</b>";
    results.appendChild(cardTitle);

    // User hours worked and timeframe selected
    let hoursAndTimeFrame = document.createElement("p");
    hoursAndTimeFrame.className = "card-text";
    hoursAndTimeFrame.innerHTML = "Working <b>" + weeklyHours + "</b> hours per week " +
        "for <b>£" + wage +  " " + timeFrame + "</b>";
    results.appendChild(hoursAndTimeFrame);

    // Breakdown paragraph
    let breakdownParagraph = document.createElement("p");
    breakdownParagraph.className = "card-text";
    breakdownParagraph.innerHTML = "Breakdown: ";
    results.appendChild(breakdownParagraph);

    // Create Table
    let resultTable = document.createElement("table");
    resultTable.className = "table table-hover table-sm";

    // Table Header
    let tableHeader =  document.createElement("thead");
    resultTable.appendChild(tableHeader);

    // Table Header row
    let tableRow = document.createElement("tr");
    tableHeader.appendChild(tableRow);

    // Wage Header
    let wageHeader = document.createElement("th");
    wageHeader.innerHTML = "Wage";
    tableRow.appendChild(wageHeader);

    // Timeframe Header
    let timeFrameHeader = document.createElement("th");
    timeFrameHeader.innerHTML = "Timeframe";
    tableRow.appendChild(timeFrameHeader);

    // Table body
    let tableBody = document.createElement("tbody");
    tableBody.className = "table-group-divider";
    resultTable.appendChild(tableBody);

    // Pay Per Hour Row
    let payPerHourRow = document.createElement("tr");
    tableBody.appendChild(payPerHourRow);

    // Pay Per Hour Wage
    let payPerHourData = document.createElement("td");
    payPerHourData.innerHTML = "£" + hourly;
    payPerHourRow.appendChild(payPerHourData);

    // "Per Hour" data
    let perHour = document.createElement("td");
    perHour.innerHTML = "Per Hour";
    payPerHourRow.appendChild(perHour);

    // Pay Per Week Row
    let payPerWeekRow =  document.createElement("tr");
    tableBody.appendChild(payPerWeekRow);

    // Pay Per Week Wage
    let payPerWeekData = document.createElement("td");
    payPerWeekData.innerHTML = "£" + hourly;
    payPerWeekRow.appendChild(payPerWeekData);

    // "Per Week" data
    let perWeek = document.createElement("td");
    perWeek.innerHTML = "Per Week";
    payPerWeekRow.appendChild(perWeek);

    // Pay Per Month Row
    let payPerMonthRow = document.createElement("tr");
    tableBody.appendChild(payPerMonthRow);

    // Pay Per Month Wage
    let payPerMonthData = document.createElement("td");
    payPerMonthData.innerHTML = "£" + monthly;
    payPerMonthRow.appendChild(payPerMonthData);

    // "Per Month" data
    let perMonth = document.createElement("td");
    perMonth.innerHTML = "Per Month";
    payPerMonthRow.appendChild(perMonth);

    // Pay Per Year row
    let payPerYearRow = document.createElement("tr");
    tableBody.appendChild(payPerYearRow);

    // Pay Per Year Data
    let payPerYearData = document.createElement("td");
    payPerYearData.innerHTML = "£" + yearly;
    payPerYearRow.appendChild(payPerYearData);

    // "Per Year" data
    let perYear = document.createElement("td");
    perYear.innerHTML = "Per Year";
    payPerYearRow.appendChild(perYear);

    // Add table to card
    results.appendChild(resultTable);

    // NEWCODE
    window.open("vacancies.html")

}

