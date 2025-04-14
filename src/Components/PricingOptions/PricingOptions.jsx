import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise)
    return (
        <div className='px-2'>
            <h1 className='text-3xl'> Get Our MemberShip</h1>
            <div className='lg:grid grid-cols-3 gap-8 lg:px-24'>
                {
                    pricingData.map(prices => <PricingCard key={prices.id} prices={prices} />)
                }
            </div>
        </div>
    );
};

export default PricingOptions;