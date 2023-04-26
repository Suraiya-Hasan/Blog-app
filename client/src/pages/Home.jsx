import React from 'react'
import { Link } from 'react-router-dom'
import "../style/home.scss"

export const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Sed vulputate aliquet varius.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis interdum sem vel ullamcorper. Ut eget ipsum in magna elementum suscipit in vitae risus. Aenean semper nisl vel tempus molestie. Donec nec bibendum felis, at rutrum ex. Morbi nec quam ac augue laoreet eleifend elementum vitae justo. Cras ullamcorper tellus justo, nec ultrices tellus pulvinar ac. Aenean convallis nisi porttitor consequat laoreet. Suspendisse dignissim lorem vitae tincidunt efficitur.",
      img: "https://images.freeimages.com/images/large-previews/b5a/beach-1361907.jpg"
    },

    {
      id: 2,
      title: "Sed vulputate aliquet varius.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis interdum sem vel ullamcorper. Ut eget ipsum in magna elementum suscipit in vitae risus. Aenean semper nisl vel tempus molestie. Donec nec bibendum felis, at rutrum ex. Morbi nec quam ac augue laoreet eleifend elementum vitae justo. Cras ullamcorper tellus justo, nec ultrices tellus pulvinar ac. Aenean convallis nisi porttitor consequat laoreet. Suspendisse dignissim lorem vitae tincidunt efficitur.",
      img: "https://images.freeimages.com/images/large-previews/b5a/beach-1361907.jpg"
    },

    {
      id: 3,
      title: "Sed vulputate aliquet varius.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis interdum sem vel ullamcorper. Ut eget ipsum in magna elementum suscipit in vitae risus. Aenean semper nisl vel tempus molestie. Donec nec bibendum felis, at rutrum ex. Morbi nec quam ac augue laoreet eleifend elementum vitae justo. Cras ullamcorper tellus justo, nec ultrices tellus pulvinar ac. Aenean convallis nisi porttitor consequat laoreet. Suspendisse dignissim lorem vitae tincidunt efficitur.",
      img: "https://images.freeimages.com/images/large-previews/b5a/beach-1361907.jpg"
    },

    {
      id: 4,
      title: "Sed vulputate aliquet varius.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis interdum sem vel ullamcorper. Ut eget ipsum in magna elementum suscipit in vitae risus. Aenean semper nisl vel tempus molestie. Donec nec bibendum felis, at rutrum ex. Morbi nec quam ac augue laoreet eleifend elementum vitae justo. Cras ullamcorper tellus justo, nec ultrices tellus pulvinar ac. Aenean convallis nisi porttitor consequat laoreet. Suspendisse dignissim lorem vitae tincidunt efficitur.",
      img: "https://images.freeimages.com/images/large-previews/b5a/beach-1361907.jpg"
    },

  ];
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More...</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
