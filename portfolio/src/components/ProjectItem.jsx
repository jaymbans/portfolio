import { useEffect, useState } from 'react'
import { BsGithub } from 'react-icons/bs';
import { IoMdOpen } from 'react-icons/io';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
// import Swiper styles
import 'swiper/css';
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
          <div className={`images swiper-container ${data.mobile && 'mobile'}`} style={{}}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              speed={5000}
              autoplay={true}
              loop={true}
              pauseonmouseenter='true'
              direction='vertical'
              style={{
                height: data.mobile ? '100%' : '290px',
                width: 'fit-content',
              }}
            >
              {
                data.imgs.map(imgUrl => {
                  return (<SwiperSlide className='swiper-slide'
                    data-swiper-autoplay="10"

                  >
                    <img
                      style={{
                        width: 'auto',
                      }}
                      src={require(
                        `../content/project-images/${imgUrl}`
                      )} />
                  </SwiperSlide>)
                })
              }
            </Swiper>
          </div>
          <span>
            <a target='_blank' href={data.source}>
              Code
              <BsGithub className='icon' />
            </a>
            <a target='_blank' href={data.demo}>Demo <IoMdOpen /></a>
          </span>
          <p className='notes'>{data.notes}</p>
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