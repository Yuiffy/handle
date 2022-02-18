export const WORD_LENGTH = 4
export const TRIES_LIMIT = 15
const START_DATE = new Date(2022, 0, 0);
START_DATE.setUTCFullYear(2022, 0, 0);
START_DATE.setUTCHours(0, 0, 0, 0); // 把date内存储的utc时间戳设为0，以utc0代表北京0点
export { START_DATE };
export const RANDOM_SEED = 'handle'
