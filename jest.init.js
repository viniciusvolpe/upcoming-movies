require("babel-polyfill");
const redis = require("redis");
const redisMock = require("redis-mock");
jest.spyOn(redis, 'createClient').mockImplementation(redisMock.createClient)