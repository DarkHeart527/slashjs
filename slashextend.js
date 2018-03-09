Document.prototype.getElementsByAttribute = function(attr) {
 let found = [];
 var els = document.getElementsByTagName('*');
 for (let i = 0; i < els.length; i++) {
  if (els[i].attributes[attr]) {
   found[found.length] = els[i];
  }
 }
 return found;
}

Document.prototype.getAllElements = function() {
	return document.getElementsByTagName('*');
}