import { AnimatePresence, motion } from "motion/react"
import {  useState, type Ref } from "react"

const NavbarTop = () => {
    const [nav, setNav] = useState<boolean>(false)
    
    const variantNavTop = {
        close: {
            color: '#000',
            transition:{
                color: { delay: 0, duration: 0 },
            }
        },
        open: {
            color: '#fff',
            background: '#364153',
            transition: {
                background: { delay: 0.5, duration: 5 }, // ✅ lebih reliable di variants
                // color: { delay: 0, duration: 0.4 }, // ✅ lebih reliable di variants
                
            }
        }
    }

    const upLine = {
        close: {
            background: "rgb(0,0,0)",
            transition:{
                delay:0.3,
                background: { delay: 0, duration: 1 },
            },
            rotate: 0, y:0
        },
        open: {
            background: "rgb(255, 255, 255)",
            transition: {
                background: { delay: 0, duration: 0.4 }, // ✅ lebih reliable di variants
            },
            y:4,
            rotate:45
        }
    }
    const downLine = {
        close: {
            background: "rgb(0,0,0)",
            transition:{
                delay:0.3,
                background: { delay: 0, duration: 1 },
            },
            rotate: 0, 
            y:0
            
        },
        open: {
            background: "rgb(255, 255, 255)",
            transition: {
                background: { delay: 0, duration: 0.4 }, // ✅ lebih reliable di variants
            },
            y:-4, 
            rotate:-45
        }
    }

    const variantModalNav = {
        enter: {
            transition: {
                // delay:1
            },
            scale:0
        },
        center: {
            transition: {
                // delay:1,
                type: "spring",
                stiffness: 500,   // makin kecil = makin lambat
                damping: 100,      // makin kecil = makin mantul
                mass: 10,    // makin besar = makin berat & lambat
            },
            scale:40
            
        },
        exit: {
            scale:0,
            transition:{
                type: "spring",
                stiffness: 400,   // makin kecil = makin lambat
                damping: 150,      // makin kecil = makin mantul
                mass: 10,    // makin besar = makin berat & lambat
            }
            
        },
    }

    const variantMenu = {
        enter: {
            x:-120,
            opacity:0,
            transition: {
            
            }
        },
        center: {
            x:0,
            opacity:1,
            transition: {
                delay:0.1
            }
            
        },
        exit: {
            x:-80,
            opacity:0,
            transition: {
                type: "spring",
                stiffness: 1000,   // makin kecil = makin lambat
                damping: 150,      // makin kecil = makin mantul
                mass: 1,   
            }
        }
    }
    const variantHome = {
        enter: {
            x:-120,
            opacity:0,
            transition: {
            
            }
        },
        center: {
            x:0,
            opacity:1,
            transition: {
                delay:0.2
            }
            
        },
        exit: {
            x:-80,
            opacity:0,
            transition: {
                type: "spring",
                stiffness: 1000,   // makin kecil = makin lambat
                damping: 150,      // makin kecil = makin mantul
                mass: 1,   
            }
        }
    }
    const variantAbout = {
        enter: {
            x:-120,
            opacity:0,
            transition: {
            
            }
        },
        center: {
            x:0,
            opacity:1,
            transition: {
                delay:0.3
            }
            
        },
        exit: {
            x:-80,
            opacity:0,
            transition: {
                type: "spring",
                stiffness: 1000,   // makin kecil = makin lambat
                damping: 150,      // makin kecil = makin mantul
                mass: 1,   
            }
        }
    }
    const variantProjects = {
        enter: {
            x:-120,
            opacity:0,
            transition: {
            
            }
        },
        center: {
            x:0,
            opacity:1,
            transition: {
                delay:0.4
            }
            
        },
        exit: {
            x:-80,
            opacity:0,
            transition: {
                type: "spring",
                stiffness: 1000,   // makin kecil = makin lambat
                damping: 150,      // makin kecil = makin mantul
                mass: 1,   
            }
        }
    }
    const variantContact = {
        enter: {
            x:-120,
            opacity:0,
            transition: {
            
            }
        },
        center: {
            x:0,
            opacity:1,
            transition: {
                delay:0.5
            }
            
        },
        exit: {
            x:-80,
            opacity:0,
            transition: {
                type: "spring",
                stiffness: 1000,   // makin kecil = makin lambat
                damping: 150,      // makin kecil = makin mantul
                mass: 1,   
            }
        }
    }
    
    return <>

            <motion.nav 
                className="navbarTop z-40"
                animate={nav ? 'open':'close'}
                variants={variantNavTop}
            >
                <h3
                    className="font-jost text-2xl ml-2 md:ml-0 transition-colors ease duration-500 "
                >Annas</h3>
                <div className="">
                    <motion.button 
                        className="flex flex-col h-3 justify-between cursor-pointer"
                        onClick={()=>{
                            setNav((nav)=>{
                                console.log(`tap: ${nav}`)
                                return !nav
                            })
                        }}
                    >
                        <motion.div 
                            className={nav ? "w-8.25 h-1 rounded-4xl" : " w-8.25 h-1 rounded-4xl"}
                            variants={upLine}
                            animate={nav ? 'open':'close'}
                        >

                        </motion.div>
                        <motion.div 
                            className={nav ? "w-8.25 h-1 rounded-4xl":"w-8.25 h-1 rounded-4xl"}
                            variants={downLine}
                            animate={nav ? 'open':'close'}
                        >
                            
                        </motion.div>
                    </motion.button>
                </div>
            </motion.nav>

        <AnimatePresence mode="wait">
            {nav && <motion.div 
                className="fixed z-20 bg-gray-700 w-20 h-20 rounded-full opacity-95 -right-20 -top-20"
                initial='enter'
                animate='center'
                exit='exit'
                variants={variantModalNav}
            >   
            </motion.div>}
            {nav && <motion.div className="w-full gap-9 z-30 h-screen fixed flex items-center justify-center flex-col text-center">
                <motion.h1 
                    variants={variantMenu}
                    initial='enter'
                    animate='center'
                    exit='exit'
                    className="text-[48.75px] leading-[48.75px] text-white font-jost font-bold"
                    >Menu</motion.h1>
                <ul className="flex flex-col gap-7">
                    <motion.a
                        className="text-[19.5px] leading-[26px] text-white font-jost font-bold"
                        variants={variantHome}
                        initial='enter'
                        animate='center'
                        exit='exit'
                        >Home</motion.a>
                    <motion.a
                        className="text-[19.5px] leading-[26px] text-white font-jost font-bold"
                        variants={variantAbout}
                        initial='enter'
                        animate='center'
                        exit='exit'
                        
                        >About</motion.a>
                    <motion.a
                        className="text-[19.5px] leading-[26px] text-white font-jost font-bold"
                        variants={variantProjects}
                        initial='enter'
                        animate='center'
                        exit='exit'
                        >Projects</motion.a>
                    <motion.a
                        className="text-[19.5px] leading-[26px] text-white font-jost font-bold"
                        variants={variantContact}
                        initial='enter'
                        animate='center'
                        exit='exit'
                        
                    >Contact</motion.a>
                </ul>
            </motion.div>}
        </AnimatePresence>
    </>
}

export default NavbarTop