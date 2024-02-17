import React from 'react'
import userAvatar from './assets/my_pic.png'
import mail from './assets/mail.svg'
import './App.css'
import  Footer  from './components/Footer.jsx'

function App() {
  
  return (
    <div className="App">
      <section className="main-card">
        <div class="user-card">
            <div>
              <img src={userAvatar} className="avatar" alt="React logo" />
            </div>
            <div>
              <h2 className="name">Ravi Yadav</h2>
              <h3 className="designation">Software Engineer</h3>
              <button><a href="mailto:ravi123shanker.yadav@gmail.com"><img src={mail} className="emailIcon" /><span class="btntext">Email</span></a></button>
              <h2 class="remove-space">About</h2>
              <p>I am a solution architect with a particular interest in making things simple. I try to keep up with frontend technologies and best practices, and am always looking for new things to learn.</p>
              <h2 class="remove-space">Interests</h2>
              <p class="remove-space">Food expert. Music scholar. Reader. Blogger. [Copied]</p>
            </div>
            <Footer />
          </div>
      </section>
    </div>
  )
}

export default App