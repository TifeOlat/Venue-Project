import React from 'react'

function Location() {
    return (
        <div className='location_wrapper'>
            <iframe
                title="My Location"
                src="https://www.google.com/maps/embed?pb=!4v1633131771143!6m8!1m7!1s-zKnZsiKxwC38t_veZHwXA!2m2!1d6.561135717969908!2d3.292738991954493!3f270!4f0!5f0.7820865974627469" 
                width="100%" 
                height="500px" 
                frameBorder='0' 
                allowFullScreen 
                loading="lazy">
            </iframe>
            <div className='location_tag'>
                <div>
                    LOCATION
                </div>
                
            </div>
            
        </div>
    )
}
export default Location
