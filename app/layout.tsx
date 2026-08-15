import "./globals.css";
import type { Metadata } from "next";
export const metadata:Metadata={title:"Nexora Voice — AI Voice Operations",description:"Interactive AI outbound and inbound calling agent prototype"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}