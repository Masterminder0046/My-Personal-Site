import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dns from 'dns';

dns.setDefaultResultOrder('ipv4first');
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  app.use(express.json());

  // SMTP Settings
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const receiverEmail = process.env.RECEIVER_EMAIL || 'sshamu46@gmail.com';

  // 1. SMTP Email Sending & Auto-Reply API
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required fields.' });
      }

      console.log(`[Contact Inquiry] name: ${name}, email: ${email}, subject: ${subject}`);

      // If SMTP credentials are not configured, simulate transmission gracefully
      if (!smtpUser || !smtpPass) {
        console.warn('⚠️ SMTP credentials are not configured in environment. Running simulation...');
        return res.json({
          success: true,
          simulated: true,
          message: 'Inquiry received in simulation mode! Configure SMTP_USER and SMTP_PASS to enable real email transmission.'
        });
      }

      // Configure SMTP transporter
      const isGmail = smtpHost.includes('gmail');
      const transporter = nodemailer.createTransport(
        (isGmail 
          ? {
              service: 'gmail',
              auth: {
                user: smtpUser as string,
                pass: smtpPass as string
              }
            }
          : {
              host: smtpHost,
              port: smtpPort,
              secure: smtpPort === 465,
              family: 4, // Force IPv4 to avoid Render's IPv6 ENETUNREACH issues
              auth: {
                user: smtpUser as string,
                pass: smtpPass as string
              }
            }) as any
      );

      // Send Email to the Portfolio Owner (Sheik)
      const ownerEmailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 16px; background-color: #ffffff;">
          <h2 style="font-size: 18px; font-weight: bold; color: #111827; margin-bottom: 20px; border-bottom: 1px solid #f3f4f6; padding-bottom: 12px;">📬 New Portfolio Consultation Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 500; width: 120px;">Client Name:</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Email Address:</td>
              <td style="padding: 8px 0; color: #2563eb; font-weight: 600;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Subject:</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${subject || 'General Consultation'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background-color: #f9fafb; border-radius: 12px; border: 1px solid #f3f4f6; font-size: 14px; color: #374151; line-height: 1.6; white-space: pre-wrap;">
            <strong>Message Details:</strong><br/>
            ${message}
          </div>
          <p style="font-size: 11px; color: #9ca3af; text-align: center; margin-top: 24px; font-family: monospace;">SMTP Auto-Delivery Engine • Portfolio Lab</p>
        </div>
      `;

      try {
        await transporter.sendMail({
          from: `"${name} (Portfolio Inquiry)" <${smtpUser}>`,
          to: receiverEmail,
          replyTo: email,
          subject: `[Portfolio Inquiry] ${subject || 'New Contact Request'} - from ${name}`,
          html: ownerEmailHtml
        });
        console.log('✅ Owner notification email sent successfully.');
      } catch (ownerError: any) {
        console.error('Owner Email Failed:', ownerError);
        return res.status(500).json({ error: 'Delivery failed. If using Gmail on Render, ensure you have an App Password configured.' });
      }

      // Send greeting auto-reply to the visitor
      const visitorGreetingHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; border: 1px solid #e5e7eb; border-radius: 24px; background-color: #ffffff; text-align: left;">
          <div style="margin-bottom: 24px;">
            <span style="font-size: 10px; font-family: monospace; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; color: #2563eb; background-color: #eff6ff; padding: 4px 10px; border-radius: 8px;">Auto-Response Confirmed</span>
          </div>
          <h1 style="font-size: 22px; font-weight: 900; color: #111827; margin: 0 0 16px 0; letter-spacing: -0.5px;">Thank You for Reaching Out!</h1>
          <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0 0 20px 0;">
            Hi <strong>${name}</strong>,<br/><br/>
            Thank you for initiating consultation with Sheik Mohamed. Your message regarding "<strong>${subject || 'General Consultation'}</strong>" has been successfully received in our system via secure SMTP.
          </p>
          <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 16px; padding: 18px; margin-bottom: 24px;">
            <h4 style="font-size: 12px; font-weight: bold; text-transform: uppercase; color: #9ca3af; margin: 0 0 8px 0; font-family: monospace; letter-spacing: 1px;">Inquiry Summary</h4>
            <p style="font-size: 13px; color: #4b5563; margin: 0; font-style: italic; line-height: 1.5;">"${message}"</p>
          </div>
          <p style="font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0 0 24px 0;">
            Sheik is currently reviewing new full-time, hybrid, and contract developer opportunities. He will personally review your inquiry and follow up with you within 24 hours.
          </p>
          <div style="border-top: 1px solid #f3f4f6; padding-top: 20px; font-size: 13px; color: #6b7280; line-height: 1.4;">
            <strong>Best Regards,</strong><br/>
            <span style="color: #111827; font-weight: bold;">Sheik Mohamed</span><br/>
            <span style="font-size: 11px; color: #9ca3af;">Full Stack Developer | Python Django Specialist</span><br/>
            <span style="font-size: 11px; color: #9ca3af;">+91 7708182774 | <a href="mailto:sheikmohamed0046@gmail.com" style="color: #2563eb; text-decoration: none;">sheikmohamed0046@gmail.com</a></span>
          </div>
        </div>
      `;

      try {
        await transporter.sendMail({
          from: `"Sheik Mohamed" <${smtpUser}>`,
          to: email,
          subject: `Thank you for contacting Sheik Mohamed!`,
          html: visitorGreetingHtml
        });
        console.log('✅ Auto-reply greeting email sent successfully.');
      } catch (autoReplyError: any) {
        console.error('Auto-Reply Failed:', autoReplyError);
        // Do not crash the request if only the auto-reply fails
      }

      return res.json({ success: true, simulated: false });
    } catch (error: any) {
      console.error('SMTP Transmission Error:', error);
      return res.status(500).json({ error: error.message || 'SMTP email delivery failed.' });
    }
  });

  // 2. Free AI Twin Rule-Based Chatbot API
  app.post('/api/chat', (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const msg = message.toLowerCase();
      let replyText = '';

      if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('greetings') || msg.includes('who are you') || msg.includes('twin')) {
        replyText = `Hello! I am Sheik Mohamed's AI Twin. I run entirely on a 100% free, lightweight keyword-based NLP system with no API costs! 

I have Sheik's complete resume loaded in my local memory. Feel free to ask me about:
1. 🎨 **Technical Skills** (React, Python, Django, Databases)
2. 🚀 **Featured Projects** (HASH Career, Synapse AI SaaS, Support System)
3. 🎓 **Education & Certifications** (Anna University B.E., Coderz Academy)
4. 💼 **Experience** (Frontend Developer Intern roles)
5. 📬 **Contact & Hiring Availability** (Try the contact form for automatic SMTP greetings!)

How can I assist you in building together today?`;
      } 
      else if (msg.includes('project') || msg.includes('synapse') || msg.includes('support') || msg.includes('travelmate') || msg.includes('insight') || msg.includes('resume') || msg.includes('portfolio') || msg.includes('app') || msg.includes('hash')) {
        replyText = `Sheik has engineered several high-integrity software products:

1. 🎯 **HASH Career** (AI Placement Intelligence Platform): An AI-powered placement platform featuring role-based portals for Students, Placement Officers, and Admins. Built using React, Node.js, MongoDB, Python, Gemini AI, and Scikit-learn. Live link: [HASH Career login](https://hash-career.onrender.com/login)
2. 🚀 **Synapse** (AI-Powered SaaS): A premium project management dashboard built with Python, Django, DRF, PostgreSQL, Redis, WebSockets, and Docker. It features real-time synchronization and AI-driven tasks. Live link: [synapse-render](https://saas-frontend-gs2l.onrender.com/)
3. 🎫 **Support System App**: A complete help-desk ticketing suite built with Flask and MySQL with complete admin dashboards, category indexings, and user role tracking.
4. 🗺️ **TravelMate AI Planner**: An interactive companion itinerary generator matching a React.js client structure and a Flask API.
5. 📊 **Insight Presence System**: A hybrid attendance auditor displaying analytics charts powered by Django and MySQL.
6. 🔍 **AI Resume Enhancer**: A smart parser analyzing document match scores against target jobs.`;
      } 
      else if (msg.includes('skill') || msg.includes('tech') || msg.includes('language') || msg.includes('code') || msg.includes('python') || msg.includes('django') || msg.includes('react') || msg.includes('database') || msg.includes('postgres') || msg.includes('mysql') || msg.includes('mongo') || msg.includes('javascript')) {
        replyText = `Sheik Mohamed's technical capabilities include:
 
• 🎨 **Frontend Engineering**: React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, GSAP, motion transitions, Figma wireframing, Canva layouting.
• ⚙️ **Backend Development**: Python, Django, Flask, Django REST Framework, MVC architectures, Celery async triggers, Redis queue loops.
• 💾 **Databases & Tools**: MongoDB, PostgreSQL, MySQL, Oracle SQL, SQLite, query structure indexing, relational schemas, Git/GitHub, Docker containerization.`;
      } 
      else if (msg.includes('experience') || msg.includes('job') || msg.includes('intern') || msg.includes('work') || msg.includes('history')) {
        replyText = `Sheik has valuable experience as a **Front-end Developer Intern** (Remote, April 2025 - May 2025):
• Successfully designed and shipped 4+ web applications utilizing Flask, Django, Python, and JavaScript.
• Developed secure role-based dashboard architectures with active REST API integrations.
• Converted high-fidelity Figma files into modular and responsive JSX files.
• Maintained code version controls using Git.`;
      } 
      else if (msg.includes('education') || msg.includes('college') || msg.includes('university') || msg.includes('school') || msg.includes('study') || msg.includes('gpa') || msg.includes('cgpa')) {
        replyText = `Here are Sheik's educational credentials:

• 🎓 **B.E. in Computer Science & Engineering** (2022 - 2026)
  St. Anne's College of Engineering and Technology (affiliated with Anna University), Panruti, Tamil Nadu. 
  **Cumulative CGPA: 7.9 / 10**

• 🏫 **High School & Secondary School**
  Bonne Nehru Higher Secondary School, Villupuram.
  HSC (69%, 2021-2022) | SSLC (63%, 2019-2020)`;
      } 
      else if (msg.includes('certif') || msg.includes('coderz') || msg.includes('academy') || msg.includes('course') || msg.includes('prize') || msg.includes('award') || msg.includes('achieve')) {
        replyText = `Sheik's academic achievements and credentials include:

• 📜 **Front-end Development & Database Certification** (Jan 2025 - Jun 2025)
  A specialized 6-month certification course from Coderz Academy focusing on React.js stack and MySQL database query structures.

• 🥇 **1st Prize Winner** in the Inter-College Vector Logo Design Competition.
• 🏆 Led content and visual design for departmental tech symposia at St. Anne's College.
• 🎤 Multiple awards in paper presentations and tech fests.`;
      } 
      else if (msg.includes('contact') || msg.includes('email') || msg.includes('phone') || msg.includes('hire') || msg.includes('salary') || msg.includes('availability') || msg.includes('reach') || msg.includes('call') || msg.includes('mail')) {
        replyText = `You can contact Sheik Mohamed instantly for any opportunities:

• 📞 **Mobile Phone**: +91 7708182774
• ✉️ **Email Address**: sheikmohamed0046@gmail.com
• 📍 **Location**: Villupuram, Tamil Nadu, India
• 💼 **Availability**: Actively seeking remote or hybrid full-time developer roles. Open to competitive compensations!

*Tip: Fill out the Client Inquiry Board form on the left! It will use Nodemailer SMTP to notify him and send you an automated greeting email instantly.*`;
      } 
      else if (msg.includes('smtp') || msg.includes('free') || msg.includes('nlp')) {
        replyText = `This portfolio operates on a **100% free SMTP & manual rule-based NLP system**!

• Fully manual NLP templates mean zero cloud API subscription costs.
• Integrating \`nodemailer\` SMTP allows client inquiries to be sent directly to Sheik, while automatically issuing beautiful email receipts back to the client instantly.
• High performance, safe, and highly reliable.`;
      } 
      else {
        replyText = `I received your message! As Sheik's custom Free AI Twin (operating on lightweight manual rule matching), I can reply with precise details about:

• 🎨 **Skills**: Frontend, Backend, Django, React, Databases.
• 🚀 **Projects**: Synapse AI SaaS, Ticketing system, TravelMate AI.
• 🎓 **Education**: B.E. Computer Science and Coderz Academy certifications.
• 📬 **Contact**: Phone, Email, and job availability.

*Try typing "skills", "projects", "education", or "contact" to get specific templates!*`;
      }

      return res.json({ text: replyText });
    } catch (error: any) {
      console.error('Chat API Error:', error);
      return res.status(500).json({ error: 'Failed to process chat query.' });
    }
  });

  // Serve static files in production / Dev Vite Server in development
  if (process.env.NODE_ENV === 'production' || process.env.VITE_PROD === 'true') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  const port = 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Fullstack Server running on port ${port}`);
  });
}

startServer();
