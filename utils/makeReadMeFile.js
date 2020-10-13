// Template literals !
const fs = require("fs")
function showLicenses(license) {
    //if statement that checks if  license exists
    //return license list to user
    //display something like this project is using the ____ license
    if (license !== "None") {
        //getting the choices off of object array
        return `![Github license](https://img.shields.io/badge/liscence-${license}-blue.svg)`
    }
    return ``
}
function showLicenseLink(lisence) {
    if (license !== "None") {
        return (
            `\n* [license](#license\n)`
        )
    }
    return ``
}

function showLicenseSection(license) {
    if (license !== "None") {
        return (`## License
        This project is licensed under the ${license} license`)
    }
    return ``
}

function projDescription(description) {
    let descriptionString = description;
    let render = `## Description: \n ${descriptionString} \n`;
    return render
}

function makeReadMeFile(response) {
    return `
    # ${response.Title}
    # Table of Content \n
    -[Description](#description) \n
    -[usage](#usage) \n
    -[contribution](#contribution) \n
    -[dependencies](#dependancies) \n
    -[test](#test) \n
    -[username](#username) \n
    -[email](#email) \n
    -[licenses](#licenses) \n

    ##Description
    ${response.Description}

    ##Usage
    ${response.Usage}

    ##Contribution
    ${response.Contributing}

    ##Dependancies
    ${response.Dependancies}
    
    ##Test
    ${response.Tests}
    
    ##Username
    ${response.Username}
    
    #Email
    ${response.Email}
    
    ##License
    ${showLicenses(response.License)}

    `
}


// //     ${response.Github}
// //     ##Github:
// //     ${response.Description}
// //     ##Description:
// //     ${response.installation}
// //     ##installation:
// //     ${response.Usage}
// //     ##Usage

// //     ${response.License}
// // ##License:
// //     ${response.Contributing}
// // ##Contribution:

// //     ${response.test}
// // ##test:

// //     ${response.Email}
// // ##Email:

//     ${response.profile}
// ##profile:
// `;
// }

// exporting into the readme

module.exports = makeReadMeFile;
