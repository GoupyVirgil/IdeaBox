Session.set('popup_is_open', false);

Template.comment_template.helpers
(
    {
        popup_is_open: function(){
            return Session.get('popup_is_open');
        },

        all_post : function ()
        {
            return posts.find().map
            (
                function( post, index, cursor )
                {
                    var $author = Meteor.users.find(post.authorId).fetch()[0];
                    var $allComs = coms.find({'postId':post._id}).fetch();
                    return {
                        message : post.message,
                        postId : post._id,
                        likes : post.likes,
                        severalLikes : ((post.likes > 1) ? true: false),
                        severalComments : ((post.comment > 1) ? true: false),
                        comment : post.comment,
                        createdAt : moment(post.createdAt).fromNow(),
                        author : {
                            name : $author.username
                        },
                        coms : $allComs
                    };
                }
            );
        },
    }
);

Template.comment_template.events({
    'click #close' : function (){
        Session.set('popup_is_open', false);
    },

    'click #validate' : function(event, template){
        event.preventDefault();
        var $message = template.find( '#comment');
        var $authorId = Meteor.userId();
        if ($message.value !== ""){
            posts.insert({
                message: $message.value,
                authorId: $authorId,
                likes: 0,
                usersWhoLiked :[],
                comment: 0,
                createdAt: new Date(),
            });

            $message.value = '';
            Session.set('popup_is_open', false);
        }
    },

    'click #like' : function(event){
        var $postId = event.target.dataset.id;
        var $post = posts.find($postId).fetch()[0];
        if ( $post && $post.usersWhoLiked.indexOf(Meteor.userId() ) === -1){

            var $likesUpdated = $post.likes + 1;
            $post.usersWhoLiked.push( Meteor.userId() );
            var $usersWhoLikedUpdated = $post.usersWhoLiked;
            posts.update({_id : $postId},{$set:{likes: $likesUpdated, usersWhoLiked: $usersWhoLikedUpdated }});
        }
    }
});

Template.header_template.helpers
(
    {
        current_user : function ()
        {
            var user = Meteor.users.find(Session.get( 'currentUserId' )).fetch()[0];
            return { name : user.username, email : user.emails[0].address};

        }
    }
);

Template.header_template.events({
    'click #logout' : function (event, template){
        Meteor.logout(function(){
            Session.set('currentUserId', undefined);
            Router.go('/');
        })
    }
});


Template.add_comment_template.events({
    'click #addComment' : function (){
        Session.set('popup_is_open', true);
    }
});