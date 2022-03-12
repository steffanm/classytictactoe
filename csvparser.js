class CSVParser {
  constructor(name) {}
}
const myNewParser = new CSVParser("Alice!");

const fs = require("fs");

function CSVParserFunction() {
  const theCSVData = fs.readFileSync("./data.csv", "utf8");

  const arrObj = [];
  const lines = theCSVData.split("\n");
  const headers = lines[0].split(",");

  //for each item in the array we will prepend the header to the value at index

  for (let i = 1; i < lines.length; i++) {
    const rowdata = lines[i].split(",");

    for (let j = 0; j < rowdata.length; j++) {
      arrObj.push(`${headers[j] + ":" + rowdata[j]}`);
    }

    arrObj.push("\n");
    const newArrObj = arrObj.toString();
    // const test = newArrObj.split("\n");
    // const test3 = test[i - 1].replace(",First", "First");
    console.log("newarrobj: " + arrObj);
    fs.appendFileSync("./data-final.csv", arrObj + "\n");
  }
}
CSVParserFunction();
