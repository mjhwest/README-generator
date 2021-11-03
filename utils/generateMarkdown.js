// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//LICENSE HERE// //Need to includge badge here//

let licensePick = "";

if (data.license = "Apache License 2.0") {
    licensePick = "![LICENSE](https://img.shields.io/badge/LICENSE-Apache%20License%202.0-green)";
} else if (data.license = "GNU General Public License v3.0") {
    licensePick = "![LICENSE: GNU General Public License v3.0](https://img.shields.io/badge/LICENSE-GNU%20General%20Public%20License%20v3.0-red)"
} else {
    licensePick = "![LICENSE: MIT](https://img.shields.io/badge/LICENSE-MIT-blue)"
};




//Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    
    # ${data.title}

    ${licensePick}

    ## Table of Contents 
    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Contributions](#Contributions)
    - [Tests](#Tests)
    - [Questions](#Questions)
    - [License](#License)
    
    ### Description
    ${data.description}
    
    ### Installation
    ${data.installation}
    
    ### Usage 
    ${data.usage}
    
    ### License
    ${data.license}
    
    ### Contributions
    ${data.contributions}
    
    ### Test 
    ${data.test}
    
    ### Questions 
    
    If you have any questions please contact me either (https://github.com/${data.git}) or via email at ${data.email} 

    ### License 
    This application is covered under ${data.license} 
    
    Have a great day! `
}
//module.export is an object we use to store variables or a method. 
module.exports = generateMarkdown;