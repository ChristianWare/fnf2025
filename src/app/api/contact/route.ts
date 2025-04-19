import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SEND_EMAIL = "chris.ware.dev@gmail.com";
const PASSWORD = "eayw aboq lrso ugqx";
const ADDITIONAL_EMAIL = "chris.ware.dev@gmail.com"; // Add the second email address here
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: SEND_EMAIL,
    pass: PASSWORD,
  },
});

export async function POST(request: Request) {
  const data = await request.json();

  // Format the selected services as a list
  const formattedServices =
    data?.services && data.services.length > 0
      ? data.services.map((service: string) => `<li>${service}</li>`).join("")
      : "<li>None selected</li>";

  const info = await transporter.sendMail({
    from: `"Fonts & Footers Contact Form Submission" <${ADDITIONAL_EMAIL}>`, // sender name and address
    to: `${ADDITIONAL_EMAIL}`, // list of receivers
    replyTo: data.email, // reply-to address from the form
    subject: "You have a new message!",
    text: "Hello world?",
    html: `<b>First Name:</b> <br/> 
            ${data?.firstName} <br/> <br/>
            <b>Last Name:</b> <br/> 
            ${data?.lastName} <br/> <br/>
            <b>Email:</b> <br/> 
            ${data?.email} <br/> <br/>
            <b>Company:</b> <br/> 
            ${data?.company || "Not provided"} <br/> <br/>
            <b>Project Description:</b> <br/> 
            ${data?.projectDescription} <br/> <br/>
            <b>Services Interested In:</b> <br/> 
            <ul>
              ${formattedServices}
            </ul>`,
  });

  return NextResponse.json({
    messageId: info.messageId,
  });
}
