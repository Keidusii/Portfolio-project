import React, { Component } from 'react';
import Header from './HeaderComponent';
import JumbotronComponent from './JumbotronComponent';
import FindParts from './FindParts';
import BuildPc from './BuildPcComponent';
import NeedAdvice from './NeedAdviceComponent';
import ContactUs from './ContactUsComponent';
import Footer from './FooterComponent';
import { PCPICS } from '../Shared/PcPics';
import { PCBUILDS } from '../Shared/PcBuilds';
import { CART } from '../Shared/Cart';

class MainComponent extends Component {
    render() {
        return (
            <div>
                <Header />
                <JumbotronComponent pcPics={PCPICS} />
                <FindParts />
                <BuildPc pcBuilds={PCBUILDS} cart={CART}/>
                <NeedAdvice />
                <ContactUs />
                <Footer />
            </div>
        );
    }
}

export default MainComponent;