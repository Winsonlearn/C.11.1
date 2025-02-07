import { useState, useEffect } from "react";


function Blog() {
    const [externalPosts, setExternalPost] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            // .then(json => console.log(json))
            .then(json => setExternalPost(json));

    }, []);

    //[]array kosong 1x
    // kosong , unlimited 
    // instate, 

    useEffect(()=>{
        console.log('Always rendered!');
    });
    
    useEffect(()=>{
        console.log('Rendered!');
    }, []);


    return (
        <>
           
            <h1>External Post</h1>
            {externalPosts?.map((item, index) => (
                <div key={index}>
                    -{item.title}
                </div>
            ))}
        </>
    );
}

export default Blog;