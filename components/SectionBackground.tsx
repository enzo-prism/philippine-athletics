"use client";

interface SectionBackgroundProps {
  imageUrl: string;
  overlayClassName?: string;
  className?: string;
  position?: string;
  opacity?: number;
}

export function SectionBackground({
  imageUrl,
  overlayClassName,
  className = "",
  position = "object-center",
  opacity = 15,
}: SectionBackgroundProps) {
  // Append Cloudinary transforms for optimization
  const optimizedUrl = imageUrl.replace(
    "/upload/",
    "/upload/w_1920,q_auto,f_auto/",
  );

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <img
        src={optimizedUrl}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover ${position}`}
        style={{ opacity: opacity / 100 }}
        loading="eager"
      />
      <div
        className={
          overlayClassName ??
          "absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"
        }
      />
    </div>
  );
}
