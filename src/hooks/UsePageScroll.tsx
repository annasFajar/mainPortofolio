import { useEffect, useRef, useTransition } from "react"
import { useContainer, useScroll } from "../context/ScrollContext"
    
export const UsePageScroll = () => {
    // const containerRef = useRef(null)
    // const indexRef = useRef(0)
    const sectionRef = useRef(null)
    const isAnimate = useRef(false)
    const {isTransition, setIsTransition} = useTransition()
    const {activeSection, setActiveSection} = useScroll()
    const {containerRef} = useContainer()
    const activeSectionRef = useRef(activeSection)

    // wheel
    const handleWheel = (e) => {
        const container = containerRef.current
        // console.log(`hasil ${Math.round(container.scrollTop / window.innerHeight)}`)
        e.preventDefault()

        // const index = Math.round(container.scrollTop / window.innerHeight)
        // console.log(container.scrollTop)
        // console.log(window.innerHeight)
        
        const scroll = e.deltaY > 0 ? 1 : -1
        const nextIndex = Math.max(
            0,
            Math.min(3,activeSectionRef.current + scroll)
        )
        // console.log(`luar ${isAnimate.current}`)
        if (isAnimate.current) {
                setIsTransition(isAnimate.current)
                console.log('scroll block')
                return
            }
            console.log(activeSection)
        activeSectionRef.current = nextIndex
        setActiveSection(nextIndex) // kondisi transisi page (true/false) -> ketika ganti animasi jln
        // setActiveSection(activeSectionRef.current)
        isAnimate.current = true // animasi exit
        // console.log(isAnimate.current)
        sectionRef.current.scrollTo(nextIndex)
        // setTimeout(() => { // transisi hal
            
        // }, 1000);

        setTimeout(() => {
            isAnimate.current = false
            // setActiveSection(nextIndex)
            // console.log(activeSectionRef)
            // console.log(nextIndex)
            // console.log(activeSectionRef.current)
            console.log('time')
            // console.log(isAnimate.current)
        }, 2000) // samakan dengan durasi animasi
    }

    // 

    useEffect(()=>{
        const container = containerRef.current
        container.addEventListener('wheel',handleWheel)
    },[])

    useEffect(()=>{
        // activeSectionRef.current = activeSection
        console.log(activeSection)
    },[activeSection])

    return {containerRef,sectionRef}
}