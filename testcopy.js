const fs = require("fs");

/*
Bugs
1. Printing than it should - something about thats how many rows are in the array 
2. Random extra line issue - like input with extra lines breaks shit
*/
class CSVParserFunction {
  constructor() {
    this.theCSVData = fs.readFileSync("./data.csv", "utf8");
    this.lines = this.theCSVData.split("\n").filter((s) => !!s.length);
    this.dataWeWantChange = this.lines.filter((s, i) => i > 0);
    this.theHeaderStringArray = this.lines[0].split(",");
    this.listOfSplitOnCommas = this.dataWeWantChange.map((s) => s.split(","));
    this.maybeFinalAnswer = this.listOfSplitOnCommas.map((arrOfStrings) =>
      arrOfStrings.map((s, i) => `${this.theHeaderStringArray[i]}:${s}`)
    );
    this.probablyFinalAnswer = this.maybeFinalAnswer.map((arrOfStrings) =>
      arrOfStrings.join(",")
    );
  }
  print() {
    this.probablyFinalAnswer.forEach((s) => {
      console.log({ s });
      fs.appendFileSync("./data-final.csv", `${s}\n`);
    });
  }
}

const myNewParser = new CSVParserFunction(1, 2);
myNewParser.print();
// fs.writeFileSync("./data-final.csv", probablyFinalAnswer.join("\n"));
// CSVParserFunction = () => console.log({ lines });
// CSVParserFunction();
