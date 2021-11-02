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
    constructor(props) {
        super(props);
        this.state = {
            shoppingCart: CART
        };
        
        this.handleCartChange = this.handleCartChange.bind(this);
    }

    handleCartChange(cart) {
        this.setState({
            shoppingCart: cart
        }, () => {
            console.log(this.state.shoppingCart);
        })
    }

    render() {
        const cart = this.state.shoppingCart;
        return (
            <div>
                <Header cart={cart}/>
                <JumbotronComponent pcPics={PCPICS} />
                <FindParts />
                <BuildPc pcBuilds={PCBUILDS} cart={cart} onCartChange={this.handleCartChange} />
                <NeedAdvice />
                <ContactUs />
                <Footer />
            </div>
        );
    }
}

export default MainComponent;