Template.add_com_template.events
({
    'click #addComment' : function (event, template){
        event.preventDefault();
        var $comment = template.find( '#com' ).value;
        var $postId = event.target.dataset.id;
        var $post = posts.find($postId).fetch()[0];
        if ( $comment !== ''){
            var $insertedObjectId = coms.insert({
                comment : $comment,
                postId : $postId,
                authorId : Meteor.userId(),
                createdAt: new Date(),
                author: Meteor.users.find(Meteor.userId()).fetch()[0]
            });
            $commentCountUpdated = $post.comment + 1;
            posts.update({_id : $postId},{$set:{comment: $commentCountUpdated}});
            template.find( '#com' ).value = '';
        }
    }
});