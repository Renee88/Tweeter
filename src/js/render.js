export default function Renderer () {
    const getText = (postOrComment) => postOrComment.text
    const getID = (postOrComment) => postOrComment.id
    const getComments = (post) => post.comments
    
    
    const embedComments = (postDataId,commentsArray) => {
        for(let comment of commentsArray){
            let commentText = getText(comment)
            let commentId = getID(comment)
            postDataId.find(".comments").append(`<div data-id=${commentId} class = comment-text><div class= delete-comment>X</div>${commentText}</div>`) // Appends the comments to the direct child of the post with class comments
 
        }
    }

    const hideButton = function(){
        let hide = $("<div class = hide> Hide comments </div>")
        $(".display").append(hide)
        $(".hide").css({width: "fit-content",backgroundColor: "#9980FA",color: "#FFFFFF",
        fontSize: "16px",padding: "5px" ,borderRadius: "5px",justifySelf: "end", 
        alignSelf: "center", boxShadow: "5px 5px 5px #747d8c",cursor:"pointer"})
    }

    const showButton = function(){
        let hide = $("<div class = show> Show comments </div>")
        $(".display").append(hide)
        $(".show").css({width: "fit-content",backgroundColor: "#9980FA",color: "#FFFFFF",
        fontSize: "16px",padding: "5px" ,borderRadius: "5px",justifySelf: "end", 
        alignSelf: "center", boxShadow: "5px 5px 5px #747d8c",cursor: "pointer"})
    }
    
    
    const embedPostsAndComments = (posts) => {
        for(let post of posts){
            let postText = getText(post)
            let postId = getID(post)
            let commentsArray = getComments(post)
            $("#posts").append(`<div data-id=${postId} class = post><div class=post-text>${postText}<div class = display></div></div></div>`)
            let postDataId = $(`[data-id= ${postId}]`)
            postDataId.append(`<div class = comments></div>`)     
            embedComments(postDataId,commentsArray)
            postDataId.append(`
            <div class = delete-and-comment>
            <div class = comment-input>
            <input class = comment-field placeholder = 'Whats on your mind?'>
            <div class = add-comment >Comment</div>
            </div>
            <div class= delete>Delete Post</div>
            </div>`)
            postDataId.append('')
        }
    }


    const renderPosts = function(posts){
        $("#posts").empty()
        embedPostsAndComments(posts)
        showButton()
        hideButton()
    }
    return { renderPosts: renderPosts}
}


