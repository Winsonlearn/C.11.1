function News({ blogs = [] }) {
    return (
        <>
            <section className="blog-section-containers">
                <h1 className="section-title">LATEST POSTS</h1>
                {blogs.length > 0 ? (
                    blogs.map(blog => (
                        <div className="article-card" key={blog._id}>
                            <div className="article-thumbnail">
                                <img src={blog.imageUrl} alt="Blog Image" />
                            </div>
                            <div className="article-content">
                                <h2 className="article-title">{blog.title}</h2>
                                <p className="article-date">{blog.createdAt}</p>
                                <p className="article-snippet">{blog.snippet}</p>
                                <a href={`/blogs/${blog._id}`} className="article-link">View Article</a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-articles-message">BLOG ANDA KOSONG!</p>
                )}
            </section>
        </>
    );
}

export default News;
