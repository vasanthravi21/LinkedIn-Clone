import React, {useEffect, useState} from "react";
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
// import ImageIcon from '@mui/icons-material/Image';
import InputOption from './InputOption';
// import InputIcon from '@mui/icons-material/Input';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import {db} from './firebase';
import { collection, addDoc, getDocs } from "firebase/firestore"; 



function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // db.collection("posts").onSnapshot((snapshot) =>
        //     setPosts(
        //         snapshot.docs.map((doc) => ({
        //             id: doc.id,
        //             data: doc.data(),
        //         }))
        //     )
        // );

        // const querySnapshot = getDocs(collection(db, "users"));
        // querySnapshot.forEach((doc) => {
        // // console.log(`${doc.id} => ${doc.data()}`);
        //     console.log(doc.data)
        // });



}, []);

const sendPost = (e) => {
    e.preventDefault();
    try {
        const docRef = addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
        console.log("Document written with ID: ", docRef.id);

    } catch (e) {
        console.error("Error adding document: ", e);
    }
      

};


    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOption Icon = {ImageIcon} title="photo" color="#70B5F9"/> 
                    <InputOption Icon = {SubscriptionsIcon} title="Video" color="#E7A33E"/> 
                    <InputOption Icon = {EventNoteIcon} title="Event" color="#C0CBCD"/> 
                    <InputOption Icon = {CalendarViewDayIcon} title="Write article" color="#7FC15E"/> 
                </div>
            </div>

            {posts.map(({id, data: { name, description, message, photoUrl}}) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            <Post name='Vasanth' description="This is a test" message="WoW this worked" />

        </div>
    );
}

export default Feed