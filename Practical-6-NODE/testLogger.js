import Logger from './logger.js';

const logger = new Logger();

logger.log('Starting logging...');

for (let i = 0; i < 1000; i++) {
  logger.log('Message number ' + i);
}


