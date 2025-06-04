import { TextInput, Button, ThemeProvider, Label} from "flowbite-react";
import { buttonTheme, textInputTheme } from "../components/themes/themes";
import Link from "next/link";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Signup() {
    return (
        <div className="flex flex-col justify-between items-center h-screen overflow-x-hidden w-full">
            <Header />
            <p className="text-medium font-semibold">Sign In</p>
            <div className="w-1/2 flex flex-col gap-8">
                <ThemeProvider theme={textInputTheme}>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email" className="text-black dark:text-black font-semibold dark:font-semibold text-small">Email</Label>
                        <TextInput id="email" type="email" sizing="md" color="default" />
                    </div>
                </ThemeProvider>
                <ThemeProvider theme={textInputTheme}>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password" className="text-black dark:text-black font-semibold dark:font-semibold text-small">Password</Label>
                        <TextInput id="password" type="text" sizing="md" color="default" />
                    </div>
                </ThemeProvider>
                <p className="text-small font-medium mt-[-16px] text-right">Forgot Password?</p>
                <ThemeProvider theme={buttonTheme}>
                    <Button color={"black"} className="bg-black text-small text-white mb-8 flex items-center justify-center w-full py-5" >Log In</Button>
                </ThemeProvider>
            </div>
            <p className="text-small mt-[-56px]">Don't have an account? <Link href={"/signup"} className="text-small font-medium">Sign up</Link></p>
            <Footer />
        </div>
    )
}