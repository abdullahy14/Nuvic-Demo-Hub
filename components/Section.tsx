import { ReactNode } from 'react';

type SectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
  id?: string;
};

export default function Section({ title, description, children, id }: SectionProps) {
  return (
    <section id={id} className="space-y-5">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        {description ? <p className="max-w-3xl text-sm text-textMuted md:text-base">{description}</p> : null}
      </header>
      {children}
    </section>
  );
}
