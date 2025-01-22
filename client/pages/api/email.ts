// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require('nodemailer')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log(req.body)

	const transporter = await nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		pool: true,
		secure: true, // true for 465, false for other ports
		auth: {
			user: 'ivanskanavicello@gmail.com', // generated ethereal user
			// pass: "juk1109@yandex.ru", // generated ethereal password
			pass: 'jhbo pfhl ekyq olyk', // generated ethereal password
		},
	})

	// console.log(transporter)
	// console.log('log')

	const TitleText = {
		Ru: 'Спасибо за Ваше письмо!',
		En: 'Thank you for you E-Mail!',
		De: 'Vielen Dank für Ihre E-Mail!',
	}

	const clientText = {
		Ru: 'Спасибо за Ваше письмо! Иван Сканави ответит Вам в ближайшее время.',
		En: 'Thank you for you E-Mail! Ivan Skanavi will be in touch with you shortly',
		De: 'Vielen Dank für Ihre E-Mail! Ivan Skanavi wird sobald wie möglich auf Ihre Nachricht antworten.',
	}

	// @ts-ignore
	const resultText = clientText[req.body.lang]
	console.log(resultText)

	const info2 = await transporter.sendMail({
		from: 'ivanskanavicello@gmail.com', // sender address
		to: 'ivanskanavicello@gmail.com', // list of receivers
		subject: 'Заявка с сайта ivanskanavi.com', // Subject line
		html:
			`<div>${req.body.values.name} - ${req.body.values.email} оставил заявку на сайте</div>` +
			`<div>Его сообщение:</div>` +
			`<div>${req.body.values.message}</div>`,
	})
	console.log('info2', info2)

	const info1 = await transporter.sendMail({
		from: 'ivanskanavicello@gmail.com',
		to: req.body.values.email,
		// @ts-ignore
		subject: TitleText[req.body.lang],
		// @ts-ignore
		text: resultText,
		// html: "test",
	})

	console.log(info1)
	console.log(info2)

	res.status(200).json({ data: 'success' })
}
