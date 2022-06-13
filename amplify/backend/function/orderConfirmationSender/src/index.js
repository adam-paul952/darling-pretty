const aws = require("aws-sdk");
const ses = new aws.SES({ region: "ca-central-1" });

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  // for (const streamedItem of event.Records) {
  //   console.log(streamedItem.eventName);
  //   if (streamedItem.eventName === "INSERT") {
  //     const clientFirstName = streamedItem.dynamodb.NewImage.firstName.S;
  //     const clientLastName = streamedItem.dynamodb.NewImage.lastName.S;
  //     const clientEmail = streamedItem.dynamodb.NewImage.email.S;
  //     const clientBooking = streamedItem.dynamodb.NewImage.sessionBooked.S;

  //     await ses
  //       .sendEmail({
  //         Destination: {
  //           ToAddresses: [clientEmail],
  //         },
  //         Source: process.env.SES_EMAIL,
  //         Message: {
  //           Subject: {
  //             Data: "Confirmation of Booking for Darling Pretty Photography",
  //           },
  //           Body: {
  //             Text: {
  //               Data: `Hi ${clientFirstName} ${clientLastName},\n\nThank you for booking with Darling Pretty Photography.\n\nYour booking for ${clientBooking} has been confirmed.\n\nThank you,\nDarling Pretty Photography`,
  //             },
  //           },
  //         },
  //       })
  //       .promise();
  //   }
  // }
  // return { status: "done" };
  return null;
};
