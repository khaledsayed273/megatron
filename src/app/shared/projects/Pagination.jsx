"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import ReactPaginate from 'react-paginate';


function Pagination({ itemsPerPage, total, numberPage }) {
  const router = useRouter()
  const pageCount = Math.ceil(total / itemsPerPage);
  const handlePageClick = (event) => {
    const page = event.selected + 1
    router.push(`${page}`)
  };


  return (
    <>
      <ReactPaginate
        className='paginate mb-10'
        breakLabel=".."
        nextLabel=" >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< "
        forcePage={numberPage - 1}
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagination
