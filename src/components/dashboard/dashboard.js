/**
 * https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80
 */
import React,{useState} from 'react';
import axios from 'axios';
import './dashboard.css';

function Dashboard () {
    const [posts,setPosts] = useState('');
    const [status,setStatus] = useState(false);
    const [message,setMessage] = useState('');
    function submitPosts(){
       axios
       .post("https://graph.facebook.com/104696141822154/feed?", {
           message:posts,
           access_token:"EAAExwALYfZAMBAEQAPzOL958VRP7VZCKZBMLzT6nicbzyxtqDC3FgxgzdpEdlQZCw3nUNbFoiSPPNxzkpAHyxxPrLUYzVIvdZCN1ifnpoAxZBEWkyuYrITkOtZByojqAcrFDwlHrZBDBcVhce3hDvTNFi9bGoZA0wFp0LM019n0ArZBwxnUZA4w3F33k9ZBxhWfo88SnQWT1Po5hWAZDZD" 
       })
       .then(
           res => {
            setStatus(true);
            console.log('%c Success','color:green')
            console.log(res.data);
            setStatus(true);
            setMessage('Successfully posted');
            setTimeout(() => {
                setStatus(false);
                setMessage('');
            },3000);
           }
       )
       .catch(err => {
        setStatus(true);
        console.log(`%cError`,'color:red');
        console.log(err);
        setMessage('Error occurred while posting');
        setTimeout(() => {
            setStatus(false);
            setMessage('');
        },3000);
       })
    }
    function submitPicture(){
        axios
        .post("https://graph.facebook.com/104696141822154/photos?", {
            url:"https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            access_token:"EAAExwALYfZAMBAEQAPzOL958VRP7VZCKZBMLzT6nicbzyxtqDC3FgxgzdpEdlQZCw3nUNbFoiSPPNxzkpAHyxxPrLUYzVIvdZCN1ifnpoAxZBEWkyuYrITkOtZByojqAcrFDwlHrZBDBcVhce3hDvTNFi9bGoZA0wFp0LM019n0ArZBwxnUZA4w3F33k9ZBxhWfo88SnQWT1Po5hWAZDZD" 
        })
        .then(
            res => {
             setStatus(true);
             console.log('%c Success','color:green')
             console.log(res.data);
             setStatus(true);
             setMessage('Successfully posted');
             setTimeout(() => {
                 setStatus(false);
                 setMessage('');
             },3000);
            }
        )
        .catch(err => {
         setStatus(true);
         console.log(`%cError`,'color:red');
         console.log(err);
         setMessage('Error occurred while posting');
         setTimeout(() => {
             setStatus(false);
             setMessage('');
         },3000);
        })
    }

    return(
        <div class="dashboard">
            <div class="child1">
            <h1>Hey guys, I am Dashboard.</h1>
            <br/>
            <input 
            type="text" 
            class="input_field"
            onChange={(e) => setPosts(e.target.value)}
            />
            <br/>
            <button 
            onClick={() => submitPosts()}
            class="submit_button">Post</button>
            <br/>
            <button
            class="submit_button"
            onClick={() => submitPicture()}>
                Post Picture
            </button>
            <br/>
            {status && <p style={{color:'blue'}}>{message}</p>}
            </div>
            <br/>
        </div>
    )
}

export default Dashboard;