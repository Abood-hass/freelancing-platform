import { Globe, Shield } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
    return (<footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                <div>
                    <h3 className="font-semibold mb-4">For Clients</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-green-400">How to Hire</Link></li>
                        <li><Link href="#" className="hover:text-green-400">Talent Marketplace</Link></li>
                        <li><Link href="#" className="hover:text-green-400">Project Catalog</Link></li>
                        <li><Link href="#" className="hover:text-green-400">Talent Scout</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">For Talent</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-green-400">How to Find Work</Link></li>
                        <li><Link href="#" className="hover:text-green-400">Direct Contracts</Link></li>
                        <li><Link href="#" className="hover:text-green-400">Find Freelance Jobs</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-green-400">Help & Support</Link></li>
                        <li><Link href="#" className="hover:text-green-400">Success Stories</Link></li>
                        <li><Link href="#" className="hover:text-green-400">Upwork Reviews</Link></li>
                        <li><Link href="#" className="hover:text-green-400">Resources</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-green-400">About Us</Link></li>
                        <li><Link href="#" className="hover:text-green-400">Leadership</Link></li>
                        <li><Link href="#" className="hover:text-green-400">Investor Relations</Link></li>
                        <li><Link href="#" className="hover:text-green-400">Careers</Link></li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between">
                <p className="text-sm">&copy; 2024 Freelancing® Global Inc.</p>
                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                    <Link href="#" className="text-gray-400 hover:text-white">
                        <Globe className="h-5 w-5" />
                        <span className="sr-only">Language</span>
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white">
                        <Shield className="h-5 w-5" />
                        <span className="sr-only">Privacy Policy</span>
                    </Link>
                </div>
                <span className="text-1xl py-5 text-green-600 dark:text-green-100 playwrite-gb-s-400-italic">Freelancing</span>
            </div>
        </div>
    </footer>);
}

export { Footer };