if (!process.env.DATABASE_URL) {
  require('dotenv').load();
}

var config = {
  db : process.env.DATABASE_URL,
  env : process.env.NODE_ENV || 'production',
  port : process.env.PORT || 8080,
  cookieSecret : process.env.WEBMENTIONS_COOKIE_SECRET,
  hostname : process.env.WEBMENTIONS_HOSTNAME,
  userLimit : process.env.WEBMENTIONS_USER_LIMIT || 6,
  throttleSpan : (process.env.WEBMENTIONS_THROTTLE || 60) * 1000,
  throttleCap : process.env.WEBMENTIONS_THROTTLE_CAP || 10,
  github : {
    client_id : process.env.WEBMENTIONS_GITHUB_ID,
    client_secret : process.env.WEBMENTIONS_GITHUB_SECRET
  },
  dev : {
    throttling : process.env.WEBMENTIONS_DEV_THROTTLING
  },
  version : require('../package.json').version
};

if (config.env === 'test') {
  config.db = process.env.DATABASE_TEST_URL || "postgres://postgres@localhost/webmention_test";
}

module.exports = config;
