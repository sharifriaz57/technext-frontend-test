import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const UpcomingCheckbox = () => {
    const { contextData, setContextData } = useContext(AppContext);
    const { searchParams } = contextData;

    return (
        <div className="d-inline-block form-check">
            <input className="form-check-input" type="checkbox" checked={searchParams.isUpcoming} id="upcomingCheckbox"
                onChange={() => setContextData(prev => ({ ...prev, searchParams: { ...prev.searchParams, isUpcoming: !prev.searchParams.isUpcoming } }))}
            />
            <label className="form-check-label" htmlFor="upcomingCheckbox">
                Show upcoming only
            </label>
        </div>
    )
}

export default UpcomingCheckbox