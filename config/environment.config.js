require('dotenv').config();

function get(key, fallback) {
  return process.env[key] !== undefined ? process.env[key] : fallback;
}

module.exports = {
  env: get('TEST_ENV', 'staging'),
  baseUrl: get('BASE_URL', 'https://velvetclap25.onrender.com'),
  apiBaseUrl: get('API_BASE_URL', 'https://velvetclap25.onrender.com')
};
