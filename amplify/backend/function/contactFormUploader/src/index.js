const aws = require("aws-sdk");
const ses = new aws.SES({ region: "ca-central-1" });

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === "INSERT") {
      const name = streamedItem.dynamodb.NewImage.name.S;
      const email = streamedItem.dynamodb.NewImage.email.S;
      const subject = streamedItem.dynamodb.NewImage.subject.S;
      const message = streamedItem.dynamodb.NewImage.message.S;

      await ses
        .sendEmail({
          Destination: {
            ToAddresses: [process.env.SES_EMAIL],
          },
          Source: process.env.SES_EMAIL,
          Message: {
            Subject: { Data: "Contact form submission from Darling Pretty" },
            Body: {
              Text: {
                Data: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
              },
            },
          },
        })
        .promise();
    }
  }
  return { status: "done" };
};
