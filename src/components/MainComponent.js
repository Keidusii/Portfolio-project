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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingCart: CART
        };
        
        this.handleCartChange = this.handleCartChange.bind(this);
        this.updateCart = this.updateCart.bind(this);
    }
    
    handleCartChange(cart) {
        this.setState({
            shoppingCart: cart
        }, () => {
            toast.success(`Added to Cart!`, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        })
    }

    updateCart(cartItem) {
        this.setState({
            shoppingCart: this.state.shoppingCart.filter(item => item.id !== cartItem.id)
        });
    }

    render() {
        return (
            <div>
                <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme='dark'
                />
                <Header cart={this.state.shoppingCart} updateCart={this.updateCart}/>
                <JumbotronComponent pcPics={PCPICS} />
                <FindParts />
                <BuildPc pcBuilds={PCBUILDS} cart={this.state.shoppingCart} onCartChange={this.handleCartChange} />
                <NeedAdvice />
                <ContactUs />
                <Footer />
            </div>
        );
    }
}

export default MainComponent;

// TO DO LIST
// 1. Add onclick to remove from cart option
// 2. Cart Checkout tooltip