# Mick's Guitars - Custom Guitar Building Website

A beautiful, responsive website for your guitar building business. Built with modern HTML, CSS, and JavaScript, featuring smooth animations, mobile-first design, and professional aesthetics.

## 🎸 Features

- **Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **SEO Optimized**: Semantic HTML structure for better search engine visibility
- **Fast Loading**: Optimized code for quick page loads
- **Accessibility**: Keyboard navigation and screen reader friendly

## 📁 File Structure

```
micks-guitars-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Quick Start

1. **Open the website**: Simply open `index.html` in your web browser
2. **Local server** (recommended): Use a local server for the best experience:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **View the website**: Navigate to `http://localhost:8000` in your browser

## 🎨 Customization Guide

### Colors
The website uses a warm brown color scheme. To change colors, edit these CSS variables in `styles.css`:

```css
/* Primary brand color */
--primary-color: #8B4513;  /* Saddle Brown */
--secondary-color: #A0522D; /* Sienna */
```

### Content Updates

#### 1. Business Information
Update the following in `index.html`:
- **Business name**: Change "Mick's Guitars" throughout the file
- **Contact information**: Update phone, email, and address in the contact section
- **About section**: Modify the story and statistics
- **Services**: Update service descriptions and offerings

#### 2. Guitar Portfolio
In the guitars section, you can:
- Add more guitar cards by copying the existing structure
- Update guitar descriptions and specifications
- Replace guitar icons with actual images (see image section below)

#### 3. Images
To add real images:
1. Create an `images/` folder in your website directory
2. Add your guitar photos, workshop images, etc.
3. Replace the Font Awesome icons with `<img>` tags:

```html
<!-- Replace this: -->
<div class="guitar-image">
    <i class="fas fa-guitar"></i>
</div>

<!-- With this: -->
<div class="guitar-image">
    <img src="images/your-guitar-photo.jpg" alt="Custom Acoustic Guitar">
</div>
```

#### 4. Social Media Links
Update the social media links in the footer:
```html
<div class="social-links">
    <a href="https://facebook.com/yourpage"><i class="fab fa-facebook"></i></a>
    <a href="https://instagram.com/yourpage"><i class="fab fa-instagram"></i></a>
    <a href="https://youtube.com/yourchannel"><i class="fab fa-youtube"></i></a>
</div>
```

### Fonts
The website uses Google Fonts:
- **Playfair Display**: For headings (elegant serif font)
- **Inter**: For body text (clean sans-serif font)

To change fonts, update the Google Fonts link in the HTML head and modify the font-family properties in CSS.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Advanced Customization

### Adding New Sections
To add a new section, follow this structure:

```html
<section id="new-section" class="new-section">
    <div class="container">
        <div class="section-header">
            <h2>Section Title</h2>
            <p>Section description</p>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

### Custom CSS Classes
The website includes several utility classes:
- `.btn` - Button styling
- `.container` - Content wrapper
- `.section-header` - Section title styling

### JavaScript Features
The website includes:
- Mobile navigation toggle
- Smooth scrolling
- Form validation
- Notification system
- Intersection Observer animations
- Parallax effects

## 🌐 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload your website files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your website folder to [Netlify](https://netlify.com)
2. Your site will be deployed instantly
3. You'll get a custom URL and can add a custom domain

### Traditional Web Hosting
1. Upload all files to your web hosting provider
2. Ensure `index.html` is in the root directory
3. Your site will be accessible at your domain

## 📧 Contact Form Setup

The contact form currently shows a success message but doesn't actually send emails. To make it functional:

### Option 1: Formspree (Easiest)
1. Go to [Formspree.io](https://formspree.io)
2. Create an account and get your form endpoint
3. Update the form action in `index.html`:
```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Netlify Forms
If using Netlify, add `netlify` attribute to the form:
```html
<form id="contactForm" netlify>
```

### Option 3: Custom Backend
Modify the JavaScript in `script.js` to send data to your own server.

## 🔍 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Fast loading times

To improve SEO further:
1. Add meta description and keywords
2. Create a `sitemap.xml`
3. Add Google Analytics
4. Optimize images for web
5. Add structured data markup

## 🛠️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## 📄 License

This website template is free to use for your guitar building business. Feel free to modify and customize as needed.

## 🤝 Support

If you need help customizing the website or have questions, feel free to reach out!

---

**Built with ❤️ for guitar builders everywhere** 