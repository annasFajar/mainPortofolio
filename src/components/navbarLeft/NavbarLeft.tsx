// import { usePageState } from "../../context/ScrollContext"
import { motion } from "motion/react"
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { UsePagination } from "../../hooks/UsePagination";
import { useAnimation, usePageState } from "../../context/useScroll";
import { UseNavLeft } from "../../hooks/UseNavLeft";
import { useCallback } from "react";


const NavbarLeft = () => {
    const {page} = usePageState()
    const {stateAnimating} = useAnimation()


    const Sections = [
        <AiFillHome/>,
        <FaUser/>,
        <FaFolderOpen/>,
        <TbMailFilled/>
    ]

    const underline: React.CSSProperties = {
    position: "absolute",
    bottom: -5,
    left: -7,
    right: -7,
    height: 34,
    background: "rgba(255, 255, 255, 0.2)",
    
    }

    const textVariants = {
        active: {
            fontSize: "22px",
            color: "rgb(169, 169, 169)",
            transition: {
                fontSize: { delay: 0.2, duration: 1 },
                color: { delay: 0.2, duration: 0.4 }, // ✅ lebih reliable di variants
            },
        },
        inactive: {
            fontSize: "19px",
            color: "rgb(255, 255, 255)",
            transition: {
                fontSize: {  duration: 1 },
                color: { delay: 0, duration: 2 },
            },
        },
    };

    const {paginationNavLeft} = UsePagination({
        // eslint-disable-next-line react-hooks/exhaustive-deps
        isAnimation: useCallback(() => runAnimateNavLeft(),[]),
        blockAnimation: useCallback(()=>{},[])
        // touchAnimation: ()=>{}
    })

    const {runAnimateNavLeft} = UseNavLeft()

    return <>
        <div
            // ref={navLeft}
            // onClick={()=>scrollTo(landingRef)}
            className="max-md:hidden bg-gray-700 fixed left-0 z-10 top-1/4 h-[50vh] p-2 rounded-r-3xl flex justify-center items-center"
        >
            {/* <li className={activeSection === 0 ? 'bg-red-400' : ''}
                onClick={()=>{
                    refs.scrollTo(0)
                    // setActiveSection(0)
                }}
                >l</li>
            <li className={activeSection === 1 ? 'bg-red-400' : ''}
                onClick={()=>{
                    refs.scrollTo(1)
                    // setActiveSection(1) 
                }}
                >u</li>
            <li className={activeSection === 2 ? 'bg-red-400' : ''}
                onClick={()=>{
                    refs.scrollTo(2)
                    // setActiveSection(2) 
                }}
                >y</li> */}
            {/* <li className={activeSection === 3 ? 'bg-red-400' : ''}
                onClick={()=>{
                    refs.scrollTo(3)
                    // setActiveSection(3) 
                }}
            >t</li>  */}
            <ul
                className="flex flex-col items-center justify-between h-8/10 w-8.5"
            >
                {Sections.map((section,i)=>(
                    <li 
                        key={i} 
                        onClick={()=>{
                            // refs.scrollTo(section.id)
                        }} 
                        className="relative "
                    >   
                        <motion.div
                            variants={textVariants}
                            animate={page===i?'active':'inactive'}
                            // animate={{
                            //     fontSize:page===i?'22px':'19px',
                            //     color:page===i?'blue':'white',
                            // }}
                            // transition={{
                            //     delay:1,
                            //     fontSize:{duration:1},
                            //     color:{delay:1}
                            // }}
                            className={stateAnimating? 'pointer-events-none':'cursor-pointer pointer-events-auto'}
                            onClick={()=> {
                                    const dir = i > page ? 1 : -1 
                                    paginationNavLeft(i,dir)
                                }
                            }
                        >
                            {section}
                        </motion.div>
                        {page === i && (
                            <motion.button
                                layoutId="underline"
                                style={underline}
                                animate={{opacity: page === i ? 1:0}}
                                className="rounded-[9px]"
                            >

                            </motion.button>
                        )}
                        {/* {section.id} */}
                    </li>
                ))}
            </ul>
        </div>
    </>
}

export default NavbarLeft