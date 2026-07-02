"use client";

import React from 'react';
import JapanBanner from './japanBanner';
import JapanOverview from './japanOverview';
import JapanPrograms from './japanPrograms';

const JapanPage = () => {
    return (
        <main className="destination-page japan-theme">
            <JapanBanner />
            <JapanOverview />
            <JapanPrograms />
        </main>
    );
};

export default JapanPage;
