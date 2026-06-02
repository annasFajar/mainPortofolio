import { useCallback } from "react"
import { usePageState } from "../context/useScroll"
// import { usePageState } from "../context/ScrollContext"

type UsePaginationProps = {
    blockAnimation:()=>void,
    isAnimating: () => void
}

export const UsePagination = ({blockAnimation, isAnimating}:UsePaginationProps) => {
    const {setPage} = usePageState()


    const pagination = useCallback((newDirection:number) => {
        setPage(([currentPage]) => {
            const userPage = currentPage + newDirection
            if (userPage < 0) {
                console.log(`kurang dari section: ${userPage}`)
                console.log(`scroll on`)
                console.log(`direction:${newDirection}`)
                blockAnimation()
                return [currentPage,newDirection]
            }
            if (userPage > 3) {
                console.log(`lebih dari section: ${userPage}`)
                console.log(`scroll on`)
                console.log(`direction:${newDirection}`)
                blockAnimation()
                return [currentPage,newDirection]
            }
            console.log(`direction:${newDirection}`)
            isAnimating()
            return [userPage,newDirection]
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[blockAnimation])

    const paginationNavLeft = (userClick:number,newDirection:number) => {
        setPage(() => {
            const userPage = userClick
            return [userPage,newDirection]
        })
        isAnimating()
    }

    const buttonContactHome = (goTo:number, dir:number) => {
        setPage(([currentPage])=>{
            const userPage = currentPage + goTo
            return [userPage, dir]
        })
    }
    
    const nextPage = useCallback(()=> pagination(1),[pagination])
    const previousPage = useCallback(()=>pagination(-1),[pagination])
    
    return {nextPage,previousPage,paginationNavLeft, buttonContactHome}
}