"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import ReactPaginate from 'react-paginate';


function Pagination({ itemsPerPage, total, numberPage }) {
  const router = useRouter()
  const pageCount = Math.ceil(total / itemsPerPage);
  const pathname = usePathname()
  const searchParams = useSearchParams()


  const handleParams = (event) => {
    const page = event.selected + 1
    const query = new URLSearchParams(searchParams);
    query.set("page", page)
    router.push(`${pathname}?${query}`)
  }

  

  return (
    <>
      <ReactPaginate
        className='paginate mb-10'
        breakLabel=".."
        nextLabel=" >"
        onPageChange={handleParams}
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
