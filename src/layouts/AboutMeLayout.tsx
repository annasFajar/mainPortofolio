import AboutMe from "../components/aboutMe/AboutMe"
import NavbarTop from "../components/navbarTop/NavbarTop"

const AboutMeLayout = () => {

    return <>
        <div>
            <NavbarTop/>
            <div
                className="h-screen flex justify-center items-center bg-amber-200"
            > 
                <AboutMe/>
            </div>
        </div>
    </>
}

export default AboutMeLayout