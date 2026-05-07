export function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.2_0.05_280/0.4),transparent_60%)]" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[oklch(0.4_0.2_280)] opacity-[0.08] blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-[oklch(0.5_0.2_240)] opacity-[0.07] blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-[oklch(0.6_0.15_320)] opacity-[0.06] blur-3xl animate-blob" style={{ animationDelay: "-12s" }} />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
