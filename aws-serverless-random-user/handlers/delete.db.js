const AWS = require('aws-sdk');
const uuid = require('uuid');

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = (id) => {
    console.log(id);
    var params = {
        TableName: 'random-user',
        Key: {
            id
        }
    };

    return dynamoDB.delete(params).promise();
}
