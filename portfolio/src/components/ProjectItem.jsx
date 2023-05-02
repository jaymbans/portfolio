import { useEffect, useState } from 'react'
import { BsGithub } from 'react-icons/bs';
import { IoMdOpen } from 'react-icons/io';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
// import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/autoplay';


function ProjectItem({ projectData }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setData(projectData)

    setIsLoading(false);
  }, [])



  if (!isLoading) {
    return (
      <div id={data.title} className="project">
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
                data-swiper-autoplay="10"
              >Slide 2</SwiperSlide>
              <SwiperSlide className='swiper-slide'
                data-swiper-autoplay="10"
              >Slide 3</SwiperSlide>
              <SwiperSlide className='swiper-slide'
                data-swiper-autoplay="10"
              >Slide 4</SwiperSlide>
            </Swiper>
          </div>
          <span>
            <a target='_blank' href={data.source}>
              Code
              <BsGithub className='icon' />
            </a>
            <a target='_blank' href={data.demo}>Demo <IoMdOpen /></a>
          </span>
        </div>
        <div className="description">
          <h5>{data.title}</h5>
          <p>
            {data.description}
          </p>
          <div className="tags">
            {
              data.tech.map(tech => <h6>{tech}</h6>)
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectItem