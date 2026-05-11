import { AnimatePresence, motion, wrap } from "motion/react"
import SectionHome from "./section/SectionHome"
import { useCallback, useEffect, useRef, useState } from "react"
import SectionProject from "./section/SectionProject"
import { useContainer, useIsAnimating, usePageState } from "../../context/ScrollContext"
import { UsePageScroll } from "../../hooks/UsePageScroll"
import SectionAboutMe from "./section/SectionAboutMe"
import SectionContacts from "./section/SectionContacts"
import { UsePagination } from "../../hooks/UsePagination"

const SectionsWrappers = () => {
    // const [[page, direction], setPage] = useState([0,0])
    
    const sections = [<SectionHome/>,<SectionProject/>,<SectionAboutMe/>,<SectionContacts/>]
    const {page,direction,setPage} = usePageState()
    // const sectionIndex = wrap(0, sections.length, page)
    // const {containerRef} = useContainer()
    // const {isAnimating} = useIsAnimating()
    // const {handleWheel} = UsePageScroll()
// pindahkan ke context
    // const container = useRef(null)
    // const before = useRef(null)
    // const next = useRef(null)
    const containerRef = useRef(null)

    const wheelDebounceTimer = useRef(0)

    // const scrollCondition = useRef(true)
    const {blockAnimation,runAnimation} = UsePageScroll({
        refContainer:containerRef,
        scrollUp: ()=> nextPage(),
        scrollDown: ()=> previousPage()
    })
    const {nextPage,previousPage} = UsePagination({
        isAnimating: () => blockAnimation(),
    })
    


    const variants = {
        enter: (dirCustom:number) => {
            return {
                x: -300, 
                opacity: 0,
                duration: 15
            }
        },
        center: {
            zIndex:0,
            y: 0, 
            x:0,
            opacity:1,

        },
        exit: (dirCustom:number) => {
            return {
                zIndex: 0,
                y:dirCustom > 0 ? -300 : 300, 
                opacity: 0,
                duration: 15
            }
        }
    }

    // const paginate = (newDirection:number) => {
    //     setPage([page + newDirection, newDirection])
    // }

    // const paginate = useCallback((newDirection:number) => {
    //     if (isAnimating.current) return
    //     console.log('ganti page')
    //     setPage(([currentPage]) => {
    //         const nextPage = currentPage + newDirection
            
    //         if (nextPage < 0) {
                
    //             isAnimating.current = false
    //             return [currentPage, direction]
    //         }
    //         return [nextPage,newDirection]
    //     })
    // },[direction])


    
    // const beforePage = () => {
    //     paginate(-1)
    // }
    // const nextPage = () => {
    //     paginate(1)
    // }
    //     console.log(page)
        
    //     useEffect(()=>{
    //         // const refBefore = before.current
    //         // const refNext = next.current
    //         const refContainer = container.current

    //         refContainer.addEventListener('wheel', handleWheel)

    //         return () => {
    //             refContainer.removeEventListener('wheel', handleWheel)
    //         }
    //     // const refBefore = before.current
    //     // const refNext = next.current
    //     // refBefore.addEventListener('click', beforePage)
    //     // refNext.addEventListener('click', nextPage)
    //     // refContainer.addEventListener('wheel', handleWheel)
    // },[nextPage,handleWheel])
    

    console.log(`dir: ${direction}`) 
    // logic()
    return (
        <>
        <div
            ref={containerRef}
        >
            <AnimatePresence 
                // initial={false} 
                custom={direction} 
                mode="wait"
                onExitComplete={() => {
                    // isAnimating.current = false
                    console.log('selesai onExit')
                    
                }}
            >
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="bg-yellow-500 h-screen"
                    transition={{
                        y: {type: "spring", stiffness:300, damping: 30},
                        opacity: {duration:0.2},
                        // duration: 2000
                    }}
                    onAnimationComplete={(definition)=>{
                        console.log(`definition: ${definition}, page: ${page}`)
                        if (definition === 'center') {
                            console.log(`selesai ${definition}`)
                            blockAnimation()
                            console.log('scroll on')
                        }
                    }}
                >
                    {sections[page]}
                </motion.div>
            </AnimatePresence>
        </div>
        </>
    )
}

export default SectionsWrappers