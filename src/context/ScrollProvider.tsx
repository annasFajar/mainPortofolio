import { useRef, useState, type ReactNode } from 'react'
import { ScrollContext } from './ScrollContext.ts'

const ScrollProvider = ({children}:{children:ReactNode}) => {
    const activeSection = useRef(0)
    const [visibleSection, setVisibleSection] = useState(0)
    const [isOut, setIsOut] = useState(0)
    const isAnimating = useRef(false)
    const sections = useRef([])
    const [[page, direction], setPage] = useState<[number,number]>([0,0])

    return <>
        <ScrollContext.Provider value={{page,direction,setPage,sections, visibleSection, setVisibleSection, isOut, setIsOut ,activeSection,isAnimating}}>
            {children}
        </ScrollContext.Provider>
    </>
}

export default ScrollProvider