import Image from 'next/image';
import Link from 'next/link';
import Gallery from '@/components/Gallery';
import Section from '@/components/Section';
import StepCard from '@/components/StepCard';

const bannerImage =
  'https://imgproxy.gamma.app/resize/quality%3A80/resizing_type%3Afit/width%3A2000/https%3A//cdn.gamma.app/xw2tgw0mnr1o7mv/generated-images/0qxe6m9KK-0Uqi4rZ8grO.png';

export default function NuvicHubDemoMapPage() {
  const year = new Date().getFullYear();

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10 md:gap-14 md:px-8 md:py-14">
      <section className="surface-card space-y-4 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-textMuted">Nuvic Hub</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Nuvic Hub — Demo Map</h1>
        <p className="text-base text-textMuted md:text-lg">Free trial docs + a preview of the full Nuvic system.</p>
        <p className="text-base text-white/90 md:text-lg">
          Explore the Nuvic Demo — Create your first AI output in under 3 minutes.
        </p>
        <h2 className="pt-2 text-2xl font-semibold md:text-3xl">Nuvic System Workflow Map</h2>
      </section>

      <Section title="Nuvic System Workflow Map">
        <div className="grid gap-4 lg:grid-cols-2">
          <StepCard step={1} title="Welcome to the Nuvic Seed Prompt Free Trial" status="File upload" />
          <StepCard step={2} title="30 Curated AI Prompts + Guides to Unlock 2,500+ Ideas (PDF)" status="Locked" />
          <StepCard step={3} title="Platform Mapping Guide" status="Locked" />
          <StepCard step={4} title="Output Optimization Guide" status="Locked" />
          <StepCard step={5} title="Commercial Consistency & Reuse Guide" status="Locked" />
          <StepCard
            step={6}
            title="Case Study: Social Media Posts with Hyper-Realistic AI Images (Before / After)"
            status="Locked"
          />
          <StepCard step={7} title="Vision & Strategy Documents" status="Locked" />
        </div>
      </Section>

      <section className="surface-card space-y-2 p-6 md:p-8">
        <h2 className="text-2xl font-semibold">Example Prompt</h2>
        <p className="text-textMuted">Where subject = Cat</p>
        <p className="text-textMuted">Used AI Model is Sora by Chat GPT</p>
      </section>

      <Section title="What You Get in the Demo">
        <ul className="surface-card space-y-3 p-6 text-textMuted">
          <li>1) 2 free documents to test the system</li>
          <li>2) A mini visual library of example outputs</li>
          <li>3) A preview of what’s inside the full OS</li>
        </ul>
      </Section>

      <Section
        title="Start Here (Required)"
        description="This is your entry point to the Nuvic Hub, designed to provide immediate context and an initial experience without overwhelming you."
      >
        <div className="surface-card space-y-4 p-6">
          <h3 className="text-xl font-semibold">AI Prompt Pack Demo</h3>
          <p className="text-textMuted">Why this exists: Lets you experience the prompts before exploring deeper.</p>
          <StepCard step={1} title="Welcome to the Nuvic Seed Prompt Free Trial" status="File upload" compact />
        </div>
      </Section>

      <Section
        title="Core Engine (Use When You Want Output)"
        description="This is the central asset of the Nuvic Hub, the source of raw creative generation that all other documents support."
      >
        <div className="space-y-4">
          <div className="surface-card overflow-hidden p-1">
            <Image
              src={bannerImage}
              alt="Nuvic core engine preview"
              width={2000}
              height={900}
              className="h-56 w-full rounded-2xl object-cover md:h-72"
            />
          </div>
          <StepCard
            step={2}
            title="30 Curated AI Prompts + Guides to Unlock 2,500+ Ideas (PDF)"
            reason="Why this exists: This is the source of raw creative generation."
            status="Locked"
          />
        </div>
      </Section>

      <Section
        title="Guides & Playbooks (Use When You’re Stuck or Scaling)"
        description="These documents are thinking tools designed to support your process when you encounter challenges or aim for broader application."
      >
        <div className="space-y-4">
          <StepCard
            step={1}
            title="Platform Mapping Guide"
            reason="Why this exists: Use this when you don’t know where to publish."
            status="Locked"
          />
          <StepCard
            step={2}
            title="Output Optimization Guide"
            reason="Why this exists: Use this when outputs feel weak."
            status="Locked"
          />
          <StepCard
            step={3}
            title="Commercial Consistency & Reuse Guide"
            reason="Why this exists: Use this when you want consistency or reuse."
            status="Locked"
          />
        </div>
      </Section>

      <Section
        title="Proof & Context (Optional Reading)"
        description="These optional readings provide validation and deeper context, building your confidence in the Nuvic system's impact and credibility."
      >
        <div className="space-y-4">
          <StepCard
            step={1}
            title="Vision & Strategy Documents"
            reason="Why this exists: Provides an overview of Nuvic's long-term direction and goals."
            status="Locked"
          />
          <StepCard
            step={2}
            title="Case Study: Social Media Posts with Hyper-Realistic AI Images (Before / After)"
            reason="Why this exists: Use this to understand impact and credibility."
            status="Locked"
          />
          <p className="surface-card p-6 text-textMuted">
            Remember, the purpose of this map is to guide your learning and understanding, not to dictate a linear
            process. Explore as needed to achieve your goals.
          </p>
        </div>
      </Section>

      <Section title="Nuvic Library">
        <div className="space-y-4">
          <Link href="#" className="inline-block text-sm font-medium text-primary underline underline-offset-4">
            View Visual Reference Library
          </Link>
          <p className="max-w-4xl text-textMuted">
            This section showcases a selection of sample images generated using the AI prompts integrated into the
            Nuvic system. These examples are designed to illustrate the diverse range and exceptional quality of visual
            outputs achievable, demonstrating the power and versatility of Nuvic&apos;s AI capabilities.
          </p>
          <Gallery />
        </div>
      </Section>

      <section className="surface-card space-y-5 p-7 md:p-9">
        <h2 className="text-3xl font-semibold">Unlock the Full Nuvic System</h2>
        <div className="space-y-2 text-textMuted">
          <p>“From one prompt → a reusable product line”</p>
          <p>“From one image → multiple platform-ready assets”</p>
          <p>“From random posting → a consistent system”</p>
        </div>
        <Link
          href="https://gamma.app"
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-xl bg-primary px-5 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#5f7df0]"
        >
          Unlock Full System
        </Link>
      </section>

      <footer className="border-t border-white/10 py-8 text-sm text-textMuted">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {year} Nuvic</p>
          <nav aria-label="Footer" className="flex items-center gap-5">
            <Link href="#" className="hover:text-white">
              Home
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
