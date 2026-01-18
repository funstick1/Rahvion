import Link from "next/link";
import { ShieldCheck, Wifi, ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-white">
            <nav className="w-full border-b border-slate-200 py-4">
                <div className="container mx-auto flex justify-between px-6 items-center">
                    <div className="text-2xl font-bold text-slate-900">Rahvion</div>
                    <Link href="/booking" className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700">
                        Book Repair
                    </Link>
                </div>
            </nav>
            <section className="py-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                    IT Support for <span className="text-blue-600">Your Home.</span>
                </h1>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                    We fix WiFi, remove viruses, and speed up computers in Bel Air & Abingdon.
                </p>
                <Link href="/booking" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800">
                    Get Help Now <ArrowRight size={20} />
                </Link>
            </section>
        </main>
    );
}
