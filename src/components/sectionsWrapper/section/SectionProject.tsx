import {motion} from "motion/react"
import { useEffect} from "react"
import aboutMe from '../../../assets/images/aboutMe.jpg'

const SectionProject = () => {
    // const {containerRef} = useContainer()
    // const {visibleSection, setVisibleSection} = useVisibleSection()
    // const sectionRef = useRef(activeSection)
    // const {handleWheel} = UsePageScroll()

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

    const underVariants = {
        enter: { opacity: 0, x: 120 },
        center: { opacity: 1, x: 0 },
    };

    const imgVariants = {
        enter: { opacity: 0, x: 80 },
        center: { opacity: 1, x: 0 },
    };

    const buttonVariants = {
        enter: { opacity: 0, y: 20 },
        center: { opacity: 1, y: 0 },
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
                        className="md:p-10 max-md:flex-col-reverse flex justify-between items-center mx-auto w-[82%] max-w-screen-2xl"
                    >
                        <motion.div
                            className="max-md:-mt-12 max-md:z-10 md:pr-3 max-md:gap-6 md:gap-4 flex flex-col"
                            
                        >
                            <motion.div
                                className="max-md:gap-4 max-md:flex max-md:flex-col"
                            >
                                <motion.h1
                                    className="max-md:text-4xl max-md:bg-white max-md:w-fit max-md:px-2 font-jost font-bold text-[78px]"
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
                                    My Projects
                                </motion.h1>
                                <motion.div
                                    className="flex flex-col gap-1.5"
                                >
                                    <motion.div
                                        className="rounded-2xl w-16 h-1 bg-gray-700"
                                        variants={descVariants}
                                        transition={{
                                            x: {
                                                type: "spring",
                                                stiffness: 110,   // makin kecil = makin lambat
                                                damping: 20,      // makin kecil = makin mantul
                                                mass: 2,       // makin besar = makin berat & lambat
                                            },
                                            opacity: { duration: 1 }
                                        }}
                                    ></motion.div>
                                    <motion.div
                                        className="px-11"
                                    >
                                        <motion.div
                                            className="rounded-2xl w-16 h-1 bg-gray-700 mr-4"
                                            variants={underVariants}
                                            transition={{
                                                x: {
                                                    type: "spring",
                                                    stiffness: 110,   // makin kecil = makin lambat
                                                    damping: 20,      // makin kecil = makin mantul
                                                    mass: 2,       // makin besar = makin berat & lambat
                                                },
                                                opacity: { duration: 1 }
                                            }}
                                        ></motion.div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                            <motion.p
                                className="font-jost text-[16px] text-gray-500"
                                variants={descVariants}
                                transition={{
                                    x: {
                                        type: "spring",
                                        stiffness: 130,   // makin kecil = makin lambat
                                        damping: 9,      // makin kecil = makin mantul
                                        mass: 1.5,       // makin besar = makin berat & lambat
                                    },
                                    opacity: { duration: 1 }
                                }}
                            >
                                Selected works that I've built over the years. and currently working on.
                            </motion.p>
                            <motion.div
                                className="flex "
                                variants={buttonVariants}
                                transition={{
                                    y: {
                                        type: "spring",
                                        stiffness: 150,   // makin kecil = makin lambat
                                        damping: 11,      // makin kecil = makin mantul
                                        mass: 1.5,       // makin besar = makin berat & lambat
                                        delay:0.3
                                    },
                                    opacity: { duration: 0.3, delay:0.3 }
                                }}
                            >
                                <motion.button
                                    className="mr-3 font-jost text-[13px] rounded-2xl px-7 py-2 shadow-md transition duration-300 ease-in-out bg-gray-700 hover:bg-transparent border-transparent hover:border-gray-700 border-2 text-gray-100 hover:text-gray-700 box-border"
                                >
                                    Learn More
                                </motion.button>
                                {/* <button
                                    className="mr-3 font-jost text-[13px] rounded-2xl px-7 py-2 shadow-md transition duration-300 ease-in-out transparent border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-gray-100 box-border"
                                >Contact Me</button> */}
                            </motion.div>
                        </motion.div>
                        <motion.div
                            variants={imgVariants}
                            className="md:w-100"
                            transition={{
                                x: {
                                    
                                    type: "spring",
                                    stiffness: 50,   // makin kecil = makin lambat
                                    damping: 9,      // makin kecil = makin mantul
                                    mass: 1.5,       // makin besar = makin berat & lambat
                                    delay:0.8
                                },
                                opacity: { duration: 1, delay:0.8}
                            }}
                        >
                            <motion.img 
                                src={aboutMe}  
                                alt="profile" 
                                className="max-md:w-full max-md:h-100 transition ease-in-out duration-300 object-cover grayscale hover:grayscale-0"
                                // style={{color:"transparent"}}    
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
    </>
}

export default SectionProject