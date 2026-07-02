import React from 'react';
import HomeBanner from './homeBanner';
import HomeCounter from './homCounter';
import HomeServices from './homeServices';
import HomeDestination from './homeDestination';
import HomeDomestic from './homeDomestic';
import HomeTestimonials from './homeTestimonials';
import HomeParallax from './homeParellex';
import HomeFaq from './homeFaq';
import HomeCta from './homeCta';
import HomeContact from './homeContact';
import HomeWhyChooseUs from './homeWhyChooseUs';

const Index = async () => {

    return (
        <>
            <HomeBanner/>
            <HomeCounter/>
            <HomeServices/>
            <HomeWhyChooseUs/>
            <HomeDomestic/>
            <HomeDestination/>
            <HomeTestimonials/>
            <HomeParallax/>
            <HomeFaq/>
            <HomeContact/>
            <HomeCta/>
        </>
    );
};
export default Index;