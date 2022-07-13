function validaArray(array, num) { 
   try { 
   if(!array && !num) throw new ReferenceError("Envie os parâmetros");
   if(typeof array !== 'object') throw new TypeError("O array precisa ser do tipo object");
   if(typeof num !== 'number') throw new TypeError("O num precisa ser do tipo number");
   if(array.length !== num) throw new RangeError("Tamanho invalido!");
   return array;
} 
catch(e){
    if(e instanceof ReferenceErro){ 
        console.log("Este erro é um ReferenceError");
        console.log(e.message);
        
     } 
     if else(e instanceof TypeError ){ 
        console.log("Este erro é um TypeError");
        console.log(e.message);
        
     } 

     if else(e instanceof RangeError ){ 
        console.log("Este erro é um RangeError");
        console.log(e.message);
        
     } 
     else { 
        console.log("Apresenta erro não esprerado"+e);
        
        
     } 
   } 
 } 
 console.log(validaArray());
 
