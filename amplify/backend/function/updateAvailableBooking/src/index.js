/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_DARLINGPRETTY_GRAPHQLAPIIDOUTPUT
	API_DARLINGPRETTY_GRAPHQLAPIENDPOINTOUTPUT
	API_DARLINGPRETTY_GRAPHQLAPIKEYOUTPUT
	Session
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB.DocumentClient({ region: "ca-central-1" });

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const body = JSON.parse(event.body);
  let response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
      "Content-Type": "*/*",
      Accept: "*/*",
    },
  };
  if (event.requestContext.httpMethod === "OPTIONS") {
    return response;
  }
  // Extract value from body to pass as argument
  // to update dynamoDB
  const itemIWantToUpdate = body.whatIwantToUpdate;
  let updateItemResponse = await updateItem(itemId, whatIWantToUpdate);
  response.body = JSON.stringify(updateItemResponse);
  return response;
};

const updateItem = (itemId, newWhatIWantToUpdate) => {
  const params = {
    TableName: process.env.Session,
    Key: {
      itemId: itemId,
    },
    UpdateExpression: "set whatIwantToUpdate = :newWhatIWantToUpdate",
    ExpressionAttributeValues: {
      ":whatIWantToUpdate": newWhatIwantToUpdate,
    },
    ReturnValues: "UPDATED_NEW",
  };
  return ddb.update(params).promise();
};
