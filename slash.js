/*















*/

let slash = (func) => {
 let type = undefined;
 if (func[0] + func[1] == '//') {
  type = '//';
 } else if (func[0] == '/' && func[1] != '/') {
  type = '/';
 }
 switch(type) {
  case '/':
   
  break;
  default:
    console.error(`function not found @ ${func}()`);
  break;
 }
}
