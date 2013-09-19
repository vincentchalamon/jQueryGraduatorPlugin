/**
 * jQuery Plugin Graduator
 *
 * @version 1.0, September 19th, 2013
 * @author Vincent Chalamon <vincent@ylly.fr>
 */
(function($) {
    $.graduator = function(element, options) {
        var $element = $(element).css('position', 'relative');
        var compteur = 0;
        var plugin = this;
        plugin.settings = $.extend({
            color: '#FFFFFF',
            url: null,
            count: 5,
            callback: null,
            value: null,
            items: []
        }, options);

        // Build HTML structure
        $('<div>').css({
            position: 'absolute',
            top: -20,
            left: -15,
            width: '100%',
            height: 20
        }).prependTo($element);
        $.each(plugin.settings.items, function(key, item) {
            for (var i = 1; i <= plugin.settings.count; i++) {
                var ratio = 1/plugin.settings.count;
                var start = $.color.getStepColor(plugin.settings.color, item.color, (i-1)*ratio);
                var end = $.color.getStepColor(plugin.settings.color, item.color, i*ratio);
                var style = 'background: ' + plugin.settings.color + ';';
                style += 'background-image: -moz-linear-gradient(left, ' + start + ' 0%, ' + end + ' 100%);';
                style += 'background-image: -webkit-gradient(left top, right top, color-stop(0%, ' + start + '), color-stop(100%, ' + end + '));';
                style += 'background-image: -webkit-linear-gradient(left, ' + start + ' 0%, ' + end + ' 100%);';
                style += 'background-image: -o-linear-gradient(left, ' + start + ' 0%, ' + end + ' 100%);';
                style += 'background-image: -ms-linear-gradient(left, ' + start + ' 0%, ' + end + ' 100%);';
                style += 'background-image: linear-gradient(to right, ' + start + ' 0%, ' + end + ' 100%);';
                style += 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=' + start + ', endColorstr=' + end + ', GradientType=1);';
                style += 'height: ' + (compteur + (100/plugin.settings.items.length)/plugin.settings.count) + '%;';
                style += 'width: ' + ((1*100)/(plugin.settings.items.length*5)-0.5) + '%;';
                style += 'margin-right: 0.5%;';
                style += 'position: absolute;';
                style += 'bottom: 0;';
                style += 'left: ' + compteur + '%;';
                $('<div>').attr('style', style).appendTo($element);
                compteur += (100/plugin.settings.items.length)/plugin.settings.count;
            }
            plugin.settings.color = item.color;
        });
        $.each(plugin.settings.items, function(key, item) {
            $('<div>').css({
                position: 'absolute',
                bottom: -20,
                left: key*($element.width()/plugin.settings.items.length),
                width: $element.width()/plugin.settings.items.length,
                'text-align': 'center',
                height: 20,
                'line-height': '25px',
                'font-weight': 'bold',
                'border-left': !key ? 'dotted thin #20687B' : null,
                'border-right': 'dotted thin #20687B'
            }).html(item.label).appendTo($element);
        });

        // Init slider
        $('div:first', $element).slider({
            value: plugin.settings.value,
            min: 0,
            max: 100,
            stop: function(event, ui) {
                if (plugin.settings.url) {
                    $.post(plugin.settings.url, {eval: ui.value}, plugin.settings.callback);
                }
            }
        });
    };

    $.fn.graduator = function(options) {
        return this.each(function() {
            if ($(this).data('graduator') === undefined) {
                var plugin = new $.graduator(this, options);
                $(this).data('graduator', plugin);
            }
        });
    };
})(jQuery);