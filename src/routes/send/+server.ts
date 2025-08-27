import { Resend } from "resend";
import { MAIL_API_KEY } from "$env/static/private";

const resend = new Resend(MAIL_API_KEY);

export async function POST({ message }: { message: string }) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Koraa Contact <irfiacre.dev@gmail.com>",
      to: ["koraa.rw@gmail.com", "irfiacre@gmail.com"],
      subject: "Message From Contact Page",
      html: `<p>${message}</p>`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export const prerender = true
