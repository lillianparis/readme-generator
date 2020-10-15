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
// function showLicenseLink(license) {
//     if (license !== "None") {
//         return (
//             `\n* [license](#license\n)`
//         )
//     }
//     return ``
// }

// function showLicenseSection(license) {
//     if (license !== "None") {
//         return (`## License
//         This project is licensed under the ${license} license`)
//     }
//     return ``
// }

// function projDescription(description) {
//     let descriptionString = description;
//     let render = `## Description: \n ${descriptionString} \n`;
//     return render
// }

// Ths displays the table of contents as well as the user input
function makeReadMeFile(response) {
return `
# ${response.Title}
# Table of Contents \n
*[Description](#description) \n
*[Installation](#Installation) \n
*[usage](#usage) \n
*[contribution](#contribution) \n
*[test](#test) \n
*[username](#username) \n
 *[email](#email) \n
*[licenses](#licenses) \n
*[Contact for Questions](#Contact for Questions) \n

## Description
${response.Description}


## Installation
To install necessary dependencies, run the following command:

\`\`\`
${response.Installation}
\`\`\`

## Usage
${response.Usage}

## Contribution
${response.Contributing}

    
## Test
${response.Tests}
    
## Username
${response.Github}
    
## Email
    ${response.Email}
    
## License
    ${showLicenses(response.License)}

## Questions

If you have any questions about the repo, you may contact me directly at ${response.Email}. You can find more of my work at [${response.Github}](https://github.com/${response.Github})

`
}


// exporting into the readme

module.exports = makeReadMeFile;
// module.exports = showLicenseLink;
// module.exports = showLicenseSection;
// module.exports = projDescription;
