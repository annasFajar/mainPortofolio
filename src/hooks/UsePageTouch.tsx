import React, { useCallback, useEffect, useRef, useState } from "react"
import { usePageState } from "../context/ScrollContext"

type touchParam = {
    ref:React.Ref<HTMLDivElement>,
    nextScroll: () => void,
    previousScroll: () => void
}

export const UsePageTouch = ({ref,nextScroll,previousScroll}:touchParam) => {
    // const [[startClick, endClick], setTouch] = useState([0,0])
    const startRef = useRef(0)
    const debounce = useRef(false)

    const touchAnimate = () => {
        
        console.log('debounce jalan')
        debounce.current = true
        
        setTimeout(() => {
            debounce.current = false
            console.log('false')
            }, 3500);
    }

    const touchStart = useCallback((e:TouchEvent)=> {
        if (debounce.current === false) {
            const screenY = e.touches.item(0)?.screenY
            startRef.current = screenY
        }
    },[])
    
    const touchEnd = useCallback((e:TouchEvent) => {
        console.log(debounce.current)
        
        if (debounce.current === false) {
            const endScreenY = e.changedTouches.item(0)?.screenY
            // endRef.current = screenY
            
            const dir = startRef.current - endScreenY
            console.log(dir)
            if (dir > 0) {
                nextScroll()
            } 
            if (dir < 0) {
                previousScroll()
            }
        }
    },[])

            

    
    useEffect(()=>{
        const refMain:HTMLElement = ref.current
        
        refMain.addEventListener('touchstart', touchStart)
        refMain.addEventListener('touchend', touchEnd)
        
        return () => {
            refMain.removeEventListener('touchstart', touchStart)
            refMain.removeEventListener('touchend', touchEnd)
        }
    },[])
    

    return {touchAnimate}
}