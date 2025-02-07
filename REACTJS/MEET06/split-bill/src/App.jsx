import { useState, useEffect } from 'react';
import FriendListCard from './components/FriendListCard';
import FormSplitBill from './components/FormSplitBill';
import FormAddFriend from './components/FormAddFriend';
import friendsList from './friends.json';

function App() {
  const initialData = JSON.parse(localStorage.getItem('data')) || friendsList;
  const [friends, setFriends] = useState(initialData);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(friends));
  }, [friends]);

  const handleShowAddFriend = () => {
    setShowAddFriend(prevShowAddFriend => !prevShowAddFriend);
  };

  const onAddNewFriend = friend => {
    setFriends(prevFriends => [...prevFriends, friend]);
  };

  const onDeleteFriend = friendId => {
      const updatedFriends = friends.filter(friend => friend.id !== friendId);
      setFriends(updatedFriends);
  };

  const onSelectedFriend = friend => {
    setSelectedFriend(selected => (selected?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  const handleSplitBill = value => {
    setFriends(
      friends.map(friend => {
        if (friend.id === selectedFriend.id) {
          return { ...friend, balance: friend.balance + value };
        }
        return friend;
      })
    );
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendListCard 
          friends={friends}
          onSelectedFriend={onSelectedFriend}
          selectedFriend={selectedFriend}
          onDeleteFriend={onDeleteFriend} 
        />
        {showAddFriend && (
          <FormAddFriend onAddNewFriend={onAddNewFriend} />
        )}
        <button className="button" onClick={handleShowAddFriend}>
          {showAddFriend ? "Tutup" : "Tambah Teman"}
        </button>
      </div>

      {selectedFriend && (
        <FormSplitBill 
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
