import { useCallback } from "react"
import { useAnimation } from "../context/useScroll"

export const UseNavLeft = () => {
    const {isAnimating, setStateAnimating} = useAnimation()
    
    const runAnimateNavLeft = useCallback(() => {
        isAnimating.current = true
        console.log(isAnimating.current)
        setStateAnimating(isAnimating.current)
    },[isAnimating, setStateAnimating])

    const blockAnimateNavLeft = useCallback(() => {
        if (isAnimating.current === false) {
            setStateAnimating(false)
        }
    },[isAnimating, setStateAnimating])

    return {runAnimateNavLeft,blockAnimateNavLeft}
}