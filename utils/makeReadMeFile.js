// function showLicenses (license){
//     //if statement that checks if  license exists
//     //return license list to user
//     //display something like this project is using the ____ license
//     if (license !== "None") {
//         //getting the choices off of object array
//         return `![Github license](https://img.shields.io/badge/liscence-${license}-blue.svg)`
//         }
//         return ``
// } 
// function showLicenseLink(lisence) {
//     if (license !== "None") {
//         return (
//             `\n* [license](#license\n)`
//         )
//     }
//     return ``
// }
// // Titles for information inputed to populate....
// function projectContents() {
//     let render = `
//     ## Table of Contents: \n
//     * [Title](#Title) \n
//     * [Github](#Github) \n
//     * [Description](#Description) \n
//     * [Contributors](#Contributors) \n
//     * [Contact](#Contact) \n
//     * [License](#License) \n
//     `;

//     return render
//   }
// function showLicenseSection(license) {
//     if (license !== "None") {
//         return (`## License
//         This project is licensed under the ${license} license`)
//     }
//     return``
// }

// function projDescription(description){
//     let descriptionString = description;
//     let render = `## Description: \n ${descriptionString} \n`;
//     return render 
// }
// function makeReadMeFile(data) {
// return `${data.Title}  ${data.Github} ${data.Email}`
// }
function makeReadMeFile(response) {
    return `
    # ${response.Title}
    # Table of Content \n
    -[Description](#description) \n
    -[installation](#installation) \n
    -[usage](#usage) \n
    -[licenses](#licenses) \n
    -[contribution](#contribution) \n
    -[test](#test) \n
    -[username](#username) \n
    -[profile](#profile) \n`
}

        function Description(Description) {
            let descripString = Description;
            let render = `## Description: \n ${descripString} \n`;
            return render
        }

    module.exports = makeReadMeFile;
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

