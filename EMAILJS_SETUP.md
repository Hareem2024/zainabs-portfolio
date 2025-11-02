# EmailJS Setup Instructions

To enable the contact form to send emails directly to your inbox, you need to set up EmailJS (a free email service for contact forms).

## Step 1: Create an EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose Gmail (since you're using Gmail)
4. Click **Connect Account** and sign in with your Gmail account (zainabakram115@gmail.com)
5. Give it a name like "Portfolio Contact"
6. Click **Create Service**
7. **Copy the Service ID** - you'll need this later

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template:

**Template Name:** Portfolio Contact Form

**Subject:** New Contact from Portfolio Website

**Content:**
```
From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from Zainab Akram's Portfolio Website
```

4. Click **Save**
5. **Copy the Template ID** - you'll need this later

## Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find **Public Key** 
3. **Copy the Public Key** - you'll need this

## Step 5: Update Your Code
1. Open `/src/components/Contact.jsx`
2. Find these lines (around line 27-29):
```javascript
const serviceId = 'YOUR_SERVICE_ID'
const templateId = 'YOUR_TEMPLATE_ID'
const publicKey = 'YOUR_PUBLIC_KEY'
```

3. Replace them with your actual IDs:
```javascript
const serviceId = 'your_actual_service_id'
const templateId = 'your_actual_template_id'
const publicKey = 'your_actual_public_key'
```

## Step 6: Install Dependencies and Test
1. In your terminal, run:
```bash
npm install
```

2. Start your development server:
```bash
npm run dev
```

3. Fill out the contact form and send a test message
4. Check your email inbox for the message

## Troubleshooting
- Make sure all three IDs are correct (no extra spaces)
- Verify your Gmail account is connected in EmailJS
- Check your EmailJS dashboard for any error logs
- Make sure the template variables match: {{from_name}}, {{from_email}}, {{message}}

## Free Tier Limits
- 200 emails per month (perfect for a portfolio)
- Free forever!

That's it! Your contact form will now send emails directly to zainabakram115@gmail.com.

