"use client"
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

function Pagination({data, itemsPerPage }) {
  // console.log(data);
  // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
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
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagination
