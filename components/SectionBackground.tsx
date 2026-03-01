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
  opacity = 25,
}: SectionBackgroundProps) {
  // Append Cloudinary transforms for optimization
  const optimizedUrl = imageUrl.replace(
    "/upload/",
    "/upload/w_1920,q_auto,f_auto/",
  );
  const visibleOpacity = Math.min(100, Math.max(opacity, 22));

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <img
        src={optimizedUrl}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover ${position}`}
        style={{ opacity: visibleOpacity / 100 }}
        loading="eager"
      />
      <div
        className={
          overlayClassName ??
          "absolute inset-0 bg-gradient-to-b from-background/55 via-background/65 to-background/60"
        }
      />
    </div>
  );
}
