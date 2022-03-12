const fs = require("fs");
const theCSVData = fs.readFileSync("./data.csv", "utf8");
class CSVParser {
  constructor(theCSVData) {
    console.log({ theCSVData });
  }
  getLines() {
    return (lines = theCSVData.split("\n"));
  }
}
const myNewParser = new CSVParser(theCSVData);

class test {
  constructor(myNewParser) {}
}
console.log({ lines });

console.log({ myNewParser });
