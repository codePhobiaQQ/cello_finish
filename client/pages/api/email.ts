import type { NextApiRequest, NextApiResponse } from 'next'
import * as nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log(req.body)

	const transporter = await nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		pool: true,
		secure: true,
		auth: {
			user: 'ivanskanavicello@gmail.com',
			pass: 'jhbo pfhl ekyq olyk',
		},
	})

	const TitleText = {
		ru: 'Спасибо за Ваше письмо!',
		en: 'Thank you for you E-Mail!',
		de: 'Vielen Dank für Ihre E-Mail!',
	}

	const clientText = {
		ru: 'Спасибо за Ваше письмо! Иван Сканави ответит Вам в ближайшее время.',
		en: 'Thank you for you E-Mail! Ivan Skanavi will be in touch with you shortly',
		de: 'Vielen Dank für Ihre E-Mail! Ivan Skanavi wird sobald wie möglich auf Ihre Nachricht antworten.',
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

	console.log('info1', info1)

	res.status(200).json({ data: 'success' })
}
