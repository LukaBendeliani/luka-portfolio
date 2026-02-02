import Projects from '@/components/brutalist/Projects';
import Footer from '@/components/brutalist/Footer';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <Link 
          href="/" 
          className="text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
        >
          ← Return to Dashboard
        </Link>
      </div>
      <Projects />
      <Footer />
    </main>
  );
}
