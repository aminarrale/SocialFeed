import ThumbButtons from "./buttons/ThumbButtons";

const Post = (props) => {
    console.log(props)
    
    return (
        <div class ="div">
            <h3 class = "name">{props.name}</h3>
            <p class="post">{props.post}</p>
            <ThumbButtons/>
            

        </div>
    );
        
}

export default Post;
