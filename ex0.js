/**
 * Un buen caso para usar switch
 * 
 * Queremos escribir un script que, dado un mes del año, nos diga en que trimestre nos encomtramos.
 * 
 * Por ejemplo, si mes = 4, deberíamos mostrar por el terminal "Nos encontramos en el segundo trimestre"  
 * 
 * Explra esta información para averiguar como usar el condicional 'switch'; y cómo se pueden agrupar varios casos: https://javascript.info/switch#grouping-of-case
 * 
 */

let mes = 4;
let trimestre

switch (mes) {
    case 1:
    case 2:
    case 3:
        trimestre="Primer"
        break;
    case 4:
    case 5:
    case 6:
        trimestre="Segundo"  
        break;
    case 7:
    case 8:
    case 9:
        trimestre="Tercer" 
        break;              
}

console.log(`Estamos en el ${trimestre} trimestre`)

// Escribir a partir de aquí


