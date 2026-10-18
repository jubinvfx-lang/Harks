# HARKS Creative Marketing & Production Website

A responsive, static website for HARKS. No npm, build step, or paid hosting is required.

## Files
- `index.html` — website content and sections
- `styles.css` — responsive styling and animations
- `script.js` — mobile navigation, package selection, reveal animations, and enquiry form

## Before publishing
1. Open `script.js`.
2. Set `HARKS_CONFIG.contactEmail` to the real business email address.
3. Optionally set `HARKS_CONFIG.whatsappNumber` if you want to add a WhatsApp contact button later.
4. Replace the sample stock photos with your own approved portfolio images and video thumbnails when ready.
5. Check the prices, service scope, tax wording, and package inclusions before accepting client bookings.

The enquiry form uses a `mailto:` draft, so it opens the visitor's email app rather than submitting to a server. A backend or form service is needed for direct form submissions. The site currently uses external Google Fonts and Unsplash images, so those assets need an internet connection.

## Free deployment option: GitHub Pages
1. Create a GitHub repository named `harks-website`.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository root (not inside an extra nested folder).
3. In the repository, open **Settings → Pages**.
4. Under the build/deployment section, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site. The public address will appear in the Pages settings.

## Alternative: Vercel
1. Import the GitHub repository into Vercel.
2. Choose the **Other** framework preset if asked.
3. Leave the build command empty and set the output directory to `.` if the interface requires it.
4. Deploy. This is a static site; no `package.json` is needed.
