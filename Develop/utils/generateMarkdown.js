// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = data => {
  return `
  ![Github license](http://img.shields.io/badge/license-${data.licenses}-blue.svg)
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data)}

  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Instructions](#instructions)
  * [Usage](#usage)
  * [Guidelines](#guidelines)
  * [Test](#test instructions)
  * [Licenses](#licenses)
  * [Questions](#questions)

  ## Installation Instructions
  ${data.instructions}

  ## Usage Information
  ${data.usage}

  ## Contribution Guidelines
  ${data.guidelines}

  ## Test Instructions
  ${data.test}

  ## This project is licensed under the following licenses
  ${data.licenses}

  ## Questions?
  You can find all of my projects at https://github.com/${data.username}
  And you can contact me directly at ${data.email}

`;
}

module.exports = generateMarkdown;
