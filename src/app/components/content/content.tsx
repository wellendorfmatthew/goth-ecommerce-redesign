import { Content } from "../../../../types";
import Image from "next/image";

type ContentProp = {
    content: Content;
}

export default function ContentStructure({ content }: ContentProp) {
    return (
        <div className="flex flex-col gap-8 items-center justify-center w-1/2 mb-16 pt-4">
            <p className="text-large font-semibold">{content.title}</p>
            <p className="text-medium text-wrap text-center w-full font-semibold">{content.subtitle}</p>
            <Image src={content.image || ""} alt={content.title} />
            {
                content.text.map((paragraph, index) => (
                    <p key={index}  className="text-small font-medium text-wrap w-9/10 text-center whitespace-pre-line">{paragraph}</p>
                ))
            }
        </div>
    )
}