export function LogoMark({
  size = 30,
  shellColor = "#202020",
  arrowColor = "#708238",
}: {
  size?: number;
  shellColor?: string;
  arrowColor?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      {/* Rounded octagonal "G" shell */}
      <path
        d="M 20,4 H 44 Q 60,4 60,20 Q 60,24 48,24 Q 40,24 40,16 H 24 Q 16,16 16,24 V 40 Q 16,48 24,48 H 40 Q 40,40 48,40 Q 60,40 60,44 Q 60,60 44,60 H 20 Q 4,60 4,44 V 20 Q 4,4 20,4 Z"
        fill={shellColor}
      />
      {/* Rounded Triangle / Arrow sitting in the gap */}
      <path
        d="M 36,30 H 54 Q 58,30 58,34 V 52 Q 58,56 55,53 L 34,32 Q 32,30 36,30 Z"
        fill={arrowColor}
      />
    </svg>
  );
}

