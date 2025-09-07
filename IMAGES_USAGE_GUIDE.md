# Image Usage Guide for Your Rehabilitation Office Website

## Folder Structure Created

Your project now has the following image organization in the `public/images/` directory:

```
public/
├── icons/                 # Logos, favicons, and icons
└── images/
    ├── hero/              # Main banner/hero section images
    ├── services/          # Service-related images
    ├── team/              # Staff and team member photos
    ├── testimonials/      # Client photos or related imagery
    ├── gallery/           # Facility, equipment, treatment photos
    ├── blog/              # Blog post images
    └── contact/           # Contact section images
```

## How to Use Images in Your Components

### 1. Using Next.js Image Component (Recommended)

```tsx
import Image from 'next/image'

// Example for HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="relative">
      <Image
        src="/images/hero/main-banner.jpg"
        alt="Modern rehabilitation facility"
        width={1920}
        height={1080}
        priority // Use for above-the-fold images
        className="w-full h-screen object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40">
        {/* Your content here */}
      </div>
    </section>
  )
}
```

### 2. Team Member Photos

```tsx
// Example for AboutTeamSection.tsx
import Image from 'next/image'

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Physical Therapist",
    image: "/images/team/dr-sarah-johnson.jpg"
  },
  // ... more team members
]

export default function AboutTeamSection() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

### 3. Gallery Section

```tsx
// Example for GallerySection.tsx
import Image from 'next/image'

const galleryImages = [
  "/images/gallery/treatment-room-1.jpg",
  "/images/gallery/exercise-equipment.jpg",
  "/images/gallery/reception-area.jpg",
  "/images/gallery/therapy-session.jpg",
  // ... more images
]

export default function GallerySection() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((src, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover rounded-lg hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
```

### 4. Service Icons and Images

```tsx
// Example for ServicesSection.tsx
import Image from 'next/image'

const services = [
  {
    title: "Physical Therapy",
    description: "Comprehensive rehabilitation programs",
    icon: "/icons/physical-therapy.svg",
    image: "/images/services/physical-therapy.jpg"
  },
  // ... more services
]

export default function ServicesSection() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <Image
                src={service.icon}
                alt=""
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

## Best Practices

1. **Always use the Next.js Image component** for better performance and optimization
2. **Provide meaningful alt text** for accessibility
3. **Use `priority` prop** for above-the-fold images (like hero banners)
4. **Optimize your images** before uploading (use tools like TinyPNG or Squoosh)
5. **Use appropriate file formats**:
   - WebP/AVIF for photos (best compression)
   - PNG for images with transparency
   - SVG for icons and simple graphics
   - JPEG for photos when WebP isn't supported

## Image Optimization Tips

- **Hero images**: 1920x1080px or 1920x1200px, under 300KB
- **Team photos**: 400x400px or 500x500px, under 100KB
- **Gallery images**: 800x600px or 1024x768px, under 200KB
- **Service images**: 600x400px, under 150KB
- **Blog images**: 800x450px, under 200KB

## Vercel Deployment

Your project is now ready for Vercel deployment! The image optimization is configured in `next.config.js` and will work automatically on Vercel.

To deploy:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with optimized image handling

