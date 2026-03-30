import { useInView } from 'motion/react'
import { motion } from 'motion/react'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { useScroll } from '../context/ScrollContext'
import Section from './section/Section'

type SectionProps = {
    title: string
}

const SectionsWrapper = forwardRef<HTMLDivElement, SectionProps>(({_},ref) => {
    const {activeSection, setActiveSection} = useScroll()
    const localRef = useRef([])
    const section = ['Home','About Me','My Projects', 'Contacts']
    // const isAnimate = useRef(false)
    // const indexRef = useRef(0)
    useImperativeHandle(ref, ()=>({ //penjelasan claude => penjelasan forwardRef + useImperativeHandle
        scrollTo(index) {
            localRef.current[index]?.scrollIntoView({
                behavior:'smooth',
            })
            // setActiveSection(index)
            console.log(`hal ${index}`)
        },
    }))

    // useEffect(()=>{
    //     console.log(localRef.current)
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
        <div>
            {section.map((title,i)=>(
                <Section 
                    ref={(el)=>(localRef.current[i] = el)} 
                    title={title} 
                    index={i}
                />        
            ))}
        </div>
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