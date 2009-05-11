(function($) {

    HP.registerWidget('#{BASE_URL}', {
        // --------------------------------------------------------------------
        defaultConfig: {
            url: ""
        },
        // --------------------------------------------------------------------
        configSchema: {
            params: {
                url: { type: "string", title: "URL" }
            },
            groups: [{
                    title: "Published Google Document",
                    params: ['url']
                }
            ]
        },
        // --------------------------------------------------------------------
        onStateUpdate: function(newState, oldState) {
            this.update();
        },
        // --------------------------------------------------------------------
        onConfigUpdate: function(newConfig, oldConfig) {
            this.updateState(this.defaultState);
        },
        // --------------------------------------------------------------------
        onFirstShow: function() {
            this.update();
        },
        // --------------------------------------------------------------------
        update: function() {
            if (!this.config.url) return;
            console.log('gdoc: fetching ', this.config.url);                                        //#dbg
            var that = this;
            this.startLoadingIndicator();
            HP.fetchUrl({
                url:this.config.url, 
                id: 'doc-contents content'
            }, function(data) {
                that.stopLoadingIndicator();
                console.log('gdoc: received', data);                                                //#dbg
                that.render(data);
            });
        },
        // --------------------------------------------------------------------
        render: function(content) {
            this.el.empty();
            this.applyHTML(content);
            HP.possibleLayoutChange(this.el, 'GDoc widget ('+this.guid+') update');
        }
    });

})(jQuery);