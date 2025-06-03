import { TextInput, Textarea, Button, textareaTheme, Label } from "flowbite-react";
import { ThemeProvider } from "flowbite-react";
import { textInputTheme, textAreaTheme, buttonTheme } from "../themes/themes";

export default function ContactForm() {
    return (
        <div className="w-1/2 flex flex-col gap-8  ">
            <ThemeProvider theme={textInputTheme}>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-black dark:text-black font-semibold dark:font-semibold text-small">Name</Label>
                    <TextInput id="name" type="text" sizing="md" color="default" />
                </div>
            </ThemeProvider>
            <ThemeProvider theme={textInputTheme}>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-black dark:text-black font-semibold dark:font-semibold text-small">Email</Label>
                    <TextInput id="email" type="email" sizing="md" color="default" />
                </div>
            </ThemeProvider>
            <ThemeProvider theme={textAreaTheme}>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="text-black dark:text-black font-semibold dark:font-semibold text-small">Message</Label>
                    <Textarea id="message" required rows={4} color="default" />
                </div>
            </ThemeProvider>
            <ThemeProvider theme={buttonTheme}>
                <Button color={"black"} className="bg-black text-small text-white mb-8 flex items-center justify-center w-full py-5" >Send</Button>
            </ThemeProvider>
        </div>
    )
}