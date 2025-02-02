//const { send } = require('./internals/request');
//const { read } = require('./internals/response');
//import { send } from './request.js';
//import { read } from './response.js';
//const internals = require('./internals')
const { send ,read } = require('./internals');

function makeRequest(url, data) {
    send(url, data);
    return read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);

