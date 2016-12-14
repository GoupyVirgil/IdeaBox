Router.route('/comment', function(){
    if(!Meteor.userId()){
        Router.go('/');
    }else{
    this.render( 'comment_template' );
    }
});

Router.route('/', function () {
    this.render( 'login_template' );
});

Router.route('/registration', function(){
    this.render( 'registration_template' );
})