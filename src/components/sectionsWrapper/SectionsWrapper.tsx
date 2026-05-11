// import { useInView } from 'motion/react'
// import { motion } from 'motion/react'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { useAnimateInOut, useScroll, useSectionOut, useSectionsRef, useVisibleSection } from '../../context/ScrollContext'
import SectionHome from './section/SectionHome'
import { AnimatePresence, motion } from 'motion/react'
import SectionProject from './section/SectionProject'

type SectionProps = {
    title: string
}

const SectionsWrapper = forwardRef<HTMLDivElement, SectionProps>(({_},ref) => {
    const {activeSection} = useScroll()
    // const section = ['Home','About Me','My Projects', 'Contacts']
    const {sections} = useSectionsRef()
    const {transition} = useTransitionSection()
    const {visibleSection} = useVisibleSection() 
    const {isOut} = useSectionOut()

    // const isTransition = 0 && activeSection
    // const isAnimate = useRef(false)
    // const indexRef = useRef(0)
    // useImperativeHandle(ref, ()=>({ //penjelasan claude => penjelasan forwardRef + useImperativeHandle
    //     scrollTo(index) {
    //         sections.current[index]?.scrollIntoView({
    //             behavior:'smooth',
    //         })
    //         // setActiveSection(index)
    //         console.log(`hal ${index}`)
    //     },
    // }))

    // useEffect(()=>{
    //     console.log(sections.current)
    // },[])
    // console.log(sectionRef)    
    // const container = sectionRef.current
    // useEffect(()=>{
        
    //     const handleWheel = (e) => {
    //         const dir = e.deltaY > 0 ? 1 : -1
            
    //         e.preventDefault()
    //         if (isAnimate.current) return

    //         const nextIndex = Math.max(
    //             0,
    //             Math.min(4-1, indexRef.current + dir)
    //         )

    //         if (nextIndex === indexRef.current) return
            
    //     }
    // },[])

    // useEffect(()=>{
    //     if (isInView) {
    //         navRef.current.style.background = 'red'
    //     } else {
    //         navRef.current.style.background = ''
    //     }
    // },[isInView])

    
    return <>
            {/* <AnimatePresence mode="wait"
                onExitComplete={()=>{
                    // setVisibleSection(activeSection)
                    sections.current[activeSection]?.scrollIntoView({
                        behavior:'smooth'
                    })
                    transition.current = false
                    // console.log(visibleSection)
                    console.log('wait selesai')
                    console.log(`sekarang di ${activeSection}`)
                }}
            > */}
                {/* {section.map((title,i)=>( */}
                {/* {console.log(visibleSection)} */}
                        {/* <SectionHome  
                            ref={(el)=>(sections.current[i] = el)} 
                            title={title} 
                            index={i}
                        /> */}
        <AnimatePresence>

            {
                0 === visibleSection &&
                0 === isOut
                && 
                <SectionHome
                    key={activeSection}
                />
            }
            {
                1 === visibleSection &&
                1 === isOut
                && 
                <SectionProject
                    key={activeSection}
                />
            }
        </AnimatePresence>

                    {/* {visibleSection === 1 && <SectionProject/>} */}
                {/* </motion.section>      */}
                {/* ))}  */}
            {/* </AnimatePresence> */}

        {/* <section className="section">
            <div>
                <div>
                    <h3>Annas Fajar Ramadhan</h3>
                </div>
                <div className="">
                    <h1>Front End Developer</h1>
                    <h1>{title}</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque natus nisi iusto vitae aliquam explicabo a similique quaerat in repellat! Labore reprehenderit impedit eligendi aliquam. Optio vitae sequi laborum dignissimos!</p>
                </div>
                <div>
                    <button>download cv</button>
                    <button>contact me</button>
                </div>
            </div>
            <div>
                <img
                    className="rounded-full w-full h-full object-cover"
                    src={profileImg} alt="s" 
                />
            </div>
        </section> */}
    </>
})

export default SectionsWrapper