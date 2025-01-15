import { useState } from "react";
function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  // Calculate the total number of pages
  const totalPages = Math.ceil(data?.length / itemsPerPage);
  // Get the current page's data
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // Go to the next page
  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  // Go to the previous page
  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  // Set a specific page
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return { currentData, currentPage, totalPages, nextPage, prevPage, goToPage };
}

export default usePagination;
