import React, { Suspense } from 'react';
import NavBar from './Components/NavBar/NavBar';
import PricingOptions from './Components/PricingOptions/PricingOptions';
import ResultChart from './Components/ResultChart/ResultChart';
import axios from 'axios';
import MarkChart from './Components/MarkChart/MarkChart';

const pricingPromise = fetch('./pricingData.json').then(res => res.json())

const markPromise = axios.get('marksData.json')
const App = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
        <PricingOptions pricingPromise={pricingPromise} />
      </Suspense>
      <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
        <MarkChart markPromise={markPromise} />
      </Suspense>
      <ResultChart />
    </>
  );
};

export default App;