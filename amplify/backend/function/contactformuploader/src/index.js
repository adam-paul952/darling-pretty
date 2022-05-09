const aws = require("aws-sdk");
const ses = new aws.SES();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === "INSERT") {
      // pull items from stream
      const contactName = streamedItem.dynamodb.NewImage.name.S;
      const contactEmail = streamedItem.dynamodb.NewImage.email.S;

      await ses
        .sendEmail({
          Destination: {
            ToAddresses: [process.env.SES_EMAIL],
          },
          Source: process.env.SES_EMAIL,
          Message: {
            Subject: { Data: "Contact Form Submission" },
            Body: {
              Text: {
                Data: `${contactName} (${contactEmail}) submitted a contact form.`,
              },
            },
          },
        })
        .promise();
    }
  }
  return { status: "done" };
};
