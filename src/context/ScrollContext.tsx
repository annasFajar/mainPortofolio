// import { useAnimate } from "motion/react";
import { createContext, useContext, useRef, useState } from "react";

const ScrollContext = createContext()

export const ScrollProvider = ({children}) => {
    const activeSection = useRef(0)
    const [visibleSection, setVisibleSection] = useState(0)
    const [isOut, setIsOut] = useState(0)
    // const transition = useRef(false)
    const isAnimating = useRef(false)
    // const containerRef = useRef(null)
    const sections = useRef([])
    // const [scope, animate] = useAnimate()
    const [[page, direction], setPage] = useState([0,0])

    // animate(scope.current, {})
    // const myProjects = useRef(null)
    // const aboutMe = useRef(null)
    // const contacts = useRef(null)

    return <>
        <ScrollContext.Provider value={{page,direction,setPage,sections, visibleSection, setVisibleSection, isOut, setIsOut ,activeSection,isAnimating}}>
            {children}
        </ScrollContext.Provider>
    </>
}

export const usePageState = () => useContext(ScrollContext)
export const useSectionsRef = () => useContext(ScrollContext) 
export const useScroll = () => useContext(ScrollContext)
export const useContainer = () => useContext(ScrollContext)
export const useVisibleSection = () => useContext(ScrollContext)
export const useIsAnimating = () => useContext(ScrollContext)
export const useAnimateInOut = () => useContext(ScrollContext)
export const useSectionOut = () => useContext(ScrollContext)
