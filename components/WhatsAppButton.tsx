import { whatsappLink, type Modelo } from "@/lib/site";

export default function WhatsAppButton({
  children = "Comprar por WhatsApp",
  variant = "solid",
  modelo,
  className = "",
}: {
  children?: React.ReactNode;
  variant?: "solid" | "outline";
  modelo?: Modelo | string;
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2.5 font-grotesk text-[13px] tracking-[0.14em] uppercase px-7 py-3.5 rounded-full transition-colors duration-300";
  const styles =
    variant === "solid"
      ? "bg-forest text-cream hover:bg-olive"
      : "border border-olive/50 text-forest hover:bg-forest hover:text-cream";

  return (
    <a
      href={whatsappLink(modelo)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.47 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.07 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.4.24-.7.24-1.28.17-1.4-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.56.93.95-3.47-.22-.36a9.45 9.45 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.47-9.48 9.47Zm8.06-17.53A11.36 11.36 0 0 0 12.05.63C5.8.63.72 5.7.72 11.95c0 2 .52 3.95 1.52 5.67L.63 23.37l5.9-1.55a11.32 11.32 0 0 0 5.42 1.38h.01c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.32-8.01Z" />
      </svg>
      {children}
    </a>
  );
}
