import { forwardRef, useEffect, useState } from "react"
import { useScroll } from "../../context/ScrollContext"
import { motion } from "motion/react"

const NavbarLeft = forwardRef(({section},ref) => {
    // const scrollTo = (ref) => {
    //     ref.current.scrollIntoView({
    //         behavior: 'smooth'
    //     })
    // }
    const [refs,setrefs] = useState(null)
    const {activeSection,setActiveSection} = useScroll()

    useEffect(()=>{
        const refSection = ref.current
        setrefs(refSection)
        // console.log(ref)
    },[])

    const tabs = [
        {
            label:'home',
            id:0
        },
        {
            label:'project',
            id:1
        },
        {
            label:'about',
            id:2
        },
        {
            label:'contact',
            id:3
        }
    ]

    const underline: React.CSSProperties = {
    position: "absolute",
    bottom: -2,
    left: 0,
    right: 0,
    height: 2,
    background: "blue",
}

    return <>
        <div
            // ref={navLeft}
            // onClick={()=>scrollTo(landingRef)}
            className=" flex flex-col items-center justify-between fixed left-0 z-40 top-1/4 h-[50vh] p-1"
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
                >y</li>
            <li className={activeSection === 3 ? 'bg-red-400' : ''}
                onClick={()=>{
                    refs.scrollTo(3)
                    // setActiveSection(3) 
                }}
            >t</li> */}
            {tabs.map((tab)=>(
                <div key={tab.id} onClick={()=>{
                    refs.scrollTo(tab.id)
                }} className="relative">
                    {tab.label}
                    {activeSection === tab.id && (
                        <motion.div
                            layoutId="underline"
                            style={underline}
                            animate={{opacity: activeSection === tab.id ? 1:0}}
                        />
                    )}
                    {tab.id}
                </div>
            ))}
        </div>
    </>
})

export default NavbarLeft