module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'A hard to guess string',
  MONGO_URI: process.env.MONGOLAB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/test',
  // MONGO_URI: 'mongodb://meestermeetch:DiscGolf1@ds043082.mongolab.com:43082/dog-bnb' || process.env.MONGO_URI || 'mongodb://localhost:27017/test',
  // MONGO_URI: process.env.MONGOLAB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/test',
  // MONGO_URI: 'mongodb://localhost:27017/test',
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || 'Facebook App Secret',
  FOURSQUARE_SECRET: process.env.FOURSQUARE_SECRET || 'Foursquare Client Secret',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'd3ztcSS9_oLfxCKXW8dKFNq8',
  GITHUB_SECRET: process.env.GITHUB_SECRET || 'GitHub Client Secret',
  LINKEDIN_SECRET: process.env.LINKEDIN_SECRET || 'LinkedIn Client Secret',
  WINDOWS_LIVE_SECRET: process.env.WINDOWS_LIVE_SECRET || 'Windows Live Secret',
  TWITTER_KEY: process.env.TWITTER_KEY || 'Twitter Consumer Key',
  TWITTER_SECRET: process.env.TWITTER_SECRET || 'Twitter Consumer Secret',
  TWITTER_CALLBACK: process.env.TWITTER_CALLBACK || 'Twitter Callback Url',
  YAHOO_SECRET: process.env.YAHOO_SECRET || 'Yahoo Client Secret'
};

 // 'mongodb://meestermeetch:DiscGolf1@ds043082.mongolab.com:43082/dog-bnb' ||
//  'mongodb://heroku_2xx4q98k:tp89cq86nq3q67q6i46kjlbo7r@ds031922.mongolab.com:31922/heroku_2xx4q98k' ||
