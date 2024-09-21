import React from 'react';

export default function Footer({ currentPage, totalPages, onPageChange }) {
    return (
        <div style={{ backgroundColor: '#dedddc', padding: '20px' }}>
            <div className="container-fluid d-flex justify-content-between align-items-center mb-4">
                {/* Pagination buttons on the left */}
                <div className="d-flex align-items-center">
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

                {/* Pagination buttons on the right */}
                <div className="border d-flex align-items-center" style={{ backgroundColor: 'white', borderRadius: '5px' }}>
                    <button className="btn btn-light pagination-btn border-0" onClick={() => onPageChange(0)}>First</button>
                    <div style={{ borderLeft: '1px solid #ccc', height: '30px' }}></div>
                    <button className="btn btn-light pagination-btn border-0" onClick={() => onPageChange(Math.max(currentPage - 1, 0))}>◀ Prev</button>
                    <div style={{ borderLeft: '1px solid #ccc', height: '30px' }}></div>
                    <button className="btn btn-light pagination-btn border-0">{currentPage + 1}</button>
                    <div style={{ borderLeft: '1px solid #ccc', height: '30px' }}></div>
                    <button className="btn btn-light pagination-btn border-0" onClick={() => onPageChange(Math.min(currentPage + 1, totalPages - 1))}>Next ▶</button>
                    <div style={{ borderLeft: '1px solid #ccc', height: '30px' }}></div>
                    <button className="btn btn-light pagination-btn border-0" onClick={() => onPageChange(totalPages - 1)}>Last</button>
                </div>
            </div>
        </div>
    );
}
