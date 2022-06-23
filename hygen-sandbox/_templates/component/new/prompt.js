const fs = require("fs")

module.exports = [
  {
    type: "select",
    name: "domain",
    choices: fs.readdirSync("src/domains"),
    message: "どのdomainを作りますか?",
  },
]
