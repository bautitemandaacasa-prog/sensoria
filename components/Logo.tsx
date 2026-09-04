"use client";

// ─────────────────────────────────────────────────────────────
//  LOGO DE SENSORIA
//
//  El ícono sale de:  public/images/logo.png
//  Si ese archivo no está, se muestra un placeholder 🌿 hasta
//  que lo agregues. No hay que tocar código.
// ─────────────────────────────────────────────────────────────

import { useEffect, useState } from "react";

const LOGO_SRC = "/images/logo.png";

type Props = {
  /** alto del ícono en px */
  size?: number;
  /** "light" para fondos oscuros */
  tone?: "dark" | "light";
  /** mostrar la palabra "Sensoria" al lado del ícono */
  withText?: boolean;
  className?: string;
};

export default function Logo({
  size = 40,
  tone = "dark",
  withText = true,
  className = "",
}: Props) {
  const [status, setStatus] = useState<"checking" | "ok" | "fail">("checking");
  const isLight = tone === "light";
  const textColor = isLight ? "#EFEAE0" : "#3B4A2E";

  useEffect(() => {
    const img = new Image();
    img.onload = () => setStatus(img.naturalWidth > 0 ? "ok" : "fail");
    img.onerror = () => setStatus("fail");
    img.src = LOGO_SRC;
  }, []);

  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: size * 0.26,
        height: size,
      }}
    >
      {status === "ok" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={LOGO_SRC}
          alt="Sensoria"
          style={{ height: size, width: "auto", display: "block" }}
        />
      ) : (
        <span
          aria-hidden={status === "checking"}
          style={{
            height: size,
            width: size,
            borderRadius: "50%",
            border: `1.5px dashed ${isLight ? "rgba(239,234,224,.7)" : "#7C8A5B"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: size * 0.42,
          }}
        >
          🌿
        </span>
      )}

      {withText && (
        <span
          className="font-display"
          style={{
            fontSize: Math.min(size * 0.6, 30),
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: textColor,
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          Sensoria
        </span>
      )}
    </span>
  );
}
