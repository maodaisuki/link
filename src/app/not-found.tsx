'use client'
import { useEffect } from "react"

export default function Custom404() {
    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            localStorage.getItem("theme") || "light"
        );
    }, [])

    return (
        <main className="m-0 min-h-screen min-w-screen box-border flex flex-col items-center justify-center">
            <div className="flex flex-row">
                <h1 className="text-lg pr-[5px] border-r-[2px] border-base-content">
                    404
                </h1>
                <div>
                    <h2 className="text-lg ml-[5px]">
                        This page could not be found.
                    </h2>
                </div>
            </div>
        </main>
    )
}