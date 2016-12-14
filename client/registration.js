import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'

import './main.html';
Session.set('errorMessage', false);
Template.registration_template.helpers
(
    {
        all_users : function ()
        {
            return Meteor.users.find().map
            (
                function( user, index, cursor )
                {
                    return { name : user.username.toUpperCase(), email : user.emails[0].address};
                }
            );
        }
    }
);

Template.registration_template.events
( {
    'click #registration' : function( event, template )
    {
        event.preventDefault();
        var $firstname = template.find( "#firstname" );
        var $email = template.find( "#email" );
        var $password = template.find( "#password" );

        if( $email.value !== "" && $firstname.value !== "" ){

            Accounts.createUser({
                username: $firstname.value,
                email: $email.value,
                password: $password.value,
                IsActive: 0
            }, function(err){
                    if (err) {
                        Session.set('errorMessage', err.message );
                    } else {
                        Session.set( 'currentUserId', Meteor.userId() );
                        Router.go('/comment');
                    }
            });
        }
    },
    "click #login" : function (event, template){
        event.preventDefault();
        Router.go('/');
    }
} );