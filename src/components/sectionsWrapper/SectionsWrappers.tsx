import { AnimatePresence, motion } from "motion/react"
import SectionHome from "./section/SectionHome"
import { useCallback, useRef } from "react"
import SectionProject from "./section/SectionProject"
// import { usePageState } from "../../context/ScrollContext"
import { UsePageScroll } from "../../hooks/UsePageScroll"
import SectionAboutMe from "./section/SectionAboutMe"
import SectionContacts from "./section/SectionContacts"
import { UsePagination } from "../../hooks/UsePagination"
import { UsePageTouch } from "../../hooks/UsePageTouch"
import { usePageState } from "../../context/useScroll"

const SectionsWrappers = () => {
    // const [[page, direction], setPage] = useState([0,0])
    
    const sections = [<SectionHome/>,<SectionAboutMe/>,<SectionProject/>,<SectionContacts/>]
    const {page,direction} = usePageState()
    // const sectionIndex = wrap(0, sections.length, page)
    // const {containerRef} = useContainer()
    // const {isAnimating} = useIsAnimating()
    // const {handleWheel} = UsePageScroll()
// pindahkan ke context
    // const container = useRef(null)
    // const before = useRef(null)
    // const next = useRef(null)
    // const [[start,end], setDirMobile] = useState([0,0])
    const containerRef = useRef<HTMLDivElement>(null)

    // const wheelDebounceTimer = useRef(0)

    // const scrollCondition = useRef(true)
    const {blockAnimation} = UsePageScroll({
        refContainer:containerRef,        
        // eslint-disable-next-line react-hooks/exhaustive-deps
        scrollUp: useCallback(()=> nextPage(),[]),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        scrollDown: useCallback(()=> previousPage(),[])
    })
    const {nextPage,previousPage} = UsePagination({
        // eslint-disable-next-line react-hooks/exhaustive-deps
        isAnimating: useCallback(() => blockAnimation(),[]),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        touchAnimation: useCallback(() => touchAnimate(),[])
    })
    
    const {touchAnimate} = UsePageTouch({
        ref: containerRef,
        nextScroll: () => nextPage(),
        previousScroll: () => previousPage()
    })

    


    const variants = {
        // enter: (dirCustom:number) => {
        //     return {
        //         x: -300, 
        //         opacity: 0,
        //         // duration: 15
        //     }
        // },
        center: {
            zIndex:0,
            y: 0, 
            x:0,
            opacity:1,

        },
        exit: (dirCustom:number) => {
            return {
                zIndex: 0,
                y:dirCustom > 0 ? -window.innerHeight : window.innerHeight, 
                opacity: 1,
                // duration: 1
            }
        }
    }

    // const touchStartMobile = (e:TouchEvent) => {
    //     e.stopPropagation();
    //     const startDirY = e.targetTouches.item(0)?.screenY
        

    //     setDirMobile(([start,end]) => {
    //         return [startDirY,end]
    //     })
    // }

    // const touchEndMobile = (e:TouchEvent) => {
    //     const endDirY = e.changedTouches.item(0)?.screenY
        
    //     // console.log(endDirY)
    //     // const dir = (start - endDirY)
    //     // console.log(dir)
        
    //     setDirMobile(([start,end]) => {
    //         return [start,endDirY]
    //     })
    // }
        
        
    // if (start > end) {
    //     console.log('scroll bawah')
    // }
    // if  (start < end) {
    //     console.log('scroll atas')
    // }
    // console.log(start,end)   



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
    // useEffect(()=>{
    //     console.log(containerRef.current)
    //     const contain:HTMLDivElement = containerRef.current
        
    //     contain.addEventListener('touchstart',touchStartMobile)
    //     contain.addEventListener('touchend', touchEndMobile)

    //     return () => {
    //         contain.removeEventListener('touchstart', touchStartMobile)
    //     }
    // },[])
    

    console.log(`dir: ${direction}`) 
    // logic()
    return (
        <>
        <div
            ref={containerRef}
            className=" h-screen"
            style={{ touchAction: 'none' }}
            
            // className="bg-amber-100"
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
                    transition={{
                        y: {
                            type: "tween", 
                            // stiffness: 50,   // makin kecil = makin lambat
                            // damping: 10,      // makin kecil = makin mantul
                            // mass: 5.5,
                            duration: 1
                        },
                        // opacity: {duration:1},
                        // opacity: 1;
                        // ease: [1, 0, 1, 1],
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