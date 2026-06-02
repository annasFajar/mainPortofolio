import { createContext, type Dispatch, type SetStateAction } from "react"

export type scrollContextType = {
    activeSection: React.RefObject<number>,
    visibleSection: number,
    setVisibleSection: Dispatch<SetStateAction<number>>,
    isOut: number,
    setIsOut: Dispatch<SetStateAction<number>>,
    isAnimating: React.RefObject<boolean>,
    stateAnimating: boolean,
    setStateAnimating: Dispatch<SetStateAction<boolean>>,
    sections: React.RefObject<HTMLDivElement[]>,
    page: number,
    direction: number,
    setPage: Dispatch<SetStateAction<[number,number]>>
}

export const ScrollContext = createContext<scrollContextType | undefined>(undefined)