
function renderLicenseBadge(license) {
    if (license === "GNU General Public License v3.0") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
    else if (license === "The MIT License") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    else  {
        return "";
    }
 
}



function renderLicenseLink(license) {
    if (license === "GNU General Public License v3.0") {
        return "[GNU General Public License version 3](https://www.gnu.org/licenses/gpl-3.0.en.html)";
    }
    else if (license === "The MIT License") {
      return "[The MIT License](https://www.mit.edu/~amini/LICENSE.md)";
    }
    else  {
        return "";
    }
 
}

function renderLicenseSection(license) {
  if (license === "GNU General Public License v3.0") {
    return 'This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.';
}
else if (license === "The MIT License")
  return 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.';
else {
  return"";
}


}

function generateMarkdown(data) {
  if (renderLicenseSection(data.license, data.year, data.author) === '') {
    return `# ${data.title} 
${renderLicenseBadge(data.license)}
  
## Description
    
${data.description}
  
## Table of Contents
  
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
  
## Installation
  
${data.installation}
  
## Usage
  
${data.usage}
  
${renderLicenseLink(data.license)}
  
${renderLicenseSection(data.license, data.year, data.author)}
  
## Contributing
  
${data.contributing}
  
## Tests
  
${data.tests}
  
## Questions
  
For any quiestions about this project please contact me at:
  
* GitHub Profile: [${data.github}](https://github.com/${data.github})
  
* email: ${data.email}`;
  } else {
      return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description
  
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license, data.year, data.author)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
For any quiestions about this project please contact me at:
* GitHub Profile: [${data.github}](https://github.com/${data.github})
* email: ${data.email}`;
    }
}

module.exports = {
  generateMarkdown
};