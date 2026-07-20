import { AnimatePresence, motion } from "motion/react"
import aboutMe from '../../assets/images/aboutMe.jpg'
import { PiStarFourFill } from "react-icons/pi";
import { FaSpotify } from "react-icons/fa";
import { DiCodepen } from "react-icons/di";
import { LuWebhook } from "react-icons/lu";
import { TbCertificate } from "react-icons/tb";

const AboutMe = () => {
    const descVariants = {
        enter: { opacity: 0, x: -50 },
        center: { opacity: 1, x: 0 },
    };

    const underVariants = {
        enter: { opacity: 0, x: 120 },
        center: { opacity: 1, x: 0 },
    };

    const imgVariants = {
        enter: { 
            // height: "50vh",
            opacity: 1, 
            scale: 1,  // mulai lebih kecil
            // x: 80
        },
        center: {  
            opacity: 1,
            scale: 1.49,     // membesar ke ukuran normal
            // height: "100vh",
            transition: { duration: 0.6, ease: "easeOut" as const}
            // x: 0
        },
    };

    const buttonVariants = {
        enter: { opacity: 0, y: 0 },
        center: { opacity: 1, y: 0 },
    };

    return <>
        <AnimatePresence
            mode="wait"
        >
            <motion.section
                // variants={childVariants}
                // initial='enter1'
                className="h-screen flex justify-center items-center w-full overflow-hidden relative"
            >
                <motion.div 
                    className="md:p-10 max-md:flex-col-reverse  flex justify-between items-center max-md:mx-auto max-md:w-full w-[82%] max-w-screen-2xl relative"
                >
                    <motion.div
                        className="max-md:w-full max-md:px-9.25 max-md:z-10 md:pr-3 max-md:gap-6 md:gap-4 z-10 flex flex-col max-md:bg-gray-200"
                        // style={{scaleX:1.4}}
                    >
                        <motion.div 
                            className="max-md:gap-4 max-md:flex max-md:flex-col "    
                        >
                            <motion.h1
                                className="max-md:text-4xl max-md:bg-white max-md:w-fit max-md:px-2 font-jost font-bold text-[78px]"
                                // variants={descVariants}
                                // initial="enter"
                                // animate="center"
                                // transition={{
                                //     x: {
                                //         type: "spring",
                                //         stiffness: 150,   // makin kecil = makin lambat
                                //         damping: 9,      // makin kecil = makin mantul
                                //         mass: 1.5,       // makin besar = makin berat & lambat
                                //     },
                                //     opacity: { duration: 1 }
                                // }}
                            >
                                About Me
                            </motion.h1>
                            <motion.div
                                className="gap-1.5 flex flex-col"
                            >
                                <motion.div
                                    className="rounded-2xl w-16 h-1 bg-gray-700"
                                    variants={descVariants}
                                    initial="enter"
                                    animate="center"
                                    transition={{
                                        x: {
                                            type: "spring",
                                            stiffness: 110,   // makin kecil = makin lambat
                                            damping: 20,      // makin kecil = makin mantul
                                            mass: 2,       // makin besar = makin berat & lambat
                                        },
                                        opacity: { duration: 1 }
                                    }}
                                ></motion.div>
                                <motion.div
                                    className="px-11"
                                >
                                    <motion.div
                                        className="rounded-2xl w-16 h-1 bg-gray-700 mr-4"
                                        variants={underVariants}
                                        initial="enter"
                                        animate="center"
                                        transition={{
                                            x: {
                                                type: "spring",
                                                stiffness: 110,   // makin kecil = makin lambat
                                                damping: 20,      // makin kecil = makin mantul
                                                mass: 2,       // makin besar = makin berat & lambat
                                            },
                                            opacity: { duration: 1 }
                                        }}
                                    ></motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.p
                            className="font-jost text-[16px] text-gray-500 bg-gray-200"
                            // variants={descVariants}
                            // initial="enter"
                            // animate="center"
                            // transition={{
                            //     x: {
                            //         type: "spring",
                            //         stiffness: 130,   // makin kecil = makin lambat
                            //         damping: 9,      // makin kecil = makin mantul
                            //         mass: 1.5,       // makin besar = makin berat & lambat
                            //     },
                            //     opacity: { duration: 1 }
                            // }}
                        >
                            A brief introduction my journey as a software engineer.
                        </motion.p>
                        <motion.div
                            className="flex "
                            variants={buttonVariants}
                            initial="enter"
                            animate="center"
                            transition={{
                                y: {
                                    type: "spring",
                                    stiffness: 150,   // makin kecil = makin lambat
                                    damping: 11,      // makin kecil = makin mantul
                                    mass: 1.5,       // makin besar = makin berat & lambat
                                    delay:0.3
                                },
                                opacity: { duration: 1.5, delay:0.3 }
                            }}
                        >
                            <a href="/aboutMe">
                                <motion.button
                                    className="mr-3 font-jost text-[13px] rounded-2xl px-7 py-2 shadow-md transition duration-300 ease-in-out bg-gray-700 hover:bg-transparent border-transparent hover:border-gray-700 border-2 text-gray-100 hover:text-gray-700 box-border cursor-pointer"
                                >
                                    Scroll Down
                                </motion.button>
                            </a>
                            {/* <button
                                className="mr-3 font-jost text-[13px] rounded-2xl px-7 py-2 shadow-md transition duration-300 ease-in-out transparent border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-gray-100 box-border"
                            >Contact Me</button> */}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="md:w-100 md:h-100 max-md:w-full max-md:h-100 relative max-md:px-9.25"
                        transition={{
                            x: {
                                
                                type: "spring",
                                stiffness: 50,   // makin kecil = makin lambat
                                damping: 9,      // makin kecil = makin mantul
                                mass: 1.5,       // makin besar = makin berat & lambat
                                delay:0.8
                            },
                            opacity: { duration: 1, delay:0.8}
                        }}
                    >
                        <motion.img 
                            variants={imgVariants}
                            initial="enter"
                            animate="center"
                            src={aboutMe}  
                            alt="profile" 
                            className="relative inset-0 w-full h-full  transition ease-in-out duration-300 object-cover grayscale hover:grayscale-0"
                            // style={{color:"transparent"}}    
                        />
                    </motion.div>
                </motion.div>
                
            </motion.section>
            <motion.section className="md:p-10 w-[90%] mx-auto">
                <motion.div
                    className="gap-1.5 flex flex-col"
                >
                    <motion.div
                        className="px-11"
                    >
                        <motion.div
                            className="rounded-2xl w-16 h-1 bg-gray-700"
                            // variants={descVariants}
                            initial={{ opacity: 0, x: -100 }}
                            // animate="center"
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{
                                x: {
                                    type: "spring",
                                    stiffness: 70,   // makin kecil = makin lambat
                                    damping: 20,      // makin kecil = makin mantul
                                    mass: 2,       // makin besar = makin berat & lambat
                                },
                                opacity: { duration: 1 }
                            }}
                        ></motion.div>
                    </motion.div>
                        <motion.div
                            className="rounded-2xl w-16 h-1 bg-gray-700 mr-4"
                            // variants={underVariants}
                            initial={{ opacity: 0, x: 250 }}
                            // animate="center"
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{
                                x: {
                                    type: "spring",
                                    stiffness: 70,   // makin kecil = makin lambat
                                    damping: 20,      // makin kecil = makin mantul
                                    mass: 2,       // makin besar = makin berat & lambat
                                },
                                opacity: { duration: 1 }
                            }}
                        ></motion.div>
                </motion.div>
                <motion.div
                    className="flex flex-col gap-2"
                >
                    <h1
                        className="text-[22px]"
                    >Who Am I?</h1>
                    <motion.div 
                        className="flex-center bg-amber-300 gap-7 p-4"
                    >
                        <div
                            className="md:w-400 h-full bg-amber-600"
                        >
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            bg
                        </div>
                        <div 
                            className="bg-amber-700 flex flex-col gap-1"
                        >
                            <h1>Annas Fajar Ramadhan</h1>
                            <div 
                                className="flex flex-col gap-3"
                            >
                                <h4>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae incidunt quam, obcaecati animi quae rem pariatur quas voluptatibus, numquam nihil nulla! Numquam hic ex perferendis temporibus quia, reiciendis harum!
                                </h4>
                                <h4>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae incidunt quam, obcaecati animi quae rem pariatur quas voluptatibus, numquam nihil nulla! Numquam hic ex perferendis temporibus quia, reiciendis harum!
                                </h4>
                                <h4>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae incidunt quam, obcaecati animi quae rem pariatur quas voluptatibus, numquam nihil nulla! Numquam hic ex perferendis temporibus quia, reiciendis harum!
                                </h4>
                            </div>
                            <div 
                                className="flex justify-items-start py-2 px-3 bg-white mt-2 border-2 rounded-[10px] border-gray-500 gap-8"
                            >
                                <div
                                    className="flex-center "
                                >
                                    <FaSpotify
                                        className="text-[40px]"
                                    />
                                </div>
                                <div>
                                    <h4>Currently</h4>
                                    <h1>Offline</h1>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>
            <motion.section
                className="md:p-10 w-[90%] mx-auto"
            >
                <div 
                    className="flex-center flex-col gap-5"
                >
                    <div
                        className="flex-center flex-col text-center gap-3"
                    >
                        <h1
                            className="text-[39px] leading-9.75 font-jost font-bold"
                        >Skills & Expertise</h1>
                        <p
                            className="font-jost leading-relaxed text-[16px] text-gray-700/90"
                        >Explore my technical skills in web development, complete with the specific technologies and tools I use.</p>
                    </div>
                    <div
                        className="flex-center gap-4 flex-wrap"
                    >
                        <div
                            className="flex-center gap-4 flex-wrap"
                        >
                            <div
                                className="flex-center flex-col text-center h-40 w-65 max-sm:w-[95%] p-3 border-2 border-gray-950 rounded-[12px] gap-1"
                            >
                                <DiCodepen 
                                    className="h-10 w-10"
                                />
                                <h1
                                    className="font-jost font-semibold text-[14.625px] leading-[22.75px]"
                                >Web Development</h1>
                                <p
                                    className="font-jost leading-[16.25px] text-[13px] text-gray-700/90"
                                >Building modern, responsive web applications</p>
                            </div>
                            <div
                                className="flex-center flex-col text-center h-40 w-65 max-sm:w-[95%] p-3 border-2 border-gray-950 rounded-[12px] gap-1"
                            >
                                <LuWebhook 
                                    className="h-8 w-8"
                                />
                                <h1
                                    className="font-jost font-semibold text-[14.625px] leading-[22.75px]"
                                >Backend & API</h1>
                                <p
                                    className="font-jost leading-[16.25px] text-[13px] text-gray-700/90"
                                >Creating robust and scalable backend services</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="max-sm:w-[95%] sm:w-[82%] gap-4 flex-center flex-col text-center w-65 p-6 border border-gray-300 rounded-xl bg-gray-100 inset-shadow-xs shadow-black-300 shadow-md"
                    >
                        <h1
                            className="font-jost font-semibold text-[19.5px] leading-6.5"
                        >Technology Stack</h1>
                        <div
                            className="flex-center flex-wrap gap-x-2 gap-y-3 text-[12px]"
                        >
                            <div
                                className="h-8 p-4 bg-black text-white rounded-4xl flex-center "
                            >
                                <div className="flex-center gap-1">
                                    <PiStarFourFill className="text-[8px] text-amber-300 animate-pulse"/>
                                    <p className="h-fit m-0 p-0 font-jost font-medium leading-[16.25px]">React</p>
                                </div>
                            </div>
                            <div
                                className="h-8 p-4 bg-black text-white rounded-4xl flex-center "
                            >
                                <div className="flex-center gap-1">
                                    <PiStarFourFill className="text-[8px] text-amber-300 animate-pulse"/>
                                    <p className="h-fit m-0 p-0 font-jost font-medium leading-[16.25px]">TypeScript</p>
                                </div>
                            </div>
                            <div
                                className="h-8 p-4 outline-1 outline-gray-400 text-black rounded-4xl flex-center"
                            >
                                <div className="flex-center gap-1">
                                    <p className="h-fit m-0 p-0 font-jost font-medium leading-[16.25px]">JavaScript</p>
                                </div>
                            </div>
                            <div
                                className="h-8 p-4 bg-black text-white rounded-4xl flex-center "
                            >
                                <div className="flex-center gap-1">
                                    <PiStarFourFill className="text-[8px] text-amber-300 animate-pulse"/>
                                    <p className="h-fit m-0 p-0 font-jost font-medium leading-[16.25px]">TailwindCSS</p>
                                </div>
                            </div>
                            <div
                                className="h-8 p-4 outline-1 outline-gray-400 text-black rounded-4xl flex-center"
                            >
                                <div className="flex-center gap-1">
                                    <p className="h-fit m-0 p-0 font-jost font-medium leading-[16.25px]">HTML</p>
                                </div>
                            </div>
                            <div
                                className="h-8 p-4 outline-1 outline-gray-400 text-black rounded-4xl flex-center"
                            >
                                <div className="flex-center gap-1">
                                    <p className="h-fit m-0 p-0 font-jost font-medium leading-[16.25px]">CSS</p>
                                </div>
                            </div>
                            <div
                                className="h-8 p-4 outline-1 outline-gray-400 text-black rounded-4xl flex-center"
                            >
                                <div className="flex-center gap-1">
                                    <p className="h-fit m-0 p-0 font-jost font-medium leading-[16.25px]">Bootstrap</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="max-sm:w-[95%] sm:w-[82%] gap-4 flex-center flex-col text-center w-65 p-6 border border-gray-200 rounded-xl bg-white/20 inset-shadow-xs shadow-black-300 shadow-md"
                    >
                        <h1
                            className="font-jost font-medium text-[17px] leading-6.5 text-gray-500"
                        >INFRASTRUCTURE & TOOLS</h1>
                        <div
                            className="flex-center flex-wrap gap-x-2 gap-y-3 text-xs"
                        >
                            <div
                                className="h-8 px-4 flex-center bg-gray-300/40 border border-gray-500/20 text-gray-600 rounded-[10px]"
                            >
                                <p className="h-fit m-0 p-0 font-jost font-medium leading-[16.25px]">Vercel</p>
                            </div>
                            <div
                                className="h-8 px-4 flex-center bg-gray-300/40 border border-gray-500/20 text-gray-600 rounded-[10px]"
                            >
                                <p className="h-fit m-0 p-0 font-jost font-medium leading-[16.25px]">Figma</p>
                            </div>
                            <div
                                className="h-8 px-4 flex-center bg-gray-300/40 border border-gray-500/20 text-gray-600 rounded-[10px]"
                            >
                                <p className="h-fit m-0 p-0 font-jost font-medium leading-[16.25px]">Docker</p>
                            </div>
                            <div
                                className="h-8 px-4 flex-center bg-gray-300/40 border border-gray-500/20 text-gray-600 rounded-[10px]"
                            >
                                <p className="h-fit m-0 p-0 font-jost font-medium leading-[16.25px]">Git</p>
                            </div>
                            <div
                                className="h-8 px-4 flex-center bg-gray-300/40 border border-gray-500/20 text-gray-600 rounded-[10px]"
                            >
                                <p className="h-fit m-0 p-0 font-jost font-medium leading-[16.25px]">Github</p>
                            </div>
                            <div
                                className="h-8 px-4 flex-center bg-gray-300/40 border border-gray-500/20 text-gray-600 rounded-[10px]"
                            >
                                <p className="h-fit m-0 p-0 font-jost font-medium leading-[16.25px]">Gitlab</p>
                            </div>
                            <div
                                className="h-8 px-4 flex-center bg-gray-300/40 border border-gray-500/20 text-gray-600 rounded-[10px]"
                            >
                                <p className="h-fit m-0 p-0 font-jost font-medium leading-[16.25px]">Postman</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
            <motion.section
                className="w-[90%]  flex-center mx-auto"
            >
                <div  className="flex-center flex-col gap-11">
                    <div
                        className="flex-center flex-col text-center gap-1.5"
                    >
                        <h1 
                            className="font-jost text-[29.25px] font-bold leading-[32.5px]"
                            >Education</h1>
                        <h5
                            className="font-poppins text-[13px] leading-[19.5px]"
                        >Get to know more about my educational background.</h5>
                    </div>
                    <div
                        className="flex items-center flex-wrap gap-4 md:justify-between max-md:justify-center w-[89%]"
                    >
                        <div className="flex flex-col gap-2 md:w-[47%] mb-12 ">
                            <div>
                                <h1
                                    className="font-poppins font-medium text-[14.625px] leading-[14.625px]"
                                >2024 - Present <span className="italic">(Semester 6 of 8)</span></h1>
                            </div>
                            <div>
                                <h1
                                    className="font-jost font-semibold text-[16.25px] leading-[22.75px]"
                                >Universitas Indraprasta</h1>
                                <h5
                                    className="font-jost text-[13px] leading-[19.5px]"
                                >S1 Teknik Informatika | Computer Science</h5>
                            </div>
                            <div
                            className="flex-center flex gap-2 [&:hover>*:not(:hover)]:flex-[0.6] [&:hover>*:not(:hover)]:opacity-75"
                            >
                                <div
                                    className="flex-1 hover:flex-[2.2] max-md:hover:flex-1 transition-all duration-400 overflow-hidden rounded-xl"
                                >
                                    <img src={aboutMe} alt="" 
                                        className="w-full h-80 max-md:h-48 object-cover transition-transform duration-400"
                                    />
                                </div>
                                <div
                                    className="flex-1 hover:flex-[2.2] max-md:hover:flex-1 transition-all duration-400 overflow-hidden rounded-xl"
                                >
                                    <img src={aboutMe} alt="" 
                                        className="w-full h-80 max-md:h-48 object-cover transition-transform duration-400"
                                    />
                                </div>
                                <div
                                    className="flex-1 hover:flex-[2.2] max-md:hover:flex-1 transition-all duration-400 overflow-hidden rounded-xl"
                                >
                                    <img src={aboutMe} alt="" 
                                        className="w-full h-80 max-md:h-48 object-cover  transition-transform duration-400"
                                    />
                                </div>
                            </div>
                            <div>
                                <p 
                                    className="text-justify font-jost text-[15px] leading-5.5 text-gray-700">
                                    Lorem ipsum dolor sit amet,{" "}<span className="font-semibold text-black">consectetur adipisicing elit</span>. Facilis deserunt est vitae minus at quis, laboriosam commodi aliquam nihil, ipsum, officia beatae tenetur sint excepturi repellat odit ab cum ipsam.
                                    <br/>
                                    <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis deserunt est vitae minus at quis, laboriosam commodi aliquam nihil, ipsum {" "} 
                                    <span className="font-semibold text-black">
                                        consectetur adipisicing elit
                                    </span> 
                                    {" "}cum ipsam.
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis deserunt est vitae minus at quis, laboriosam commodi aliquam nihil, ipsum, officia beatae tenetur{" "}    
                                    <span className="font-semibold text-black">
                                        sintexcepturi sda odit ab cum ipsam
                                    </span>
                                    .
                                </p>
                                
                            </div>
                        </div>
                        <div className="flex flex-col gap-7 w-full md:w-[47%] self-start">
                            <div>
                                <h1
                                    className="font-jost font-semibold text-[16.25px] leading-[22.75px]"
                                >Certificate</h1>
                                <h5
                                    className="font-poppins text-[13px] leading-[19.5px]"
                                >Some of my certificates during my study.</h5>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div 
                                    className="flex-center gap-3"
                                >
                                    <h1
                                        className="font-jost text-[11px] font-medium leading-[19.5px] text-blue-900"
                                    >2025</h1>
                                    <div
                                        className="flex-center border border-gray-500  w-full"
                                    ></div>
                                </div>
                                <div
                                    className="flex flex-col gap-2"
                                >
                                    <div
                                        className=" gap-4 flex-center flex-col text-center w-full p-6 border border-gray-300 rounded-xl bg-gray-100 inset-shadow-xs shadow-black-300 shadow-md"
                                    >
                                        <div 
                                            className="flex justify-center items-center self-start gap-3"
                                        >
                                            <div
                                                className="bg-amber-300 rounded-full h-9 w-9 flex-center"
                                            >
                                                <TbCertificate 
                                                    className="text-[21px] text-white"
                                                />
                                            </div>
                                            <div
                                                className="text-start"
                                            >
                                                <h1
                                                    className="font-jost text-[13px] leading-[19.5px] font-medium"
                                                >1st place (Gold Medal)</h1>
                                                <h2
                                                    className="font-poppins text-[11.375px] leading-[16.25px]"
                                                >Indonesia Inventor Day 2024 (IID)</h2>
                                                <p
                                                    className="font-poppins text-[11.375px] leading-[16.25px] text-gray-900/40"
                                                >mar 2025</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className=" gap-4 flex-center flex-col text-center w-full p-6 border border-gray-300 rounded-xl bg-gray-100 inset-shadow-xs shadow-black-300 shadow-md"
                                    >
                                        <div 
                                            className="flex justify-center items-center self-start gap-3"
                                        >
                                            <div
                                                className="bg-amber-300 rounded-full h-9 w-9 flex-center"
                                            >
                                                <TbCertificate 
                                                    className="text-[21px] text-white"
                                                />
                                            </div>
                                            <div
                                                className="text-start"
                                            >
                                                <h1
                                                    className="font-jost text-[13px] leading-[19.5px] font-medium"
                                                >1st place (Gold Medal)</h1>
                                                <h2
                                                    className="font-poppins text-[11.375px] leading-[16.25px]"
                                                >Indonesia Inventor Day 2024 (IID)</h2>
                                                <p
                                                    className="font-poppins text-[11.375px] leading-[16.25px] text-gray-900/40"
                                                >mar 2025</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className=" gap-4 flex-center flex-col text-center w-full p-6 border border-gray-300 rounded-xl bg-gray-100 inset-shadow-xs shadow-black-300 shadow-md"
                                    >
                                        <div 
                                            className="flex justify-center items-center self-start gap-3"
                                        >
                                            <div
                                                className="bg-amber-300 rounded-full h-9 w-9 flex-center"
                                            >
                                                <TbCertificate 
                                                    className="text-[21px] text-white"
                                                />
                                            </div>
                                            <div
                                                className="text-start"
                                            >
                                                <h1
                                                    className="font-jost text-[13px] leading-[19.5px] font-medium"
                                                >1st place (Gold Medal)</h1>
                                                <h2
                                                    className="font-poppins text-[11.375px] leading-[16.25px]"
                                                >Indonesia Inventor Day 2024 (IID)</h2>
                                                <p
                                                    className="font-poppins text-[11.375px] leading-[16.25px] text-gray-900/40"
                                                >mar 2025</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </AnimatePresence>
    </>
}

export default AboutMe