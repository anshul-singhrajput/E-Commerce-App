import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at, nam nemo doloribus quam reprehenderit dolores suscipit sapiente quasi eaque!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a autem iusto dolores nulla et, sequi veniam labore recusandae? Est repellendus, unde corrupti pariatur laudantium ratione minima, voluptatem optio perferendis quam neque.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, similique ad nesciunt quos ea amet obcaecati ex placeat, itaque voluptates dolorem illum molestiae odit voluptas, vitae autem aliquam atque facilis? Odio, tempora!</p> 
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae aspernatur qui aliquid cumque, repellendus placeat cupiditate quibusdam delectus fugiat mollitia incidunt totam voluptas nemo eum quam quas, consectetur, voluptate similique earum!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore velit iste sunt, amet, iusto quaerat molestiae ipsum rem eveniet voluptates eaque expedita. Eveniet, consequatur?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quibusdam quo illum minus earum nobis ipsa natus labore, eveniet beatae sequi consequatur illo.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
   
  )
}

export default About