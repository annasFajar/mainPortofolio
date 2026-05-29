import { AnimatePresence, color, useInView } from "motion/react"
import {motion} from "motion/react"
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"
import { useAnimateInOut, useContainer, useScroll, useSectionsRef } from "../../../context/ScrollContext"
import profile from '../../../assets/images/profile2.jpg'
import { UsePagination } from "../../../hooks/UsePagination"

const SectionHome = forwardRef<HTMLDivElement>(({title, index},ref) => {
    // const {containerRef} = useContainer()
    const {activeSection} = useScroll()
    // const {visibleSection, setVisibleSection} = useVisibleSection()
    // const sectionRef = useRef(activeSection)
    // const {handleWheel} = UsePageScroll()
    const {sections} = useSectionsRef()
    const localRef = useRef(null)
    const {scope} = useAnimateInOut()

    const {buttonContactHome} = UsePagination({
        isAnimating: ()=>{},
        touchAnimation: ()=>{}
    })

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
    const descVariants = {
        enter: { opacity: 0, x: -50 },
        center: { opacity: 1, x: 0 },
    };

    const buttonVariants = {
        enter: { opacity: 0, x: -50 },
        center: { opacity: 1, x: 0 },
    };

    const imgVariants = {
        enter: { opacity: 0, x: 80},
        center: { opacity: 1, x: 0 },
    };
    // const img = 
    

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
                    // variants={childVariants}
                    // initial='enter1'
                    className="h-screen flex justify-center items-center"
                >
                    <motion.div 
                        className="md:p-10 max-md:flex-col-reverse max-md:gap-11 flex justify-between items-center mx-auto w-[82%] max-w-screen-2xl "
                    >
                        <motion.div
                            className="max-md:gap-4 md:gap-4 md:pr-3 flex flex-col "
                            // variants={descVariants}
                            // transition={{
                            //     x: {
                            //         type: "spring",
                            //         stiffness: 70,   // makin kecil = makin lambat
                            //         damping: 9,      // makin kecil = makin mantul
                            //         mass: 1.5,       // makin besar = makin berat & lambat
                            //     },
                            //     opacity: { duration: 1 }
                            // }}
                        >
                            <motion.h3
                                className="max-md:text-center font-jost tracking-[0.3em] text-gray-500"
                                variants={descVariants}
                                transition={{
                                    x: {
                                        type: "spring",
                                        stiffness: 160,   // makin kecil = makin lambat
                                        damping: 9,      // makin kecil = makin mantul
                                        mass: 1.5,       // makin besar = makin berat & lambat
                                    },
                                    opacity: { duration: 1 }
                                }}
                            >
                                ANNAS FAJAR RAMADHAN
                            </motion.h3>
                            <motion.h1
                                className="max-md:text-center max-md:text-4xl font-jost font-bold text-[48.75px] leading-[48.75px]"
                                variants={descVariants}
                                transition={{
                                    x: {
                                        type: "spring",
                                        stiffness: 150,   // makin kecil = makin lambat
                                        damping: 9,      // makin kecil = makin mantul
                                        mass: 1.5,       // makin besar = makin berat & lambat
                                    },
                                    opacity: { duration: 1 }
                                }}
                            >
                                Frontend Developer
                            </motion.h1>
                            <motion.p
                                className="max-md:text-center font-jost text-[14px] text-gray-500"
                                variants={descVariants}
                                transition={{
                                    x: {
                                        type: "spring",
                                        stiffness: 140,   // makin kecil = makin lambat
                                        damping: 9,      // makin kecil = makin mantul
                                        mass: 1.5,       // makin besar = makin berat & lambat
                                    },
                                    opacity: { duration: 1 }
                                }}
                            >
                                Hi! I'm Annas, a Frontend Developer passionate about building 
                                clean and responsive web experiences. I focus on crafting 
                                modern UI with great attention to detail, user experience, 
                                and writing maintainable code.
                            </motion.p>
                            <motion.div
                                className="md:py-4 max-md:flex-center max-md:gap-4 flex "
                                variants={buttonVariants}
                                transition={{
                                    x: {
                                        type: "spring",
                                        stiffness: 100,   // makin kecil = makin lambat
                                        damping: 9,      // makin kecil = makin mantul
                                        mass: 1.5,       // makin besar = makin berat & lambat
                                    },
                                    // delay:1
                                }}
                            >
                                <button
                                    className="md:mr-3 font-jost text-[13px] rounded-2xl px-7 py-2 shadow-md transition duration-300 ease-in-out bg-gray-700 hover:bg-transparent border-transparent hover:border-gray-700 border-2 text-gray-100 hover:text-gray-700 box-border"
                                >Download CV</button>
                                <button
                                    onClick={()=>buttonContactHome(3,1)}
                                    className="md:mr-3 font-jost text-[13px] rounded-2xl px-7 py-2 shadow-md transition duration-300 ease-in-out transparent border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-gray-100 box-border cursor-pointer"
                                >Contact Me</button>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            variants={imgVariants}
                            transition={{
                                x: {
                                    
                                    type: "spring",
                                    stiffness: 80,   // makin kecil = makin lambat
                                    damping: 9,      // makin kecil = makin mantul
                                    mass: 1.5,       // makin besar = makin berat & lambat
                                    delay:0.8
                                    
                                },
                                opacity: { duration:1, delay:0.8},
                                // opacity: { duration: 1 }
                                // delay:1
                            }}
                        >
                            <img 
                                src={profile}  
                                alt="profile" 
                                className="max-md:rounded-full max-md:h-50 max-md:w-50 md:p-10 md:rounded-[550px] transition ease-in-out duration-500 object-cover grayscale hover:grayscale-0"
                                // style={{color:"transparent"}}    
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
    </>
})

export default SectionHome