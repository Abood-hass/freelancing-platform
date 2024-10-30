import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  Briefcase,
  Code,
  PenTool,
  BarChart,
  Headphones,
  Camera,
  FileText,
  DollarSign,
  Shield,
  Globe,
  Star,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="dark:bg-slate-950 bg-green-100 py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold dark:text-green-600 tracking-tight sm:text-5xl md:text-6xl">
                How work should work
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-green-100">
                Forget the old rules. You can have the best people. Right now. Right here.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto">Find Talent</Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto dark:text-green-600  dark:border-green-600">Find Work</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Browse talent by category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { icon: Code, label: "Development & IT" },
                { icon: PenTool, label: "Design & Creative" },
                { icon: BarChart, label: "Sales & Marketing" },
                { icon: FileText, label: "Writing & Translation" },
                { icon: Headphones, label: "Admin & Customer Support" },
                { icon: Camera, label: "Photography & Videography" },
                { icon: DollarSign, label: "Finance & Accounting" },
                { icon: Briefcase, label: "HR & Training" },
              ].map((category, index) => (
                <Link key={index} href="#" className="flex items-center p-4 dark:bg-slate-950 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <category.icon className="h-6 w-6 mr-3 text-green-600 dark:text-green-50 " />
                  <span className="font-medium dark:text-green-300 ">{category.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="dark:bg-slate-950 bg-green-100 py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-green-600">How it works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-green-600">Post a job</h3>
                <p className="text-gray-600 dark:text-green-100">Tell us about your project. Upwork connects you with top talent around the world, or near you.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-green-600">Choose talent</h3>
                <p className="text-gray-600 dark:text-green-100">Get qualified proposals within 24 hours. Compare bids, reviews, and prior work. Interview favorites and hire the best fit.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-green-600">Pay safely</h3>
                <p className="text-gray-600 dark:text-green-100">Use Upwork Payment Protection. Only pay for work you authorize.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Find talent your way</h2>
              <p className="text-xl text-gray-600 dark:text-green-100 mb-8">Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.</p>
              <form className="flex flex-col sm:flex-row gap-4">
                <Input className="flex-grow" placeholder="Try 'web development'" />
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section className="dark:bg-slate-950 bg-green-100 py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 dark:text-green-600">Upwork by the numbers</h2>
              <div className="grid sm:grid-cols-3 gap-8">
                <div>
                  <p className="text-4xl font-bold text-green-600">$2.3B+</p>
                  <p className="text-gray-600 dark:text-green-100">Earnings by freelancers in 2022</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-green-600">5M+</p>
                  <p className="text-gray-600 dark:text-green-100">Active clients</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-green-600">180+</p>
                  <p className="text-gray-600 dark:text-green-100">Countries represented</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Trusted by leading brands and startups</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {['Microsoft', 'Airbnb', 'Bissell', 'NASDAQ', 'GE'].map((brand) => (
                <div key={brand} className="text-2xl font-bold text-gray-400">{brand}</div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}