import './index.css';

const About=()=>{
    return(
        <>
        <ul id="navlist">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <a href='Login'><li><button id='button' >Login</button></li></a>
        </ul>
        {/* <h2>About Us</h2>
        <p className="about-text">We are learning about ReactJs</p> */}
        </>
    )
}
export default About;