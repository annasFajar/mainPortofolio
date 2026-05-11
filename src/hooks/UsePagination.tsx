import React, { useCallback, type Ref } from "react"
import { usePageState } from "../context/ScrollContext"

type UsePaginationProps = {
    isAnimating:()=>void
    
}

export const UsePagination = ({isAnimating}:UsePaginationProps) => {
    const {page,direction,setPage} = usePageState()

    const pagination = useCallback((newDirection:number) => {
        setPage(([currentPage]) => {
            const userPage = currentPage + newDirection
            if (userPage < 0) {
                console.log(`kurang dari section: ${userPage}`)
                console.log(`scroll on`)
                console.log(`direction:${newDirection}`)
                isAnimating()
                return [currentPage,newDirection]
            }
            if (userPage > 3) {
                console.log(`lebih dari section: ${userPage}`)
                console.log(`scroll on`)
                console.log(`direction:${newDirection}`)
                isAnimating()
                return [currentPage,newDirection]
            }
            console.log(`direction:${newDirection}`)
            return [userPage,newDirection]
        })
    },[])
    
    const nextPage = useCallback(()=> pagination(1),[])
    const previousPage = useCallback(()=>pagination(-1),[])
    
    return {nextPage,previousPage}
}