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
            I’m a software engineer, currently working as a technology consultant at <a target='_blank' href='https://www2.deloitte.com/us/en.html' className='external-link'>Deloitte</a>. My role has ranged from eCommerce <span className='bolded'>web development</span>, to <span className='bolded'>data analytics</span> and <span className='bolded'>engineering</span>. Though consulting has made me a bit nomadic, I am based out of New York City 📍. Prior to this role, I studied accounting (hear me out, I can explain...) and information systems at <a target='_blank' href='https://www1.villanova.edu/university.html' className='external-link'>Villanova University</a>.
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
          <button className="blue-btn">
            Resume
          </button>
        </div>
      </div>
      <h1>my interests...</h1>
      <div className="card-container">
        <div>
          <img className='icon' src={require('../assets/app-icon.png')} />
          <h5 className='title'>
            App Development
          </h5>
          <p>I was introduced to programming through SQL and Python. I fell in love when I made my first app - the most unattractive blackjack game. It wasn’t eye candy, but I loved it! (I now appreciate CSS and web dev much more due to it). From front end to back end, I’m here for the ride.</p>
        </div>
        <div>
          <img className='icon' src={require('../assets/brain-icon.png')} />
          <h5 className='title'>
            Sentiment Analysis
          </h5>
          <p>
            As we continue to use our phones and computers more and more throughout society, I love seeing how different events and perceptions influence behavior. With sentiment analyses, we can help to build desirable solutions!
          </p>
        </div>
        <div>
          <img className='icon' src={require('../assets/learning-icon.png')} />
          <h5 className='title'>
            Learning
          </h5>
          <p>
            I love learning and problem solving. I wear a wristband that says “Take Risks” because I believe the best way to learn is by throwing yourself in the deep end! I’m always willing to learn a new skill, this year I’ve taken on hiking the national parks and fishing - big change from my normal NYC activities!
          </p>
        </div>
      </div>
      <h1>...and more!</h1>
      <div className="card-container">
        <div>
          <img className='icon' src={require('../assets/barber-icon.png')} />
          <h5 className='title'>
            Cutting Hair
          </h5>
          <p>No.. I wasn’t kidding about learning. I taught myself to cut my hair at 14 years old. My allowance for the week would not allow me to get to school by train, buy myself some candy after practice and cut my hair. Though I initially left the house with some questionable haircuts, this skill has paid off immensely. I cut hair throughout college to pay my fraternity dues!</p>
        </div>
        <div>
          <img className='icon' src={require('../assets/teaching-icon.png')} />
          <h5 className='title'>
            Teaching
          </h5>
          <p>
            As I learn new things, I love to share with others. I currently train the onboarding data personnel in the programming and software systems my team currently uses. I also volunteer to teach design thinking to high school programming classes across the Manhattan.
          </p>
        </div>
        <div>
          <img className='icon' src={require('../assets/running-icon.png')} />
          <h5 className='title'>
            Staying Active
          </h5>
          <p>
            Men’s league basketball, bike riding, weight lifting, you name it! I love to stay active throughout the year. My favorite experience is the MURPH challenge, where I felt like I truly pushed my physical capabilities to the limit.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe