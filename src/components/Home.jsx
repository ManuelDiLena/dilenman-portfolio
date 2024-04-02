import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from 'react-icons/sl';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CiMail } from "react-icons/ci";

export default function Home() {
  return (
    <section id='home'>
      <div className='container mx-auto flex flex-col sm:flex-row px-10 py-10 bg-gray justify-around items-center'>
        <div className='flex flex-col justify-evenly mt-8'>
          <p className='text-light title-font sm:text-3xl mb-4 font-medium text-2xl'>
            Hi, my name is
          </p>
          <h1 className='text-rocketblue title-font sm:text-5xl text-4xl font-bold mb-4'>
            Manuel Di Lena
          </h1>
          <h2 className='text-rocketblue title-font sm:text-5xl text-4xl'>
            FullStack Developer
          </h2>
          <div className='sm:mt-8 mt-4 sm:text-left text-text sm:text-xl sm:w-3/4'>
            <p className='mb-4'>A developer based in Valencia, Spain, specializing in building (and occasionally designing) seamless digital experiences.</p>
            <p>I really like creating, designing and building products to help solve and improve problems.</p>
          </div>
          <div className='flex sm:justify-start justify-around mt-8 sm:text-3xl'>
            <a href='#contact' className='text-gray bg-rocketblue border-0 rounded-md font-medium sm:py-3 px-6 py-3 mr-8 transition duration-300 focus:outline-none hover:scale-105'>
              Work With Me
            </a>
            <a href='#works' className='text-rocketblue bg-transparent border-solid border-2 rounded-md font-medium sm:py-3 sm:px-6 p-3 transition duration-300 focus:outline-none hover:scale-105 hover:bg-dark'>
              Know My Projects
            </a>
          </div>
        </div>
        <div className='flex sm:flex-col sm:justify-evenly justify-around mt-8'>
          <a href='https://github.com/ManuelDiLena' className='text-rocketblue sm:text-4xl text-3xl p-1 mx-1 my-4 transition duration-300 hover:scale-125'>
            <FiGithub/>
          </a>
          <a href='https://www.linkedin.com/in/manueldilena/' className='text-rocketblue sm:text-4xl text-3xl p-1 mx-1 my-4 transition duration-300 hover:scale-125'>
            <SlSocialLinkedin/>
          </a>
          <a href='https://www.instagram.com/manuudilena/' className='text-rocketblue sm:text-4xl text-3xl p-1 mx-1 my-4 transition duration-300 hover:scale-125'>
            <AiOutlineInstagram/>
          </a>
          <a href='#contact' className='text-rocketblue sm:text-4xl text-3xl p-1 mx-1 my-4 transition duration-300 hover:scale-125'>
            <CiMail />
          </a>
        </div>
      </div>
    </section>
  );
}