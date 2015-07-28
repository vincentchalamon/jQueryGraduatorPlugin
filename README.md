# jQueryGraduatorPlugin

This jQuery plugin allows you to create a colored graduation.

<img src="http://www.vincent-chalamon.fr/content/images/2015/04/jquery-graduator.png" />

# How to use

This plugin requires [jQuery 1.8+](http://jquery.com/), [jQuery UI](http://jqueryui.com/) & [jQuery color plugin](https://github.com/vincentchalamon/jQueryColorPlugin) :
```html
<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.min.js"></script>
<script type="text/javascript" src="path/to/jquery.graduator.js"></script>
```

Now you can use jQuery color plugin as following :
```javascript
$('#graduator').graduator({
    items: [
        {
            color: '#03FF0B',
            label: 'Limité'
        },
        {
            color: '#FFFF00',
            label: 'Significatif'
        },
        {
            color: '#FF9100',
            label: 'Critique'
        },
        {
            color: '#FF0000',
            label: 'Catastrophique'
        }
    ],
    count: 3,
    url: '/url/to/save/slider/value',
    callback: function (result) {
        // Do what you want on slider result
    },
    value: 54
});
```

# Options

You must set following options to graduator :

* items : array of items to create
    * color : item start color
    * label : item label
* count : number of elements in each item (default : 5)
* url : url to save slider value
* callback : function to call on slider result
* value : slider value

# Compatibility

This plugin has been tested under IE7+ up to IE9, Safari, Firefox, Chrome & Opéra.
