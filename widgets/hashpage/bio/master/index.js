(function($) {

    HP.registerWidget('#{BASE_URL}', {
        // --------------------------------------------------------------------
        onInit: function() {
            this.applyTemplate(this.el, 'index',  { filter_data: false });
        },
        // --------------------------------------------------------------------
        onFirstShow: function() {
            this.bioService = HP.getService('bio');
            this.bioService.read({
            }, this.render, this);
        },
        // --------------------------------------------------------------------
        render: function(data) {
            if (data.length==0) return this.handleNoData();
            this.renderTemplate(this.el, data[0]);
        }
    });

})(jQuery);