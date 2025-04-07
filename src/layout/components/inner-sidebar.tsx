"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface InnerSidebarProps {
    children: React.ReactNode
    className?: string
    isCollapsed: boolean
    onCollapse: (collapsed: boolean) => void
}

export function InnerSidebar({ children, className, isCollapsed }: InnerSidebarProps) {
    const [width, setWidth] = React.useState(250)
    const [isResizing, setIsResizing] = React.useState(false)
    const sidebarRef = React.useRef<HTMLDivElement>(null)

    const startResizing = React.useCallback(() => {
        setIsResizing(true)
    }, [])

    const stopResizing = React.useCallback(() => {
        setIsResizing(false)
    }, [])

    const resize = React.useCallback(
        (e: MouseEvent) => {
            if (isResizing && sidebarRef.current) {
                const newWidth = e.clientX - sidebarRef.current.getBoundingClientRect().left
                if (newWidth > 150 && newWidth < 400) {
                    setWidth(newWidth)
                }
            }
        },
        [isResizing]
    )

    React.useEffect(() => {
        window.addEventListener("mousemove", resize)
        window.addEventListener("mouseup", stopResizing)
        return () => {
            window.removeEventListener("mousemove", resize)
            window.removeEventListener("mouseup", stopResizing)
        }
    }, [resize, stopResizing])

    return (
        <div
            ref={sidebarRef}
            className={cn(
                "relative flex h-full text-white transition-all duration-300",
                isCollapsed ? "w-[50px]" : `w-[${width}px]`,
                className
            )}
            style={{ width: isCollapsed ? 1 : width }}
        >
            <div className="flex-1 overflow-hidden">
                {children}
            </div>

            {/* Resize handle */}
            <div
                className="absolute right-0 top-0 h-full w-[1px] cursor-col-resize bg-zinc-200 hover:bg-zinc-700"
                onMouseDown={startResizing}
            />

        </div>
    )
} 