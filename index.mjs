import Pino from 'pino'
const logger = Pino()

export default scratchFn
export const benchmarkable = () => scratchFn()

function scratchFn() {}

logger.info('Init')
scratchFn()
