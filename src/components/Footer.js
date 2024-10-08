import React from 'react';

export default function Footer({ currentPage, totalPages, onPageChange }) {
    return (
        <div style={{ backgroundColor: '#dedddc', padding: '20px' }}>
            <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
                {/* Pagination details */}
                <div className="d-flex align-items-center mb-2 mb-md-0">
                    <span className="me-2">Total Pages: {totalPages}</span>
                    <button 
                        className="btn btn-outline-secondary btn-sm me-1" 
                        onClick={() => onPageChange(Math.max(currentPage - 1, 0))}
                        disabled={currentPage === 0}
                    >
                        ▲
                    </button>
                    <button 
                        className="btn btn-outline-secondary btn-sm" 
                        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages - 1))}
                        disabled={currentPage === totalPages - 1}
                    >
                        ▼
                    </button>
                </div>

                {/* Pagination buttons */}
                <div className="d-flex align-items-center border rounded" style={{ backgroundColor: 'white' }}>
                    <button className="btn btn-light pagination-btn border-0" onClick={() => onPageChange(0)}>First</button>
                    <div className="border-start"></div>
                    <button className="btn btn-light pagination-btn border-0" onClick={() => onPageChange(Math.max(currentPage - 1, 0))}>◀ Prev</button>
                    <div className="border-start"></div>
                    <button className="btn btn-light pagination-btn border-0" disabled>{currentPage + 1}</button>
                    <div className="border-start"></div>
                    <button className="btn btn-light pagination-btn border-0" onClick={() => onPageChange(Math.min(currentPage + 1, totalPages - 1))}>Next ▶</button>
                    <div className="border-start"></div>
                    <button className="btn btn-light pagination-btn border-0" onClick={() => onPageChange(totalPages - 1)}>Last</button>
                </div>
            </div>
        </div>
    );
}
