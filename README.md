# Wedding Invitation Website
### The Wedding Ceremony of Tanvir Ahmed Joy & Afsa Jahan Rimi
**Date:** Friday, 11 December 2026 (2:00 PM / 14:00)  
**Venue:** Shanai Community Center, Wari, Dhaka  
**Groom's Family:** Late Md. Rowshan Iqbal and Niru Shamsun Nahar  
**Bride's Family:** Abu Jafor Mohammad Humayun Kabir and Tahmina Akhter  

---

## 📁 File Structure
- `index.html` : The main single-page wedding landing page.
- `style.css` : Modern styling, floral animations, mobile responsiveness, and easy color variables.
- `script.js` : Live countdown timer to 12 Dec 2026, falling petals effect, WhatsApp share, copy link, and soft wedding melody.

---

## 🎨 How to Change Colors (কালার পরিবর্তন করার নিয়ম)
`style.css` ফাইলের একদম উপরে `:root` সেকশনে সব কালার ভেরিয়েবল সাজানো আছে:

```css
:root {
  --primary-purple: #512b56;       /* মূল থিম কালার */
  --primary-purple-dark: #3b1c40;  /* ডার্ক শেড */
  --accent-gold: #b39366;          /* গোল্ডেন বর্ডার ও অ্যাকসেন্ট */
  --text-main: #332438;            /* বডি টেক্সট কালার */
  --card-bg: #ffffff;              /* কার্ডের ব্যাকগ্রাউন্ড */
}
```
যেকোনো সময় শুধু হেক্স কোডগুলো পরিবর্তন করলেই পুরো ওয়েবসাইটের কালার স্বয়ংক্রিয়ভাবে পরিবর্তিত হয়ে যাবে।

---

## 🚀 How to Deploy on Render (অন রেন্ডারে ফ্রিতে হোস্ট করার নিয়ম)

Render-এ এটি একটি **Static Site** হিসেবে হোস্ট করলে এটি **১০০% ফ্রি** এবং **কখনোই ডাউন বা স্লিপ হবে না**:

1. [GitHub](https://github.com/)-এ একটি নতুন রিপোজিটরি তৈরি করুন (যেমন: `wedding-invitation`)।
2. এই ফোল্ডারের ফাইলগুলো (`index.html`, `style.css`, `script.js`) গিটহাবে পুশ/আপলোড করুন।
3. [Render.com](https://render.com/)-এ লগইন করুন।
4. **New +** বাটনে ক্লিক করে **Static Site** সিলেক্ট করুন।
5. আপনার GitHub রিপোজিটরিটি কানেক্ট করুন।
6. সেটিংস কনফিগার করুন:
   - **Name:** `tanvir-afsa-wedding` (বা আপনার পছন্দের নাম)
   - **Branch:** `main`
   - **Build Command:** ফাঁকা রাখুন (Leave blank)
   - **Publish Directory:** `.` (বা ফাঁকা রাখুন)
7. **Create Static Site** বাটনে ক্লিক করুন!

কয়েক সেকেন্ডের মধ্যে আপনার লাইভ লিংক তৈরি হয়ে যাবে (যেমন: `https://tanvir-afsa-wedding.onrender.com`), যা সবাইকে মেসেজে বা কার্ডে শেয়ার করতে পারবেন।
