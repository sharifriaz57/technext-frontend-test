import { useEffect, useState } from "react";
import SingleFilghtCard from "./SingleFilghtCard";

const Content = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://api.spacexdata.com/v3/launches');
        const data = await response.json();
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='flex flex-column flex-grow-1 mb-5'>
            <div className='row g-4 mb-5' style={{ minHeight: '80vh' }}>
                {data.map((flight, key) => (
                    <SingleFilghtCard key={key} {...flight} />
                ))}
            </div>
        </div>
    )
}

export default Content