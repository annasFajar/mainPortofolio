import { AnimatePresence, color, useInView } from "motion/react"
import {motion} from "motion/react"
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"
import { useAnimateInOut, useContainer, useScroll, useSectionsRef } from "../../../context/ScrollContext"
import contact from '../../../assets/images/contact.jpg'
import { TbMailFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const SectionContacts = forwardRef<HTMLDivElement>(({title, index},ref) => {
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

    const contact1Variants = {
        enter: () => ({ 
            // opacity: 0, 
            y: 40,
            // clipPath: [
            //     "circle(50% at 100% 50%)",
            //     "circle(50% at 100% 50%)",
                // "circle(75% at 50% 50%)",
                // "circle(150% at 50% 50%)",
            // ],
            opacity: 1,
            clipPath: "inset(0 0 80% 0)",
            // transition: {
            //     // transition untuk y (spring dengan delay)
            //     type: "spring",
            //     stiffness: 280,
            //     damping: 25,
                // mass: 10,
                // clipPath: {
                //     duration:1,
                //     ease: "easeInOut",

                // }
                
                // transition khusus clipPath (override, tidak ikut spring)
            // },
        }),
        center: ()=>({ 
            opacity: 1, 
            y: 0 ,
            // clipPath: "circle(100% at 50% 50%)",
            clipPath: "inset(0 0 0% 0)",
            transition: {
                delay: 0.1,
                // delay:0,
                type: "spring",
                stiffness: 900,
                damping: 45,
                mass: 3,
                // ease: 'easeInOut',
                clipPath: {
                    delay: 0.4,
                    duration: 0.5,   // ← animasi clipPath terjadi di sini
                    ease: "easeInOut",
                }
            }
        }),
    };
    const contact2Variants = {
        enter: () => ({ 
            // opacity: 0, 
            y: 40,
            // clipPath: [
            //     "circle(50% at 100% 50%)",
            //     "circle(50% at 100% 50%)",
                // "circle(75% at 50% 50%)",
                // "circle(150% at 50% 50%)",
            // ],
            opacity: 1,
            clipPath: "inset(0 0 80% 0)",
            // transition: {
            //     // transition untuk y (spring dengan delay)
            //     type: "spring",
            //     stiffness: 280,
            //     damping: 25,
                // mass: 10,
                // clipPath: {
                //     duration:1,
                //     ease: "easeInOut",

                // }
                
                // transition khusus clipPath (override, tidak ikut spring)
            // },
        }),
        center: ()=>({ 
            opacity: 1, 
            y: 0 ,
            // clipPath: "circle(100% at 50% 50%)",
            clipPath: "inset(0 0 0% 0)",
            transition: {
                delay: 0.3,
                // delay:0,
                type: "spring",
                stiffness: 900,
                damping: 45,
                mass: 3,
                // ease: 'easeInOut',
                clipPath: {
                    delay: 0.6,
                    duration: 0.7,   // ← animasi clipPath terjadi di sini
                    ease: "easeInOut",
                }
            }
        }),
    };
    const contact3Variants = {
        enter: () => ({ 
            // opacity: 0, 
            y: 40,
            // clipPath: [
            //     "circle(50% at 100% 50%)",
            //     "circle(50% at 100% 50%)",
                // "circle(75% at 50% 50%)",
                // "circle(150% at 50% 50%)",
            // ],
            opacity: 1,
            clipPath: "inset(0 0 80% 0)",
            // transition: {
            //     // transition untuk y (spring dengan delay)
            //     type: "spring",
            //     stiffness: 280,
            //     damping: 25,
                // mass: 10,
                // clipPath: {
                //     duration:1,
                //     ease: "easeInOut",

                // }
                
                // transition khusus clipPath (override, tidak ikut spring)
            // },
        }),
        center: ()=>({ 
            opacity: 1, 
            y: 0 ,
            // clipPath: "circle(100% at 50% 50%)",
            clipPath: "inset(0 0 0% 0)",
            transition: {
                delay: 0.5,
                // delay:0,
                type: "spring",
                stiffness: 900,
                damping: 45,
                mass: 3,
                // ease: 'easeInOut',
                clipPath: {
                    delay: 0.8,
                    duration: 0.9,   // ← animasi clipPath terjadi di sini
                    ease: "easeInOut",
                }
            }
        }),
    };
    const contact4Variants = {
        enter: () => ({ 
            // opacity: 0, 
            y: 40,
            // clipPath: [
            //     "circle(50% at 100% 50%)",
            //     "circle(50% at 100% 50%)",
                // "circle(75% at 50% 50%)",
                // "circle(150% at 50% 50%)",
            // ],
            opacity: 1,
            clipPath: "inset(0 0 80% 0)",
            // transition: {
            //     // transition untuk y (spring dengan delay)
            //     type: "spring",
            //     stiffness: 280,
            //     damping: 25,
                // mass: 10,
                // clipPath: {
                //     duration:1,
                //     ease: "easeInOut",

                // }
                
                // transition khusus clipPath (override, tidak ikut spring)
            // },
        }),
        center: ()=>({ 
            opacity: 1, 
            y: 0 ,
            // clipPath: "circle(100% at 50% 50%)",
            clipPath: "inset(0 0 0% 0)",
            transition: {
                delay: 0.7,
                // delay:0,
                type: "spring",
                stiffness: 900,
                damping: 45,
                mass: 4,
                // ease: 'easeInOut',
                clipPath: {
                    delay: 1,
                    duration: 1.1,   // ← animasi clipPath terjadi di sini
                    ease: "easeInOut",
                }
            }
        }),
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
                        className="md:p-10 max-md:flex-col-reverse flex items-center mx-auto w-[82%] max-w-screen-2xl justify-between"
                    >
                        <motion.div
                            className="max-md:-mt-12 max-md:z-10 md:pr-3 max-md:gap-6 md:gap-4 flex flex-col pr-3"
                            
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
                                    Get In Touch
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
                                Feel free to contact me if you have any questions or just want to say hi.
                            </motion.p>
                            <motion.div
                                className="gap-4 flex"
                                
                            >
                                <motion.a
                                    className="font-jost text-[13px] rounded-full p-2 shadow-md flex justify-center items-center transition duration-300 ease-in-out bg-gray-700 border-transparent hover:bg-gray-400 border-2 text-gray-100 hover:cursor-pointer"
                                    variants={contact1Variants}
                                    href="mailto:annasfajarramadhan@gmail.com"
                                >
                                    <TbMailFilled
                                        className="text-white text-[28px]"
                                    />
                                </motion.a>
                                <motion.a
                                    className="font-jost text-[13px] rounded-full p-2 shadow-md flex justify-center items-center transition duration-300 ease-in-out bg-gray-700 border-transparent hover:bg-gray-400 border-2 text-gray-100 hover:cursor-pointer"
                                    variants={contact2Variants}
                                    href="https://github.com/annasFajar"
                                    >
                                    <FaGithub
                                        className="text-white text-[28px]"
                                    />
                                </motion.a>
                                <motion.a
                                    className="font-jost text-[13px] rounded-full p-2 shadow-md flex justify-center items-center transition duration-300 ease-in-out bg-gray-700 border-transparent hover:bg-gray-400 border-2 text-gray-100 hover:cursor-pointer"
                                    variants={contact3Variants}
                                    href="https://www.linkedin.com/in/annas-fajar-ramadhan-52812a344/"
                                    >
                                    <FaLinkedin
                                        className="text-white text-[28px]"
                                    />
                                </motion.a>
                                <motion.a
                                    className="font-jost text-[13px] rounded-full p-2 shadow-md flex justify-center items-center transition duration-300 ease-in-out bg-gray-700 border-transparent hover:bg-gray-400 border-2 text-gray-100 hover:cursor-pointer"
                                    variants={contact4Variants}
                                    href="https://discordapp.com/users/1021498845550620672"
                                >
                                    <FaDiscord
                                        className="text-white text-[28px]"
                                    />
                                </motion.a>
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
                                src={contact}  
                                alt="profile" 
                                className="max-md:w-full max-md:h-100 transition ease-in-out duration-300 object-cover grayscale hover:grayscale-0"
                                // style={{color:"transparent"}}    
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
    </>
})

export default SectionContacts