import React from 'react'
import vg from "../assets/img5.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai';
const Home = () => {
  return (
    <>
    <div class="home1" id="home1">
      <main>
        <h1>TechPark</h1>
        <p><q>Technology has reduced the effort and time and increased the 
        efficiency of the production requirements in every field. 
        It has made our lives easy, comfortable, healthy, and enjoyable.
        It has brought a revolution in transport and communication. 
        The advancement of technology, along with science, has helped 
        us to become self-reliant in all spheres of life. With the innovation
        of a particular technology, it becomes part of society and integral to 
        human lives after a point in time.</q></p>
      </main>
    </div>
    <div class="home2">
      <img class="image" src={vg} alt="technologyimage" height="300px" width="300px" />
      <div>
        <p><q>One stop destination for all the technologies realted information.Our aim is to increase the awareness regarding the Technology</q></p>
      </div>
    </div>
    <div class="home3" id="about">
      <div>
        <h1>
          WHOM WE ARE?
        </h1>
        <p>
          Most people use some form of technology every day of their lives. There are many different types of technology, and each one has unique functions that aim to make certain processes more efficient. With a better understanding of different types of technology, you can learn how each type of technology can help improve your daily life, and perhaps, this knowledge can even help you develop a desire for a career in technology.
        </p>
      </div>
    </div>
    <div class="home4">
      <div>
        <h1>Brands</h1>
        <article>
          <div class="c1 "style={{animationDelay:"0.3s",}} >
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>
          <div class="c1"style={{animationDelay:"0.5s",}} >
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>
          <div class="c1"style={{animationDelay:"0.7s",}} >
            <AiFillYoutube />
            <p>Youtube</p>
          </div>
          <div class="c1"style={{animationDelay:"1s",}} >
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
        </article>
      </div>

    </div>
    </>
  )
}

export default Home