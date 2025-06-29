export default function VueIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 1.61l-12 22.39L0 1.61h4.64L12 14.08 19.36 1.61z" fill="#4FC08D"/>
      <path d="M0 1.61l12 22.39L24 1.61h-4.64L12 14.08 4.64 1.61z" fill="#4FC08D"/>
      <path d="M4.64 1.61L12 14.08 19.36 1.61h-4.72L12 8.69 9.36 1.61z" fill="#35495E"/>
    </svg>
  )
}