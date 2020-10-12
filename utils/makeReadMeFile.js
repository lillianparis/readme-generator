function showLicenses (license){
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
    return``
}



function makeReadMeFile(data) {
return `# ${data.Title}`
// $(showLicenses(data.license))


}

module.exports = makeReadMeFile;