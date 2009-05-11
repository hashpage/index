(function($) {

    HP.registerWidget('#{BASE_URL}', {
        // --------------------------------------------------------------------
        defaultConfig: {
            query: "",
            count: 5
        },
        // --------------------------------------------------------------------
        configSchema: {
            params: {
                query: { type: "string", title: "Filter Query" },
                count: { type: "string", title: "Pictures Count" }
            },
            groups: [{
                    title: "Selection",
                    params: ['query', 'count']
                }
            ],
            validate: {
                rules: {
                    count: {
                        required: true,
                        range: [2, 50]
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
        update: function(params) {
            var params = $.extend({ 
                query: this.config.query,
                perpage: this.config.count
            }, params);
            var service = HP.getService('photo');
            service.read(params, this.render, this);
        },
        // --------------------------------------------------------------------
        render: function(data) {
            if (data.length==0) return this.handleNoData();
            var photos = [];
            var pick_url = function(list) {
                if (list.length==0) return;
                var best = list[0];
                for (var i=0; i<list.length; i++) {
                    var cand = list[i];
                    if (cand.preferred) {
                        best = cand;
                        break;
                    }
                    if (cand.width==undefined && best.width==undefined) {
                        best = cand;
                    }
                    if (cand.width && cand.width>best.width && cand.width<1100) {
                        best = cand;
                    }
                }
                return best.url;
            };
            
            var items = [];
            for (var i=0; i < data.length; i++) {
                var photo = data[i];
                // velke obrazky to z nejakeho duvodu nenahrava, tu crossslide knihovnu budu muset napsat sam
                // photo.thumbnails.push({url: photo.link, width: photo.width, height: photo.height});
                var url = pick_url(photo.thumbnails);
                if (url) {
                    items.push('<li><a href="'+url+'"></a><img src="'+url+'" alt="'+photo.title+'" width="100%" height="400"></li>');
                }
            };
            
            if (!items.length) {
                return;
            }
            
            this.el.attr('innerHTML', '<div id="popeye1"><ul>' + items.join('') + '</ul></div>');
            this.el.children('div').popeye();
            HP.possibleLayoutChange(this.el, 'popeye rendered');
        }
    });

})(jQuery);