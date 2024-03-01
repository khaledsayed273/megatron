import React from 'react'
import Pagination from './Pagination'
import CartProjects from './CartProjects'

function Projects({data , title}) {
    return (
        <div>
            <h1  data-aos-duration="1000" data-aos="fade-up" className='text-center mb-10 text-white text-xl lg:text-4xl'>{title? title : "From our Latest projects"} </h1>
            <CartProjects data={data}/>
            <div data-aos-duration="1000" data-aos="fade-up">
                <Pagination itemsPerPage={3} />
            </div>
        </div>
    )
}

export default Projects
