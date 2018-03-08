/*















*/

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
   
  break;
  default:
    console.error(`function not found @ ${func}()`);
  break;
 }
}
