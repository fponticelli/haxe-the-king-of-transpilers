(function (console) { "use strict";
var MacroTime = function() { };
MacroTime.main = function() {
	console.log("2015-01-28 16:03:31");
};
var Time = function() { };
MacroTime.main();
})(typeof console != "undefined" ? console : {log:function(){}});
