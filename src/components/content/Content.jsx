import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import Pagination from './Pagination';
import SingleFilghtCard from './SingleFilghtCard';

const Content = () => {
    const { contextData, setContextData } = useContext(AppContext);
    const { filteredSpaceFlights, page } = contextData;

    const fetchData = async () => {
        const response = await fetch('https://api.spacexdata.com/v3/launches');
        const data = await response.json();
        setContextData(prev => ({ ...prev, spaceFlights: data, filteredSpaceFlights: data }));
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className='flex flex-column flex-grow-1 mb-5'>
            <div className='row g-4 mb-5' style={{ minHeight: '80vh' }}>
                {filteredSpaceFlights.slice((page - 1) * 9, (page * 9)).map((flight, key) => (
                    <SingleFilghtCard key={key} {...flight} />
                ))}
            </div>

            <Pagination />
        </div>
    )
}

export default Content