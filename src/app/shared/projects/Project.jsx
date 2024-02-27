import React from 'react'
import Pagination from './Pagination'
import CartProjects from './CartProjects'

function Projects({data , title}) {
    return (
        <div>
            <h1 className='text-center mb-10 text-white text-xl lg:text-4xl'>{title? title : "From our Latest projects"} </h1>
            <CartProjects data={data}/>
            <Pagination itemsPerPage={3} />
        </div>
    )
}

export default Projects
