import React from 'react'

function Contact() {
  return (
    <section id='contact' className='my-40 align-center max-w-5xl mx-auto p-3 '>
        <h2 className='text-5xl font-bold text-cyan-200 text-center '>Contact</h2>
        <div className='flex gap-5 justify-center my-10 '>
            <a rel='noreferrer' target='_blank' className='text-center hover:underline' href='https://instagram.com/geeks_for_geeks' >
                Instagram: 
                <span className='font-bold'>@</span>
                </a>
            <a rel='noreferrer' target='_blank' className='text-center hover:underline' href='https://twitter.com/geeksforgeeks'>
                Twitter: 
                <span className='font-bold'>@</span>
                </a>
        </div>
    </section>
  )
}

export default Contact