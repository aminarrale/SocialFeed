import Post from "./Post";
const DisplayPosts = (props) => {
    return (
        <table class = "table">
            <tbody>
                {props.posts.map ((post)=>{
                    return(
                        <Post name ={post.name} post ={post.post}/>
                    )
                })}
            </tbody>
        </table>
    );
}
    export default DisplayPosts;