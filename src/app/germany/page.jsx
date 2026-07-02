"use client";

import React from 'react';
import GermanyBanner from './germanyBanner';
import GermanyOverview from './germanyOverview';
import GermanyAusbilding from './germanyAusbilding';
import GermanyPrograms from './germanyPrograms';
import GermanyAdvantage from './germanyAdvantage';
import GermanyEligibility from './germanyEligibility';
import GermanyProcessAdmission from './germanyProcessAdmission';
import GermanyOccupations from './germanyOccupations';
import GermanyScope from './germanyScope';
import GermanyApply from './germanyApply';
import GermanyApply2 from './germanyApply2';
import HomeParallax from '../home/homeParellex';

const GermanyPage = () => {
    return (
        <main className="destination-page germany-theme">
            <GermanyBanner />
            {/* <GermanyOverview /> */}
            <GermanyAusbilding />
                 <GermanyApply2 />
                     <GermanyApply />
       
            {/* <GermanyPrograms /> */}
            <GermanyAdvantage />
            <GermanyEligibility />
               <HomeParallax/>
                  <GermanyProcessAdmission />
            <GermanyOccupations />
         
            {/* <GermanyScope /> */}
            
        
         
        </main>
    );
};

export default GermanyPage;
