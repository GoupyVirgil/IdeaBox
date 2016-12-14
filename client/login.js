import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'

Template.login_template.events
( {
    'click #registration' : function( event, template)
    {
        event.preventDefault();
        Router.go('/registration');
    },

    'click #connexion' : function (event, template)
    {
        var $firstname = template.find( "#firstname" );
        var $password = template.find( "#password" );
        Meteor.loginWithPassword($firstname.value, $password.value, function(err){
            if (err) {
                Session.set('errorMessage', err.message );
            } else {
                Session.set( 'currentUserId', Meteor.userId() );
                Router.go('/comment');
            }
        });
    }
});