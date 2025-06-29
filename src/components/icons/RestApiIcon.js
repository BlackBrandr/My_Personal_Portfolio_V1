export default function RestApiIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="3" rx="1.5" fill="#4CAF50"/>
      <rect x="2" y="10.5" width="20" height="3" rx="1.5" fill="#2196F3"/>
      <rect x="2" y="17" width="20" height="3" rx="1.5" fill="#FF9800"/>
      
      <circle cx="5" cy="5.5" r="0.8" fill="#fff"/>
      <circle cx="5" cy="12" r="0.8" fill="#fff"/>
      <circle cx="5" cy="18.5" r="0.8" fill="#fff"/>
      
      <text x="8" y="6.2" fontSize="3.5" fill="#fff" fontFamily="monospace" fontWeight="bold">GET</text>
      <text x="8" y="12.7" fontSize="3.5" fill="#fff" fontFamily="monospace" fontWeight="bold">POST</text>
      <text x="8" y="19.2" fontSize="3.5" fill="#fff" fontFamily="monospace" fontWeight="bold">PUT</text>
    </svg>
  )
}