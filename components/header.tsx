import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { Component } from 'react'

export default class header extends Component {

    constructor(props: any) {
        super(props);


    }

    render() {
        return (<header className="border-b">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link className="flex items-center justify-center" href="#">
                    <span className="font-bold text-2xl text-green-600">Freelancing</span>
                </Link>
                <nav className="hidden md:flex space-x-6">
                    <Link className="text-sm font-medium hover:text-green-600" href="#">
                        Find Talent
                    </Link>
                    <Link className="text-sm font-medium hover:text-green-600" href="#">
                        Find Work
                    </Link>
                    <Link className="text-sm font-medium hover:text-green-600" href="#">
                        Why Upwork
                    </Link>
                    <Link className="text-sm font-medium hover:text-green-600" href="#">
                        Enterprise
                    </Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <Link href="/register">Log In</Link>
                    <Link href="/login">Sign Up</Link>
                </div>
            </div>
        </header>);
    }
}
