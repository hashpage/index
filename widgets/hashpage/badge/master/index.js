(function($) {

    HP.registerWidget('#{BASE_URL}', {
        // --------------------------------------------------------------------
        defaultConfig: {
            code: "please enter <b>HTML code</b> here"
        },
        // --------------------------------------------------------------------
        configSchema: {
            params: {
                code: { type: "string", title: "HTML code" }
            },
            groups: [{
                    title: "Badge Code",
                    params: ['code']
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
            this.el.empty();
            this.applyHTML(this.config.code);
            HP.possibleLayoutChange(this.el, 'Badge widget ('+this.guid+') update');
        }
    });

})(jQuery);