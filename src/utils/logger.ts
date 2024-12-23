/* eslint-disable @typescript-eslint/no-explicit-any */
 
import { isDev, isLocal, isStaging } from './environments';

// Define color styles for different log types
const styles: Record<string, string> = {
    default: 'background: #0067FF99; color: #FFF; font-weight: normal;',
    error: 'background: #FF000099; color: #FFF; font-weight: bold;',
    success: 'background: #00FF0066; color: #FFF; font-weight: bold;',
    warn: 'background: #EE990066; color: #FFF; font-weight: bold;',
};

const shouldLog = isLocal || isDev || isStaging;

const log = (...args: any[]): void => {
    if (shouldLog) {
        console.log(`%c VISION: ${args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg).join(' ')}`, styles.default);
    }
};

log.success = (...args: any[]): void => {
    if (shouldLog) {
        console.log(`%c VISION: ${args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg).join(' ')}`, styles.success);
    }
};

log.warn = (...args: any[]): void => {
    if (shouldLog) {
        console.warn(`%c VISION: ${args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg).join(' ')}`, styles.warn);
    }
};

log.error = (...args: any[]): void => {
    if (shouldLog) {
        console.error(`%c VISION: ${args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg).join(' ')}`, styles.error);
    }
};

export { log };
