import Tweeter from "./logic"
import Renderer from "./render"

const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts()) // Getting the data to display

//Setting the Twit button to add the post to the posts object and then render the view
$("#post").on("click", function(){ 
    const newPost = $("#input").val()
    tweeter.addPost(newPost)
    renderer.renderPosts(tweeter.getPosts())
})



 $("#posts").on("click",".delete",function(){ 
    const postDataId = $(this).closest(".post").data().id
    tweeter.removePost(postDataId)
    renderer.renderPosts(tweeter.getPosts())
 })



 $("#posts").on("click",".add-comment",function(){
     const newComment= $(this).closest(".comment-input").find("input").val()
     const postDataId = $(this).closest(".post").data().id
     tweeter.addComment(newComment,postDataId)
     renderer.renderPosts(tweeter.getPosts())
 })

 $("#posts").on("click", ".delete-comment",function(){
    const postDataId = $(this).closest(".post").data().id 
    const commentDataId = $(this).closest(".comment-text").data().id
     tweeter.removeComment(postDataId,commentDataId)
     renderer.renderPosts(tweeter.getPosts())
 })


$("#posts").on("click",".hide",function(){
    $(this).closest(".post-text").siblings(".comments").slideUp("slow")
})

$("#posts").on("click",".show",function(){
    $(this).closest(".post-text").siblings(".comments").slideDown("slow")
})
