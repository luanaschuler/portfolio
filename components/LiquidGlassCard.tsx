export default function LiquidGlassCard() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 p-8">
      {/* 1. Animated Liquid Blobs (The "Engine") */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] animate-pulse rounded-full bg-purple-500/30 blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] h-[30%] w-[30%] animate-bounce duration-[10s] rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[20%] h-[50%] w-[50%] rounded-full bg-pink-500/20 blur-[130px]" />
      </div>

      {/* 2. The Card */}
      <div className="group relative h-64 w-96 overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl transition-all hover:border-white/40">
        {/* 3. The "Sheen" Highlight */}
        <div className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between text-white">
          <div className="flex justify-between items-start">
            <span className="text-xl font-semibold tracking-tight">
              Liquid Glass
            </span>
            <div className="h-8 w-12 rounded-md bg-white/20" />{" "}
            {/* Logo placeholder */}
          </div>

          <div>
            <p className="text-sm font-medium opacity-70">Balance</p>
            <p className="text-3xl font-bold">$12,450.00</p>
          </div>
        </div>

        {/* 4. Subtle Inner Glow (The Apple Edge) */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
      </div>
    </div>
  );
}
