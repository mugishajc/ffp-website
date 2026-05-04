# 🚀 Deployment & Translations Guide

## 📦 Your Deployment Package

**File**: `FFP-WEBSITE-CPANEL.zip`
**Location**: `C:\Users\Ampersand\Downloads\ffp\FFP-WEBSITE-CPANEL.zip`
**Size**: 6.1 MB

---

## 🌐 How to Deploy to cPanel

### Step 1: Login to cPanel

1. Go to your cPanel URL (usually: `yourdomaincom/cpanel`)
2. Login with your credentials

### Step 2: Open File Manager

1. Look for **"File Manager"** icon
2. Click to open

### Step 3: Navigate to public_html

1. In File Manager, open **`public_html`** folder
2. This is where your website files go

### Step 4: Upload the Zip File

1. Click **"Upload"** button (top toolbar)
2. Click **"Select File"**
3. Navigate to: `C:\Users\Ampersand\Downloads\ffp\`
4. Select **`FFP-WEBSITE-CPANEL.zip`**
5. Click **"Open"**
6. Wait for upload to complete (100%)

### Step 5: Extract the Files

1. Go back to File Manager
2. Find `FFP-WEBSITE-CPANEL.zip` in `public_html`
3. **Right-click** on the zip file
4. Select **"Extract"**
5. Extract to: `/public_html/` (current directory)
6. Click **"Extract Files"**
7. Wait for extraction to complete

### Step 6: Move Files to Root (if needed)

If files are in a subfolder:
1. Open the extracted folder
2. Select **all files** (Ctrl + A)
3. Click **"Move"**
4. Move to: `/public_html/`
5. Click **"Move Files"**

### Step 7: Create .htaccess File

1. In `public_html`, click **"+ File"**
2. Name it: `.htaccess`
3. Click **"Create New File"**
4. Right-click `.htaccess` → **"Edit"**
5. Paste this code:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

6. Click **"Save Changes"**

### Step 8: Test Your Website

1. Open your browser
2. Go to: `https://ffp-program.org`
3. Your website should load! 🎉

---

## ✅ Q&A: Content Updates

### Q: When I add content in Sanity, will it show on ffp-program.org automatically?

**YES! Instantly!** ✅

**How it works:**

1. **You add content** in Sanity Studio (https://ffp-dashboard.sanity.studio/)
2. **Click "Publish"**
3. **Content appears immediately** on ffp-program.org

**No rebuild needed!** Your website fetches content from Sanity in real-time.

### Example Flow:

```
You upload photo in Studio
        ↓
Click "Publish"
        ↓
Photo appears on ffp-program.org INSTANTLY
        ↓
Visitors see new photo immediately
```

**Why this is awesome:**
- ✅ Updates are instant
- ✅ No technical knowledge needed
- ✅ Team members can update from anywhere
- ✅ No need to rebuild or redeploy website

---

## 🌍 Translations System

### Current Languages Supported:

Your website has **4 languages**:
- 🇬🇧 **English (en)** - Default
- 🇫🇷 **French (fr)** - Français
- 🇪🇸 **Spanish (es)** - Español
- 🇹🇿 **Swahili (sw)** - Kiswahili

### How Translations Work Now:

**Static Content (UI Text):**
- Navigation, buttons, labels are in [src/lib/i18n.ts](src/lib/i18n.ts)
- These are hard-coded translations
- Users switch language using the language selector

**Problem:** Sanity content is NOT translated yet!

---

## 🔧 Adding Translations to Sanity Content

To make your Sanity content multilingual, we need to update the schemas. Here's how:

### Option 1: Simple Approach (Recommended for Now)

**Create separate content for each language:**

In Sanity Studio:
1. Add a **"Language"** field to each content type
2. Create one entry per language

**Example:**
```
Title: Community Event 2024 (Language: English)
Title: Événement Communautaire 2024 (Language: French)
Title: Evento Comunitario 2024 (Language: Spanish)
Title: Tukio la Jamii 2024 (Language: Swahili)
```

Then filter by language in your website code.

### Option 2: Full Multilingual Setup (Advanced)

Install Sanity internationalization plugin:

```bash
npm install @sanity/language-filter
```

This allows:
- ✅ One content entry with multiple language versions
- ✅ Easy translation management
- ✅ Automatic language detection

---

## 📝 Quick Translation Setup (Simple Method)

Let me add a language field to your schemas right now:

**For Media Gallery:**

1. Open Sanity Studio
2. When creating new media, add which language it's for
3. Your website will filter by selected language

**Example:**
- User selects French → Shows only French media
- User selects English → Shows only English media

---

## 🎯 Would You Like Me To:

### Option A: Add Language Field to Sanity Schemas
I can update your Sanity schemas to include a language selector:
- Media can be marked as EN/FR/ES/SW
- News articles can have language versions
- Team bios can be multilingual

### Option B: Keep It Simple
Use Sanity only for language-neutral content:
- Photos (no translation needed)
- Videos (no translation needed)
- Dates, numbers
- Keep text translations in the code

### Option C: Full Multilingual CMS
Set up proper internationalization:
- One content entry = 4 language versions
- Professional translation workflow
- Requires more setup

**Which option do you prefer?**

---

## 📊 Current Setup Summary

| Feature | Status | Notes |
|---------|--------|-------|
| **Website UI** | ✅ 4 Languages | EN, FR, ES, SW |
| **Language Switcher** | ✅ Working | Users can switch |
| **Static Translations** | ✅ Complete | UI text translated |
| **Sanity Content** | ⚠️ Single Language | Currently no translations |
| **Auto-Updates** | ✅ Working | Content updates instantly |

---

## 🚀 Deployment Checklist

- [ ] Upload `FFP-WEBSITE-CPANEL.zip` to cPanel
- [ ] Extract files to `public_html`
- [ ] Create `.htaccess` file
- [ ] Test website loads at ffp-program.org
- [ ] Add test content in Sanity Studio
- [ ] Verify content appears on website
- [ ] Test language switcher
- [ ] Add real photos/videos
- [ ] Invite team members to Studio

---

## 💡 Pro Tips

### For Content Updates:
1. **Always click "Publish"** in Sanity Studio
2. **Test on website** after publishing
3. **Use "Featured"** for homepage content
4. **Optimize images** - Sanity does this automatically

### For Translations:
1. **Plan your approach** (separate entries vs. full i18n)
2. **Start simple** - Add language field first
3. **Test with one language** before all four
4. **Keep UI translations** in code (faster)

---

## 🆘 Need Help?

**Deployment Issues:**
- Files not showing → Check extracted to correct folder
- 404 errors → Make sure `.htaccess` is created
- Blank page → Check browser console for errors

**Content Not Updating:**
- Make sure you clicked "Publish" not "Save as draft"
- Clear browser cache (Ctrl + Shift + R)
- Check Sanity Studio shows "Published" status

**Translation Questions:**
- Ask me to add language field to schemas
- Ask me to set up full i18n system
- Ask me how to organize multilingual content

---

## 📞 Quick Links

**Studio**: https://ffp-dashboard.sanity.studio/
**Dashboard**: https://www.sanity.io/manage
**Website**: https://ffp-program.org
**Deployment File**: `C:\Users\Ampersand\Downloads\ffp\FFP-WEBSITE-CPANEL.zip`

---

**Ready to deploy? Follow the steps above!** 🚀

**Need translation setup? Let me know which option you prefer!** 🌍
