// Ramita de hojas — motivo botánico de la marca (línea fina)
export default function Leaf({
  size = 44,
  className = "",
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M32 58V20" />
      <path d="M32 34c0-8 6-14 14-15 0 8-5 15-14 15Z" />
      <path d="M32 28c0-7-6-12-13-13 0 7 4 13 13 13Z" />
      <path d="M32 20c0-5 3-9 8-10 0 5-3 10-8 10Z" />
    </svg>
  );
}
