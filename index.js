const logger = require('pino')()

module.exports = scratchFn
module.exports.benchmarkable = () => scratchFn()

function scratchFn() {}

logger.info('Init')
scratchFn()
