const AWS = require('aws-sdk');
const uuid = require('uuid');

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = (username) => {
    var params = {
        TableName: 'random-user',
        Key: {
            username
        }
    };

    return dynamoDB.delete(params).promise();
}
