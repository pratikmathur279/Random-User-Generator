'use strict';

var request = require('request');

const addUser = require('./handlers/insert.db.js');
const retrieveUsers = require('./handlers/retrieve.db.js');
const deleteUser = require('./handlers/delete.db.js');

module.exports.getUser = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    var waiting;
    var data1 = {};

    var options = {
        url: 'https://randomuser.me/api/'
    };

    const responseHeaders = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
//        'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS 
    }
    console.log("came here");
    return new Promise(function (resolve, reject) {
        //Do async job
        return request.get(options, function (err, resp, body) {
            if (err) {
                reject(err);
            } else {
                var data = JSON.parse(body);
                var data = data.results[0];
                data1 = data;

                console.log('before addUser');
                addUser(data)
                    .then(result => {
                        console.log('success');

                        const response = {
                            statusCode: 200,
                            headers: responseHeaders,
                            body: JSON.stringify(data)
                        };

                        callback(null, response);
                    })
            }

        });
    });
}

module.exports.retrieveUsers = (event, context, callback) => {
    const responseHeaders = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS 
    }

    retrieveUsers()
        .then(result => {
            console.log('success');

            const response = {
                statusCode: 200,
                headers: responseHeaders,
                body: JSON.stringify(result)
            };

            callback(null, response);
        })
}

module.exports.removeUser = (event, context, callback) => {

    const responseHeaders = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS 
    }

    deleteUser(event.pathParameters.id)
        .then(result => {
            const response = {
                body: JSON.stringify({
                    message: 'Product removed.'
                })
            };
            callback(null, response);
        })
        .catch(callback);
}

