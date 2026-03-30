import { useEffect, useRef, useState } from "react"
import NavbarLeft from "../components/navbarLeft/NavbarLeft"
import NavbarTop from "../components/navbarTop/NavbarTop"
import { useContainer, useScroll } from "../context/ScrollContext"
import SectionsWrapper from "../sectionsWrapper/SectionsWrapper"
import { UsePageScroll } from "../hooks/UsePageScroll"

const Layout = () => {
    // const {activeSection, setActiveSection} = useScroll()
    // const sectionRef = useRef(null)
    const {containerRef,sectionRef} = UsePageScroll()
    // const {}
    // const {containerRef} = useContainer()
    // const contatinerRef = 
    // const handleWheel = () => {
    //     const index = Math.round(
    //         window.screenTop 
    //     )
    // }
    // const indexRef = useRef(0)
    // const isAnimate = useRef(false)
    
    // const handleScroll = (e) => {
    //     const container = containerRef.current
    //     console.log('aktif')
    //     // // console.log(container.screenTop)
    //     // console.log(`top ${container.scrollTop}`)
    //     // console.log(`window ${window.innerHeight}`)
    //     console.log(`hasil ${Math.round(container.scrollTop / window.innerHeight)}`)
    //     // console.count('o')
    //     e.preventDefault()

    //     const index = Math.round(container.scrollTop / window.innerHeight)
    //     setActiveSection(index)
        
    //     const scroll = e.deltaY > 0 ? 1 : -1
    //     const nextIndex = Math.max(
    //         0,
    //         Math.min(3,indexRef.current + scroll)
    //     )
    //     if (isAnimate.current) return
    //     indexRef.current = nextIndex
    //     sectionRef.current.scrollTo(nextIndex)
    //     isAnimate.current = true


    //     setTimeout(() => {
    //         isAnimate.current = false
    //         console.log('time')
    //     }, 2000) // samakan dengan durasi animasi

        

    //     // const down = scroll + 1
    //     // if (scroll > 0) {
    //         // sectionRef.current.scrollTo(tech)
    //         // }
    // }
    // useEffect(()=>{
    //     const container = containerRef.current

    //     container.addEventListener('wheel',handleScroll, {passive:false})
    //     return ()=> container.removeEventListener('wheel', handleScroll)
    // },[])
    // useEffect(()=>{
    //     // console.log(containerRef)   
        
    // },[containerRef])



    return <>
        <div className="bg-black">
            
            {/* Navbar Top */}
            <NavbarTop/>

            {/* Navbar Left */}
            <NavbarLeft ref={sectionRef}/>

            {/* section */}
            <div
                // onScroll={handleScroll}
                ref={containerRef}
                className="main bg-red-300 no-scrollbar"
            >
                <SectionsWrapper ref={sectionRef}/> 
            </div>
        </div>
    </>
}

export default Layout