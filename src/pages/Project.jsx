import Image1 from '../assets/soccer-pics-1.jpeg'
import Image2 from '../assets/soccer-image2.jpeg'
import Image3 from '../assets/soccer-image3.jpeg'
const Project = () => {
    return (
        <div className="projects">
        <h1>Here are my projects</h1>
        <h2>Soccer Site</h2>
        <p>
        Basic Nextjs website that use 3rd party API that let users see the results of recent matches, upcoming matches and current standings of The Premier League
        </p>
        <p>Technologies :</p>
        <ul>Javascript</ul>
        <ul>TailwindCSS</ul>
        <ul>Postman for API Testing</ul>
        <ul>React</ul>
        
   
        <img className='image1' src={Image1} alt="first pics of the soccer app"/>
        <img className='image1' src={Image2} alt="second pics of the soccer app"/>
        <img className='image1' src={Image3} alt="third pics of the soccer app"/>
        </div>
        
        
    )
}

export default Project