import { BsGithub } from 'react-icons/bs';
import { IoMdOpen } from 'react-icons/io';
import ProjectItem from './ProjectItem';
import projectsData from '../content/projects';
import { useState } from 'react';

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
// import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/autoplay';


function Projects() {
  const [projects, setProjects] = useState(projectsData)


  return (
    <section id='projects'>
      <h1>
        check out some of my work!
      </h1>
      {
        projects.map((project, idx) => {
          return (<ProjectItem
            key={`${idx}-${project.title}`}
            projectData={project}
          />)
        })

      }
      <div id='at-lease' className="project">
        <div className="media">
          <div className="images swiper-wrapper">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              speed={5000}
              autoplay={true}
              loop={true}
              pauseOnMouseEnter={true}
            >
              <SwiperSlide className='swiper-slide'
                data-swiper-autoplay="10"
              >Slide 1</SwiperSlide>
              <SwiperSlide className='swiper-slide'
                data-swiper-autoplay="1"
              >Slide 2</SwiperSlide>
              <SwiperSlide className='swiper-slide'
                data-swiper-autoplay="1"
              >Slide 3</SwiperSlide>
              <SwiperSlide className='swiper-slide'
                data-swiper-autoplay="1"
              >Slide 4</SwiperSlide>
            </Swiper>
          </div>
          <span>
            <a target='_blank' href='https://github.com/jaymbans/at-lease'>
              Code
              <BsGithub className='icon' />
            </a>
            <a target='_blank' href='https://at-lease.vercel.app/'>Demo <IoMdOpen /></a>
          </span>
        </div>
        <div className="description">
          <h5>At Lease At Ease</h5>
          <p>Undergraduate college students often find internship and part-time job offers in cities far away from home. At lease at Ease provides an easy way to connect with their alumni network for subleasing offers.</p>
          <div className="tags">
            <h6>React</h6>
            <h6>Firebase Authentication</h6>
            <h6>Leaflet Maps API</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects