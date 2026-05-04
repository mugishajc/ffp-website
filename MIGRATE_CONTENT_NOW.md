# 🚀 Automatic Content Migration to Sanity - One Command!

## What This Does:

Automatically migrates ALL your content to Sanity CMS:
- ✅ 7 Team members
- ✅ 3 News articles
- ✅ Hero section
- ✅ Creates proper slugs
- ✅ Sets everything as active/published

**You don't need to do anything except run ONE command!**

---

## Step 1: Get Your Sanity Token (2 minutes)

1. Go to: https://www.sanity.io/manage
2. Click on your project: **ffp_website** (ID: 3r0h5v4g)
3. Go to **Settings** → **API** → **Tokens**
4. Click **"Add API Token"**
5. Name it: `Migration Token`
6. Permission: Select **"Editor"**
7. Click **"Add token"**
8. **Copy the token** (long string starting with `sk`)

---

## Step 2: Add Token to .env File (30 seconds)

1. Open your `.env` file in VS Code
2. Add this line at the bottom:

```
SANITY_AUTH_TOKEN=paste_your_token_here
```

3. **Save the file** (Ctrl + S)

---

## Step 3: Run the Migration (ONE COMMAND!)

Open terminal and run:

```bash
npx ts-node scripts/migrate-content-to-sanity.ts
```

That's it! The script will:
- ✅ Create all 7 team members
- ✅ Create all 3 news articles
- ✅ Create the hero section
- ✅ Show you progress in real-time

**Duration:** About 30 seconds!

---

## What Happens:

You'll see:

```
🚀 Starting content migration to Sanity...

👥 Migrating team members...
  ✅ Created: Liliane Thamar Muyumbu
  ✅ Created: Jean Marie Vianey Kagamba
  ✅ Created: Marhonyi Nahirimba Espérance
  ✅ Created: Muhigirwa Yondino Sourire
  ✅ Created: Bahizire Rusembuka Daniel
  ✅ Created: Mushgalusa Ruvunangiza Zacharie
  ✅ Created: Amani Ramazani Gerad

📰 Migrating news articles...
  ✅ Created: FoodFirst Program Launch in North Kivu
  ✅ Created: Community Gardens Initiative Success
  ✅ Created: Partnership with Local Farmers Announced

🎨 Creating hero section...
  ✅ Created hero: Together, We Fight Hunger

✨ Content migration completed!

🎯 Your content is now in Sanity CMS!
```

---

## After Migration:

1. **Go to Studio**: https://ffp-dashboard.sanity.studio/
2. **You'll see**:
   - 7 team members (need photos)
   - 3 news articles (need images)
   - 1 hero section (need background image)

3. **Add Photos**:
   - Click on each team member
   - Click "Photo" field
   - Upload their image
   - Click "Publish"

4. **That's it!** Your content is live!

---

## Quick Summary:

**Total Time:** 3 minutes
**Your Work:** Just run ONE command
**What Gets Migrated:** Everything!

### The Command:

```bash
npx ts-node scripts/migrate-content-to-sanity.ts
```

---

## Troubleshooting:

### Error: "SANITY_AUTH_TOKEN not found"
**Solution:** Make sure you added the token to `.env` file

### Error: "Document already exists"
**Solution:** That's okay! It means the content is already in Sanity. Skip it.

### Error: "Token invalid"
**Solution:**
1. Delete the old token in Sanity dashboard
2. Create a new one
3. Update `.env` file
4. Run command again

---

## Alternative: I Need Step-by-Step Help

If you want me to guide you through each step, just say:
- "Help me get the token"
- "Show me how to add it to .env"
- "Run the migration for me"

And I'll guide you!

---

## Ready?

1. ✅ Get token from Sanity
2. ✅ Add to `.env` file
3. ✅ Run: `npx ts-node scripts/migrate-content-to-sanity.ts`
4. ✅ Done!

Your content will be in Sanity CMS in less than 3 minutes! 🚀
