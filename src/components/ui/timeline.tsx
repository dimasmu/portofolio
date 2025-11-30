import * as React from "react"
import { cn } from "../../lib/utils"

interface TimelineItem {
    title: string
    content: React.ReactNode
    images?: {
        src: string
        alt: string
        width?: number
        height?: number
        className?: string
    }[]
}

interface TimelineProps {
    data: {
        title: string
        content: React.ReactNode
        images?: {
            src: string
            alt: string
            width?: number
            height?: number
            className?: string
        }[]
    }[]
    className?: string
}


const Timeline = ({ data, className }: TimelineProps) => {
    return (
        <div className={cn("relative w-full overflow-clip", className)}>
            <div className="space-y-8">
                {data.map((item, index) => (
                    <div key={index} className="relative">
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                                {item.title}
                            </h3>
                            <div className="text-sm text-neutral-700 dark:text-neutral-300 mb-8">
                                {item.content}
                            </div>
                            {item.images && item.images.length > 0 && (
                                <div className="grid grid-cols-2 gap-4">
                                    {item.images.map((image, imgIndex) => (
                                        <img
                                            key={imgIndex}
                                            src={image.src}
                                            alt={image.alt}
                                            width={image.width || 500}
                                            height={image.height || 500}
                                            className={cn(
                                                "h-20 w-full rounded-lg object-cover shadow-lg",
                                                image.className
                                            )}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { Timeline }