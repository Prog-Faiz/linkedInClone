import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from "@material-ui/icons";
import { useEffect, useState } from "react";
import "../styles/Feed.css";
import { db } from "./firebase";
import firease from 'firebase';
import InputOptions from "./InputOptions";
import Post from "./Post";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";


const Feed = () => {
    const user = useSelector(selectUser);

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, []);

    const sendPost = (event) => {
        event.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firease.firestore.FieldValue.serverTimestamp(),
        });

        setInput('');
    };

    return ( 
        <div className="feed">
            <div className="feed__inputPost">
                <div className="feed__input">
                    <Create />
                    <form>
                        <input value={input} onChange={event => setInput(event.target.value)} placeholder="Start a Post" type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={Image} title="Photo" color="#70B5F9" />
                    <InputOptions Icon={Subscriptions} title="Video" color="#E7A33E" />
                    <InputOptions Icon={EventNote} title="Event" color="#C0CBCD" />
                    <InputOptions Icon={CalendarViewDay} title="Write article" color="#7FC15E" />
                </div>
            </div>

            {/* Posts */}
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
                    <Post 
                        key={id}
                        name={ name }
                        description={ description }
                        message={ message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
        </div>
     );
}
 
export default Feed;