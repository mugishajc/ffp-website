# 🚨 URGENT: Deploy Your Website to Fix ffp-program.org

## The Issue:

Your domain (ffp-program.org) is showing the Sanity Studio registration page instead of your actual website.

## Why This Happened:

The Sanity Studio deployment got associated with your domain. Your actual website files need to be uploaded to cPanel.

---

## 🔧 Quick Fix - 3 Steps:

### Step 1: Access Your cPanel

1. Go to your hosting provider's cPanel
2. Login with your credentials
3. Open **File Manager**

### Step 2: Upload Your Website

1. **Navigate to** `public_html` folder
2. **Upload** the file: `FFP-WEBSITE-CPANEL.zip`
   - Location: `C:\Users\Ampersand\Downloads\ffp\FFP-WEBSITE-CPANEL.zip`
   - Size: 6.1 MB
3. **Right-click** the uploaded zip file
4. **Select "Extract"**
5. **Extract to** current directory (`public_html`)
6. **Wait** for extraction to complete

### Step 3: Verify Files

Check that these files are in `public_html`:
- ✅ `index.html`
- ✅ `assets` folder
- ✅ `images` folder
- ✅ `ffp-logo.svg`
- ✅ Other website files

---

## 📋 What Should Happen:

**After uploading:**
- ✅ https://ffp-program.org/ → Your actual website
- ✅ https://ffp-dashboard.sanity.studio/ → Your CMS (Studio)

---

## 🎯 Alternative: Keep Studio Separate

If you want to keep your Studio on a different URL:

### Option 1: Studio on Subdomain
- Website: https://ffp-program.org/
- Studio: https://cms.ffp-program.org/

### Option 2: Studio on Sanity Hosting Only
- Website: https://ffp-program.org/
- Studio: https://ffp-dashboard.sanity.studio/

**Recommended:** Use Option 2 (Studio on Sanity hosting)

---

## ⚡ Quick Action Plan:

1. **Right now:** Upload `FFP-WEBSITE-CPANEL.zip` to cPanel
2. **Extract it** to `public_html`
3. **Visit** https://ffp-program.org/ → Should show your website
4. **Use Studio at:** https://ffp-dashboard.sanity.studio/

---

## 🔍 If Website Still Shows Studio:

### Check Your Domain DNS:

Your domain registrar might be pointing to Sanity. You need to:

1. **Go to your domain registrar** (where you bought ffp-program.org)
2. **Check DNS settings**
3. **Make sure A record points to your cPanel hosting IP**
4. **NOT to Sanity's servers**

### Get Your Hosting IP:

In cPanel:
1. Look for **"Server Information"** or **"General Information"**
2. Find **"Shared IP Address"**
3. Note this IP (example: 123.456.78.90)

### Update DNS (if needed):

At your domain registrar:
1. Go to DNS settings
2. A Record should point to your hosting IP
3. NOT to Sanity's IP

---

## 📞 Your Setup Should Be:

```
ffp-program.org
├── DNS A Record → Your cPanel hosting IP
├── Files in public_html → Your website (from FFP-WEBSITE-CPANEL.zip)
└── Visitors see → Your actual FFP website

ffp-dashboard.sanity.studio
├── Hosted by → Sanity.io
├── Used for → Content management (CMS)
└── Team accesses → To add photos, news, etc.
```

---

## 🚀 What To Do RIGHT NOW:

1. **Login to cPanel**
2. **Upload** `FFP-WEBSITE-CPANEL.zip`
3. **Extract** to `public_html`
4. **Test** https://ffp-program.org/

If it still shows Studio, check your DNS settings at your domain registrar.

---

## Your Files:

**Website Deployment:** `C:\Users\Ampersand\Downloads\ffp\FFP-WEBSITE-CPANEL.zip`
**Studio URL:** https://ffp-dashboard.sanity.studio/

**Need help with cPanel or DNS?** Let me know!
