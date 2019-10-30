export default function Tweeter() {

    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    const getPosts = function() {
        
       return posts
    }
    
    //Defining counters for posts and comments
    let postIdCounter = posts.length
    let commentIdCounter = 0
    
    for(let post of posts){ 
        commentIdCounter += post.comments.length
    }
    

    const addPost = function(text){
    let post = {}
        postIdCounter += 1
        post.id = "p" + (postIdCounter)
        post.text = text            
        post.comments = []
        posts.push(post)
        
        
    }
     
    
    const removePost = function(postID){ 
        for(let post in posts){
            if (posts[post].id == postID){
                posts.splice(post,1)
            }
        }
    }

    const addComment = function(text,postID) {  // Add the comment to the relevant post
        let comment = {}
        for(let post of posts) {
            if (post.id == postID){
                commentIdCounter +=1
                comment.id = "c"+ (commentIdCounter)
                comment.text = text
                post.comments.push(comment)

            }
        }
    }

   const removeComment = function (postID,commentID){
        for(let post of posts){
            if (post.id == postID){
                let commentsArray = post.comments
                for(let comment in commentsArray){
                    if(commentsArray[comment].id == commentID){
                        commentsArray.splice(comment,1)
                    }
                }
            }
               
            
        
        }

    }
    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}

