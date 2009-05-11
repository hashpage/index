(function($) {

    HP.registerWidget('#{BASE_URL}', {
        // --------------------------------------------------------------------
        onInit: function(guid, el) {
            this.applyTemplate(this.el, 'index');
        },
        // --------------------------------------------------------------------
        onFirstShow: function() {
            this.presenceService = HP.getService('presence');
            this.presenceService.read({
                perpage: 100,
                page: 0
            }, this.render, this);
        },
        // --------------------------------------------------------------------
        render: function(data) {
            if (data.length==0) return this.handleNoData();
            this.renderTemplate(this.el, data);
        }
    });
    
})(jQuery);