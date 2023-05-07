import Image from "next/image";
import Head from "next/head";
import { useState, useRef } from "react";
import photo from '../../public/photo.jpg';
import {
  AiOutlineLink,
  AiOutlineGithub,
  AiOutlineMedium,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineFolder
} from "react-icons/ai";
import project_list from "../../components/projectdata";


const Portfolio = () =>{

  const [isNavOpen, setIsNavOpen] =useState(false);
  const [expChoice, setExpChoice] = useState({
    SAP:true,
    SISTMR:false
  });
  const about = useRef(null);
  const experience = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);
  const scrollToSection = (elementRef) =>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:'smooth'

    })
  }

  const downloadFile = () => {
    // using Java Script method to get PDF file
    fetch('Adnan_Shaik_Resume_5.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume 3 - Farhad Anwari';
            alink.click();
        })
    })
  }

  return(
    <div className="bg-gradient-to-r from-[#000000] to-[#2C3E50] min-h-screen min-w-full">
      <Head>
        <title>Farhad Anwari</title>
      </Head>
      <header>
        <section className='' >
          {/* Header */}
          <div className="flex items-center justify-between w-full h-[90px] px-8 py-8 shadow-lg fixed z-20">
            <div className="w-[200px]">
            </div>
            <nav className="">
              {/* hamburger menu */}
              <section className="MOBILE-MENU flex lg:hidden">
                <div className=" space-y-2 cursor-pointer"
                onClick={() => setIsNavOpen((prev) => !prev)} >
                  <span className="ham block h-1 w-10  bg-[#F58F7C]"></span>
                  <span className="ham block h-1 w-10 bg-[#F58F7C]"></span>
                  <span className="ham block h-1 w-10 bg-[#F58F7C]"></span>
                </div>

                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                  <div className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                  >
                  {/* cross mark in the sidebar */}
                  <svg
                    className="h-10 w-10 text-[#F58F7C] cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  {/* for mobile view */}
                </div>
                  <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                    <li className=" my-8 uppercase">
                      <h2 className='text-[#F58F7C] cursor-pointer font-medium text-center text-md
                      '>
                        <a onClick={()=> scrollToSection(about)}>1.<br/>About Me</a>
                      </h2>
                    </li>
                    <li className=" my-8 uppercase">
                      <h2 className='text-[#F58F7C] cursor-pointer font-medium text-md text-center
                      '>
                        <a onClick={()=> scrollToSection(experience)}>2.<br/>Experience</a>
                      </h2>
                    </li>
                    <li className=" my-8 uppercase">
                      <h2 className='text-[#F58F7C] cursor-pointer font-medium text-md text-center
                      '>
                        <a onClick={()=> scrollToSection(project)}>3.<br/>Work</a>
                      </h2>
                    </li>
                    <li className=" my-8 uppercase">
                      <h2 className='text-[#F58F7C] cursor-pointer font-medium text-md text-center
                      '>
                        <a onClick={()=> scrollToSection(contact)}>4.<br/>Contact Me</a>
                      </h2>
                    </li>
                    <li className=" my-8 uppercase">
                      <button className='
                    text-[#F58F7C] cursor-pointer font-medium text-xl border-2 border-[#F58F7C] rounded-md p-2
                    hover:bg-[#D6D6D6]'
                    onClick={downloadFile}>
                        Resume
                      </button>
                    </li>
                  </ul>
                </div>
              </section>
              {/* Desktop view */}
              <ul className="DESKTOP-MENU hidden space-x-8 lg:flex items-center">
                <li>
                  <h2 className='text-[#D6D6D6] cursor-pointer font-medium text-center text-sm
                      hover:text-cyan-400'>
                    <a  onClick={()=> scrollToSection(about)}><span className="text-[#F58F7C] pr-2">1.</span>About Me</a>
                  </h2>
                </li>
                <li>
                  <h2 className='text-[#D6D6D6] cursor-pointer font-medium text-sm text-center
                      hover:text-cyan-400'>
                    <a onClick={()=> scrollToSection(experience)}><span className="text-[#F58F7C] pr-2">2.</span> Experience</a>
                  </h2>
                </li>
                <li>
                  <h2 className='text-[#D6D6D6] cursor-pointer font-medium text-center text-sm
                      hover:text-cyan-400'>
                    <a onClick={()=> scrollToSection(project)}><span className="text-[#F58F7C] pr-2">3.</span>Work</a>
                  </h2>
                </li>
                <li>
                  <h2 className='text-[#D6D6D6] cursor-pointer text-center text-sm font-medium
                      hover:text-cyan-400'>
                    <a onClick={()=> scrollToSection(contact)}><span className="text-[#F58F7C] pr-2">4.</span> Contact</a>
                  </h2>
                </li>
                <li>
                  <button className='bg-transparent
                text-white px-4 py-2 border-[2px] border-[#F58F7C] rounded-md cursor-pointer
                hover:bg-cyan-400 hover:border-none'
                  onClick={downloadFile}>
                    Resume
                  </button>
                </li>
              </ul>
            </nav>
            {/* styles for the sidebar */}
            <style>{`
              .hideMenuNav {
                display: none;
              }
              .showMenuNav {
                display: block;
                position: absolute;
                width: 50%;
                height: 100%;
                top: 0;
                right: 0;
                background: black;
                z-index: 10;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
              }
            `}</style>
          </div>
        </section>
      </header>

      {/* sidebar for social logos and email */}
      <div className="lg:flex flex-col h-[400px] fixed hidden pl-[30px] gap-5 justify-center items-center top-[300px] ">
        <div className="flex flex-col text-gray-500 text-4xl gap-3">
          <a href='https://github.com/farhadanwari/' className="hover:text-[#F58F7C]">
            <AiOutlineGithub/>
          </a>
          <a href='https://medium.com/@farhadanwari58' className="hover:text-[#F58F7C]">
            <AiOutlineMedium/>
          </a>
          <a href='https://www.linkedin.com/in/farhadanwari/' className="hover:text-[#F58F7C]">
            <AiOutlineLinkedin/>
          </a>
          <a href='https://twitter.com/FarhadAnwari8' className="hover:text-[#F58F7C]">
            <AiOutlineTwitter/>
          </a>
        </div>
        <div className="w-[2px] h-full bg-gray-600"></div>
      </div>
      <div className="lg:flex flex-col h-[400px] fixed hidden gap-8 justify-center items-center top-[400px] right-0">
        <div className="rotate-90 text-gray-500 hover:text-[#f58F7C] font-medium">
          <a href='mailto:farhadanwari58@gmail.com'>farhadanwari58@gmail.com</a>
        </div>
        <div className="w-[2px] h-full bg-gray-600 mt-12"></div>
      </div>
      <main className="sm:px-[100px] px-5 min-w-full">
        
        {/* Home section */}
        <section className="w-full h-[500px] pt-[120px]">
          <div className="flex justify-center p-2  flex-col w-auto">
            <h3 className="text-[#F58F7C] lg:text-2xl text-sm font-medium mb-3">Hi, my name is</h3>
            <h1 className=" lg:text-6xl md:text-5xl text-2xl font-semibold mb-3 text-[#D6D6D6]">Farhad Anwari</h1>
            <h2 className="lg:text-4xl md:text-3xl text-md text-[#D6D6D6] font-medium mb-6">
            I hack to protect: safeguarding your systems through skillful infiltration.
            </h2>
            <p className="mb-7 font-medium lg:text-2xl md:text-xl text-md text-[#D6D6D6]">
            Certified in Cybersecurity (CC) | (ISC)² Member | Cybersecurity Professional | Penetration Tester | Coder | CTF Player | Blogger
            </p>
            <a href="https://medium.com/@farhadanwari58">
              <button className="raise bg-transparent w-[200px] h-10 text-[#F58F7C] border-[2.5px] border-[#F58F7C]
              rounded-md cursor-pointer font-medium">
                Check out my blogs
              </button>
            </a>
          </div>
        </section>


        {/* About me section */}
        <section ref={about} className="mt-[100px]">
          <div  className="flex flex-row justify-center items-center">
            {/* Heading */}
            <div className="w-[300px]">
              <h1 className="lg:text-4xl md:text-3xl text-xl text-[#D6D6D6]"><span className="text-[#F58F7c]">01.</span> About Me</h1>
            </div>
            {/* line */}
            <div className="w-full h-[1px] bg-gray-600 mt-2 sm:flex hidden"></div>
          </div>
          <div className="md:grid md:grid-cols-2 lg:mt-10 md:mt-10 mt-5">
            <div className="flex flex-col w-auto justify-center items-center">
              <div className="mb-10">
                <p className="text-[#D6D6D6] leading-7 lg:text-xl md:text-xl text-sm">
                Hello! My name is Farhad.I am a highly skilled cybersecurity professional passionate about hacking, problem-solving, and 
                learning. I actively seek new opportunities to improve my knowledge and expertise. I am avid Capture the Flag (CTF) player and 
                regularly blog about cybersecurity and related topics on Medium. My goal is to improve my personal and professional growth and 
                positively impact the community through my work as a penetration tester, community involvement, and sharing of my knowledge.
                </p>
              </div>
              <div className="flex flex-col text-[#D6D6D6] gap-3">
                <div>
                  <p>Here are few of my skills:</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2">
                  <div>
                    <ul className="list-disc">
                      <li><p>Cybersecurity</p></li>
                      <li><p>Computer Networking</p></li>
                      <li><p>IT Support Specialist</p></li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc">
                      <li><p>Programming Languages(python,java)</p></li>
                      <li><p>Leadership(Event Management, Event Planning)</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-full w-80 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96 mx-auto ">
              <Image src={photo} layout='fill' objectFit='cover' />
            </div>
          </div>
        </section>


        {/* Experience section */}
        <section ref={experience} className="mt-[200px] mb-[200px]">
          {/* Headings */}
          <div className="flex  w-[500px] flex-row items-center lg:justify-center pr-10">
            <div className="text-[#D6D6D6] flex sm:w-[400px] text-xl">
              <h2><span className="text-[#F58F7C] ">02.</span> Where I’ve worked</h2>
            </div>
            <div className="h-[2px] w-[150px] bg-gray-600 mt-2 sm:w-full sm:flex hidden "></div>
          </div>
          {/* main-container */}
          <div className="flex justify-center items-center gap-10 w-auto mt-[50px] lg:pr-0 pr-[70px]">
            <div className="flex flex-row gap-7 lg:w-[800px] sm:w-[400px] w-auto">
              {/* Roles */}
              <div className="flex flex-col gap-4 ">
                <button className={ expChoice.SAP ? "border-none px-2 py-1 text-[#F58F7C] font-medium cursor-pointer":
                "border-none px-2 py-1 text-gray-300 font-medium hover:bg-white hover:opacity-[0.6] cursor-pointer"}
                onClick={()=>setExpChoice({
                  SAP:true,
                  SISTMR:false
                })}>
                  SAP
                </button>
                <button className={ expChoice.SISTMR ? "border-none px-2 py-1 text-[#F58F7C] font-medium cursor-pointer":
                "border-none px-2 py-1 text-gray-300 font-medium hover:bg-white hover:opacity-[0.6] cursor-pointer"}
                onClick={()=>setExpChoice({
                  SAP:false,
                  SISTMR:true
                })}>
                  SISTMR
                </button>
              </div>
              {/* role description */}
              {expChoice.SAP ? (
                <div className="flex flex-col gap-2 text-gray-300">
                  <h1 className="text-[#D6D6D6] sm:text-xl text-md font-semibold">Cybersecurity Engineering Intern <a className="text-[#F58F7C] font-semibold">@SAP</a></h1>
                  <h3 className="sm:text-md text-xs">September 2022 – September 2022</h3>
                  <ul className="list-disc text-gray-600 font-medium sm:text-xl text-sm">
                    <li>
                    Improved the organization’s security posture by identifying and reporting on weaknesses in their
                    security policy
                    </li>
                    <li>
                    Implemented and configured Windows Server 2019 for clients, helping to secure their systems and
                    servers
                    </li>
                    <li>
                    Created a robust password management system and policy, reducing the risk of password
                    compromise
                    </li>
                    <li>
                    Trained employees to identify and prevent phishing attacks, thus enhancing the security and
                    protection of systems.
                    </li>
                  </ul>
                </div>
              ):(
                <div className="flex flex-col gap-2 text-gray-600">
                  <h1 className="text-[#D6D6D6] sm:text-xl text-md font-semibold">Research Intern <a href='https://cyberpritam.com' className="text-[#F58F7C] font-semibold">@SISTMR</a></h1>
                  <h3 className="sm:text-md text-xs text-[#D6D6D6]">Janaury 2022 – March 2022</h3>
                  <ul className="list-disc font-medium sm:text-xl text-sm">
                    <li>
                    Demonstrated cybersecurity expertise as a research intern in a cybersecurity program.
                    </li>
                    <li>
                    Conducted advanced tasks using tools like Nmap, BurpSuit, and WpScan on various systems.
                    </li>
                    <li>
                    Studied and applied knowledge of exploits, vulnerabilities, scanning, and footprinting tools and
                    concepts.
                    </li>
                    <li>
                      Conducted research on exploiting WordPress websites, Bitnami, Windows, and Android devices.
                    </li>
                    <li>
                    Identified and exploited vulnerabilities in Windows and Android machines using Metasploit,
                    msfvenom, backdoors, and reverse shells.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* projects */}
        <section ref={project} className="mb-[50px]">
          <div className="flex flex-row items-center gap-5">
            {/* Heading */}
            <h1 className="text-[#D6D6D6] text-2xl font-semibold"><span className="text-[#F58F7C]">03.</span> Some Things I’ve Built</h1>
            {/* line */}
            <div className="flex w-[120px] lg:w-[400px] h-[1px] bg-gray-600 sm:flex hidden"></div>
          </div>
          <div className="w-full h-auto py-12 px-6">
            <div className='grid lg:grid-cols-2 gap-5'>
              {project_list.map((project) => {
              const {id,name,desc,link,pic} = project;

              return(
                  <div key={id} className='flex flex-col gap-3 text-center shadow-2xl p-[50px] rounded-md my-10 md:w-[96] lg:h-[300px] bg-gray-800 hover:bg-black'>
                  <div className="flex flex-row gap-7 items-center justify-between">
                    <div className="text-yellow-500 text-3xl"><AiOutlineFolder/></div>
                    <div>
                      <h1 className="text-white font-medium">{name}</h1>
                    </div>
                    <div>
                      <a href={link} className="text-white text-xl hover:text-[#F58F7C] cursor-pointer">
                        <AiOutlineLink/>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-white">{desc}</p>
                  </div>
                </div>
                  )})}
            </div>
          </div>
        </section>

        {/* contact section */}
        <section ref={contact} className="pt-[100px]">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="text-[#F58F7C]">
              <h2 className="text-xl font-medium"><span>04.</span>What’s Next</h2>
            </div>
            <div className="text-gray-600 text-3xl font-medium">
              <h1>Get In Touch</h1>
            </div>
            <div className="sm:w-[700px] leading-7 text-center text-sm sm:text-xl mb-5">
              <p className="text-md text-[#D6D6D6]  font-medium">
              Although I’m not currently looking for any new opportunities, 
              my inbox is always open. Whether you have a question or just want to 
              say hi, I’ll try my best to get back to you!
              </p>
            </div>
            <div>
              <a href='mailto:farhadanwari58@gmail.com'>
                <button className="raise p-2 border-[2px] rounded-md border-[#F58F7C] 
                text-[#F58F7C]">Say Hello!</button>
              </a>
            </div>
          </div>
          <div className="lg:hidden text-3xl sm:text-5xl flex flex-row text-gray-600 justify-center gap-3 mt-7">
            <a href='https://github.com/farhadanwari' className="hover:text-[#F58F7C]">
              <AiOutlineGithub/>
            </a>
            <a href='https://medium.com/@farhadanwari58' className="hover:text-[#F58F7C]">
              <AiOutlineMedium/>
            </a>
            <a href='https://www.linkedin.com/in/farhadanwari/' className="hover:text-[#F58F7C]">
              <AiOutlineLinkedin/>
            </a>
            <a href='https://twitter.com/FarhadAnwari8' className="hover:text-[#F58F7C]">
              <AiOutlineTwitter/>
            </a>
          </div>
        </section>
        {/* Footer section */}
        <section className="mt-10 shadow-lg py-[50px]">
          <div className="flex text-gray-600 text-md sm:text-xl justify-center cursor-pointer">
            <a href='https://github.com/adnan179' className="hover:text-[#F58F7C]">Designed &#38; Built By Adnan Shaik</a>
          </div>
        </section>
      </main>
    </div>
  )

}
export default Portfolio;
