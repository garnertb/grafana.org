Modernizr.addTest("cssvhunit",function(){var t;return Modernizr.testStyles("#modernizr { height: 50vh; }",function(e){var n=parseInt(window.innerHeight/2,10),i=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).height,10);t=i==n}),t});