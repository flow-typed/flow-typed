// @flow
import Backbone from 'backbone';

Backbone.Events.on('change', function<Event>(e: Event) {
    console.log(e);
});
