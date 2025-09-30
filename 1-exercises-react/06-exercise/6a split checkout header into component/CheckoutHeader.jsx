//6a. In the checkout page, split up the header into a separate
//component called CheckoutHeader.
//-Since CheckoutHeader is not shared (it's only used on the checkout page),
//save it in the pages fikder instead of component folder
//Rename checkout-header.css to CheckoutHeader.css
//Update the imports so each component imports the css file with the same name.
import './CheckoutHeader.css';

export function CheckoutHeader() {
    return (
        <>
             <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                    <a href="/">
                        <img className="logo" src="images/logo.png" />
                        <img className="mobile-logo" src="images/mobile-logo.png" />
                    </a>
                    </div>

                    <div className="checkout-header-middle-section">
                    Checkout (<a className="return-to-home-link"
                        href="/">3 items</a>)
                    </div>

                    <div className="checkout-header-right-section">
                    <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>
        </>
    );
}