import { LiaAngleDoubleRightSolid } from "react-icons/lia";

export default function Navbar() {
  return (
    <header className='bg-dark fixed top-0 left-0 right-0 z-50 sm:sticky'>
      <div className='container mx-auto flex flex-row justify-between py-3 sm:flex-row'>
        <div className='title-font font-medium m-1 ml-4 sm:mb-0'>
          <a href='#home' className='text-rocketblue text-base sm:text-xl'>
            Manuel Di Lena
          </a>
        </div>
        <div className='flex'>
          <nav className='text-light hidden sm:flex flex-wrap items-center justify-center'>
            <LiaAngleDoubleRightSolid className='mr-1 text-rocketblue' />
            <a href='#about' className='mr-5 hover:text-rocketblue'>About</a>

            <LiaAngleDoubleRightSolid className='mr-1 text-rocketblue' />
            <a href='#skills' className='mr-5 hover:text-rocketblue'>Skills</a>

            <LiaAngleDoubleRightSolid className='mr-1 text-rocketblue' />
            <a href='#works' className='mr-5 hover:text-rocketblue'>Works</a>

            <LiaAngleDoubleRightSolid className='mr-1 text-rocketblue' />
            <a href='#contact' className='mr-5 hover:text-rocketblue'>Contact</a>
          </nav>
          <a href='https://flowcv.com/resume/strljaup15' className='text-rocketblue mr-5 border-solid border-2 rounded-md py-1 px-2 transition duration-300 hover:bg-gray'>
              Resume
            </a>
        </div>
      </div>
    </header>
  );
}



