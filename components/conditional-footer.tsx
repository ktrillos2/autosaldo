"use client"

import { usePathname } from "next/navigation"
import { Footer } from "@/components/footer"

export function ConditionalFooter({ content }: { content: any }) {
    const pathname = usePathname()

    if (pathname?.startsWith("/admin") || pathname?.startsWith("/studio")) {
        return null
    }

    return <Footer content={content} />
}
