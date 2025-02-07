import { useState } from "react"

export default function FormAddFriend( {onAddNewFriend} )
{
    const [name, setName] = useState("");
    const defaultimageUrl = "https://i.pravatar.cc/48/";
    const [imageUrl, setImageUrl] = useState(defaultimageUrl);

    const handleSubmit = e => {
        e.preventDefault();

        if (!name || !imageUrl) return;

        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name,
            image : `${imageUrl}?=${id}`,
            balance : 0
        }

        console.log(newFriend)
        onAddNewFriend(newFriend);
        setName("");
        setImageUrl(defaultimageUrl);

    }
    return (
        <form action="" className="form-add-friend" onSubmit={handleSubmit}>
            <label htmlFor="name">🙍‍♂️ Nama</label>
            <input
                type="text"
                id="name"  
                value={name}
                onChange={e => setName(e.target.value)}
            />
            
            <label htmlFor="imageUrl">📸 Gambar</label>
            <input 
                type="text"
                id="imageUrl" 
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
            />

            <button className="button">Tambah</button>
        </form>
    )
}