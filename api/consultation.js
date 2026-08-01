import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

// This function runs on Vercel's servers (never in the visitor's browser),
// so it's safe to use secret keys here. Those keys are read from
// Environment Variables set in the Vercel project dashboard — see
// SETUP_BACKEND.md for exactly what to set and where.
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { fullName, phone, email, practiceArea, message } = req.body || {}

  if (!fullName || !phone || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' })
  }

  try {
    // 1. Save the inquiry permanently, so the firm can see and act on it
    //    later even if an email fails to send.
    const { error: dbError } = await supabase.from('consultations').insert([
      {
        full_name: fullName,
        phone,
        email,
        practice_area: practiceArea || 'Not specified',
        message,
        status: 'new',
      },
    ])
    if (dbError) throw dbError

    // 2. Notify the firm's inbox so a team member can follow up.
    await resend.emails.send({
      from: process.env.SENDER_EMAIL,
      to: process.env.FIRM_NOTIFY_EMAIL,
      subject: `New Consultation Request — ${fullName}`,
      text: [
        'A new consultation request has been received on the website.',
        '',
        `Name: ${fullName}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Practice Area: ${practiceArea || 'Not specified'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    // 3. Confirm receipt to the client automatically.
    await resend.emails.send({
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: 'We\u2019ve received your inquiry — DI VERDICTUM LAW CHAMBERS LLP',
      text: [
        `Dear ${fullName},`,
        '',
        'Thank you for reaching out to DI VERDICTUM LAW CHAMBERS LLP. We confirm that your inquiry has been received, and a member of our team will contact you within one business day.',
        '',
        'This message does not create an advocate\u2013client relationship, and does not constitute legal advice.',
        '',
        'Regards,',
        'DI VERDICTUM LAW CHAMBERS LLP',
      ].join('\n'),
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Consultation submission failed:', err)
    return res.status(500).json({ error: 'Something went wrong. Please try again shortly.' })
  }
}
