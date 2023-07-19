import React from 'react'

function AboutMe() {
  return (
    <section id='about-me'>
      <h1>about me</h1>
      <div className="content">
        <div>
          <h3>
            thanks for tuning in to my elevator pitch
          </h3>
          <p>
            I’m Jordan, currently working as a software engineer in <a target='_blank' href='https://www2.deloitte.com/us/en.html' className='external-link'>Deloitte's consulting practice</a>. My role has ranged from eCommerce <span className='bolded'>web development</span>, to <span className='bolded'>data analytics</span> and <span className='bolded'>engineering</span>. Though consulting has made me a bit nomadic, I am based out of New York City 📍. Prior to this role, I studied accounting (hear me out, I can explain...) and information systems at <a target='_blank' href='https://www1.villanova.edu/university.html' className='external-link'>Villanova University</a>.
          </p>
          <br />
          <p>
            I love programming, and have grown a passion for software  development. Switching from finance to tech has given me a unique perspective on the intersection between business and digital adoption. I am <span className='bolded'>front-end</span> focused, with <span className='bolded'>back-end</span> experience.
          </p>
        </div>

        <div>
          <div className="fun-facts">
            <p>
              <span className='desc'>
                Name:
              </span>Jordan
            </p>
            <p>
              <span className='desc'>
                Age:
              </span>23
            </p>
            <p>
              <span className='desc'>
                From:
              </span>New York, New York
            </p>
            <p>
              <span className='desc'>
                Favorite Sports Team:
              </span>The New York Knicks
            </p>
            <p>
              <span className='desc'>
                Email:
              </span>
              <a className='bolded' href="mailto: jordan@mbanefo.com">
                jordan@mbanefo.com
              </a>
            </p>
          </div>
          <div className="socials">
            <a target='_blank' href="https://www.linkedin.com/in/jordan-mbanefo-80918916b/">
              <img src={require('../assets/linkedin-logo.png')} />
            </a>
            <a target='_blank' href='https://github.com/jaymbans'>
              <img src={require('../assets/github-logo.png')} />
            </a>
          </div>
          <a href='https://www.linkedin.com/in/jordan-mbanefo/overlay/1635533687033/single-media-viewer/?profileId=ACoAAChtRUkB5K6RMRIO0-1wFxZD_Ly-YE2FWpg' target='_blank'>
            <button className="blue-btn">
              Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe