import { RiInformationLine } from 'react-icons/ri';

export default function About() {
  return (
    <section id='about'>
      <div className='container mx-auto flex flex-col px-10 sm:py-20 py-16 bg-gray justify-around items-center'>
        <RiInformationLine className='text-rocketblue w-10 inline-block sm:text-4xl text-3xl mb-4' />
        <h1 className='sm:text-4xl text-2xl font-medium title-font text-light mb-4'>
          About Me
        </h1>
        <div className='mb-4 text-text sm:text-lg text-center'>
          <p>I'm a young developer who loves to create, design and build technological and digital experiences that add value to those who need it.</p>
          <p>My interest in development began during my studies in 2016 and after graduation I continued learning to constantly improve my skills.</p>
          <p>Currently my focus is on creating accessible products and experiences, as well as continuing to increase my skills.</p>
        </div>
        <h2 className='sm:text-2xl text-xl text-light mb-4'>
          Where I've Worked
        </h2>
        <div className='flex flex-col text-text mb-6 sm:w-3/4'>
          <h3 className='sm:text-xl text-1'>
            FullStack Developer <a href='https://alvea.es/' className='text-rocketblue underline'>@ Alvea Soluciones Tecnológicas</a>
          </h3>
          <p className='sm:text-base'>Dec 2023 - Present</p>
          <ul className='text-sm list-disc list-inside pl-8'>
            <li>Development and maintenance of web platforms.</li>
            <li>Work with a wide range of techs such as: React, JS, NodeJS, TS, HTML, CSS, Tailwind, MongoDB, Git, Docker, APIS, Testing, etc.</li>
            <li>Team comunication and agile methodologies.</li>
          </ul>
        </div>
        <div className='flex flex-col text-text mb-6 sm:w-3/4'>
          <h3 className='sm:text-xl text-1'>
            Software Developer <a href='https://www.maf-roda.com/es/' className='text-rocketblue underline'>@ MafRoda Agrobotic</a>
          </h3>
          <p className='sm:text-base'>Aug 2023 - Nov 2023</p>
          <ul className='text-sm list-disc list-inside pl-8'>
            <li>Development and maintenance of treaceability systems for industrial equipment.</li>
            <li>Work with a wide range of techs such as: JS, C#, .NET, HTML, CSS, Bootstrap, SQL Server, Git, etc.</li>
            <li>Team comunication and agile methodologies.</li>
          </ul>
        </div>
        <div className='flex flex-col text-text mb-6 sm:w-3/4'>
          <h3 className='sm:text-xl text-1'>
            FullStack Developer <a href='https://www.essen.com.ar/home/' className='text-rocketblue underline'>@ Essen S.A.</a>
          </h3>
          <p className='sm:text-base'>Aug 2021 - Jul 2023</p>
          <ul className='text-sm list-disc list-inside pl-8'>
            <li>Development and maintenance of web platforms.</li>
            <li>Work with a wide range of techs such as: React, JS, TS, .NET, C#, HTML, CSS, Bootstrap, SQL Server, Git, APIS, Testing, etc.</li>
            <li>Team comunication and agile methodologies.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}