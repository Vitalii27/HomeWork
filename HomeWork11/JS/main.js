

// let Constr = function(convTel) {
//  			this.convTel = function num(a){
//  				return `<${a}></${a}>`
//  			}
//      // return `<${a}></${a}>`
// };
// var one = new Constr;
// let createBODY = num('body');
// let createDIV = num('div');
// console.log(createBODY); //<body></body>
// console.log(createDIV); //<div></div>

let Constr = function(a){
	return `${a}></${a}>`

};
let createBODY = Constr('0993378130');
let createDIV = Constr('div');
console.log(createBODY); //<body></body>
console.log(createDIV); //<div></div>