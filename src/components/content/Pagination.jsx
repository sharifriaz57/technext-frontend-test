import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";

const Pagination = () => {
    const { contextData, setContextData } = useContext(AppContext);
    const { filteredSpaceFlights, page, totalPages } = contextData;

    useEffect(() => {
        setContextData(prev => ({ ...prev, totalPages: Math.ceil(filteredSpaceFlights.length / 9) }))
    }, [filteredSpaceFlights])

    useEffect(() => {
        localStorage.setItem('currentPage', JSON.stringify(page));
    }, [page]);

    return (
        <nav className='mb-0'>
            <ul className="pagination justify-content-center">
                <li className={`page-item ${page == 1 ? 'disabled pe-none' : ''}`} onClick={() => setContextData(prev => ({ ...prev, page: prev.page - 1 }))}>
                    <span className="page-link" style={{ cursor: 'pointer' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </span>
                </li>

                {[...Array(totalPages)].map((_, key) => (
                    key === 0 || key === totalPages - 1 || Math.abs(key - (page - 1)) <= (Math.floor(totalPages / 2) - 1)
                        ? (
                            <li key={key} className={`page-item ${(page - 1) == key ? 'active' : ''}`}
                                onClick={() => setContextData(prev => ({ ...prev, page: key + 1 }))}
                            >
                                <span className="page-link" style={{ cursor: 'pointer' }}>{key + 1}</span>
                            </li>
                        )
                        : key === 1 || key === totalPages - 2
                            ? (
                                <li key={key} className={`page-item ${(page - 1) == key ? 'active' : ''}`}
                                    onClick={() => setContextData(prev => ({ ...prev, page: key + 1 }))}
                                >
                                    <span className="page-link" style={{ cursor: 'pointer' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                        </svg>
                                    </span>
                                </li>
                            )
                            : null
                ))}

                <li className={`page-item ${page == totalPages ? 'disabled pe-none' : ''}`} onClick={() => setContextData(prev => ({ ...prev, page: prev.page + 1 }))}>
                    <a className="page-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination