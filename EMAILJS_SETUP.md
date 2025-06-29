# EmailJS Setup Guide

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. Go to Email Services tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. Note your **Service ID**

## 3. Create Email Template
1. Go to Email Templates tab
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
```

4. Save and note your **Template ID**

## 4. Get Public Key
1. Go to Account > General
2. Copy your **Public Key**

## 5. Update Configuration
Replace the placeholders in Contact.js with your actual values:

```javascript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',     // Replace with your Service ID
  'YOUR_TEMPLATE_ID',    // Replace with your Template ID
  {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject || 'New Contact Form Message',
    message: data.message,
    to_name: 'Burak Karataş',
  },
  'YOUR_PUBLIC_KEY'      // Replace with your Public Key
)
```

## 6. Environment Variables (Optional but Recommended)
Create a `.env.local` file:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update Contact.js to use environment variables for security.

## 7. Test
1. Deploy your changes
2. Fill out the contact form
3. Check your email for the message

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Upgrade for more emails and remove branding