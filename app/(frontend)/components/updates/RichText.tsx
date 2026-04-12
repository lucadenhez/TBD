import { JSXConvertersFunction, RichText as PayloadRichText } from '@payloadcms/richtext-lexical/react'

type Props = {
    content: any
}

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
    ...defaultConverters,
    // custom classes if not wanting to use tailwind inline classes
})

export default function RichText({ content }: Props) {
    if (!content) return null

    return (
        <div className="prose dark:prose-invert max-w-none">
            <PayloadRichText data={content} converters={jsxConverters} />
        </div>
    )
}
