# RehabCare - Professional Rehabilitation Services Website

A modern, responsive landing page for a rehabilitation office built with Next.js 14, React, and Tailwind CSS.

## 🌟 Features

### Design & User Experience
- **Modern, Clean Design**: Bright color palette with blue accents and plenty of whitespace
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Professional Healthcare Aesthetic**: Trust-building design elements
- **Smooth Animations**: Subtle hover effects and transitions
- **Accessibility**: WCAG compliant with proper semantic HTML

### Sections Included

1. **Hero Section**
   - Office name and tagline: "Restoring mobility and comfort of life"
   - Background image of rehabilitation clinic
   - Clear Call-to-Action: "Book an Appointment"
   - Trust indicators with statistics

2. **Services Section**
   - Grid layout with icons and descriptions
   - Physiotherapy, Orthopedic Rehab, Post-Surgery Recovery
   - Neurological Therapy, Therapeutic Massage
   - Interactive service cards with hover effects

3. **Why Choose Us**
   - Experienced team highlights
   - Individual approach emphasis
   - Modern equipment showcase
   - Certifications and insurance information

4. **About Us / Team**
   - Professional profile cards with photos
   - Therapist qualifications and specialties
   - Contact information for each team member
   - Years of experience and certifications

5. **Patient Testimonials**
   - Star ratings and patient quotes
   - Real patient photos and stories
   - Overall rating statistics
   - Trust-building social proof

6. **Gallery**
   - Interactive photo gallery with lightbox
   - Clinic interior and equipment photos
   - Category filtering system
   - Facility features showcase

7. **Pricing**
   - Transparent pricing structure
   - Insurance provider information
   - Package deals and discounts
   - Contact options for custom quotes

8. **Blog / Health Tips**
   - Search functionality for videos and articles
   - Category filtering system
   - YouTube video integration
   - Newsletter signup

9. **Location / Map**
   - Embedded Google Maps
   - Detailed address and directions
   - Office hours and contact information
   - Parking and accessibility details

10. **Contact Section**
    - Interactive contact form
    - Multiple contact methods
    - Quick action buttons
    - Form validation and success states

11. **Footer**
    - Complete contact information
    - Social media links
    - Legal links (Privacy Policy, GDPR)
    - Newsletter signup
    - Back-to-top functionality

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd rehabilitation-office-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Maps**: Google Maps Embed API
- **Video**: YouTube Embed API

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px+ (Full layout with all features)
- **Tablet**: 768px - 1199px (Adapted grid layouts)
- **Mobile**: 320px - 767px (Stacked layouts, mobile-first approach)

## 🎨 Design System

### Color Palette
- **Primary Blue**: #3B82F6 (Trust, professionalism)
- **Light Blue**: #EFF6FF (Backgrounds, accents)
- **Dark Blue**: #1E40AF (Hover states, emphasis)
- **Gray Scale**: #F9FAFB to #1F2937 (Text, backgrounds)
- **White**: #FFFFFF (Clean backgrounds)

### Typography
- **Headings**: Inter Bold (32px - 72px)
- **Body Text**: Inter Regular (16px - 20px)
- **Small Text**: Inter Medium (14px)

### Components
- **Buttons**: Rounded corners, hover animations
- **Cards**: Soft shadows, hover lift effects
- **Forms**: Clean inputs with focus states
- **Navigation**: Smooth scroll behavior

## 🔧 Customization

### Content Updates
1. **Text Content**: Update text directly in component files
2. **Images**: Replace image URLs in components (currently using Unsplash)
3. **Contact Info**: Update phone, email, address in multiple components
4. **Team Members**: Modify team data in `AboutTeamSection.tsx`
5. **Services**: Update services array in `ServicesSection.tsx`

### Styling Changes
1. **Colors**: Modify Tailwind config in `tailwind.config.js`
2. **Fonts**: Update font imports in `layout.tsx`
3. **Spacing**: Adjust section padding in `globals.css`
4. **Animations**: Customize transitions in component files

### Functionality
1. **Contact Form**: Implement backend integration in `ContactSection.tsx`
2. **Newsletter**: Add email service integration
3. **Booking System**: Integrate with appointment scheduling API
4. **Blog**: Connect to CMS or blog platform
5. **Maps**: Update Google Maps embed URL with actual location

## 📋 SEO Optimization

- **Meta Tags**: Configured in `layout.tsx`
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Text**: All images include descriptive alt attributes
- **Schema Markup**: Ready for healthcare business schema
- **Performance**: Optimized images and lazy loading
- **Mobile-First**: Responsive design for better mobile rankings

## 🔒 Security & Privacy

- **Form Validation**: Client-side and server-side validation ready
- **GDPR Compliance**: Privacy policy and consent mechanisms
- **Secure Contact**: Email and phone obfuscation options
- **Content Security**: XSS protection through React

## 📞 Support & Maintenance

### Regular Updates Needed
- **Content**: Keep team info, services, and pricing current
- **Images**: Update facility photos regularly
- **Testimonials**: Add new patient reviews
- **Blog**: Regular health tips and exercise content
- **Contact Info**: Verify all contact details quarterly

### Performance Monitoring
- **Page Speed**: Monitor with Google PageSpeed Insights
- **Accessibility**: Regular WAVE and axe testing
- **Mobile Usability**: Google Mobile-Friendly Test
- **SEO**: Google Search Console monitoring

## 📄 License

This project is created for rehabilitation office use. Customize and deploy as needed for your healthcare practice.

## 🤝 Contributing

To improve this website:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ for better healthcare accessibility**
