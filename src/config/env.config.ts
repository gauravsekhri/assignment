import * as dotenv from 'dotenv';
const path = require('path');

const ENV = process.env.NODE_ENV || 'development';

dotenv.config({ path: path.resolve(__dirname, `../../.${ENV}.env`) });

const envConfig = {
  env: ENV,
  port: process.env.PORT,
  MONGODB_URL: process.env.MONGODB_URL,
};

export default () => envConfig;
