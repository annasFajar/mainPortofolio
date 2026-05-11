import { AnimatePresence, useInView } from "motion/react"
import {motion} from "motion/react"
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"
import { useAnimateInOut, useContainer, useScroll, useSectionsRef } from "../../../context/ScrollContext"

const SectionHome = forwardRef<HTMLDivElement>(({title, index},ref) => {
    // const {containerRef} = useContainer()
    const {activeSection} = useScroll()
    // const {visibleSection, setVisibleSection} = useVisibleSection()
    // const sectionRef = useRef(activeSection)
    // const {handleWheel} = UsePageScroll()
    const {sections} = useSectionsRef()
    const localRef = useRef(null)
    const {scope} = useAnimateInOut()

    // useImperativeHandle(ref,()=>{
    //     return localRef.current!
    // })
    
    // const refView = ref.current
    // const isInView = useInView(localRef,{
    //     amount: 1,
    //     // root:containerRef
    //     // once: true
    // })
    
    
    
    // const isActive = index === activeSection
    
    useEffect(()=>{
        // console.log(ref)
        // useInView(false)
        // isInView = true
        // console.log(`effect ${index}, ${isInView}`)
        // console.log(`${index} ${activeSection} ${sectionRef.current}`)
    },[])
    // console.log(index, isInView)
    // useEffect(()=>{
    //     console.log(`${index} ${activeSection} ${sectionRef.current} ${isInView} ${ref}`)
        
    // },[activeSection])
    
    // console.log(ref)

    
    return <>
                <motion.section
                    className="h-screen flex justify-center items-center"
                >
                    <motion.div>
                        <motion.div>
                            <motion.h3>
                                ANNAS FAJAR RAMADHAN
                            </motion.h3>
                            <motion.h1>
                                Frontend Developer
                            </motion.h1>
                            <motion.p>
                                Hi! I'm Annas, a Frontend Developer passionate about building 
                                clean and responsive web experiences. I focus on crafting 
                                modern UI with great attention to detail, user experience, 
                                and writing maintainable code.
                            </motion.p>
                            <motion.div>
                            </motion.div>
                                <button>Download CV</button>
                                <button>Contact Me</button>
                        </motion.div>
                        <motion.div>

                        </motion.div>
                    </motion.div>
                </motion.section>
    </>
})

export default SectionHome