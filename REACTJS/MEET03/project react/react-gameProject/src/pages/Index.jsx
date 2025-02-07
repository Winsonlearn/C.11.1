import image1 from '../assets/1.jpeg';
import image2 from '../assets/2.jpeg';
import image3 from '../assets/3.jpeg';
import image4 from '../assets/4.jpeg';
import image5 from '../assets/5.jpeg';
import image6 from '../assets/6.jpeg';
import image7 from '../assets/7.jpeg';

function Index() {
    return (
        <>
            <main>
                <h1 className="main-title">no man's sky</h1>
                <div>
                    <h3 className="main-title-2">buy now</h3>
                    <p className="main-paragraph">Steam, PlayStation, Xbox,</p>
                    <p className="main-paragraph">Switch & Mac on sale</p>
                    <p className="main-paragraph">now</p>
                    <div className="sponsors">
                        <img src={image4} alt="" />
                        <img src={image4} alt="" />
                        <img src={image4} alt="" />
                        <img src={image4} alt="" />
                    </div>
                    <a href="/" className="cta-information">more purchase options &gt;&gt;</a>
                </div>
            </main>

            <div className="game-container">
                <div className="game-grid">
                    <div className="game-card">
                        <h2 className="game-title">Infinite</h2>
                        <p className="game-text">Entire galaxies lie waiting to be discovered.</p>
                    </div>
                    <div className="game-card">
                        <h2 className="game-title">Story</h2>
                        <p className="game-text">Experience infinite freedom, or uncover the secrets of the universe with more than 30 hours of story.</p>
                    </div>
                    <div className="game-card">
                        <h2 className="game-title">Multiplayer</h2>
                        <p className="game-text">Dogfight, race exocraft, build colonies, explore, trade, fight and survive together.</p>
                    </div>
                    <div className="game-card">
                        <h2 className="game-title">VR</h2>
                        <p className="game-text">The entire game playable in virtual reality for a more immersive experience.</p>
                    </div>
                    <div className="game-card">
                        <h2 className="game-title">Beyond</h2>
                        <p className="game-text">Our 2.0 update adds even more depth and features and brings all the strands of No Man's Sky into a cohesive whole.</p>
                    </div>
                </div>
            </div>
            
            <div className="hero-1">
                <div className="hero-1-content">
                    <h2 className="hero-1-title">Explore</h2>
                    <h3 className="hero-1-subtitle">In an infinite universe</h3>
                    <p className="hero-1-text">Be the first to land on beautiful, unknown planets teeming with life. Survive hazardous environments, where alien civilizations seek their fortune and outlaws take it by force.</p>
                </div>
                <img className="hero-1-background" src={image7} alt="" />
            </div>
            <div className="hero-2">
                <div className="hero-2-content">
                    <h2 className="hero-2-title">Build</h2>
                    <h3 className="hero-2-subtitle">In an infinite universe</h3>
                    <p className="hero-2-text">Be the first to land on beautiful, unknown planets teeming with life. Survive hazardous environments, where alien civilizations seek their fortune and outlaws take it by force.</p>
                </div>
                <img className="hero-2-background" src={image3} alt="" />
            </div>
            <div className="hero-1">
                <div className="hero-1-content">
                    <h2 className="hero-1-title">Multiplayer</h2>
                    <h3 className="hero-1-subtitle">In an infinite universe</h3>
                    <p className="hero-1-text">Be the first to land on beautiful, unknown planets teeming with life. Survive hazardous environments, where alien civilizations seek their fortune and outlaws take it by force.</p>
                </div>
                <img className="hero-1-background" src={image4} alt="" />
            </div>
            <div className="hero-2">
                <div className="hero-2-content">
                    <h2 className="hero-2-title">community</h2>
                    <h3 className="hero-2-subtitle">In an infinite universe</h3>
                    <p className="hero-2-text">Be the first to land on beautiful, unknown planets teeming with life. Survive hazardous environments, where alien civilizations seek their fortune and outlaws take it by force.</p>
                </div>
                <img className="hero-2-background" src={image6} alt="" />
            </div>
            
            <div className="hero-3">
                <h1 className="hero-3-title">EVOLVING</h1>
                <h2 className="hero-3-subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, aliquam?</h2>
                <p className="hero-3-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis explicabo nam error dicta qui adipisci consequuntur! Mollitia fuga necessitatibus quibusdam nemo magni esse assumenda dolore? Veritatis corrupti et temporibus?</p>
                <div className="update-boxes">
                    <div className="update-box">
                        <h3>ECHOES UPDATE</h3>
                        <p>Update 4.4 arrives!</p>
                    </div>
                    <div className="update-box">
                        <h3>OMEGA UPDATE</h3>
                        <p>Update 4.5 arrives!</p>
                    </div>
                    <div className="update-box">
                        <h3>ORBITAL UPDATE</h3>
                        <p>Update 4.6 arrives!</p>
                    </div>
                    <div className="update-box">
                        <h3>WORLDS PART 1 UPDATE</h3>
                        <p>Update 5.0 arrives!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
