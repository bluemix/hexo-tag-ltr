/**
* hexo-tag-ltr
* https://github.com/bluemix/hexo-tag-ltr
* Copyright (c) 2017, bluemix.me
* Licensed under the MIT license.
*
* Syntax:
* {% ltr %}
*  <LTR text> 
* {% endltr %} 
*/

hexo.extend.tag.register('ltr', function(args, content){
	var tag = "<p dir='ltr'>"
	tag += content
	tag += "</p>"
	return tag;
}, {ends: true});