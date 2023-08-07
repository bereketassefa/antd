import React from 'react'
import RequestCard from './requestCard' // Import the RequestCard component


function Card(props) {
    const { type } = props;
    
    return (
        <div>
            {type === 'relationReq' && <RequestCard {...props} />}
           
            {/* ... other possible card types ... */}
        </div>
    );
}
