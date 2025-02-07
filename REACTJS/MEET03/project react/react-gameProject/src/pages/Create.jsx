function Create() {
    return (
        <>
            <section className="create-blog-section">
                <h1 className="section-title">BUAT BLOG</h1>
                <form action="/blogs" method="POST">
                    <div className="form-group">
                        <label htmlFor="title">Blog Title:</label>
                        <input type="text" id="title" name="title" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="snippet">Snippet:</label>
                        <input type="text" id="snippet" name="snippet" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="body">Body:</label>
                        <textarea id="body" name="body" rows="10" required></textarea>
                    </div>
                    
                    <button type="submit">Create Blog</button>
                </form>
            </section>
        </>
    );
}

export default Create;
