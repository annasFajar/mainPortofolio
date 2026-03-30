import { createContext, useContext, useRef, useState } from "react";

const ScrollContext = createContext()

export const ScrollProvider = ({children}) => {
    const [activeSection, setActiveSection] = useState(0)
    const [isTransition, setIsTransition] = useState(false)
    const containerRef = useRef(null)

    // const myProjects = useRef(null)
    // const aboutMe = useRef(null)
    // const contacts = useRef(null)

    return <>
        <ScrollContext.Provider value={{activeSection,setActiveSection,isTransition,setIsTransition, containerRef}}>
            {children}
        </ScrollContext.Provider>
    </>
}

export const useScroll = () => useContext(ScrollContext)
export const useContainer = () => useContext(ScrollContext)
export const useTransition = () => useContext(ScrollContext)