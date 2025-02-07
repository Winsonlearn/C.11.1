import React, { useState } from "react";
import "./form.css"""

export default function FormSplitBill( {selectedFriend, handleSplitBill} )  {
    console.log(selectedFriend);

    const [amount, setAmount] = useState("");
    const [myBill, setMyBill] = useState("");
    const friendBill = amount ? amount - myBill : "";
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    function handleSubmit(e) {
        e.preventDefault();

        if(!amount || !myBill ) return;
        handleSplitBill(whoIsPaying == "user" ? friendBill : -myBill)
    }

    return (
        <form action=""
        className="form-split-bill"
        onSubmit={handleSubmit}>
            <h2>Patungan bareng si {selectedFriend.name}</h2>

            <label
            htmlFor="totalTagihan">🔎 Total Tagihan
            </label>
            <input
                type="text" 
                id="totalTagihan"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <label
            htmlFor="tagihanKamu">🔎 Tagihan Kamu
            </label>
            <input
                type="text" 
                id="tagihanKamu"
                value={myBill}
                onChange={(e) => setMyBill(e.target.value)}
            />

            <label
            htmlFor="tagihan">🔎 Tagihan {selectedFriend.name}
            </label>
            <input 
                type="text" 
                id="tagihan" 
                value={friendBill}
                disabled 
            />

            <label
            htmlFor="opsiTeman">ditalangin sama </label>
            <select id="opsiTeman" value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value="user">kamu</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <button className="button">Tambah</button>
        </form>
    )
}