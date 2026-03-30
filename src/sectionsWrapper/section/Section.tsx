import { AnimatePresence, useInView } from "motion/react"
import {motion} from "motion/react"
import { forwardRef, useEffect, useImperativeHandle, useRef, useTransition } from "react"
import { useContainer, useScroll } from "../../context/ScrollContext"

const Section = forwardRef<HTMLDivElement>(({title, index},ref) => {
    const localRef = useRef(null)
    const {containerRef} = useContainer()
    const {activeSection} = useScroll()
    const {isTransition, setIsTransition} = useTransition()
    const sectionRef = useRef(activeSection)

    useImperativeHandle(ref,()=>{
        return localRef.current!
    })
    
    // const refView = ref.current
    const isInView = useInView(localRef,{
        amount: 1,
        // root:containerRef
        // once: true
    })
    
    
    
    // const isActive = index === activeSection
    
    useEffect(()=>{
        // console.log(ref)
        // useInView(false)
        // isInView = true
        // console.log(`effect ${index}, ${isInView}`)
        // console.log(`${index} ${activeSection} ${sectionRef.current}`)
    },[])
    // console.log(index, isInView)
    useEffect(()=>{
        console.log(`${index} ${activeSection} ${sectionRef.current} ${isInView} ${ref}`)
        
    },[activeSection])
    
    // console.log(ref)

    
    return <>
        <section
            ref={localRef}
            className="h-screen snap-center flex justify-center items-center"
        >
            <AnimatePresence
                onExitComplete={()=>setIsTransition(false)}
            >
                {index === activeSection && (
                    <motion.h2
                        key={index}
                        transition={{duration: 2}}
                        // animate={{opacity: index === activeSection? 1:0, y:0}}
                        animate={{opacity: 1, y:0}}
                        initial={{ opacity: 0, y:50 }}
                        // whileInView={{opacity: index === activeSection? 1:0, y:0}}
                        exit={{ opacity: 0, x:50}}
                    >
                        {title} {index}
                    </motion.h2>
                )}
            </AnimatePresence>
            {/* <AnimatePresence mode="wait">
                <motion.div >
                    {}
                    <motion.h2
                        key={index}
                        transition={{duration: 2}}
                        // animate={{opacity: index === activeSection? 1:0, y:0}}
                        // animate={{opacity: isInView? 1 :0}}
                        initial={{ opacity: 0, y:50 }}
                        whileInView={{opacity: index === activeSection? 1:0, y:0}}
                        exit={{ opacity: 0, scale: 0.9 }}
                    >
                        {title} {index}
                    </motion.h2>
                </motion.div>
            </AnimatePresence> */}
        </section>
    </>
})

export default Section