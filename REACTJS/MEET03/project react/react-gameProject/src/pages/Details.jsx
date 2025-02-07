import image1 from '../assets/1.jpeg';
import image2 from '../assets/2.jpeg';
import image3 from '../assets/3.jpeg';
import image4 from '../assets/4.jpeg';
import image5 from '../assets/5.jpeg';
import image6 from '../assets/6.jpeg';
import image7 from '../assets/7.jpeg';

function Details({ blog = [] }) {
    return (
        <>
            <section className="blog-details-section">
                <h1 className="section-title">{blog.title}</h1>
                <p className="article-date">{new Date(blog.createdAt).toLocaleDateString()}</p>
                <p className="article-snippet">{blog.snippet}</p>
                <img src={image2} alt="Blog" className="blog-image" />
                <p className="article-body">{blog.body}</p>

                <a href="/news" className="back-link">Back to All Blogs</a>
            </section>
        </>
    );
}

export default Details;
