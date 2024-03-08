// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // 仅在处理POST请求时
  if (req.method === 'POST') {
    // 解构请求体
    const { name, email, company, message } = req.body

    // 创建邮件传输器
    let transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // 邮件选项
    let mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO_ADDRESS,
      subject: `Message from ${name}`,
      text: `Company: ${company}\nEmail: ${email}\nMessage: ${message}`,
    }

    // 尝试发送邮件
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error)
        return res
          .status(500)
          .json({ message: 'Internal Server Error', error: error.message })
      }
      return res.status(200).json({ message: 'Email sent successfully' })
    })
  } else {
    // 如果不是POST请求，则返回405方法不允许
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ message: 'Method Not Allowed' })
  }
}
