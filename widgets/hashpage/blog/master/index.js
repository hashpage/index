(function($) {
    
    HP.registerWidget('#{BASE_URL}', {
        // --------------------------------------------------------------------
        defaultState: {
            page: 0
        },
        // --------------------------------------------------------------------
        defaultConfig: {
            query: "",
            perpage: 3
        },
        // --------------------------------------------------------------------
        configSchema: {
            params: {
                query: { type: "string", title: "Filter Query" },
                perpage: { type: "string", title: "Items per Page" }
            },
            groups: [{
                    title: "Selection",
                    params: ['query']
                }, {
                    title: "Pagination",
                    params: ['perpage']
                }
            ],
            validate: {
                rules: {
                    perpage: {
                        required: true,
                        range: [1, 40]
                    }
                }
            }
        },
        // --------------------------------------------------------------------
        onInit: function() {
            this.applyTemplate(this.el, 'index', { filter_data: false });
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
        onNext: function() {
            this.state.page+=1;
            this.update();
        },
        // --------------------------------------------------------------------
        onReset: function() {
            this.state.page=0;
            this.update();
        },
        // --------------------------------------------------------------------
        update: function(params) {
            var params = $.extend({ 
                query: this.config.query,
                perpage: this.config.perpage,
                page: this.state.page
            }, params);
            var service = HP.getService('feed');
            service.read(params, this.onSuccess, this);
        },
        // --------------------------------------------------------------------
        onSuccess: function(data) {
            this.render(data);
        },
        // --------------------------------------------------------------------
        render: function(data) {
            if (data.length==0) return this.handleNoData();
            this.renderTemplate(this.el, data);
        }
    });

})(jQuery);