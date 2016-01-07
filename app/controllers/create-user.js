import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createUser: function() {
            var user = this.get('model');
            user.save().then(function() {
                console.log('Saved');
            }, function(xxx, yyy, zzz) {
                console.log('Error xxx=%o yyy=%o zzz=%o messages=%o', xxx, yyy, zzz, user.get('errors.messages'));
            });
        },
    }
});
