const fs = require('fs');

const DELIMITER = ';';
const SCALES_CSV_FILE_NAME = './src/data/raw/scales.csv';
const QUESTIONS_CSV_FILE_NAME = './src/data/raw/questions.csv';

const SCALES_JSON_FILE_NAME = './src/data/scales.json';
const QUESTIONS_JSON_FILE_NAME = './src/data/questions.json';

function readCsv(csvFileName, skipLines = 0) {
  return new Promise((resolve, reject) => {
    fs.readFile(csvFileName, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('An error ocurred reading the file :' + err.message));
      }
      return resolve(data.replace(/"/g, '').split('\n').slice(skipLines).map(line => line.split(DELIMITER)));
    });
  });
}

function writeJson(jsonFileName, data) {
  return new Promise((resolve, reject) => {
      fs.writeFile(jsonFileName, JSON.stringify(data), (err) => {
          if(err){
              return reject(new Error('An error ocurred writing the file :' + err.message));
          }
          resolve()
      })
  })
}


async function scales(sourceFileName, destinationFileName) {
  const rawData = await readCsv(sourceFileName, 1);
  const result = {};
  for (const row of rawData) {
    const [ id, name, description, correctionRate ] = row;
    result[id] = {
      name,
      description,
      correctionRate,
    }
  }
  await writeJson(destinationFileName, result);
}

async function questions(sourceFileName, destinationFileName) {
  const rawData = await readCsv(sourceFileName);
  const result = [];
  const [ firstRow, ...otherRows ] = rawData;
  const [ questionNumber, questionText, ...scales] = firstRow;

  for (const row of otherRows) {
    const [ questionNumber, questionText, ...scaleValues ] = row;
    const scalesTrue = [];
    const scalesFalse = [];
    for(let i = 0; i < scales.length; i++) {
      if (scaleValues[i] === "1") {
        scalesTrue.push(scales[i])
      }
      if (scaleValues[i] === "0") {
        scalesFalse.push(scales[i])
      }
    }
    result.push({
      text: questionText,
      scalesTrue,
      scalesFalse,
    })
  }
  await writeJson(destinationFileName, result);
}

scales(SCALES_CSV_FILE_NAME, SCALES_JSON_FILE_NAME);
questions(QUESTIONS_CSV_FILE_NAME, QUESTIONS_JSON_FILE_NAME);