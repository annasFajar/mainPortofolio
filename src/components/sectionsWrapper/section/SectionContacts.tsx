import { motion } from "motion/react"
import { useAnimateInOut, useScroll } from "../../../context/ScrollContext"


const SectionContacts = () => {
    const {activeSection} = useScroll()
    const {scope} = useAnimateInOut()


    return <>
        <section
            // ref={scope}
            className="h-screen snap-center flex justify-center items-center "
        >
            <h2
                // transition={{duration: 2}}
                // animate={{opacity: 1, y:0}}
                // initial={{ opacity: 0, y:50 }}
                // exit={{ opacity: 0, x:50}}
                // className=""

            >
                Contacts
            </h2>
        </section>
    </>
}

export default SectionContacts