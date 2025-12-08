import fs from 'fs';
import EventEmitter from 'events';

class Logger extends EventEmitter {
  constructor() {
    super();
    this.logFile = 'log.txt';
    this.maxSize = 50 * 1024; // 50 KB
    this.on('log', this.writeLog.bind(this));
  }

  log(message) {
    this.emit('log', message);
  }

  writeLog(message) {
    // Write log to console
    console.log(message);

    // Append log to file
    fs.appendFileSync(this.logFile, message + '\n');

    // Check file size and rotate if bigger than maxSize
    const stats = fs.statSync(this.logFile);
    if (stats.size > this.maxSize) {
      const newName = `log-${Date.now()}.txt`;
      fs.renameSync(this.logFile, newName);
      fs.writeFileSync(this.logFile, '');
    }
  }
}

export default Logger;

