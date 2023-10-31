'use client'
import {usePathname, useSearchParams} from "next/navigation";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import Link from "next/link";

export default function PaginationButtons(){

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searchTerm");
    const startIndex = +searchParams.get("start") || 1;

    return(
        <div className="text-blue-700 flex px-10 pb-4 justify-between
        sm:justify-start sm:space-x-44 sm:px-0">
            <BsChevronLeft></BsChevronLeft>
            <BsChevronRight></BsChevronRight>
            {startIndex >= 10 && (
                <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
                    <div className="flex flex-col cursor-pointer items-center hover:underline">
                        <BsChevronLeft></BsChevronLeft>
                        <p>Previous</p>
                    </div>
                </Link>
            )}
            {startIndex <= 90 && (
                <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
                    <div className="flex flex-col cursor-pointer items-center hover:underline">
                        <BsChevronRight></BsChevronRight>
                        <p>Next</p>
                    </div>
                </Link>
            )}
        </div>
    )
}