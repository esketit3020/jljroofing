import type { CSSProperties } from "react";

// Reuse the approved artwork without baking website text into the interface.
// Each viewport selects a photographic region of the original reference.
const crops = {
  hero: [505, 55, 366, 396],
  restoration: [51, 548, 243, 137],
  repair: [315, 548, 243, 137],
  replacement: [578, 548, 242, 137],
  comparison: [0, 812, 513, 214],
  projectRestoration: [51, 1079, 243, 126],
  projectRepair: [315, 1079, 243, 126],
  projectReplacement: [578, 1079, 242, 126],
  melbourne: [0, 1394, 409, 261],
} as const;

export type PhotoName = keyof typeof crops;

export function Photo({ name, alt, className = "", priority = false }: { name: PhotoName; alt: string; className?: string; priority?: boolean }) {
  const [x, y, w, h] = crops[name];
  const style: CSSProperties = {
    width: `${871 / w * 100}%`,
    height: `${1805 / h * 100}%`,
    left: `${-x / w * 100}%`,
    top: `${-y / h * 100}%`,
  };
  return <div className={`photo photo-${name} ${className}`} role="img" aria-label={alt}>
    {/* A single cached source preserves the photographic details of the approved design. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/images/design-reference.png" alt="" aria-hidden="true" width={871} height={1805} style={style} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} />
  </div>;
}
