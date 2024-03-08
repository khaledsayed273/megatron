import React from 'react'
import Pagination from './Pagination'
import CartProjects from './CartProjects'

function Projects({ data,  numberPage, pagination }) {

    return (
        <div className='mt-10'>
            <CartProjects data={data.data} />
            {pagination && data?.data.length < data?.meta?.total && (
                <div data-aos-duration="1000" data-aos="fade-up">
                    <Pagination numberPage={numberPage} data={data.data} itemsPerPage={data?.meta?.per_page} total={data?.meta?.total} />
                </div>
            )}
        </div>
    )
}

export default Projects
