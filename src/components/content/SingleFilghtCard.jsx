
const SingleFilghtCard = ({
    links,
    rocket,
    launch_date_utc,
    mission_name,
    launch_success
}) => {
    return (
        <>
            <div className='col-lg-4 col-sm-6'>
                <div className="card p-4">
                    <img src={links.mission_patch_small} className="mx-auto" alt={`${rocket.rocket_name} image`} style={{ maxWidth: '165px', height: '200px', objectFit: 'contain' }} />

                    <div className="card-body text-center mt-4">
                        <p className='mb-2'><span className='text-gray-600'>Launch Date:</span> {new Date(launch_date_utc).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })}</p>

                        <div className='mb-4'>
                            <h4 className='mb-1'>{mission_name}</h4>
                            <p className='text-gray-700'>{rocket.rocket_name}</p>
                        </div>

                        <div>
                            <p className='text-gray-600 fw-bold mb-1'>Launch Status</p>
                            <span className={`badge ${launch_success ? 'bg-success' : 'bg-danger'}`}>{launch_success ? 'Success' : 'Failed'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleFilghtCard