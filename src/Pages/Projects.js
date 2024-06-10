import React from 'react'

function Projects() {
  return (
    <section id='projects' className='my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto'>
        <h2 className='text-5xl text-blue-500 font-bold text-center'>
            My Projects
        </h2>
        <div className='p-10 bg-cyan-200 flex flex-col justify-center items-center gap-5 lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full'>
            <div className='w-80 rounded'>
                <a href='https://www.geeksforgeeks.org/progress-tracker-using-react-and-local-storage/' className='w-full h-full'>
                    <img src='https://media.geeksforgeeks.org/wp-content/uploads/20230927120905/gfg.png' alt='Project 1' className='w-full h-full bg-cover rounded'></img>
                </a>
            </div>
            <div className='flex flex-col align-center mx-auto gap-4 justify-center flex-1 '>
                <h2 className='font-bold text-3xl text-center '>
                    <a className='hover:underline' href='https://www.geeksforgeeks.org/progress-tracker-using-react-and-local-storage/'>Project name 1  </a>
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis ligula eu tortor hendrerit euismod. Fusce varius malesuada tellus, ac viverra velit fermentum et. Sed vel ante nec nunc facilisis accumsan. Aliquam hendrerit orci a neque consequat, varius molestie lacus pretium. Vestibulum sit amet diam vitae erat facilisis molestie at in nunc. Aenean vestibulum dapibus pulvinar. Nam eget dolor nib </p>
            </div>
        </div>
        <div className='p-10 bg-cyan-200 flex flex-col justify-center items-center gap-5 lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl hover:scale-[102%] w-full'>
        <div className='w-80 rounded'>
                <a href='https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/' className='w-full h-full'>
                    <img src='https://media.geeksforgeeks.org/wp-content/uploads/20230904150620/gfg.png' alt='Project 1' className='w-full h-full bg-cover rounded'></img>
                </a>
            </div>
            <div className='flex flex-col align-center mx-auto gap-4 justify-center flex-1 '>
                <h2 className='font-bold text-3xl text-center '>
                    <a className='hover:underline' href='https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/'>Project name 2  </a>
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis ligula eu tortor hendrerit euismod. Fusce varius malesuada tellus, ac viverra velit fermentum et. Sed vel ante nec nunc facilisis accumsan. Aliquam hendrerit orci a neque consequat, varius molestie lacus pretium. Vestibulum sit amet diam vitae erat facilisis molestie at in nunc. Aenean vestibulum dapibus pulvinar. Nam eget dolor nib </p>
            </div>
        </div>
        </section>
  )
}

export default Projects