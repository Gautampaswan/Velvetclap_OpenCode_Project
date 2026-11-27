const { createWriteStream } = require('fs');
const path = require('path');
const { mkdirSync } = require('fs');

const logDir = path.resolve(__dirname, '../../logs');
try { mkdirSync(logDir, { recursive: true }); } catch (_) { /* dir exists */ }
const logStream = createWriteStream(path.join(logDir, 'test.log'), { flags: 'a' });

function log(level, message) {
  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
  process.stdout.write(line);
  try { logStream.write(line); } catch (_) { /* ignore log write failures */ }
}

module.exports = {
  info: (msg) => log('info', msg),
  warn: (msg) => log('warn', msg),
  error: (msg) => log('error', msg)
};
