

export default function ContentBox(param){
    const {nasaData} = param
    return (
        <div className='contentDiv'>
            <h2>{nasaData.title}</h2>
            <div>
                <div className='imageContainer'>
                <img className ='nasaPic' src={nasaData.url} alt={`${nasaData.media_type} of ${nasaData.title}`}/>
                </div>
                <div className='infoContainer'>
                <h4>{nasaData.date}</h4>
                <p>{nasaData.explanation}</p>
                </div>
            </div>
        </div>
    )
}