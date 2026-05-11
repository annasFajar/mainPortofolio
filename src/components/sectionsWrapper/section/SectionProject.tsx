import { motion } from "motion/react"
import { useAnimateInOut, useScroll } from "../../../context/ScrollContext"


const SectionProject = () => {
    const {activeSection} = useScroll()
    const {scope} = useAnimateInOut()


    return <>
        <motion.section
            // ref={scope}
            className="h-screen snap-center flex justify-center items-center "
        >
            <h2>project</h2>
        </motion.section>
    </>
}

export default SectionProject