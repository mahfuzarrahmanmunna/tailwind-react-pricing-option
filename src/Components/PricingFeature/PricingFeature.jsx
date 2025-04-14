import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({ route }) => {
    return (
        <div className=''>
            <p className='flex gap-2 items-center'> <CircleCheckBig /> {route}</p>
        </div>
    );
};

export default PricingFeature;