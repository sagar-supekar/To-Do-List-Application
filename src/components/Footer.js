export default function Footer() {
    return (
        <div style={{ backgroundColor: '#dedddc', padding: '20px' }}>
            <div className="container-fluid d-flex justify-content-between align-items-center mb-4">
                {/* Pagination buttons on the left */}
                <div className="d-flex align-items-center">
                    <span className="me-2">Total Pages: 10</span>
                    <button className="btn btn-outline-secondary btn-sm me-1">▲</button>
                    <button className="btn btn-outline-secondary btn-sm">▼</button>
                </div>

                {/* Pagination buttons on the right */}
                <div className="border d-flex align-items-center" style={{ backgroundColor: 'white', borderRadius: '5px' }}>
                    <button className="btn btn-light pagination-btn border-0">First</button>
                    <div style={{ borderLeft: '1px solid #ccc', height: '30px' }}></div>
                    <button className="btn btn-light pagination-btn border-0">◀ Prev</button>
                    <div style={{ borderLeft: '1px solid #ccc', height: '30px' }}></div>
                    <button className="btn btn-light pagination-btn border-0">1</button>
                    <div style={{ borderLeft: '1px solid #ccc', height: '30px' }}></div>
                    <button className="btn btn-light pagination-btn border-0">Next ▶</button>
                    <div style={{ borderLeft: '1px solid #ccc', height: '30px' }}></div>
                    <button className="btn btn-light pagination-btn border-0">Last</button>
                </div>
            </div>
        </div>
    );
}
