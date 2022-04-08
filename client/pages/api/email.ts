// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require("nodemailer");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);

  const transporter = await nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    pool: true,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "vital.pereg@mail.ru", // generated ethereal user
      pass: "juk1109@yandex.ru", // generated ethereal password
    },
  });

  const TitleText = {
    Ru: "TestRu",
    En: "TestEn",
    de: "TestDe",
  };

  const clientText = {
    Ru:
      "<b style='text-align: center'>RuПривет, Исследователь! Поздравляю тебя с выбором своего путешествия!</b>" +
      "<div style='margin-top: 30px'>Мы живем в век информации, в том числе, информации о способах самопознания. Изобретены десятки\n" +
      "могут выбрать то, что по душе ему или воспользоваться расчетом на моем сайте по Хшановской А.</div>",
    En:
      "<b style='text-align: center'>EnПривет, Исследователь! Поздравляю тебя с выбором своего путешествия!</b>" +
      "<div style='margin-top: 30px'>Мы живем в век информации, в том числе, информации о способах самопознания. Изобретены десятки\n" +
      "могут выбрать то, что по душе ему или воспользоваться расчетом на моем сайте по Хшановской А.</div>",
    De:
      "<b style='text-align: center'>DeПривет, Исследователь! Поздравляю тебя с выбором своего путешествия!</b>" +
      "<div style='margin-top: 30px'>Мы живем в век информации, в том числе, информации о способах самопознания. Изобретены десятки\n" +
      "могут выбрать то, что по душе ему или воспользоваться расчетом на моем сайте по Хшановской А.</div>",
  };

  const info1 = await transporter.sendMail({
    from: "vital.pereg@mail.ru",
    to: "vital.pereg@mail.ru",
    // @ts-ignore
    subject: TitleText[req.body.lang],
    // @ts-ignore
    html: clientText[req.body.lang],
  });

  const info2 = await transporter.sendMail({
    from: "vital.pereg@mail.ru", // sender address
    to: "vital.pereg@mail.ru", // list of receivers
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
