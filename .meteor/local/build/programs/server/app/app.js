var require = meteorInstall({"controller.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// controller.js                                                            //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
Router.route('/comment', function () {                                      // 1
    if (!Meteor.userId()) {                                                 // 2
        Router.go('/');                                                     // 3
    } else {                                                                // 4
        this.render('comment_template');                                    // 5
    }                                                                       // 6
});                                                                         // 7
                                                                            //
Router.route('/', function () {                                             // 9
    this.render('login_template');                                          // 10
});                                                                         // 11
                                                                            //
Router.route('/registration', function () {                                 // 13
    this.render('registration_template');                                   // 14
});                                                                         // 15
//////////////////////////////////////////////////////////////////////////////

},"session.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// session.js                                                               //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
// import { Session } from 'meteor/session'                                 // 1
//////////////////////////////////////////////////////////////////////////////

},"users.js":["meteor/mongo",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// users.js                                                                 //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});     // 1
                                                                            //
posts = new Mongo.Collection("posts");                                      // 3
coms = new Mongo.Collection("coms");                                        // 4
//////////////////////////////////////////////////////////////////////////////

}],"server":{"main.js":["meteor/meteor",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/main.js                                                           //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});
// Meteor.users.remove({});                                                 // 2
//////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./controller.js");
require("./session.js");
require("./users.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
