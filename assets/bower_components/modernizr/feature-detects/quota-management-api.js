Modernizr.addTest("quotamanagement",function(){var e=Modernizr.prefixed("StorageInfo",window);return!!(e&&"TEMPORARY"in e&&"PERSISTENT"in e)});