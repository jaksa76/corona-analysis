const request = require("request");
const cheerio = require('cheerio')
const fs = require('fs');

function isCountry(countryData) {
    return !(countryData.country.includes("Total") || countryData.country.includes("\n"));
}

function scrape() {    
    request("https://www.worldometers.info/coronavirus/", function(err, resp, body) {
        const $ = cheerio.load(body);
        countries = { data: [] };       
        $("#main_table_countries_yesterday > tbody > tr").each(function (i, el) {            
            const getColumn = function(n) {
                return $(el).children("td:nth-child("+n+")").text();
            };

            const getNumberColumn = function(n) {
                return getColumn(n).replace(/[+,]/g, "");
            };

            countryData = {
                country:        getColumn(2),
                totalCases:     getNumberColumn(3),
                newCases:       getNumberColumn(4),
                totalDeaths:    getNumberColumn(5),
                newDeaths:      getNumberColumn(6),
                totalRecovered: getNumberColumn(7),
                newRecovered:   getNumberColumn(8),
                activeCases:    getNumberColumn(9),
                serious:        getNumberColumn(10),
                totPerMil:      getNumberColumn(11),
                deathsPerMil:   getNumberColumn(12),
                totalTests:     getNumberColumn(13),
                testsPerMil:    getNumberColumn(14),
                population:     getNumberColumn(15),
            };
            if (isCountry(countryData)) {
                countries.data.push(countryData);
            }
        });
        
        console.log(countries);

        // save to file
        var filename = new Date().toISOString().slice(0, 10) + ".json";

        fs.writeFile("public/data/"+ filename, JSON.stringify(countries), function(err) {
            if (err) {
                console.log(err);
            }
        });
    });
}

scrape();