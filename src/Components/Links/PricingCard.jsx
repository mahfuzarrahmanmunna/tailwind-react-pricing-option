import React from 'react';
import PricingFeature from '../PricingFeature/PricingFeature';

const PricingCard = ({ prices }) => {
    const { name, price, description, features } = prices
    return (
        <div className='border bg-indigo-400 mt-2 p-2 rounded-xl shadow flex flex-col'>
            <div className=''>
                <h2 className='text-2xl '>{name}</h2>
                <h3>{price}</h3>
            </div>
            <div className='flex-1 bg-indigo-300 px-3 py-2 rounded shadow'>
                <p>{description}</p>
                <div className=''>
                    {
                        features.map((route, index) => <PricingFeature key={index} route={route} />)
                    }
                </div>
            </div>
            <button className="btn btn-wide mt-3">SubsCribe</button>
        </div>
    );
};

export default PricingCard;