import Image from 'next/image'
import { Inter } from '@next/font/google'
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <HomeHeader></HomeHeader>

            <div className="flex flex-col items-center mt-24">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
                       alt="google"
                       width="300"
                       height="100"></Image>
                <HomeSearch></HomeSearch>
            </div>
        </>
    )
}
