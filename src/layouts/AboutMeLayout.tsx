import AboutMe from "../components/aboutMe/AboutMe"
import NavbarTop from "../components/navbarTop/NavbarTop"
import { IoChevronBackOutline } from "react-icons/io5";

const AboutMeLayout = () => {

    return <>
        <div className="bg-gray-200 flex flex-col gap-15">   
            <div className="flex fixed top-0 h-14 items-center z-50 max-md:px-0.5 md:px-9">
                <a href="/">
                    <IoChevronBackOutline 
                        className="text-[20px] cursor-pointer"
                    />
                </a>
            </div>
            <NavbarTop/>
            {/* <div
                className="h-screen flex justify-center items-center w-full"
            >  */}
                <AboutMe/>
            {/* </div> */}
        </div>
    </>
}

export default AboutMeLayout