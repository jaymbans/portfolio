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
      <h3><a href="https://github.com/jaymbans" target='_blank'>see more on github</a></h3>
    </section>
  )
}

export default Projects