const AnimateInOut = async ({transition,animate,scope,sections,activeSection, setVisibleSection, setIsOut}) => {
    
    const switchSection = () => sections.current[activeSection]?.scrollIntoView({behavior:'smooth'})
    const exitAnimation = () => {
        console.log(`out ${activeSection}`)
        return animate(scope.current, {y:-800}, {duration:2} )
    }
    const enterAnimation = () => {
        console.log(`in ${activeSection}`)
        return animate(scope.current, {opacity:1}, {duration:2})
        }
    await exitAnimation()
    setIsOut(activeSection)
    
    
    // switchSection()

    setVisibleSection(activeSection)
    await enterAnimation()
    console.log(`in ${activeSection}`)


    // let transitionSection = transition.current
    

    // switchSection
    console.log(`visible ${activeSection}`)
    // transitionIn



    transition.current = false
    // console.log(transition.current)
    console.log('animasi out')
    // setVisibleSection(activeSection)
}

export {AnimateInOut} 