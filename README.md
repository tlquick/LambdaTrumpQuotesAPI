# LambdaTrumpQuotesAPI

Serverless API connected to MongoDB

Uses AWS Lambda and API Gateway:

- intial setup: just process payload from another API (using an express server - see TriumpQuotesAPI project) from a URL (https://trumpquoteapi.onrender.com/random)- tag version 1.0 - just fork, npm i, zip and upload to lambda, create an API gateway to expose endpoint <br>
  ![Lambda](/images/lambda.png?raw=true "intial") <br>

- upgrade: connect directly to mongoDB from the lambda function and get a random quote - tag version 2.0 - fork, npm i, create .env with MONGODB_URI, test with node index.js, zip, upload to lambda, set environment variable for MONGODB_URI, create an API gateway to expose end point (if not already done) <br>
  ![LambdaMongo](/images/lambda_mongo.png?raw=true "mongo") <br>
Live Demo:  https://2bx2yqdk5k.execute-api.ap-southeast-2.amazonaws.com/default/TrumpQuote
