import Image from 'next/image'
import { Inter } from '@next/font/google'
import HomeHeader from "@/components/HomeHeader";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <HomeHeader></HomeHeader>
        </>
    )
}
