"use server";
import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";

export async function sendMail(data) {
  const sesClient = new SESClient({
    region: "ap-south-1",
    credentials: {
      accessKeyId: process.env.AS_KEY,
      secretAccessKey: process.env.SA_KEY,
    },
  });
  var templateParams = { ...data };
  console.log(templateParams);
  const html = `
    <div style="font-family: Arial, sans-serif;">
      <h2>New Support Request</h2>

        <p><strong>First Name:</strong> ${templateParams.first_name}</p>
        <p><strong>Last Name:</strong> ${templateParams.last_name}</p>
        <p><strong>Email:</strong> ${templateParams.email}</p>
        <p><strong>Mobile:</strong> ${templateParams.mobile}</p>
        <p><strong>Message:</strong> ${templateParams.message}</p>

    </div>
  `;

  const command = new SendEmailCommand({
    Source: "support@ashishbishnoi.com",
    Destination: {
      ToAddresses: ["support@superaxlecompany.com"],
    },
    Message: {
      Subject: {
        Data: "New Support Email",
      },
      Body: {
        Html: {
          Data: html,
        },
      },
    },
  });

  return await sesClient.send(command);
}
