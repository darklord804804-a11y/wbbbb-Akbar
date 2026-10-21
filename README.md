# Akbar Study Smart Academy — Educational Web Platform

A production-ready educational platform built for Pakistani students preparing for Federal Board (FBISE) Examinations (Classes 9, 10, 11, and 12) and university entry tests (NET, ECAT, MDCAT).

Built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## 1. Quick Start & Local Development

### Prerequisites
- Node.js (version 18 or higher)
- npm or bun

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:3000`.

---

## 2. Production Build for Hostinger

### Build Command
```bash
npm run build
```
This compiles the application and outputs the production-ready assets to the `dist/` directory.

### Build Output Structure
```
dist/
├── index.html            # Main HTML entry point with SEO metadata
├── .htaccess             # Apache rewrite rules for SPA routing & caching
├── favicon.svg           # High-resolution academy favicon
├── assets/               # Bundled JavaScript, CSS, and SVGs
│   ├── academy-logo.svg  # Official vector brand logo
│   └── ...
```

---

## 3. Hostinger Deployment Instructions (Step-by-Step)

1. **Log in to Hostinger hPanel**: Navigate to **Websites** → **Manage** for your domain.
2. **Open File Manager**: Go to **Files** → **File Manager** (or connect via FTP / FileZilla).
3. **Open `public_html`**: Navigate inside the root folder `public_html/`. Delete default placeholder files if present.
4. **Upload `dist` Contents**:
   - Compress the contents of your local `dist` folder into a `.zip` archive.
   - Upload the ZIP file into `public_html/`.
   - Extract the ZIP directly inside `public_html/` so that `index.html` is at `public_html/index.html`.
5. **Verify `.htaccess` File**:
   - Ensure the hidden `.htaccess` file is present in `public_html/`.
   - If not visible, enable "Show Hidden Files" in File Manager settings.
   - The `.htaccess` file ensures client-side routes (e.g., `/classes`, `/test-series`) load cleanly upon page refresh.
6. **Enable SSL & HTTPS**:
   - In Hostinger hPanel, go to **Security** → **SSL**.
   - Install the free Lifetime Let’s Encrypt SSL certificate and switch **Force HTTPS** to **ON**.

---

## 4. Customizing Content & Academy Resources

All academic resources, links, and contact information are centralized in structured data files inside `src/data/`:

- **Brand & Contact Info**: `src/data/siteConfig.ts`
  - Update official WhatsApp channel, YouTube, Instagram, Facebook, and TikTok URLs.
  - Update verified phone numbers and academy address.
- **Classes & FBISE Syllabi**: `src/data/classesData.ts`
  - Add or modify subjects, chapter titles, SLO focus topics, and mark allocations.
- **Interactive MCQ Tests**: `src/data/testsData.ts`
  - Add new chapter questions, answer keys, explanations, and difficulty ratings.
- **Notes & Solved Exercises**: `src/data/resourcesData.ts`
  - Add new chapter revision guides, key definitions, formulas, and examiner tips.
- **Guess Papers**: `src/data/guessPapersData.ts`
  - Update annual high-priority examination focus topics and sample questions.
- **Past Papers Archive**: `src/data/pastPapersData.ts`
  - Add recent board exam papers, question breakdowns, and official FBISE links.
- **University Admissions & Merit Lists**: `src/data/universityData.ts`
  - Update universities (NUST, FAST, GIKI, PIEAS, NUMS, QAU), entry test structures, and merit cutoffs.
- **Official Board Updates**: `src/data/announcementsData.ts`
  - Publish date sheet releases, roll number slip advisories, and syllabus notifications.

---

## 5. Connecting a Backend Database & Form Endpoints

By default, the registration form and newsletter subscriptions save reliably to browser `localStorage` and provide immediate student reference numbers (`ASA-XXXXXX`).

### To connect to Hostinger MySQL / PHP:
1. Create a PHP script at `public/api/register.php`:
```php
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$input = json_decode(file_get_contents("php://input"), true);
if (!$input || empty($input['fullName']) || empty($input['mobileNumber'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Required fields missing"]);
    exit;
}

// Option A: Send email to academy admin
$to = "info@akbarstudysmartacademy.com";
$subject = "New Registration: " . $input['fullName'];
$body = "Name: " . $input['fullName'] . "\nPhone: " . $input['mobileNumber'] . "\nClass: " . $input['classLevel'];
mail($to, $subject, $body);

// Option B: Insert into Hostinger MySQL
// $conn = new mysqli("localhost", "u123_user", "password", "u123_academy");
// ...

http_response_code(200);
echo json_encode(["status" => "success", "refCode" => "ASA-" . rand(100000, 999999)]);
?>
```
2. Update the `fetch()` call in `src/components/RegistrationForm.tsx` to POST to `/api/register.php`.

---

## 6. Official Academy Contact Helplines & Social Channels

### Direct Calling & WhatsApp Helplines:
- **Direct Helpline 1**: `0323-5792758` / `+92 323 5792758` (Academic Guidance & WhatsApp)
- **Direct Helpline 2**: `0310-0878172` / `+92 310 0878172` (Admissions & Support Desk)

### Official Social Media Links:
- **WhatsApp Channel**: [Join Channel](https://whatsapp.com/channel/0029VbAMQxi7j6g2ycJ2jE09)
- **YouTube Channel**: [Watch Lessons](https://youtube.com/@akbarstudysmartacademy?si=3gcJ0zBQJgjN6ZDf)
- **Instagram**: [@akbar_study_smart_academy](https://www.instagram.com/akbar_study_smart_academy?igsh=MTQ1N2doZjJ2Mnk3YQ==)
- **Facebook**: [Visit Page](https://www.facebook.com/share/18MpitdX3e/)
- **TikTok**: [@akbarstudysmart](https://vt.tiktok.com/ZSCLLLBwM/)

---

## 7. License & Disclaimers

All content is maintained for Akbar Study Smart Academy. Study materials and guess papers are provided for educational and revision purposes. Akbar Study Smart Academy is an independent educational platform.
