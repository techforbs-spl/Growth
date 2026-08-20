export function LogoMark({
  size = 30,
  shellColor = "#202020",
}: {
  size?: number;
  shellColor?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      {/* Geometric octagonal "G" ring, open on the right */}
      <path
        d="M 20,4 H 44 L 60,20 V 24 H 48 L 40,16 H 24 L 16,24 V 40 L 24,48 H 40 L 48,40 H 60 V 44 L 44,60 H 20 L 4,44 V 20 Z"
        fill={shellColor}
      />
      {/* Upward-right arrow wedge sitting in the gap with balanced spacing */}
      <path
        d="M 50,38 H 58 V 26 Z"
        fill="#708238"
      />
    </svg>
  );
}

