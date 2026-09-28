export function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 11">
      <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="0.5" d="M5.5 1v9M1 5.502h9" />
      <path fill="currentColor" d="m5.45 3.449 1.99 1.99-1.99 1.99-1.991-1.99z" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 9 11">
      <path fill="currentColor" d="m9 5.196-9 5.196V0z" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" strokeMiterlimit="10" d="m5.845 13.948 8.1-8.1M13.939 13.947l-8.1-8.1" />
    </svg>
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className="nav-wordmark argus-wordmark"
      aria-label="Argus Cements"
      style={{ fontSize: compact ? "0.95em" : "1.15em" }}
    >
      ARGUS
    </span>
  );
}

export function LiquidGlass() {
  return (
    <>
      <div className="liquid-glass__filter" />
      <div className="liquid-glass__overlay" />
      <div className="liquid-glass__specular" />
    </>
  );
}
