Template.error_template.helpers
(
    {
        error_message : function ()
        {
            if ( Session.get('errorMessage')){
                return { errorMessage : Session.get('errorMessage')};
            }
        }
    }
);