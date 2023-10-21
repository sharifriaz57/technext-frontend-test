import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import LaunchFilters from "./LaunchFilters";
import SearchInput from "./SearchInput";
import UpcomingCheckbox from "./UpcomingCheckbox";

const SearchFilters = () => {
    const { contextData, setContextData } = useContext(AppContext);
    const { spaceFlights, searchParams } = contextData;
    const { rocket, isUpcoming, launchStatus, launchDate } = searchParams;

    const handleFilter = () => {
        let filteredFlights = [];
        if (rocket == '' && !isUpcoming && launchStatus == '' && launchDate == '') {
            filteredFlights = spaceFlights;
        }
        else {
            const today = new Date();
            const daysAgo = new Date(today);
            daysAgo.setDate(today.getDate() - launchDate);

            filteredFlights = spaceFlights.filter(flight => {
                const rocketCondition = rocket === '' || flight.rocket.rocket_name.toLowerCase().includes(rocket.toLowerCase());
                const upcomingCondition = !isUpcoming || flight.upcoming === true;
                const launchStatusCondition = (launchStatus === '' || flight.launch_success === null) || flight.launch_success == Number(launchStatus);
                const launchDateCondition = (launchDate === '' || flight.launch_date_utc === null) ||
                    (new Date(flight.launch_date_utc) >= daysAgo && new Date(flight.launch_date_utc) <= today);

                return rocketCondition && upcomingCondition && launchStatusCondition && launchDateCondition;
            });
        }
        setContextData(prev => ({ ...prev, filteredSpaceFlights: filteredFlights }))
    }

    useEffect(() => {
        handleFilter()
    }, [isUpcoming, launchStatus, launchDate])

    return (
        <>
            <div className="row g-4 justify-content-between align-items-end my-4 mb-5 pb-2">
                <div className="col-sm-4">
                    <SearchInput handleFilter={handleFilter} />
                </div>

                <div className="col-lg-5 col-sm-7">
                    <div className="text-sm-end mb-3 mb-sm-2">
                        <UpcomingCheckbox />
                    </div>

                    <LaunchFilters />
                </div>
            </div>
        </>
    )
}

export default SearchFilters