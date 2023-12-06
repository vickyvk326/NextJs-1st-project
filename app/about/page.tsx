import Link from 'next/link'
import React from 'react'

const About = async () => {
  
    const res = await (await fetch('http://localhost:3000/api/hello')).json()
    console.log(res);
    

  return (
    <>
        <h1>About</h1>
        <Link href='/'>Link to Home page</Link>
        <h2>MEssage: {res.message}</h2>
    </>
  )
}

export default About