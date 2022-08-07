import { useState } from "react"

const CreatePost = (props) => {
    const [name, setName] = useState('');
    cost [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        
        let newPost = {
            name: name,
            post: post
        };

        if(newPost.name === ""|| newPost.post === ""){
            alert("One or more fields required")
        }
        else{
            
            props.addNewPost(newPost)
        }
        setName('');
        setPost('');
    }

    return ( 
        <form class = "form"id="form" onSubmit={handleSubmit} >
            <div class="input">
                <div>
                    <label>Name</label>
                    <input class = "input-name" id ="name"type='text' value={name} onChange={(event)=> setName(event.target.value)}/>
                </div>
                <div class = "bottom-half">
                    <label>Post</label>
                    <div class="bottom-right">
                        <textarea class="input-post" id = 'post'type="text" value={post} onChange={(event)=> setPost(event.target.value)} />
                        <button class="create-button" type="submit">Create</button>
                    </div>
                    </div>
                    
            </div>
           
            
        </form>
     );
}
 
export default CreatePost;
