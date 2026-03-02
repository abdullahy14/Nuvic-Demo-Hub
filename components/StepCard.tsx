import Link from 'next/link';

type StepCardProps = {
  step: number;
  title: string;
  status: 'File upload' | 'Locked';
  reason?: string;
  compact?: boolean;
};

export default function StepCard({ step, title, status, reason, compact = false }: StepCardProps) {
  const isLocked = status === 'Locked';

  return (
    <article
      aria-label={`Step ${step}: ${title}`}
      className={`surface-card ${compact ? 'p-4' : 'p-5 md:p-6'} ${isLocked ? 'opacity-95' : ''} surface-card-hover`}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/20 text-sm font-semibold">
            {step}
          </span>
          <div className="space-y-1">
            <h3 className="text-base font-semibold md:text-lg">{title}</h3>
            {reason ? <p className="text-sm text-textMuted">{reason}</p> : null}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:justify-end">
          <span
            className={`status-pill ${
              isLocked
                ? 'border-amber-200/30 bg-amber-300/10 text-amber-200'
                : 'border-emerald-200/30 bg-emerald-300/10 text-emerald-200'
            }`}
          >
            {isLocked ? '🔒 Locked' : 'File upload'}
          </span>

          {isLocked ? (
            <Link
              href="https://whop.com/nuvic-arts-hub/"
              target="_blank"
              rel="noreferrer"
              aria-label="Unlock Full System"
              className="rounded-xl border border-primary/60 bg-primary px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#5f7df0]"
            >
              Unlock Full System
            </Link>
          ) : (
            <button
              type="button"
              aria-label="Download or upload"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Download / Upload
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
