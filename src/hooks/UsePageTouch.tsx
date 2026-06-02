import React, { useCallback, useEffect, useRef } from "react"
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
    const debounce = useRef<boolean>(false)

    // const touchAnimate = () => {
        
    //     console.log('debounce jalan')
    //     debounce.current = true
        
    //     setTimeout(() => {
    //         debounce.current = false
    //         // console.log('false')
    //         }, 3500);
    // }

    const touchStart = useCallback((e:TouchEvent)=> {
        if (debounce.current === false) {
            const screenY = e.touches.item(0)?.screenY
            const start = Date.now()
            startRef.current = screenY
            startTime.current = start
            // console.log(screenY)
            // console.log(e.touches[0].clientY)

        }
    },[])
    
    const touchEnd = useCallback((e:TouchEvent) => {
        console.log(debounce.current)
        
        if (debounce.current === false) {
            const endScreenY = e.changedTouches.item(0)?.screenY
            if(startRef.current === undefined || endScreenY === undefined || startTime.current === undefined) return
            const end = Date.now()
            console.log('masuk')
            const dir = startRef.current - endScreenY
            const time = end - startTime.current

            // console.log(dir)
            // console.log(Math.abs(dir))
            if (Math.abs(dir) > 30 || time < 500) {
                nextScroll()
            } 
            if (Math.abs(dir) < -30 || time < 500) {
                previousScroll()
            }
        }
    },[nextScroll,previousScroll])

            

    
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