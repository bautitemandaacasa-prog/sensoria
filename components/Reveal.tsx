import type { ReactNode } from "react";

/**
 * Entrada suave por CSS. El contenido SIEMPRE queda visible:
 * si la animación no corre (JS pausado, reduce-motion), se ve igual.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
