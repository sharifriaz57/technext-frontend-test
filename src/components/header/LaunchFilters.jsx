import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const LaunchFilters = () => {
    const { contextData, setContextData } = useContext(AppContext);
    const { searchParams } = contextData;

    return (
        <div className="row g-4">
            <div className="col-sm-6">
                <select className="form-select" defaultValue={searchParams.launchStatus}
                    onChange={(e) => setContextData(prev => ({ ...prev, searchParams: { ...prev.searchParams, launchStatus: e.target.value } }))}
                >
                    <option value="">By Launch Status</option>
                    <option value="0">Failure</option>
                    <option value="1">Success</option>
                </select>
            </div>
            <div className="col-sm-6">
                <select className="form-select" defaultValue={searchParams.launchDate}
                    onChange={(e) => setContextData(prev => ({ ...prev, searchParams: { ...prev.searchParams, launchDate: e.target.value } }))}
                >
                    <option value="">By Launch Date</option>
                    <option value="7">Last Week</option>
                    <option value="30">Last Month</option>
                    <option value="365">Last Year</option>
                </select>
            </div>
        </div>
    )
}

export default LaunchFilters