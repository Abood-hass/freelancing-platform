import { useContext, useRef, } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Github } from "@/components/icons/gitHub"
import Link from "next/link"
import { Google } from "@/components/icons/google"
import { LoadingContext, LoadingContextType } from "@/context/LoadingContext"
import { Spline } from "lucide-react"
import { registerRoute } from "@/routes/all-routes"
import { useRouter } from "next/navigation"
import { counterStore } from "@/context/UserData"

export default function LoginPage() {
    const { isLoading, setIsLoading } = useContext<LoadingContextType>(LoadingContext);
    const router = useRouter();
    const emailRef = useRef(null);

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {


            counterStore.setUserData(
                {
                    data: {
                        FullName: "John Doe",
                        Email: "john.doe@example.com",
                        ImageURL: "https://github.com/shadcn.png",
                        PhoneNumber: "+970567739413",
                        Country: "Palestine"
                    }
                }
            )

            setIsLoading(false)
            router.push('/')
        }, 3000)
    }

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center ">
            <div className="mx-auto flex w-10/12 md:w-3/5 xl:w-1/3 flex-col justify-center space-y-6 dark:bg-slate-800 p-8 rounded-md ">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-4xl mb-10 text-green-600 dark:text-green-100 playwrite-gb-s-400-italic">
                        Freelancing
                    </h1>
                    <h4 className="text-2xl font-semibold tracking-tight">Welcome back</h4>
                    <p className="text-sm text-muted-foreground dark:text-green-50">
                        Enter your email to sign in to your account
                    </p>
                </div>
                <div className="grid gap-6">
                    <form onSubmit={onSubmit}>
                        <div className="grid gap-2">
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="email">
                                    Email
                                </Label>
                                <Input
                                    ref={emailRef}
                                    id="email"
                                    placeholder="name@example.com"
                                    type="email"
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="password">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    placeholder="Password"
                                    type="password"
                                    autoCapitalize="none"
                                    autoComplete="current-password"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                />
                            </div>
                            <Button disabled={isLoading}>
                                {isLoading && (
                                    <Spline className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Sign In
                            </Button>
                        </div>
                    </form>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="dark:text-green-50 bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <Button variant="outline" disabled={isLoading}>
                            <Github className="mr-2 h-4 w-4" />
                            Github
                        </Button>
                        <Button variant="outline" disabled={isLoading}>
                            <Google className="mr-2 h-4 w-4" />
                            Google
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 text-center text-sm ">
                    <Link
                        aria-label="Forgot password"
                        href="/forgot-password"
                        className="text-muted-foreground underline-offset-4 transition-colors hover:underline dark:text-green-50"
                    >
                        Forgot password?
                    </Link>
                    <Link
                        aria-label="Sign up"
                        href={registerRoute}
                        className="text-muted-foreground underline-offset-4 transition-colors hover:underline dark:text-green-50"
                    >
                        Don't have an account? Sign Up
                    </Link>
                </div>
            </div>
        </div>
    )
}