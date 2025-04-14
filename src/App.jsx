import React, { Suspense } from 'react';
import NavBar from './Components/NavBar/NavBar';
import PricingOptions from './Components/PricingOptions/PricingOptions';
import ResultChart from './Components/ResultChart/ResultChart';

const pricingPromise = fetch('./pricingData.json').then(res => res.json())
const App = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
        <PricingOptions pricingPromise={pricingPromise} />
      </Suspense>
      <ResultChart />
    </>
  );
};

export default App;