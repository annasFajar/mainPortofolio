import React, { useCallback, useEffect, useRef } from "react"
import { useAnimateInOut, useContainer, useIsAnimating, usePageState, useScroll, useSectionOut, useSectionsRef, useVisibleSection } from "../context/ScrollContext"
import { UsePagination } from "./UsePagination"
// import { AnimateInOut } from "../utils/animateInOut"

type UsePageScrollProps = {
    refContainer:React.Ref<HTMLElement>
    scrollUp: () => void,
    scrollDown: () => void
}
export const UsePageScroll = ({refContainer,scrollUp,scrollDown}:UsePageScrollProps) => {
    // const containerRef = useRef(null)
    // const indexRef = useRef(0)
    // const {sections} = useSectionsRef()
    // const sectionRef = useRef(null)
    // const isAnimateIn = useRef(false)
    // const {visibleSection, setVisibleSection} = useVisibleSection()
    // const {activeSection} = useScroll()
    // const {scope, animate} = useAnimateInOut()
    // const {visibleSection, setVisibleSection} = useVisibleSection()
    // const {isOut, setIsOut} = useSectionOut()
    // const {containerRef} = useContainer()
    // const {isAnimating} = useIsAnimating()
    const {setPage} = usePageState()
    const isAnimating = useRef(false)
    const lastWheelDirection = useRef(0)


    // wheel
    // const handleWheel = async (e) => {
    //     const container = containerRef.current
    //     // console.log(`hasil ${Math.round(container.scrollTop / window.innerHeight)}`)
    //     e.preventDefault()



    //     const animatedIn = transition.current
    //     const scroll = e.deltaY > 0 ? 1 : -1
    //     const nextIndex = Math.max(
    //         0,
    //         Math.min(3,activeSection.current + scroll)
    //     )
        
    //     if (animatedIn) {
    //         console.log('scroll block')
    //         return
    //     }
        
    //     // console.log(activeSection)
        
    //     activeSection.current = nextIndex
    //     console.log(`user scroll ${nextIndex}`)
    //     transition.current = true // animasi in masuk
    //     await AnimateInOut({transition:transition, animate:animate, scope:scope, activeSection: nextIndex, sections: sections, setVisibleSection: setVisibleSection, setIsOut: setIsOut})
        
    // }
    // const container = containerRef.current

    const runAnimation = useCallback(()=>{
        isAnimating.current = true
    },[])

    const blockAnimation = useCallback(()=>{
        isAnimating.current = false
    },[])

    // const paginate = useCallback((newDirection:number) => {
            
    //         setPage(([currentPage]) => {
    //             const nextPage = currentPage + newDirection
    //             if (nextPage < 0) {
    //                 console.log(`kurang dari section: ${nextPage}`)
    //                 console.log(`scroll on`)
    //                 isAnimating.current = false
    //                 return [currentPage,newDirection]
    //             }
    //             if (nextPage > 3) {
    //                 console.log(`lebih dari section: ${nextPage}`)
    //                 console.log(`scroll on`)
    //                 isAnimating.current = false
    //                 return [currentPage,newDirection]
    //             }
    //             return [nextPage,newDirection]
    //         })
    // },[direction])

    // wheel
    const handleWheel = useCallback((e:WheelEvent) => {

        const dir = e.deltaY > 0 ? 1 : -1

        lastWheelDirection.current = dir
        console.log(dir)

        if (isAnimating.current === false) {
            console.log('haloo')
            if (dir > 0) scrollUp()
            else scrollDown()
        }

        isAnimating.current = true

        // if (wheelDebounceTimer.current) clearTimeout(wheelDebounceTimer.current)
            
        //     wheelDebounceTimer.current = setTimeout(() => {
        //         isAnimating.current = false
        //         console.log('scroll on')
        //         // paginate(dir)    

        // }, 1000);

        // if (e.deltaY > 0) {
        //     paginate(1)
        // } else {
        //     paginate(-1)
        // }
        
    // },[paginate, page])
    },[])

    useEffect(()=>{
        const container = refContainer.current
        container.addEventListener('wheel',handleWheel)

        return () => {
            container.removeEventListener('wheel',handleWheel)
            console.log('lsa')
        }
    },[])

    
    return {blockAnimation, runAnimation}
}