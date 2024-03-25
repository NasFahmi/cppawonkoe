import { useState } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

// Komponen Paginasi
const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const [inputPage, setInputPage] = useState("");

  // Fungsi untuk memanggil fungsi onPageChange dengan nomor halaman yang baru
  const handlePageChange = () => {
    const pageNumber = parseInt(inputPage);
    if (!isNaN(pageNumber) && pageNumber > 0 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className="pagination">
      <div className="flex justify-center items-center gap-10">
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        {/* <input type="number" value={inputPage} onChange={(e) => setInputPage(e.target.value)} /> */}
        <h1>{currentPage}</h1>
        {/* <button onClick={handlePageChange}>Go</button> */}
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
