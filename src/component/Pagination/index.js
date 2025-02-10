import React from "react";
import usePagination from "../../hooks/customPagination";

const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
function PaginatedList() {
  const itemsPerPage = 5;
  const { currentData, currentPage, totalPages, nextPage, prevPage, goToPage } =
    usePagination(items, itemsPerPage);
  return (
    <div>
      <h1>Paginated List</h1>
      <ul>
        {currentData.map((item) => (
          <li key={item.key}>{item}</li>
        ))}
      </ul>
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            style={{ fontWeight: currentPage === i + 1 ? "bold" : "normal" }}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <p>
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
}

export default PaginatedList;
