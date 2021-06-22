const getLogger = require('./configs/pino');

const logger = getLogger(__filename);

logger.info('info message');
logger.debug('debug message');
