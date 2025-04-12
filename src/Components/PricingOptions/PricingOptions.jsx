import React, { use } from 'react';

const PricingOptions = ({ pricingPromise }) => {
    const pricing = use(pricingPromise)
    console.log(pricing)
    return (
        <div>
            hi
        </div>
    );
};

export default PricingOptions;