// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = data => {
  return `
  ![Github license](http://img.shields.io/badge/License-${data.licenses}-blue.svg)
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
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  ${data.instructions}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.guidelines}

  ## Tests
  ${data.test}

  ## License
  ${data.licenses}

  ## Questions?
  You can find all of my projects at https://github.com/${data.username}
  And you can contact me directly at ${data.email}

`;
}

module.exports = generateMarkdown;
