import { cn } from '@/lib/utils';
import { loginRoute, registerRoute } from '@/routes/all-routes';
import { WithRouterProps } from 'next/dist/client/with-router';
import Link from 'next/link';
import { withRouter } from 'next/router';
import React, { Component, FunctionComponent } from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Image from 'next/image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { DashboardIcon, PersonIcon } from '@radix-ui/react-icons';
import { BellIcon, DollarSignIcon } from 'lucide-react';

const COMPONENTS: { title: string; href: string; description: string }[] = [
    {
        title: "Sender 1",
        href: "/messagess/conversation-1",
        description:
            "Resent the alert dialog component to display a message to the user.",
    }, {
        title: "Sender 2",
        href: "/messagess/conversation-2",
        description:
            "Resent the alert dialog component to display a message to the user.",
    }, {
        title: "Sender 3",
        href: "/messagess/conversation-3",
        description:
            "Resent the alert dialog component to display a message to the user.",
    },
]

interface HeaderProps extends WithRouterProps { }

const GuestRoutes: FunctionComponent = () => {

    return (
        <nav className="hidden md:flex space-x-6">
            <Link className="text-sm font-medium hover:text-green-600" href="#">
                Find Talent
            </Link>
            <Link className="text-sm font-medium hover:text-green-600" href="#">
                Find Work
            </Link>
            <Link className="text-sm font-medium hover:text-green-600" href="#">
                Why
                <span className="text-sm playwrite-gb-s-400-italic"> Freelancing</span>
            </Link>
            <Link className="text-sm font-medium hover:text-green-600" href="#">
                Enterprise
            </Link>
        </nav>
    );
}


const FreelancerRoutes: FunctionComponent = () => {
    return (
        <nav className="hidden md:flex space-x-6">
            <Link className="text-sm font-medium hover:text-green-600" href="#">
                Find Work
            </Link>
            <Link className="text-sm font-medium hover:text-green-600" href="#">
                Your Proposals
            </Link>
            <Link className="text-sm font-medium hover:text-green-600" href="#">
                Your Earning
            </Link>
            <NavigationMenu>
                <NavigationMenuItem className='list-none'>
                    <NavigationMenuTrigger className='px-0 py-0 h-auto hover:text-green-600'>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex flex-col w-[400px] gap-3 ">
                            {COMPONENTS.map((component) => (
                                <Link
                                    href={component.href}
                                    key={component.title}
                                    className='border-b-2 border-gray-400 p-2'
                                >
                                    <h3 className='font-semibold text-green-600'>{component.title}</h3>
                                    <p className='p-2 text-sm'>{component.description}</p>
                                </Link>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenu>
        </nav>
    );
}


const RecruiterRoutes: FunctionComponent = () => {
    return (
        <nav className="hidden md:flex space-x-6">
            <Link className="text-sm font-medium hover:text-green-600" href="#">
                Find Talent
            </Link>
            <Link className="text-sm font-medium hover:text-green-600" href="#">
                Your Jobs
            </Link>
            <Link className="text-sm font-medium hover:text-green-600" href="#">
                Your Payments
            </Link>
            <NavigationMenu>
                <NavigationMenuItem className='list-none'>
                    <NavigationMenuTrigger className='px-0 py-0 h-auto hover:text-green-600'>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex flex-col w-[400px] gap-3 ">
                            {COMPONENTS.map((component) => (
                                <Link
                                    href={component.href}
                                    key={component.title}
                                    className='border-b-2 border-gray-400 p-2'
                                >
                                    <h3 className='font-semibold text-green-600'>{component.title}</h3>
                                    <p className='p-2 text-sm'>{component.description}</p>
                                </Link>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenu>
        </nav>
    );
}


const Recru_FreeRoutes: FunctionComponent = () => {
    return (
        <nav className="hidden md:flex space-x-6">
            <Link className="text-sm font-medium hover:text-green-600" href="#">
                Find Talent
            </Link>
            <Link className="text-sm font-medium hover:text-green-600" href="#">
                Find Work
            </Link>
            <Link className="text-sm font-medium hover:text-green-600" href="#">
                Financial Reports
            </Link>
            <NavigationMenu>
                <NavigationMenuItem className='list-none'>
                    <NavigationMenuTrigger className='px-0 py-0 h-auto hover:text-green-600'>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="flex flex-col w-[400px] gap-3 ">
                            {COMPONENTS.map((component) => (
                                <Link
                                    href={component.href}
                                    key={component.title}
                                    className='border-b-2 border-gray-400 p-2'
                                >
                                    <h3 className='font-semibold text-green-600'>{component.title}</h3>
                                    <p className='p-2 text-sm'>{component.description}</p>
                                </Link>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenu>
        </nav>
    );
}



class Header extends Component<HeaderProps> {

    constructor(props: HeaderProps) {
        super(props);
    }

    render() {

        return (<header className={cn("border-b sticky left-0 top-0 bg-white dark:bg-slate-800 border-green-600", this.props.router.pathname.includes("/login") ? " hidden" : '')}>
            <div className=" mx-auto px-4 py-4 flex items-center justify-between">
                <Link className="flex items-center justify-center" href="#">
                    <span className="text-xl xl:text-2xl text-green-600 dark:text-green-100 playwrite-gb-s-400-italic">Freelancing</span>
                </Link>
                <nav className="hidden md:flex space-x-6">
                    <GuestRoutes />
                </nav>
                <div className="flex items-center space-x-4">
                    {/* <Link href={loginRoute} className='hover:bg-green-600 text-sm md:text-base hover:text-green-50 transition-all px-2 py-1 rounded-md'>Log In</Link>
                    <Link href={registerRoute} className='hover:bg-green-600 text-sm md:text-base hover:text-green-50 transition-all px-2 py-1 rounded-md'>Sign Up</Link> */}

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='-translate-x-6'>
                            <DropdownMenuItem>
                                <Link className="flex items-center gap-2 justify-start" href={'/recruiter-dashboard'}>
                                    <DashboardIcon className='w-4 h-4' />
                                    Dashborad
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link className="flex items-center gap-2 justify-start" href={''}>
                                    <BellIcon className='w-4 h-4' />
                                    Notification
                                </Link>

                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link className="flex items-center gap-2 justify-start" href={''}>
                                    <PersonIcon className='w-4 h-4' />
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link className="flex items-center gap-2 justify-start" href={''}>
                                    <DollarSignIcon className='w-4 h-4' />
                                    Billing
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>


                </div>
            </div>
        </header>);
    }
}

export default withRouter(Header)
