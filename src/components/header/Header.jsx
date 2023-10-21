import SearchFilters from './SearchFilters';

const Header = () => {
    return (
        <>
            <div className='pt-0 pt-md-4 pt-sm-5 mt-5 mt-sm-5'>
                <h1 className="text-sm-center mb-2">Spaceflight details</h1>
                <p className="text-sm-center">Find out the elaborate features of all the past big spaceflights</p>
            </div>

            <SearchFilters />
        </>
    )
}

export default Header