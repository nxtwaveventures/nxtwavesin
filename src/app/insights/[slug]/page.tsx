import { BLOG_POSTS } from "@/data/blogs";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

interface PageProps {
    params: {
        slug: string;
    }
}

// NextJS 14/15 safe param extraction
export default function InsightPage({ params }: PageProps) {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#205081]/20">
            {/* Minimal Reading Navbar */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
                <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/#blogs" className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#205081] transition-colors font-bold uppercase tracking-wide">
                        <ArrowLeft className="w-4 h-4" /> Home
                    </Link>
                    <Link href="/">
                        <Logo className="w-8 h-8" />
                    </Link>
                </div>
            </nav>

            <main className="max-w-3xl mx-auto px-6 pt-40 pb-32">
                <article>
                    <header className="mb-14">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            <span className="text-xs font-bold tracking-widest text-[#205081] uppercase">
                                {post.category}
                            </span>
                            <span className="text-gray-300">•</span>
                            <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                                {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                            {post.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed mb-10 font-medium">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center gap-4 border-t border-b border-gray-100 py-6">
                            <div className="w-12 h-12 rounded-full bg-[#205081]/10 flex items-center justify-center text-[#205081] font-bold text-xl">
                                N
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">{post.author}</p>
                                <p className="text-sm text-slate-500 font-medium">{post.date}</p>
                            </div>
                        </div>
                    </header>

                    {/* Article Body Content */}
                    <div
                        className="prose prose-lg prose-slate max-w-none 
                                 prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                                 prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                                 prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:mb-8
                                 prose-a:text-[#205081] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                                 prose-li:text-slate-600 prose-li:leading-relaxed prose-ul:mb-8"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>

                <div className="mt-20 pt-10 border-t border-gray-200">
                    <div className="bg-[#f9fafb] p-10 rounded-sm border border-gray-200 text-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Need Elite AI Talent?</h3>
                        <p className="text-slate-600 mb-8 max-w-md mx-auto">Skip the generic job boards. Let our IIT engineers vet your next technical lead.</p>
                        <Link href="/#checkout" className="inline-block bg-[#205081] text-white px-8 py-3 rounded-sm font-bold hover:bg-[#1a416b] transition-colors shadow-sm">
                            Start Hiring
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
