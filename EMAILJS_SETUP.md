# EmailJS Setup Instructions

To enable email functionality on your contact form, you need to set up EmailJS. Follow these steps:

## Step 1: Create an EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (free tier allows 200 emails/month)

## Step 2: Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (pumlanibasil15@gmail.com)
5. Copy the **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

**Template Name:** Contact Form

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
You have received a new message from your portfolio contact form.

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone_number}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Set "To Email" to: `pumlanibasil15@gmail.com`
5. Copy the **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 5: Update contact.js
Open `contact.js` and replace these placeholders:

1. Replace `YOUR_PUBLIC_KEY` with your EmailJS Public Key (line 2)
2. Replace `YOUR_SERVICE_ID` with your Service ID (line 60)
3. Replace `YOUR_TEMPLATE_ID` with your Template ID (line 60)

Example:
```javascript
emailjs.init("abc123xyz789"); // Your Public Key

// ... later in the code ...

emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

## Step 6: Test the Form
1. Open your contact page in a browser
2. Fill out the form and submit
3. Check your email (pumlanibasil15@gmail.com) for the message

## Troubleshooting
- Make sure all three IDs are correctly replaced in contact.js
- Check the browser console for any error messages
- Verify your EmailJS service is active in the dashboard
- Ensure your email template has the correct variable names: {{from_name}}, {{from_email}}, {{phone_number}}, {{message}}

## Notes
- The phone number input now includes country flag selection
- Phone numbers are validated and formatted automatically
- The form includes success/error messages
- All form fields are required before submission

