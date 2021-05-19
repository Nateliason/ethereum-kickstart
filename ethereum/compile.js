const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath); // this checks if the directory exists and if not it makes it for us

console.log(output); 

for (let contract in output) {
  fs.outputJsonSync( // writes out a JSON file
    path.resolve(buildPath, contract.replace(':', '') + '.json'), // creates the JSON file of the contract and gets rid of the colon at the start of the name
    output[contract] // this gets us the actual contents to write in the JSON file
  );
}