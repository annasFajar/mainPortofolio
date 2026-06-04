import React, { useCallback, useEffect, useRef } from "react"
import { useAnimation } from "../context/useScroll"
// import { usePageState } from "../context/ScrollContext"

type touchParam = {
    ref: React.RefObject<HTMLDivElement | null>,
    nextScroll: () => void,
    previousScroll: () => void
}

export const UsePageTouch = ({ref,nextScroll,previousScroll}:touchParam) => {
    // const [[startClick, endClick], setTouch] = useState([0,0])
    const startRef = useRef<number | undefined>(0)
    const startTime = useRef<number | undefined>(0)
    // const debounce = useRef<boolean>(false)
    const {isAnimating} = useAnimation()

    // const touchAnimate = () => {
        
    //     console.log('debounce jalan')
    //     debounce.current = true
        
    //     setTimeout(() => {
    //         debounce.current = false
    //         // console.log('false')
    //         }, 3500);
    // }

    const touchStart = useCallback((e:TouchEvent)=> {
        if (isAnimating.current === false) {
            const screenY = e.touches.item(0)?.screenY
            const start = Date.now()
            startRef.current = screenY
            startTime.current = start
            // console.log(screenY)
            // console.log(e.touches[0].clientY)
            // console.log('start')
        }
    },[isAnimating])
    
    const touchEnd = useCallback((e:TouchEvent) => {
        console.log(isAnimating.current)
        
        if (isAnimating.current === false) {
            const endScreenY = e.changedTouches.item(0)?.screenY
            if(startRef.current === undefined || endScreenY === undefined || startTime.current === undefined) return
            const end = Date.now()
            console.log('masuk')
            const dir = startRef.current - endScreenY
            const time = end - startTime.current
            
            console.log(dir)
            // console.log(Math.abs(dir))
            console.log(time)
            if (Math.abs(dir) < 50 ) return
            if (dir > 0) nextScroll()
            else previousScroll()
            // isAnimating.current = true
        }
    },[nextScroll,previousScroll,isAnimating])

            

    
    useEffect(()=>{
        const refMain = ref.current
        
        refMain?.addEventListener('touchstart', touchStart)
        refMain?.addEventListener('touchend', touchEnd)
        
        return () => {
            refMain?.removeEventListener('touchstart', touchStart)
            refMain?.removeEventListener('touchend', touchEnd)
        }
    },[touchStart, touchEnd,ref])
    

    return {}
}