# Mick's Guitars Website Management Guide

## Overview
This is a custom guitar builder website for Mick's Guitars, built with HTML, CSS, and JavaScript. The site showcases handcrafted electric guitars with a focus on quality, craftsmanship, and personal service.

## File Structure
```
micks-guitars-website/
├── index.html              # Main website file
├── styles.css              # All styling and responsive design
├── script.js               # General JavaScript functionality
├── gallery-loader.js       # Dynamic gallery loading and modal functionality
├── robots.txt              # Search engine crawling instructions
├── sitemap.xml             # SEO sitemap
├── images/
│   ├── guitars/            # Guitar photos (optimized)
│   ├── workshop/           # Workshop process photos
│   ├── logo.png            # Main logo
│   └── micks-guitars-headstock-logo-png.png  # Watermark logo
└── WEBSITE_MANAGEMENT_GUIDE.md  # This file
```

## Key Features

### 1. Responsive Design
- Mobile-first approach
- Breakpoints: 768px (mobile), 1024px (tablet), 1400px+ (desktop)
- Flexbox and CSS Grid layouts
- Touch-friendly interactions

### 2. Image Management
- **Gallery Images**: Located in `images/guitars/optimized/`
- **Workshop Images**: Located in `images/workshop/`
- **Watermarks**: Applied to thumbnails, not fullscreen modal
- **Modal Viewer**: Click any image for fullscreen view with arrow key navigation

### 3. Contact Form
- Formspree integration (ID: xrbazlkj)
- Fields: Name, Email, Message
- Validation and success notifications
- Email notifications sent to mick@micksguitars.com

## Content Management

### Adding New Guitar Images
1. **Add images** to `images/guitars/optimized/` directory
2. **Update gallery-loader.js** - Add filename to `imageFiles` array:
   ```javascript
   const imageFiles = [
       'new-guitar-image.jpg',
       // ... existing images
   ];
   ```
3. **Refresh page** to see new images

### Adding New Workshop Images
1. **Add images** to `images/workshop/` directory
2. **Update index.html** - Add new workshop item:
   ```html
   <div class="workshop-item">
       <img src="images/workshop/new-workshop-image.png" alt="Description" loading="lazy">
       <div class="workshop-watermark">
           <img src="images/micks-guitars-headstock-logo-png.png" alt="Mick's Guitars">
       </div>
   </div>
   ```
3. **Update CSS** if needed for grid layout

### Updating Text Content
- **About Section**: Lines 65-75 in `index.html`
- **Custom Builds Section**: Lines 185-195 in `index.html`
- **Contact Info**: Lines 280-290 in `index.html`

### Changing Images
- **Hero Image**: Line 40 in `index.html` - `images/guitars/PXL_20250118_194629026~2.jpg`
- **About Image**: Line 78 in `index.html` - `images/workshop/1Mtkn6cn1_Q_535s.png`
- **Logo**: Line 32 in `index.html` - `images/logo.png`

## Styling and Layout

### CSS Architecture
- **Mobile-first responsive design**
- **CSS Grid** for complex layouts (workshop, gallery)
- **Flexbox** for simple layouts
- **CSS Custom Properties** for consistent theming

### Key CSS Classes
- `.section-header` - Section titles with Montserrat font
- `.container` - Content width constraints
- `.btn` - Button styling
- `.modal-overlay` - Fullscreen image viewer
- `.workshop-grid` - Mosaic layout for workshop images
- `.gallery-grid` - Auto-fit grid for guitar images

### Color Scheme
- **Primary**: #000000 (black)
- **Secondary**: #666666 (gray)
- **Background**: #f8f9fa (light gray)
- **White**: #ffffff

### Typography
- **Primary Font**: 'Montserrat', sans-serif (headers)
- **Secondary Font**: 'Inter', sans-serif (body text)
- **Font Weights**: 300, 400, 500, 600, 700

### Responsive Breakpoints
```css
/* Mobile */
@media (max-width: 768px) { ... }

/* Tablet */
@media (max-width: 1024px) { ... }

/* Desktop */
@media (min-width: 1025px) { ... }
```

## JavaScript Functionality

### Gallery Loader (`gallery-loader.js`)
- **Dynamic image loading** from `imageFiles` array
- **Modal functionality** with arrow key navigation
- **Watermark application** to thumbnails
- **Error handling** for missing images

### Main Script (`script.js`)
- **Contact form handling** with Formspree
- **Smooth scrolling** navigation
- **Mobile menu** toggle
- **Notification system** for form submissions
- **Keyboard navigation** support

