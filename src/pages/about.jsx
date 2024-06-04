import React from 'react'

const About =() => {
    return(
        <section className='max-container'>
            <h1 className='head-text'>Hello, I'm <span className='blue-gradient_text font-semibold 
            drop-shadow'>Shatakshi</span></h1>
            <div className='mt-5 flex flex-col gap-3 text-slate-500'><p>Web Developer and a Content Creator based in India also specializing in
                 Artificial Intelligence. Along with the tech, I practice bits and peaces of music as well as 
                 writing. </p></div>
                 <div className='py-10 flex flex-col'>
                    <h3 className='subhead-text'>Skill Set</h3>
                    <div className='mt-16 flex flex-wrap gap-12'>
                        <ol>
                            <li>javascript</li>
                            <li>html</li>
                            <li>three.js</li>
                            <li>css</li>
                            <li>django</li>
                        </ol>
                    </div>
                 </div>
        </section>
    )
}
export default About