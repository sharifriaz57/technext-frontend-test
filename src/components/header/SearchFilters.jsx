
import LaunchFilters from "./LaunchFilters";
import SearchInput from "./SearchInput";
import UpcomingCheckbox from "./UpcomingCheckbox";

const SearchFilters = () => {


    return (
        <>
            <div className="row g-4 justify-content-between align-items-end my-4 mb-5 pb-2">
                <div className="col-sm-4">
                    <SearchInput />
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