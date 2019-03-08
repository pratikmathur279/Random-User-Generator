var AWS = require('aws-sdk');
var uuid = require('uuid');

var dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = (data) => {
    var params = {
        TableName: "random-user",
        Item: {
            "username": data.login.username,
            "firstname": data.name.first,
            "lastname": data.name.last,
            "gender": data.gender,
            "street": data.location.street,
            "city": data.location.city,
            "state": data.location.state,
            "postcode": data.location.postcode,
            "email": data.location.email,
            "password": data.login.password,
            "dob": data.dob,
            "registered": data.registered,
            "id": uuid.v1(),
            "phone": data.phone,
            "cell": data.cell,
            "picturelarge": data.picture.large,
            "picturethumbnail": data.picture.thumbnail
        }
    };

    console.log(params.Item);
    console.log("before return dynamodb");
    return dynamoDB.put(params).promise()
        .then(result => params.Item)

    /*.then(function () {
            console.log(params);
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("Added item:", data.login.username);
                result => params.Item
            }
        });*/

}
