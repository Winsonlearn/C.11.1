import image1 from '../assets/1.jpeg';
import image2 from '../assets/2.jpeg';
import image3 from '../assets/3.jpeg';
import image4 from '../assets/4.jpeg';
import image5 from '../assets/5.jpeg';
import image6 from '../assets/6.jpeg';
import image7 from '../assets/7.jpeg';

function Buy() {
    return (
        <>
            <main className="buy-page">
                <div className="buy-container">
                    <h1 className="buy-cta">Buy Now</h1>
                    <div className="buy-game">
                        <img src={image4} alt="" />
                        <img src={image4} alt="" />
                        <img src={image4} alt="" />
                        <img src={image4} alt="" />
                    </div>

                    <div className="buy-platform">
                        <h1 className="buy-title">Select Platform</h1>
                        <div className="sponsors">
                            <img src={image1} alt="" className="sponsor" />
                            <img src={image1} alt="" className="sponsor" />
                            <img src={image1} alt="" className="sponsor" />
                            <img src={image1} alt="" className="sponsor" />
                            <img src={image1} alt="" className="sponsor" />
                            <img src={image1} alt="" className="sponsor" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Buy;
