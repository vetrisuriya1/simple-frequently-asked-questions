import './App.css'

function App() {

    return (
        <>
            <div className="main__bar">
                <div className="top__bar">
                    <div className="top__bar__inner">
                        <h1>Frequently Asked Questions</h1>
                        <p>Browse through the most frequently asked questions</p>
                    </div>
                </div>
                <div className="content__bar">
                    <div className="faq__items">
                        <div className="faq__item">
                            <h3>How can I track my order?</h3>
                            <p>You can track your order using the following steps:</p>
                            <ol>
                                <li>Go to the Order <a href="#">Tracking Page</a>.</li>
                                <li>Enter your order number and email address.</li>
                                <li>Click on the Track Order button to view the current status of your shipment.</li>
                            </ol>
                            <p>If you encounter any issues, please visit our <a href="#">Help Center</a>.</p>
                        </div>
                        <div className="faq__item">
                            <h3>What is your return policy?</h3>
                            <p>We offer a 30-day return policy on most items. Here are some key points:</p>
                            <ul>
                                <li><b>Items must be in original condition</b>: Unworn, unused, and unwashed.</li>
                                <li><b>Include original packaging and tags</b>: All items should be returned with their original packaging and tags.</li>
                                <li><b>Proof of purchase</b>: A receipt or proof of purchase is required.</li>
                            </ul>
                            <p>For more detailed information, read our full <a href="#">Return Policy.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
