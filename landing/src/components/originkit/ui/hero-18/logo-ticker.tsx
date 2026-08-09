// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

/** Public asset under /sections/hero-18/assets */
function asset(file: string) {
  return `/originkit/hero-18/${file}`;
}

const logos = [
  { name: "Logiqo", src: asset("logos/logiqo.svg") },
  { name: "Nexora", src: asset("logos/nexora.svg") },
  { name: "Brandly", src: asset("logos/brandly.svg") },
  { name: "Markivo", src: asset("logos/markivo.svg") },
  { name: "Typely", src: asset("logos/typely.svg") },
  { name: "Framex", src: asset("logos/framex.svg") },
  { name: "Webora", src: asset("logos/webora.svg") },
  { name: "Designo", src: asset("logos/designo.svg") },
  { name: "Formix", src: asset("logos/formix.svg") },
];

export default function LogoTicker({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden h18-logo-fade ${className}`}>
      <div className="flex h-full w-max items-center h18-logo-track">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={`${logo.name}-${i}`}
            alt={logo.name}
            src={logo.src}
            className="h-full w-auto shrink-0 opacity-70"
          />
        ))}
      </div>
    </div>
  );
}