### Modal Navigation
- **Arrow keys**: Navigate between images
- **Escape key**: Close modal
- **Back button**: Close modal
- **Click outside**: Close modal

## SEO and Performance

### Meta Tags (Lines 7-35 in index.html)
- **Title**: "Mick's Guitars - Handcrafted Electric Guitars | Ontario, Canada"
- **Description**: 160-character limit
- **Keywords**: Electric guitars, custom guitars, Ontario
- **Open Graph**: Social media sharing
- **Twitter Cards**: Twitter sharing

### Structured Data (Lines 50-110 in index.html)
- **LocalBusiness schema** for Google
- **Service offerings** with pricing
- **Contact information** and location
- **Social media links**

### Performance Optimizations
- **Lazy loading** for images
- **Preload critical resources**
- **Optimized images** in guitars/optimized/
- **Minimal JavaScript** footprint

## Common Tasks

### Changing the Hero Title
```html
<!-- Line 44 in index.html -->
<h1 class="hero-title">Guitars handmade by Mick</h1>
```

### Updating Contact Email
```html
<!-- Line 283 in index.html -->
<p>mick@micksguitars.com</p>
```

### Changing Formspree ID
```html
<!-- Line 287 in index.html -->
<form action="https://formspree.io/f/YOUR_NEW_ID" method="POST">
```

### Adding New Sections
1. **Add HTML** to `index.html`
2. **Add CSS** to `styles.css`
3. **Add responsive styles** if needed
4. **Update navigation** if required

### Modifying Workshop Grid Layout
```css
/* In styles.css - Lines 820-870 */
.workshop-item:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
}
/* Adjust grid-column and grid-row for different layouts */
```

### Changing Section Backgrounds
```css
/* Alternating pattern: */
.about { background: #f8f9fa; }      /* Grey */
.workshop { background: white; }     /* White */
.gallery { background: #f8f9fa; }    /* Grey */
.pricing { background: white; }      /* White */
.youtube { background: #f8f9fa; }    /* Grey */
.contact { background: #f8f9fa; }    /* Grey */
```

## Troubleshooting

### Images Not Loading
1. **Check file paths** in HTML/JS
2. **Verify image files** exist in correct directories
3. **Check browser console** for 404 errors
4. **Ensure proper file permissions**

### Contact Form Not Working
1. **Verify Formspree ID** is correct
2. **Check browser console** for JavaScript errors
3. **Test form submission** in browser
4. **Check Formspree dashboard** for submissions

### Modal Not Working
1. **Check gallery-loader.js** for errors
2. **Verify image paths** in allImages array
3. **Test keyboard navigation** (arrow keys, escape)
4. **Check CSS** for modal overlay styles

### Responsive Issues
1. **Test on different screen sizes**
2. **Check CSS media queries**
3. **Verify viewport meta tag**
4. **Test touch interactions** on mobile

## Deployment

### File Requirements
- All HTML, CSS, JS files
- Images directory with all assets
- robots.txt and sitemap.xml
- Formspree integration working

### Recommended Hosting
- **Netlify** (recommended)
- **GitHub Pages**
- **Vercel**
- Any static hosting service

### Post-Deployment
1. **Submit sitemap** to Google Search Console
2. **Test contact form** functionality
3. **Verify all images** load correctly
4. **Test responsive design** on multiple devices
5. **Check SEO meta tags** with testing tools

## Maintenance

### Regular Tasks
- **Update guitar gallery** with new builds
- **Add workshop photos** for process documentation
- **Monitor contact form** submissions
- **Check analytics** (if added)
- **Update pricing** if needed

### Backup Strategy
- **Version control** with Git
- **Regular backups** of image assets
- **Document changes** in commit messages
- **Test changes** before deployment

## Customization Notes

### Branding
- **Logo**: Replace `images/logo.png`
- **Watermark**: Replace `images/micks-guitars-headstock-logo-png.png`
- **Colors**: Update CSS custom properties
- **Fonts**: Modify Google Fonts imports

### Content Strategy
- **Keep images high quality** but optimized for web
- **Update gallery regularly** with new builds
- **Maintain consistent** image aspect ratios
- **Use descriptive alt text** for accessibility

### Performance Tips
- **Optimize images** before uploading
- **Use WebP format** when possible
- **Minimize CSS/JS** file sizes
- **Enable compression** on hosting

This guide should provide comprehensive information for managing and customizing the Mick's Guitars website. Always test changes thoroughly before deploying to production. 