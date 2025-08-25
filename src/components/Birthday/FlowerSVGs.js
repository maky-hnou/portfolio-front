export const WhiteTulip = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stem */}
    <path 
      d="M50 65 L50 85" 
      stroke="#22c55e" 
      strokeWidth="3" 
      strokeLinecap="round"
    />
    
    {/* Leaf */}
    <path 
      d="M45 75 Q35 70 40 65 Q45 70 45 75" 
      fill="#22c55e"
    />
    
    {/* Tulip petals */}
    <g>
      {/* Center petal */}
      <path 
        d="M50 25 Q45 15 40 25 Q45 35 50 30 Q55 35 60 25 Q55 15 50 25" 
        fill="#f8fafc" 
        stroke="#e2e8f0" 
        strokeWidth="1"
      />
      
      {/* Left petal */}
      <path 
        d="M40 25 Q30 20 35 35 Q45 40 50 30 Q45 20 40 25" 
        fill="#ffffff" 
        stroke="#e2e8f0" 
        strokeWidth="1"
      />
      
      {/* Right petal */}
      <path 
        d="M60 25 Q70 20 65 35 Q55 40 50 30 Q55 20 60 25" 
        fill="#ffffff" 
        stroke="#e2e8f0" 
        strokeWidth="1"
      />
      
      {/* Back petals for depth */}
      <path 
        d="M45 20 Q40 10 35 20 Q40 30 45 25 Q50 30 55 20 Q60 10 55 20" 
        fill="#f1f5f9" 
        stroke="#cbd5e1" 
        strokeWidth="1"
        opacity="0.8"
      />
    </g>
    
    {/* Inner details */}
    <circle cx="50" cy="28" r="2" fill="#fef3c7" opacity="0.6" />
    <circle cx="50" cy="28" r="1" fill="#f59e0b" opacity="0.8" />
  </svg>
);

export const RedRose = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stem */}
    <path 
      d="M50 65 L50 85" 
      stroke="#22c55e" 
      strokeWidth="3" 
      strokeLinecap="round"
    />
    
    {/* Thorns */}
    <path d="M47 70 L44 68" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M53 75 L56 73" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Leaves */}
    <path 
      d="M45 78 Q35 73 38 68 Q43 73 45 78" 
      fill="#22c55e"
    />
    <path 
      d="M55 72 Q65 67 62 62 Q57 67 55 72" 
      fill="#16a34a"
    />
    
    {/* Rose petals - layered for realistic look */}
    <g>
      {/* Outer petals */}
      <path 
        d="M50 35 Q30 25 25 45 Q35 55 50 45 Q65 55 75 45 Q70 25 50 35" 
        fill="#dc2626" 
        opacity="0.9"
      />
      
      {/* Middle layer petals */}
      <path 
        d="M50 30 Q35 25 32 40 Q42 48 50 42 Q58 48 68 40 Q65 25 50 30" 
        fill="#ef4444"
      />
      
      {/* Inner petals */}
      <path 
        d="M50 28 Q40 23 38 35 Q45 42 50 38 Q55 42 62 35 Q60 23 50 28" 
        fill="#f87171"
      />
      
      {/* Center petals */}
      <path 
        d="M50 25 Q45 20 43 30 Q48 35 50 32 Q52 35 57 30 Q55 20 50 25" 
        fill="#fca5a5"
      />
      
      {/* Very center */}
      <circle cx="50" cy="30" r="3" fill="#dc2626" />
      <circle cx="50" cy="30" r="1.5" fill="#7f1d1d" />
    </g>
    
    {/* Rose highlights */}
    <path 
      d="M45 28 Q40 25 42 32" 
      stroke="#fca5a5" 
      strokeWidth="1" 
      fill="none" 
      opacity="0.7"
    />
    <path 
      d="M55 26 Q60 23 58 30" 
      stroke="#fca5a5" 
      strokeWidth="1" 
      fill="none" 
      opacity="0.7"
    />
  </svg>
);