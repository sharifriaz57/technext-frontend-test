
const LaunchFilters = () => {

    return (
        <div className="row g-4">
            <div className="col-sm-6">
                <select className="form-select" defaultValue={""}>
                    <option value="">By Launch Status</option>
                    <option value="0">Failure</option>
                    <option value="1">Success</option>
                </select>
            </div>
            <div className="col-sm-6">
                <select className="form-select" defaultValue={""}>
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