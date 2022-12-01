// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { log } from "util";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require("nodemailer");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);

  const transporter = await nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    pool: true,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "ivanskanavi.com", // generated ethereal user
      pass: "tszhkwzuyvyrjqtn", // generated ethereal password
      // pass: "ofbyivoymzltksgj", // generated ethereal password
    },
  });

  console.log(transporter);

  console.log("log");

  const TitleText = {
    Ru: "Спасибо за Ваше письмо!",
    En: "Thank you for you E-Mail!",
    De: "Vielen Dank für Ihre E-Mail!",
  };

  const clientText = {
    Ru:
      "<b style='text-align: center'>Спасибо за Ваше письмо!</b>" +
      "<div style='margin-top: 30px'>Иван Сканави ответит Вам в ближайшее время.</div>",
    En:
      "<b style='text-align: center'>Thank you for you E-Mail!</b>" +
      "<div style='margin-top: 30px'>Ivan Skanavi will be in touch with you shortly</div>",
    De:
      "<b style='text-align: center'>Vielen Dank für Ihre E-Mail!</b>" +
      "<div style='margin-top: 30px'>Ivan Skanavi wird sobald wie möglich auf Ihre Nachricht antworten.</div>",
  };

  const info1 = await transporter.sendMail({
    from: "info@ivanskanavi.com",
    to: req.body.values.email,
    // @ts-ignore
    subject: TitleText[req.body.lang],
    // @ts-ignore
    html: clientText[req.body.lang],
  });

  const info2 = await transporter.sendMail({
    from: "info@ivanskanavi.com", // sender address
    to: "info@ivanskanavi.com", // list of receivers
    subject: "Заявка с сайта ivanskanavi.com", // Subject line
    html:
      `<div>${req.body.values.name} - ${req.body.values.email} оставил заявку на сайте</div>` +
      `<div>Его сообщение:</div>` +
      `<div>${req.body.values.message}</div>`,
  });

  console.log(info1);
  console.log(info2);

  res.status(200).json({ data: "success" });
}
