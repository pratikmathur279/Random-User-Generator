const AWS = require('aws-sdk');
const uuid = require('uuid');

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = () => {
    var params = {
        TableName: 'random-user'
    };
    return dynamoDB.scan(params).promise();
}
