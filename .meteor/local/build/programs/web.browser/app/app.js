var require = meteorInstall({"client":{"comment":{"template.add_comment.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// client/comment/template.add_comment.js                                                                //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
                                                                                                         // 1
Template.__checkName("add_com_template");                                                                // 2
Template["add_com_template"] = new Template("Template.add_com_template", (function() {                   // 3
  var view = this;                                                                                       // 4
  return HTML.DIV({                                                                                      // 5
    class: "commentsArea_new"                                                                            // 6
  }, "\n        ", HTML.TEXTAREA({                                                                       // 7
    name: "",                                                                                            // 8
    id: "com",                                                                                           // 9
    cols: "30",                                                                                          // 10
    rows: "10"                                                                                           // 11
  }), "\n        ", HTML.BUTTON({                                                                        // 12
    id: "addComment",                                                                                    // 13
    class: "post_new",                                                                                   // 14
    "data-id": function() {                                                                              // 15
      return Spacebars.mustache(view.lookup("postId"));                                                  // 16
    }                                                                                                    // 17
  }, "Commenter"), "\n    ");                                                                            // 18
}));                                                                                                     // 19
                                                                                                         // 20
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.comment_area.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// client/comment/template.comment_area.js                                                               //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
                                                                                                         // 1
Template.__checkName("comment_area_template");                                                           // 2
Template["comment_area_template"] = new Template("Template.comment_area_template", (function() {         // 3
  var view = this;                                                                                       // 4
  return HTML.DIV({                                                                                      // 5
    class: "commentsArea",                                                                               // 6
    id: "commentArea",                                                                                   // 7
    "data-postid": function() {                                                                          // 8
      return Spacebars.mustache(view.lookup("postId"));                                                  // 9
    }                                                                                                    // 10
  }, "\n    ", Blaze.Each(function() {                                                                   // 11
    return Spacebars.call(view.lookup("coms"));                                                          // 12
  }, function() {                                                                                        // 13
    return [ "\n        ", HTML.DIV({                                                                    // 14
      class: "commentsArea_old"                                                                          // 15
    }, "\n            ", HTML.DIV({                                                                      // 16
      class: "commentsArea_old-photo"                                                                    // 17
    }, "\n                ", HTML.IMG({                                                                  // 18
      class: "img-rounded",                                                                              // 19
      src: "img/profil.jpg",                                                                             // 20
      alt: ""                                                                                            // 21
    }), "\n            "), "\n                ", HTML.DIV({                                              // 22
      class: "commentsArea_old-Text"                                                                     // 23
    }, "\n                ", HTML.DIV({                                                                  // 24
      class: "commentsArea_old-about"                                                                    // 25
    }, "\n                    ", HTML.P(Blaze.View("lookup:author.username", function() {                // 26
      return Spacebars.mustache(Spacebars.dot(view.lookup("author"), "username"));                       // 27
    })), "\n                "), "\n                ", HTML.DIV({                                         // 28
      class: "commentsArea_old-content"                                                                  // 29
    }, "\n                    ", HTML.P(Blaze.View("lookup:comment", function() {                        // 30
      return Spacebars.mustache(view.lookup("comment"));                                                 // 31
    })), "\n                "), "\n            "), "\n        "), "\n        ", HTML.HR(), "\n    " ];   // 32
  }), "\n    ", Spacebars.include(view.lookupTemplate("add_com_template")), "\n    ");                   // 33
}));                                                                                                     // 34
                                                                                                         // 35
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"error":{"template.error.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// client/error/template.error.js                                                                        //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
                                                                                                         // 1
Template.__checkName("error_template");                                                                  // 2
Template["error_template"] = new Template("Template.error_template", (function() {                       // 3
  var view = this;                                                                                       // 4
  return Blaze.If(function() {                                                                           // 5
    return Spacebars.call(view.lookup("error_message"));                                                 // 6
  }, function() {                                                                                        // 7
    return [ "\n        ", HTML.H1(Blaze.View("lookup:error_message.errorMessage", function() {          // 8
      return Spacebars.mustache(Spacebars.dot(view.lookup("error_message"), "errorMessage"));            // 9
    })), "\n    " ];                                                                                     // 10
  });                                                                                                    // 11
}));                                                                                                     // 12
                                                                                                         // 13
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"header":{"template.header.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// client/header/template.header.js                                                                      //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
                                                                                                         // 1
Template.__checkName("header_template");                                                                 // 2
Template["header_template"] = new Template("Template.header_template", (function() {                     // 3
  var view = this;                                                                                       // 4
  return HTML.HEADER({                                                                                   // 5
    class: "header_header"                                                                               // 6
  }, "\n        ", HTML.DIV({                                                                            // 7
    class: "header_settings"                                                                             // 8
  }, "\n            ", HTML.Raw('<div id="logout" class="header_logOff">\n                <img class="header_logOff-img" src="img/logoff.png" alt="">\n            </div>'), "\n            ", HTML.Raw('<div class="header_profil">\n                <img class="header_profil-img img-rounded" src="img/profil.jpg" alt="">\n            </div>'), "\n            ", HTML.DIV({
    class: "header_hello"                                                                                // 10
  }, "\n                ", HTML.P({                                                                      // 11
    class: "header_hello-content"                                                                        // 12
  }, "\n                    Bonjour ", HTML.SPAN(Blaze.View("lookup:current_user.name", function() {     // 13
    return Spacebars.mustache(Spacebars.dot(view.lookup("current_user"), "name"));                       // 14
  }), " "), "!\n                "), "\n            "), "\n        "), HTML.Raw(' <!-- FIN HEADER SETTINGS -->\n        <div class="header_title">\n            <h1 class="header_title-content">\n                La boîte à idée de <span>Mr Priou</span>\n            </h1>\n            <div class="header_title-underline"></div>\n        </div>\n    '));
}));                                                                                                     // 16
                                                                                                         // 17
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"login":{"template.login.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// client/login/template.login.js                                                                        //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
                                                                                                         // 1
Template.__checkName("login_template");                                                                  // 2
Template["login_template"] = new Template("Template.login_template", (function() {                       // 3
  var view = this;                                                                                       // 4
  return HTML.DIV({                                                                                      // 5
    class: "mainContainer_connexion"                                                                     // 6
  }, "\n        ", HTML.DIV({                                                                            // 7
    class: "container_left"                                                                              // 8
  }, "\n            ", HTML.DIV({                                                                        // 9
    class: "container_left-content"                                                                      // 10
  }, "\n                ", HTML.Raw('<header>\n                    <div class="header_title">\n                        <h1 class="header_title-content">\n                            La boîte à idée de <span>Mr Priou</span>\n                        </h1>\n                        <div class="header_title-underline"></div>\n                    </div>\n                </header>'), "\n                ", HTML.Raw('<div class="form">\n                    <div class="form_connexion">\n                        <input type="text" id="firstname" placeholder="Nom d\'utilisateur">\n                        <input type="password" id="password" placeholder="Mot de passe">\n                        <a href="" id="connexion" class="btn_connexion">Connexion</a>\n                    </div>\n                    <a href="" id="registration">S\'inscrire</a>\n                </div>'), "\n                ", Spacebars.include(view.lookupTemplate("error_template")), "\n            "), "\n        "), HTML.Raw('\n        <div class="container_right">\n            <div class="container_right-content"></div>\n        </div>\n    '));
}));                                                                                                     // 12
                                                                                                         // 13
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"posts":{"template.add_post_button.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// client/posts/template.add_post_button.js                                                              //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
                                                                                                         // 1
Template.__checkName("add_comment_template");                                                            // 2
Template["add_comment_template"] = new Template("Template.add_comment_template", (function() {           // 3
  var view = this;                                                                                       // 4
  return HTML.Raw('<div class="addPost">\n        <div class="btnPost" id="addComment">\n            <img src="img/add.png" alt="">\n        </div>\n    </div>');
}));                                                                                                     // 6
                                                                                                         // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.overlay.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// client/posts/template.overlay.js                                                                      //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
                                                                                                         // 1
Template.__checkName("overlay_template");                                                                // 2
Template["overlay_template"] = new Template("Template.overlay_template", (function() {                   // 3
  var view = this;                                                                                       // 4
  return HTML.DIV({                                                                                      // 5
    class: "overlay"                                                                                     // 6
  }, "\n        ", HTML.DIV({                                                                            // 7
    class: "addPost_popup"                                                                               // 8
  }, "\n            ", HTML.Raw('<img src="img/error.png" alt="">'), "\n            ", HTML.Raw("<hr>"), "\n            ", HTML.TEXTAREA({
    name: "",                                                                                            // 10
    id: "",                                                                                              // 11
    cols: "100",                                                                                         // 12
    rows: "20",                                                                                          // 13
    placeholder: "Je pense que ..."                                                                      // 14
  }), "\n            ", HTML.Raw("<hr>"), "\n            ", HTML.Raw('<div class="post">\n                <span>Poster mon idée !</span>\n            </div>'), "\n        "), "\n    ");
}));                                                                                                     // 16
                                                                                                         // 17
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.post_popup.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// client/posts/template.post_popup.js                                                                   //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
                                                                                                         // 1
Template.__checkName("comment_popup_template");                                                          // 2
Template["comment_popup_template"] = new Template("Template.comment_popup_template", (function() {       // 3
  var view = this;                                                                                       // 4
  return HTML.DIV({                                                                                      // 5
    class: "overlay"                                                                                     // 6
  }, "\n        ", HTML.DIV({                                                                            // 7
    class: "addPost_popup"                                                                               // 8
  }, "\n            ", HTML.Raw('<img id="close" src="img/error.png" alt="">'), "\n            ", HTML.Raw("<hr>"), "\n            ", HTML.TEXTAREA({
    name: "",                                                                                            // 10
    id: "comment",                                                                                       // 11
    cols: "100",                                                                                         // 12
    rows: "20",                                                                                          // 13
    placeholder: "Je pense que ..."                                                                      // 14
  }), "\n            ", HTML.Raw("<hr>"), "\n            ", HTML.Raw('<div id="validate" class="post">\n                <span>Poster mon idée !</span>\n            </div>'), "\n        "), "\n    ");
}));                                                                                                     // 16
                                                                                                         // 17
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.posts.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// client/posts/template.posts.js                                                                        //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
                                                                                                         // 1
Template.__checkName("comment_template");                                                                // 2
Template["comment_template"] = new Template("Template.comment_template", (function() {                   // 3
  var view = this;                                                                                       // 4
  return [ Spacebars.include(view.lookupTemplate("header_template")), "\n    ", HTML.DIV({               // 5
    class: "mainContainer"                                                                               // 6
  }, "\n        ", Blaze.Each(function() {                                                               // 7
    return Spacebars.call(view.lookup("all_post"));                                                      // 8
  }, function() {                                                                                        // 9
    return [ "\n            ", HTML.SECTION({                                                            // 10
      class: "idea"                                                                                      // 11
    }, "\n                ", HTML.DIV({                                                                  // 12
      class: "idea_profil"                                                                               // 13
    }, "\n                    ", HTML.IMG({                                                              // 14
      src: "img/profil.jpg",                                                                             // 15
      alt: "",                                                                                           // 16
      class: "idea_profil-photo img-rounded-big"                                                         // 17
    }), "\n                    ", HTML.P({                                                               // 18
      class: "idea_profil-name"                                                                          // 19
    }, "\n                        ", HTML.SPAN(Blaze.View("lookup:author.name", function() {             // 20
      return Spacebars.mustache(Spacebars.dot(view.lookup("author"), "name"));                           // 21
    })), "\n                    "), "\n                "), "\n                ", HTML.DIV({              // 22
      class: "idea_mainContent"                                                                          // 23
    }, "\n                    ", HTML.DIV({                                                              // 24
      class: "idea_content"                                                                              // 25
    }, "\n                        ", HTML.P({                                                            // 26
      class: "idea_content-text"                                                                         // 27
    }, "\n                            ", Blaze.View("lookup:message", function() {                       // 28
      return Spacebars.mustache(view.lookup("message"));                                                 // 29
    }), "\n                        "), "\n                        ", HTML.DIV({                          // 30
      class: "idea_content-more"                                                                         // 31
    }, "\n                            ", HTML.DIV({                                                      // 32
      class: "idea_content-more_likes idea_content-count"                                                // 33
    }, "\n\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                 // 34
      class: "idea_content-icon"                                                                         // 35
    }, "\n\t\t\t\t\t\t\t\t\t", HTML.IMG({                                                                // 36
      src: "img/like.png",                                                                               // 37
      alt: "",                                                                                           // 38
      class: "likes",                                                                                    // 39
      id: "like",                                                                                        // 40
      "data-id": function() {                                                                            // 41
        return Spacebars.mustache(view.lookup("postId"));                                                // 42
      }                                                                                                  // 43
    }), "\n\t\t\t\t\t\t\t\t"), "\n                                ", HTML.P({                            // 44
      class: "idea_content-iconText"                                                                     // 45
    }, HTML.A({                                                                                          // 46
      class: "link_likes",                                                                               // 47
      href: ""                                                                                           // 48
    }, Blaze.View("lookup:likes", function() {                                                           // 49
      return Spacebars.mustache(view.lookup("likes"));                                                   // 50
    }), " like", Blaze.If(function() {                                                                   // 51
      return Spacebars.call(view.lookup("severalLikes"));                                                // 52
    }, function() {                                                                                      // 53
      return "s";                                                                                        // 54
    }))), "\n                            "), "\n                            ", HTML.DIV({                // 55
      class: "idea_content-more_comments idea_content-count"                                             // 56
    }, "\n\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                 // 57
      class: "idea_content-icon"                                                                         // 58
    }, "\n\t\t\t\t\t\t\t\t\t", HTML.IMG({                                                                // 59
      src: "img/comment.png",                                                                            // 60
      alt: "",                                                                                           // 61
      class: "comments"                                                                                  // 62
    }), "\n\t\t\t\t\t\t\t\t"), "\n                                ", HTML.P({                            // 63
      class: "idea_content-iconText"                                                                     // 64
    }, HTML.A({                                                                                          // 65
      class: "link_comm",                                                                                // 66
      href: ""                                                                                           // 67
    }, Blaze.View("lookup:comment", function() {                                                         // 68
      return Spacebars.mustache(view.lookup("comment"));                                                 // 69
    }), " com", Blaze.If(function() {                                                                    // 70
      return Spacebars.call(view.lookup("severalComments"));                                             // 71
    }, function() {                                                                                      // 72
      return "s";                                                                                        // 73
    }))), "\n                            "), "\n                            ", HTML.DIV({                // 74
      class: "idea_content-more_hour idea_content-count"                                                 // 75
    }, "\n                                ", Blaze.View("lookup:createdAt", function() {                 // 76
      return Spacebars.mustache(view.lookup("createdAt"));                                               // 77
    }), "\n                            "), "\n                        "), "\n                    "), "\n                    ", Spacebars.include(view.lookupTemplate("comment_area_template")), "\n                "), "\n            "), "\n        " ];
  }), "\n        ", Spacebars.include(view.lookupTemplate("add_comment_template")), "\n    "), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("popup_is_open"));                                                 // 80
  }, function() {                                                                                        // 81
    return [ "\n        ", Spacebars.include(view.lookupTemplate("comment_popup_template")), "\n    " ];
  }) ];                                                                                                  // 83
}));                                                                                                     // 84
                                                                                                         // 85
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"registration":{"template.registration.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// client/registration/template.registration.js                                                          //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
                                                                                                         // 1
Template.__checkName("registration_template");                                                           // 2
Template["registration_template"] = new Template("Template.registration_template", (function() {         // 3
  var view = this;                                                                                       // 4
  return HTML.DIV({                                                                                      // 5
    class: "mainContainer_connexion"                                                                     // 6
  }, "\n        ", HTML.DIV({                                                                            // 7
    class: "container_left"                                                                              // 8
  }, "\n            ", HTML.DIV({                                                                        // 9
    class: "container_left-content"                                                                      // 10
  }, "\n                ", HTML.Raw('<header>\n                    <div class="header_title">\n                        <h1 class="header_title-content">\n                            La boîte à idée de <span>Mr Priou</span>\n                        </h1>\n                        <div class="header_title-underline"></div>\n                    </div>\n                </header>'), "\n                ", HTML.DIV({
    class: "form"                                                                                        // 12
  }, "\n                    ", HTML.Raw('<div class="form_connexion">\n                        <input type="email" placeholder="Adresse e-mail" id="email">\n                        <input type="text" placeholder="Nom d\'utilisateur" id="firstname">\n                        <input type="password" placeholder="Mot de passe" id="password">\n                        <a href="" id="registration" class="btn_connexion">Inscription</a>\n                    </div>'), "\n                    ", HTML.Raw('<a href="" id="login">Se connecter</a>'), "\n                    ", Spacebars.include(view.lookupTemplate("error_template")), "\n                "), "\n            "), "\n        "), HTML.Raw('\n        <div class="container_right">\n            <div class="container_right-content"></div>\n        </div>\n    '));
}));                                                                                                     // 14
                                                                                                         // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"com.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// client/com.js                                                                                         //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
Template.add_com_template.events({                                                                       // 1
    'click #addComment': function () {                                                                   // 3
        function clickAddComment(event, template) {                                                      // 3
            event.preventDefault();                                                                      // 4
            var $comment = template.find('#com').value;                                                  // 5
            var $postId = event.target.dataset.id;                                                       // 6
            var $post = posts.find($postId).fetch()[0];                                                  // 7
            if ($comment !== '') {                                                                       // 8
                var $insertedObjectId = coms.insert({                                                    // 9
                    comment: $comment,                                                                   // 10
                    postId: $postId,                                                                     // 11
                    authorId: Meteor.userId(),                                                           // 12
                    createdAt: new Date(),                                                               // 13
                    author: Meteor.users.find(Meteor.userId()).fetch()[0]                                // 14
                });                                                                                      // 9
                $commentCountUpdated = $post.comment + 1;                                                // 16
                posts.update({ _id: $postId }, { $set: { comment: $commentCountUpdated } });             // 17
                template.find('#com').value = '';                                                        // 18
            }                                                                                            // 19
        }                                                                                                // 20
                                                                                                         //
        return clickAddComment;                                                                          // 3
    }()                                                                                                  // 3
});                                                                                                      // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"error.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// client/error.js                                                                                       //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
Template.error_template.helpers({                                                                        // 1
    error_message: function () {                                                                         // 4
        function error_message() {                                                                       // 4
            if (Session.get('errorMessage')) {                                                           // 6
                return { errorMessage: Session.get('errorMessage') };                                    // 7
            }                                                                                            // 8
        }                                                                                                // 9
                                                                                                         //
        return error_message;                                                                            // 4
    }()                                                                                                  // 4
});                                                                                                      // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"login.js":["meteor/templating","meteor/accounts-base","meteor/meteor",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// client/login.js                                                                                       //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});
                                                                                                         // 2
                                                                                                         // 3
                                                                                                         //
Template.login_template.events({                                                                         // 5
    'click #registration': function () {                                                                 // 7
        function clickRegistration(event, template) {                                                    // 7
            event.preventDefault();                                                                      // 9
            Router.go('/registration');                                                                  // 10
        }                                                                                                // 11
                                                                                                         //
        return clickRegistration;                                                                        // 7
    }(),                                                                                                 // 7
                                                                                                         //
    'click #connexion': function () {                                                                    // 13
        function clickConnexion(event, template) {                                                       // 13
            var $firstname = template.find("#firstname");                                                // 15
            var $password = template.find("#password");                                                  // 16
            Meteor.loginWithPassword($firstname.value, $password.value, function (err) {                 // 17
                if (err) {                                                                               // 18
                    Session.set('errorMessage', err.message);                                            // 19
                } else {                                                                                 // 20
                    Session.set('currentUserId', Meteor.userId());                                       // 21
                    Router.go('/comment');                                                               // 22
                }                                                                                        // 23
            });                                                                                          // 24
        }                                                                                                // 25
                                                                                                         //
        return clickConnexion;                                                                           // 13
    }()                                                                                                  // 13
});                                                                                                      // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"post.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// client/post.js                                                                                        //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
Session.set('popup_is_open', false);                                                                     // 1
                                                                                                         //
Template.comment_template.helpers({                                                                      // 3
    popup_is_open: function () {                                                                         // 6
        function popup_is_open() {                                                                       // 6
            return Session.get('popup_is_open');                                                         // 7
        }                                                                                                // 8
                                                                                                         //
        return popup_is_open;                                                                            // 6
    }(),                                                                                                 // 6
                                                                                                         //
    all_post: function () {                                                                              // 10
        function all_post() {                                                                            // 10
            return posts.find().map(function (post, index, cursor) {                                     // 12
                var $author = Meteor.users.find(post.authorId).fetch()[0];                               // 16
                var $allComs = coms.find({ 'postId': post._id }).fetch();                                // 17
                return {                                                                                 // 18
                    message: post.message,                                                               // 19
                    postId: post._id,                                                                    // 20
                    likes: post.likes,                                                                   // 21
                    severalLikes: post.likes > 1 ? true : false,                                         // 22
                    severalComments: post.comment > 1 ? true : false,                                    // 23
                    comment: post.comment,                                                               // 24
                    createdAt: moment(post.createdAt).fromNow(),                                         // 25
                    author: {                                                                            // 26
                        name: $author.username                                                           // 27
                    },                                                                                   // 26
                    coms: $allComs                                                                       // 29
                };                                                                                       // 18
            });                                                                                          // 31
        }                                                                                                // 33
                                                                                                         //
        return all_post;                                                                                 // 10
    }()                                                                                                  // 10
});                                                                                                      // 5
                                                                                                         //
Template.comment_template.events({                                                                       // 37
    'click #close': function () {                                                                        // 38
        function clickClose() {                                                                          // 38
            Session.set('popup_is_open', false);                                                         // 39
        }                                                                                                // 40
                                                                                                         //
        return clickClose;                                                                               // 38
    }(),                                                                                                 // 38
                                                                                                         //
    'click #validate': function () {                                                                     // 42
        function clickValidate(event, template) {                                                        // 42
            event.preventDefault();                                                                      // 43
            var $message = template.find('#comment');                                                    // 44
            var $authorId = Meteor.userId();                                                             // 45
            if ($message.value !== "") {                                                                 // 46
                posts.insert({                                                                           // 47
                    message: $message.value,                                                             // 48
                    authorId: $authorId,                                                                 // 49
                    likes: 0,                                                                            // 50
                    usersWhoLiked: [],                                                                   // 51
                    comment: 0,                                                                          // 52
                    createdAt: new Date()                                                                // 53
                });                                                                                      // 47
                                                                                                         //
                $message.value = '';                                                                     // 56
                Session.set('popup_is_open', false);                                                     // 57
            }                                                                                            // 58
        }                                                                                                // 59
                                                                                                         //
        return clickValidate;                                                                            // 42
    }(),                                                                                                 // 42
                                                                                                         //
    'click #like': function () {                                                                         // 61
        function clickLike(event) {                                                                      // 61
            var $postId = event.target.dataset.id;                                                       // 62
            var $post = posts.find($postId).fetch()[0];                                                  // 63
            if ($post && $post.usersWhoLiked.indexOf(Meteor.userId()) === -1) {                          // 64
                                                                                                         //
                var $likesUpdated = $post.likes + 1;                                                     // 66
                $post.usersWhoLiked.push(Meteor.userId());                                               // 67
                var $usersWhoLikedUpdated = $post.usersWhoLiked;                                         // 68
                posts.update({ _id: $postId }, { $set: { likes: $likesUpdated, usersWhoLiked: $usersWhoLikedUpdated } });
            }                                                                                            // 70
        }                                                                                                // 71
                                                                                                         //
        return clickLike;                                                                                // 61
    }()                                                                                                  // 61
});                                                                                                      // 37
                                                                                                         //
Template.header_template.helpers({                                                                       // 74
    current_user: function () {                                                                          // 77
        function current_user() {                                                                        // 77
            var user = Meteor.users.find(Session.get('currentUserId')).fetch()[0];                       // 79
            return { name: user.username, email: user.emails[0].address };                               // 80
        }                                                                                                // 82
                                                                                                         //
        return current_user;                                                                             // 77
    }()                                                                                                  // 77
});                                                                                                      // 76
                                                                                                         //
Template.header_template.events({                                                                        // 86
    'click #logout': function () {                                                                       // 87
        function clickLogout(event, template) {                                                          // 87
            Meteor.logout(function () {                                                                  // 88
                Session.set('currentUserId', undefined);                                                 // 89
                Router.go('/');                                                                          // 90
            });                                                                                          // 91
        }                                                                                                // 92
                                                                                                         //
        return clickLogout;                                                                              // 87
    }()                                                                                                  // 87
});                                                                                                      // 86
                                                                                                         //
Template.add_comment_template.events({                                                                   // 96
    'click #addComment': function () {                                                                   // 97
        function clickAddComment() {                                                                     // 97
            Session.set('popup_is_open', true);                                                          // 98
        }                                                                                                // 99
                                                                                                         //
        return clickAddComment;                                                                          // 97
    }()                                                                                                  // 97
});                                                                                                      // 96
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"registration.js":["meteor/templating","meteor/accounts-base","meteor/meteor","./main.html",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// client/registration.js                                                                                //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});module.import('./main.html');
                                                                                                         // 2
                                                                                                         // 3
                                                                                                         //
                                                                                                         // 5
Session.set('errorMessage', false);                                                                      // 6
Template.registration_template.helpers({                                                                 // 7
    all_users: function () {                                                                             // 10
        function all_users() {                                                                           // 10
            return Meteor.users.find().map(function (user, index, cursor) {                              // 12
                return { name: user.username.toUpperCase(), email: user.emails[0].address };             // 16
            });                                                                                          // 17
        }                                                                                                // 19
                                                                                                         //
        return all_users;                                                                                // 10
    }()                                                                                                  // 10
});                                                                                                      // 9
                                                                                                         //
Template.registration_template.events({                                                                  // 23
    'click #registration': function () {                                                                 // 25
        function clickRegistration(event, template) {                                                    // 25
            event.preventDefault();                                                                      // 27
            var $firstname = template.find("#firstname");                                                // 28
            var $email = template.find("#email");                                                        // 29
            var $password = template.find("#password");                                                  // 30
                                                                                                         //
            if ($email.value !== "" && $firstname.value !== "") {                                        // 32
                                                                                                         //
                Accounts.createUser({                                                                    // 34
                    username: $firstname.value,                                                          // 35
                    email: $email.value,                                                                 // 36
                    password: $password.value,                                                           // 37
                    IsActive: 0                                                                          // 38
                }, function (err) {                                                                      // 34
                    if (err) {                                                                           // 40
                        Session.set('errorMessage', err.message);                                        // 41
                    } else {                                                                             // 42
                        Session.set('currentUserId', Meteor.userId());                                   // 43
                        Router.go('/comment');                                                           // 44
                    }                                                                                    // 45
                });                                                                                      // 46
            }                                                                                            // 47
        }                                                                                                // 48
                                                                                                         //
        return clickRegistration;                                                                        // 25
    }(),                                                                                                 // 25
    "click #login": function () {                                                                        // 49
        function clickLogin(event, template) {                                                           // 49
            event.preventDefault();                                                                      // 50
            Router.go('/');                                                                              // 51
        }                                                                                                // 52
                                                                                                         //
        return clickLogin;                                                                               // 49
    }()                                                                                                  // 49
});                                                                                                      // 24
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"main.html":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// client/main.html                                                                                      //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
                                                                                                         // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"controller.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// controller.js                                                                                         //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
Router.route('/comment', function () {                                                                   // 1
    if (!Meteor.userId()) {                                                                              // 2
        Router.go('/');                                                                                  // 3
    } else {                                                                                             // 4
        this.render('comment_template');                                                                 // 5
    }                                                                                                    // 6
});                                                                                                      // 7
                                                                                                         //
Router.route('/', function () {                                                                          // 9
    this.render('login_template');                                                                       // 10
});                                                                                                      // 11
                                                                                                         //
Router.route('/registration', function () {                                                              // 13
    this.render('registration_template');                                                                // 14
});                                                                                                      // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"session.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// session.js                                                                                            //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
// import { Session } from 'meteor/session'                                                              // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"users.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// users.js                                                                                              //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});                                  // 1
                                                                                                         //
posts = new Mongo.Collection("posts");                                                                   // 3
coms = new Mongo.Collection("coms");                                                                     // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},{"extensions":[".js",".json",".html",".css"]});
require("./client/comment/template.add_comment.js");
require("./client/comment/template.comment_area.js");
require("./client/error/template.error.js");
require("./client/header/template.header.js");
require("./client/login/template.login.js");
require("./client/posts/template.add_post_button.js");
require("./client/posts/template.overlay.js");
require("./client/posts/template.post_popup.js");
require("./client/posts/template.posts.js");
require("./client/registration/template.registration.js");
require("./client/com.js");
require("./client/error.js");
require("./client/login.js");
require("./client/post.js");
require("./client/registration.js");
require("./controller.js");
require("./session.js");
require("./users.js");