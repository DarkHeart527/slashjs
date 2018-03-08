/*














https://stackoverflow.com/questions/9496427/get-elements-by-attribute-when-queryselectorall-is-not-available-without-using-l
*/

Element.prototype.getElementsByAttribute = function(attr) {
 let found = [];
 var els = document.getElementsByTagName('*');
 for (let i = 0; i < els.length; i++) {
  if (els[i].attributes.slash) {
   found[found.length] = els[i];
  }
 }
}

let slash = (func) => {
 let type = undefined;
 if (func[0] + func[1] == '//') {
  type = '//';
 } else if (func[0] == '/' && func[1] != '/') {
  type = '/';
 } else {
  type = func;
 }
 switch(type) {
  case '/':
   // Call Function
  break;
  case '//':
   // Edit Function
   
  break;
  case 'update':
   // Find all commands and update
  break;
  case 'exe':
   var els = document.getElementsByClassName('slash');
  break;
  default:
    console.error(`function not found @ ${func}()`);
  break;
 }
}
