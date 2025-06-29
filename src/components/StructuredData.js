export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Your Name",
    "url": "https://yourwebsite.com",
    "image": "https://yourwebsite.com/profile-image.jpg",
    "jobTitle": "Software & Product Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Experienced software & product developer specializing in React, Next.js, and full-stack development.",
    "knowsAbout": [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Web Development",
      "Full Stack Development",
      "Software Engineering"
    ],
    "sameAs": [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
      "https://twitter.com/yourusername"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "your.email@example.com",
      "contactType": "professional"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}