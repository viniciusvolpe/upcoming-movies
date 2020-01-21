const redis = require("redis");

module.exports = (function Redis() {
    let instance;
  
    function init() {
        return redis.createClient({ url: process.env.DATABASE_URL })
    };
  
    return {
      getInstance: function () {
        if (!instance) instance = init();
        return instance;
      }
    };
})();