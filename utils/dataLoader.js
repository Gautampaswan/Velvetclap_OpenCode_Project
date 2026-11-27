const fs = require('fs');
const path = require('path');

function loadTestData(fileName, env = process.env.TEST_ENV || 'staging') {
  const envPath = path.resolve(__dirname, `../../test-data/${env}/${fileName}`);
  const defaultPath = path.resolve(__dirname, `../../test-data/staging/${fileName}`);

  if (fs.existsSync(envPath)) {
    return JSON.parse(fs.readFileSync(envPath, 'utf8'));
  }
  if (fs.existsSync(defaultPath)) {
    return JSON.parse(fs.readFileSync(defaultPath, 'utf8'));
  }
  throw new Error(`Test data file not found: ${fileName} for env ${env}`);
}

module.exports = { loadTestData };
