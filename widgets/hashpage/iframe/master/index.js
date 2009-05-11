(function($) {

    HP.registerWidget('#{BASE_URL}', {
        // --------------------------------------------------------------------
        defaultConfig: {
            url: "http://google.com",
            height: '400',
            scrolling: 'no'
        },
        // --------------------------------------------------------------------
        configSchema: {
            params: {
                url: { type: "string", title: "URL" },
                height: { type: "string", title: "Height[px]" },
                scrolling: { type: "string", title: "Scrolling" }
            },
            groups: [{
                    title: "IFrame Parameters",
                    params: ['url', 'height']
                },{
                    title: "Advanced IFrame Parameters",
                    params: ['scrolling']
                }
            ],
            validate: {
                rules: {
                    height: {
                        required: true,
                        range: [0, 10000]
                    }
                }
            }
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
            var iframe = $('<iframe class="hp-iframe"/>')
                .attr('src', this.config.url)
                .attr('height', this.config.height+'px')
                .attr('width', '100%')
                .attr('scrolling', this.config.scrolling);
            this.el.append(iframe);
            HP.possibleLayoutChange(this.el, 'IFrame widget ('+this.guid+') update');
        }
    });

})(jQuery);