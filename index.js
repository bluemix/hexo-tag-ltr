/**
* hexo-tag-ltr
* https://github.com/bluemix/hexo-tag-ltr
* Copyright (c) 2017, bluemix.me
* Licensed under the MIT license.
*
* Syntax:
* {% ltr [html tag]%}
*  <ltr text> 
* {% endltr %} 
*/

hexo.extend.tag.register('ltr', function(args, content){
	var className = "div"
	if (args[0]) { className = args[0] }
	var tag = "<" + className + " dir='ltr'>"
	tag += content
	tag += "</" + className + ">"
	return tag;
}, {ends: true});