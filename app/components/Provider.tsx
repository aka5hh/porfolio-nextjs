"use client";

import { ThemeProvider } from "next-themes"
import { Children, ReactNode } from "react"

export function Provider({children} :{children : ReactNode}){
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}