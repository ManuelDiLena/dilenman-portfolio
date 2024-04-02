import { FiSettings } from 'react-icons/fi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { skills } from '../data';

export default function Skills() {
  return (
    <section id='skills'>
      <div className='container px-5 sm:py-20 py-16 mx-auto'>
        <div className='text-center mb-4'>
          <FiSettings className='w-10 inline-block mb-4 text-rocketblue sm:text-4xl text-3xl'/>
          <h1 className='sm:text-4xl text-2xl font-medium title-font text-light mb-4'>
            Skills & Technologies
          </h1>
          <p className='text-text leading-relaxed mx-auto sm:text-xl'>
            These are some of the technologies I have worked with:
          </p>
        </div>
        <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
          {
            skills.map((skill, i) => (
              <div key={i} className='p-1 sm:w-1/2 w-full'>
                <div className='bg-dark rounded flex p-2 h-full items-center'>
                  <AiOutlineCheckCircle className='text-rocketblue w-6 h-6 flex-shrink-0 mr-4' />
                  <span className='title-font font-medium text-text sm:text-xl'>
                    {skill}
                  </span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}