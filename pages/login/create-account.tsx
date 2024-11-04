import { useContext, useRef, useState, } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Github } from "@/components/icons/gitHub"
import Link from "next/link"
import { Google } from "@/components/icons/google"
import { LoadingContext, LoadingContextType } from "@/context/LoadingContext"
import { Spline } from "lucide-react"
import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SelectItem } from "@radix-ui/react-select"
import { loginRoute } from "@/routes/all-routes"
import { useRouter } from "next/navigation"
import { DatePicker } from "@/components/ui/date-picker"

export default function LoginPage() {
    const { isLoading, setIsLoading } = useContext<LoadingContextType>(LoadingContext);
    const router = useRouter();
    const [DoB, setDoB] = useState<Date>(new Date("1/1/1999"))

    const emailRef = useRef<HTMLInputElement>(null);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);



    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        const values = {
            FullName: (firstNameRef.current && firstNameRef.current.value) + " " + (lastNameRef.current && lastNameRef.current.value),
            Email: emailRef.current && emailRef.current.value,
            Country: countryRef.current && countryRef.current.value,
            dob: DoB.getDate() + "/" + (DoB.getMonth() + 1) + "/" + DoB.getFullYear(),
        }

        setTimeout(() => {
            console.log(values)
            setIsLoading(false)
            router.push('/login')
        }, 3000)
    }

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center ">
            <div className="mx-auto flex w-10/12 md:w-3/5 xl:w-1/3 flex-col justify-center space-y-6 dark:bg-slate-800 p-8 rounded-md ">
                <div className="flex flex-col space-y-2 text-center">
                    <h4 className="text-2xl font-semibold tracking-tight">Sign-in Now</h4>
                    <p className="text-sm text-muted-foreground dark:text-green-50">
                        And make a good use of your talent, and select the right people for your project.
                    </p>
                </div>
                <div className="grid gap-6">
                    <form onSubmit={onSubmit}>
                        <div className="grid gap-2">
                            <div className="grid grid-cols-2 gap-1">
                                <div>
                                    <Label className="sr-only" htmlFor="fname">
                                        First Name
                                    </Label>
                                    <Input
                                        ref={firstNameRef}
                                        id="fname"
                                        placeholder="Abdullah"
                                        type="text"
                                        autoComplete="name"
                                        autoCorrect="off"
                                        disabled={isLoading}
                                    />
                                </div>
                                <div>
                                    <Label className="sr-only" htmlFor="lname">
                                        Last Name
                                    </Label>
                                    <Input
                                        ref={lastNameRef}
                                        id="lname"
                                        placeholder="Hassouna"
                                        type="text"
                                        autoComplete="name"
                                        autoCorrect="off"
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                                <div>
                                    <Label className="sr-only" htmlFor="country">
                                        Date of Birth
                                    </Label>
                                    <DatePicker title="Date of Birth" DoB={DoB} setDoB={setDoB} />
                                </div>
                                <div>
                                    <Label className="sr-only" htmlFor="country">
                                        Country
                                    </Label>
                                    <Input
                                        ref={countryRef}
                                        id="country"
                                        placeholder="Palestine"
                                        type="text"
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>
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
                                <Label className="sr-only" htmlFor="new-password">
                                    Password
                                </Label>
                                <Input
                                    id="new-password"
                                    placeholder="***********"
                                    type="password"
                                    autoCapitalize="none"
                                    autoComplete="new-password"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="confirm-password">
                                    Password
                                </Label>
                                <Input
                                    id="confirm-password"
                                    placeholder="****************"
                                    type="password"
                                    autoCapitalize="none"
                                    autoComplete="new-password"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                />
                            </div>
                            <Button disabled={isLoading}>
                                {isLoading && (
                                    <Spline className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Sign Up
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
                        aria-label="Login"
                        href={loginRoute}
                        className="text-muted-foreground underline-offset-4 transition-colors hover:underline dark:text-green-50"
                    >
                        You have an account? Login
                    </Link>
                </div>
            </div>
        </div>
    )
}