import { TextInput, Textarea, Button, textareaTheme, Label } from "flowbite-react";
import { ThemeProvider } from "flowbite-react";
import { textInputTheme, textAreaTheme, buttonTheme } from "../themes/themes";

export default function ContactForm() {
    return (
        <div className="w-full flex flex-col gap-8 items-center justify-center">
            <ThemeProvider theme={textInputTheme}>
                <Label htmlFor="name">Name</Label>
                <TextInput id="name" type="text" sizing="md" />
            </ThemeProvider>
            <ThemeProvider theme={textInputTheme}>
                <Label htmlFor="email">Email</Label>
                <TextInput id="email" type="email" sizing="md" />
            </ThemeProvider>
            <ThemeProvider theme={textAreaTheme}>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required rows={4} />
            </ThemeProvider>
            <ThemeProvider theme={buttonTheme}>
                <Button color={"black"} className="bg-black text-small text-white mb-8 flex items-center justify-center w-full py-5" >Send</Button>
            </ThemeProvider>
        </div>
    )
}