Ext.onReady(function() {

    //Overrides the (multi)slider adding a persistent tooltips to the thumbs
    //Additional configs: 
    //persistentTips: boolean (to acticate the feature)
    //tipPrefix: string to show before the value
    //tipSuffix: string to show after the value
    Ext.define('override.Ext.slider.Multi', {
        override: 'Ext.slider.Multi',
        initComponent: function() {
            var me = this;

            if (me.persistTips) {
                me.persistentTips = [];
                me.liquidLayout = false // allows the slider to fire "resize" event, otherwise it is not fired!!!

                me.tipPrefix = me.tipPrefix || '';
                me.tipSuffix = me.tipSuffix || '';

                me.on({
                    render: me.handleTips,
                    change: me.handleTips,
                    resize: me.handleTips,
                    beforedestroy: me.removeTips
                });
            }

            me.callParent(arguments);
        },

        handleTips: function() {
            var me = this;
            var slider = this;

            Ext.defer(function() //needed, it turns out that the el property of the thumb is not created in the time of tip create
                {
                    var thumbs = slider.thumbs;
                    if (!thumbs.length) { return; } //should not enter here

                    me.removeTips();

                    slider.syncThumbs(); //otherwise the tip is not properly positioned when clicking on the bar

                    //build tips
                    Ext.each(thumbs,
                        function(thumb) {
                            //console.log(thumb);
                            var tipId = thumb.el.id + '-persistentTip';
                            Ext.create('Ext.tip.ToolTip', {
                                id: tipId,
                                target: thumb.el,
                                html: me.tipPrefix + thumb.value + me.tipSuffix,
                                autoHide: false,
                                dismissDelay: 0,
                                defaultAlign: 'bc-t',
                                bodyStyle: {
                                    textAlign: 'center',
                                    fontSize: '.9em',
                                    fontWeight: 'bold'
                                }
                            }).show();

                            me.persistentTips.push(tipId);
                        }
                    );

                }, 2);

        },

        //destroys the tips
        removeTips: function() {
            var me = this;

            var tips = me.persistentTips;
            if (!tips || !tips.length) { return; }

            Ext.each(tips,
                function(tipid) {
                    Ext.getCmp(tipid).destroy();
                }
            );

            me.persistentTips = [];

        }

    });


});