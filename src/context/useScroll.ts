import { useContext } from "react"
import { ScrollContext } from "./ScrollContext"

export const usePageState = () => {
    const context = useContext(ScrollContext)
    if (!context) throw new Error('usePageState must be used within ScrollProvider')
    return context
}

export const usePageSections = () => {
    const context = useContext(ScrollContext)
    if(!context) throw new Error('usePageSections undefined')
    return context
}

export const useAnimation = () => {
    const context = useContext(ScrollContext)
    if (!context) throw new Error('Is animating undefined')
    return context
}