import "./friend-list.css";
import FriendCard from "../FriendCard";

export default function FriendListCard({ friends, onSelectedFriend, selectedFriend, onDeleteFriend }) {
    return (
        <ul>
            {friends.map(friend => (
                <FriendCard
                    friend={friend}
                    key={friend.id} 
                    onSelectedFriend={onSelectedFriend}
                    selectedFriend={selectedFriend} 
                    onDeleteFriend={onDeleteFriend} 
                />
            ))}
        </ul>
    );
}
