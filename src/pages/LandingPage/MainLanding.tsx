import HomeLayout from "../../layouts/HomeLayouts"
import ScrollProvider from "../../context/ScrollProvider"
// import { ScrollProvider } from "../../context/ScrollContext"

const MainLanding = () => {
    // landing page
    // const homeRef = useRef(null)
    // const aboutRef = useRef(null)
    // const projectsRef = useRef(null)
    // const contactsRef = useRef(null)

    // navbar left
    // const navHome = useRef(null)
    // const navAbout = useRef(null)
    // const navProjects = useRef(null)
    // const navContacts = useRef(null)
    
    return (
        <>
            {/* <div className="main bg-red-300 no-scrollbar"> */}
                {/* navbar top */}
                {/* <nav className="navbarTop z-20"> */}
                    {/* <h3>Annas</h3>
                    <h3>=</h3> */}
                {/* </nav> */}

                {/* navbar left */}
                {/* <div className="bg-amber-300 flex flex-col items-center justify-between fixed left-0 z-40 top-1/4 h-[50vh] p-1"> */}
                    {/* <NavbarLeft title={'home'} navLeft={navHome} landingRef={homeRef}/>
                    <NavbarLeft title={'about'} navLeft={navAbout} landingRef={aboutRef}/>
                    <NavbarLeft title={'projects'} navLeft={navProjects} landingRef={projectsRef}/>
                    <NavbarLeft title={'contacts'} navLeft={navContacts} landingRef={contactsRef}/> */}
                {/* </div> */}

                <ScrollProvider>
                    <HomeLayout/>
                </ScrollProvider>
                {/* <div className=""> */}
                    {/* home/landing */}
                    {/* <Section title={'Home'} landingRef={homeRef} navRef={navHome}/>
                    <Section title={'About'} landingRef={aboutRef} navRef={navAbout}/>
                    <Section title={'Projects'} landingRef={projectsRef} navRef={navProjects}/>
                    <Section title={'Contacts'} landingRef={contactsRef} navRef={navContacts}/> */}
                {/* </div> */}
            {/* </div> */}
        </>
    )
}

export default MainLanding