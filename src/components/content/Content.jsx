import { useEffect } from "react";

const Content = () => {
    const fetchData = async () => {
        const response = await fetch('https://api.spacexdata.com/v3/launches');
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='flex flex-column'>


        </div>
    )
}

export default Content