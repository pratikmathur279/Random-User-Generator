Random User Generator

Stack:
1.	Node.js v6.5.0 or later
2.  AWS Lambda
3.	AWS API Gateway
4.	AWS DynamoDb
5.	Serverless framework

The Serverless framework is a CLI tool that allows you to build and deploy serverless apps in a structured way. The serverless.yml contains services, which are the entry points to the application. Each service has events that trigger it, and handler that responds to the event. The serverless.yml contains information to configure and deploy the application. The application gets deployed on the AWS server and the HTTP requests are deployed on AWS Lambda via the AWS API Gateway. 

The serverless.yml contains the services getUser and retrieveUser which deploy the functions on AWS Lamdba and the AWS API Gateway configures the REST API calls to the application.
