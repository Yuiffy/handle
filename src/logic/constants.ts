export const WORD_LENGTH = 4
export const TRIES_LIMIT = 12
const START_DATE = new Date(2022, 0, 0);
START_DATE.setUTCFullYear(2022, 0, 0);
START_DATE.setUTCHours(0, 0, 0, 0); // 把date内存储的utc时间戳设为0，以utc0代表北京0点
export { START_DATE }
export const RANDOM_SEED = 'handle'
export const DAYS_PLAY_BACK = 3
export const DEPLOY_HOST = 'handle.antfu.me'
export const NETLIFY_FUNCTION_HOST = '/.netlify/functions'
