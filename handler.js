const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

module.exports.login = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Login exitoso LUEGO DE CAMBIO APLICADO CON GITHUB ACTIONS",
      token: "abc123"
    })
  };
};

module.exports.users = async (event) => {
  const result = await docClient.send(
    new ScanCommand({
      TableName: process.env.USERS_TABLE
    })
  );

  return {
    statusCode: 200,
    body: JSON.stringify(result.Items)
  };
};
