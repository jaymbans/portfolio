import Typed from 'react-typed';
import './components'

function LandingPage() {


  return (
    <section id='landing-page'>
      <div>
        <h1>Hi, I'm Jordan.</h1>
        <h1>A
          <span id='typer'>
            <Typed
              strings={[
                'Software Engineer',
                'Technology Consultant',
                'Problem Solver',
                'Student of Life',
              ]}
              typeSpeed={30}
              backSpeed={15}
              loop
            />
          </span>
        </h1>
        <h3>based out of New York City 📍</h3>
      </div>
      <div>
        <h3>My Skills</h3>
        <div className="skills-logos">
          <img src={require('../assets/react-icon.png')} />
          <img src={require('../assets/html-logo.png')} />
          <img src={require('../assets/css-logo.png')} />
          <img src={require('../assets/javascript-logo.png')} />
        </div>
        <div className="skills-logos">
          <img src={require('../assets/sql-logo.png')} />
          <img src={require('../assets/spark-logo.png')} />
          <img src={require('../assets/python-logo.png')} />
        </div>
      </div>
      <img id='scroll-down' src='https://cdn.dribbble.com/users/1459765/screenshots/3563580/scrolling_mousewheel.gif' />
    </section>
  )
}

export default LandingPage