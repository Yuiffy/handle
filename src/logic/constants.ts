export const WORD_LENGTH = 4
export const TRIES_LIMIT = 12
const START_DATE = new Date(2022, 0, 0);
START_DATE.setUTCFullYear(2022, 0, 0);
START_DATE.setUTCHours(-8, 0, 0, 0); // 把起始时间设为北京时间0点，也就是utc0的-8点
export { START_DATE }
export const RANDOM_SEED = 'handle'
export const DAYS_PLAY_BACK = 3
export const DEPLOY_HOST = 'handle.antfu.me'
export const NETLIFY_FUNCTION_HOST = '/.netlify/functions'
