import { useCallback } from "react"
import { useAnimation, usePageState } from "../context/useScroll"
// import { usePageState } from "../context/ScrollContext"

type UsePaginationProps = {
    blockAnimation:()=>void,
    isAnimation: () => void
}

export const UsePagination = ({blockAnimation, isAnimation}:UsePaginationProps) => {
    const {setPage} = usePageState()
    const {isAnimating} = useAnimation()


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
            isAnimation()
            return [userPage,newDirection]
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[blockAnimation])

    const paginationNavLeft = (userClick:number,newDirection:number) => {
        setPage(() => {
            const userPage = userClick
            return [userPage,newDirection]
        })
        isAnimation()
    }

    const buttonContactHome = useCallback((goTo:number, dir:number) => {
        setPage(([currentPage])=>{
            const userPage = currentPage + goTo
            return [userPage, dir]
        })
        isAnimating.current = true
    },[isAnimating, setPage])
    
    const nextPage = useCallback(()=> pagination(1),[pagination])
    const previousPage = useCallback(()=>pagination(-1),[pagination])
    
    return {nextPage,previousPage,paginationNavLeft, buttonContactHome}
}