// import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react'
import { BsPeopleCircle } from "react-icons/bs";
import {FaHome, FaAddressBook} from 'react-icons/fa'
import { ImPower } from "react-icons/im";

const Componen1 = (props) => {
  return(
   <div className="home">
     <div className="home_container">
       <div className="home_detail">
        <h1>Hello World! I am Ichlasul amal</h1>
        <p style={{marginTop: '-20px'}}>Software Engineering</p>
        <p style={{color: 'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <button className="myButton" onClick={() => props.movePage('Contact')}>Contact Me</button>
       </div>
       <div className="home_image">
        {/* <p>Image Aja disini!</p> */}
       </div>
     </div>
     
   </div> 
  )
}


const Componen2 = () => {
  return (
    <div className="aboutme">

          <h2 className="title">About me</h2>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', alignContent: 'center'}}>
            <div className="aboutme_paragraph">
              <p>Proffessionally connected with the web developer industry and information technology for many years</p>
              <p>Well organised person, problem solver, independent employee with high attention to detail. Fan of MMA , outdor activities, Tv Series and recently English literautre. A family person, father of two fractious boys, therefore remote employment is prefered</p>
              <p>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
            </div>
          </div>
    </div>
  )
}

const Componen3 =(props)=>{
  return(
    <div className="aboutme">

      <h2 className="title">Skill</h2>
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', alignContent: 'center'}}>
        <div className="aboutme_paragraph">
          <p>The main area of my expertise is front end development(client side of the web).</p>
          <p>HTML, CSS, JS(Typescript), building small and medium web apps with React JS, features, animations, and coding interactive layouts.</p>
          <p>I have also full stack developer experience with open source CMS like (wordpress, Drupal, Magento, Keystone.js and other)</p>
          <p>Visit my <a className="mylink" href="https://www.linkedin.com/in/ichlasul-amal-505258194/">Linkedin</a> profile for more details or just <span className="mylink" onClick={() => props.movePage('Contact')} >contact me.</span></p>

        </div>


      </div>
      

    </div>

  )
}

const Componen4 = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(email, message)
  }

  return(
    <div className="aboutme">
      <div className="kiri_kanan">
        <div style={{width: "50%", padding: '20px'}}>
          <h2 className="title">Contact Me</h2>
          <p>I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, dont hesitate to contact me using below from either.</p>
          <form className="form" onSubmit={handleSubmit} > 
            <label>
              Email
            </label>
            <input className="input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>
              Message
            </label>
            <textarea className="input" value={message} onChange={(e) => setMessage(e.target.value)} />
            <input className="myButton" type="submit" value="Submit" />
          </form>

        </div>
        <div style={{width: "50%"}}>
          {/* <p>Yo</p> */}

        </div>

      </div>
      
    </div>
  )
}

function App() {
  const [page, setPage] = useState('Home')

  const movePage = (n) => {
    setPage(n)
  }

  return (
    <div className="App">
      <div className="container_sidebar">
        <div className="navigation">

          {/* {nav.map(e => {
            return <p onClick={() => movePage(e)} style={{ cursor: "pointer", color: `${page === e ? "orange" : 'white'}`}}>{e}

            </p>
          })} */}

          <div onClick={() => movePage('Home')} style={{ cursor: "pointer", color: `${page === 'Home' ? "orange" : 'white'}`}}>
            <FaHome />
            <p style={{fontSize: '10px'}}>Home</p>
          </div>
          <div onClick={() => movePage('About Me')} style={{ cursor: "pointer", color: `${page === 'About Me' ? "orange" : 'white'}`}}>
            <BsPeopleCircle />
            <p style={{fontSize: '10px'}}>About Me</p>
          </div>
          <div onClick={() => movePage('Skills')} style={{ cursor: "pointer", color: `${page === 'Skills' ? "orange" : 'white'}`}}>
            <ImPower />
            <p style={{fontSize: '10px'}}>Skills</p>
          </div>
          <div onClick={() => movePage('Contact')} style={{ cursor: "pointer", color: `${page === 'Contact' ? "orange" : 'white'}`}}>
            <FaAddressBook />
            <p style={{fontSize: '10px'}}>Contact</p>
          </div>
        </div>
        {/* <div className="socialmedia">
          <p>WA</p>
        </div> */}

      </div>

      <div className="container_main">
        {page === 'Home' && <Componen1 movePage={movePage} />}
        {page === 'About Me' && <Componen2 />}
        {page === 'Skills' && <Componen3  movePage={movePage} />}
        {page === 'Contact' && <Componen4 />}

      </div>

 


      {/* <div>
        {nav.map(n => <button onClick={movePage(n)}>{n}</button> )}
      </div> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
