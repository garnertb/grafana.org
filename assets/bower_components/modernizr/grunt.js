module.exports=function(e){"use strict";e.initConfig({meta:{version:"2.7.2",banner:"/*!\n * Modernizr v<%= meta.version %>\n * www.modernizr.com\n *\n * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton\n * Available under the BSD and MIT licenses: www.modernizr.com/license/\n */"},qunit:{files:["test/index.html"]},lint:{files:["grunt.js","modernizr.js","feature-detects/*.js"]},min:{dist:{src:["<banner:meta.banner>","modernizr.js"],dest:"modernizr.min.js"}},watch:{files:"<config:lint.files>",tasks:"lint"},jshint:{options:{boss:!0,browser:!0,curly:!1,devel:!0,eqeqeq:!1,eqnull:!0,expr:!0,evil:!0,immed:!1,laxcomma:!0,newcap:!1,noarg:!0,smarttabs:!0,sub:!0,undef:!0},globals:{Modernizr:!0,DocumentTouch:!0,TEST:!0,SVGFEColorMatrixElement:!0,Blob:!0}}}),e.registerTask("default","min"),e.registerTask("travis","qunit")};