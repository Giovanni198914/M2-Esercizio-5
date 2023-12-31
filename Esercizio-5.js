/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
let a=2
let b=4
function crazysum (a, b){
if (a===b){
    return (a+b)*3

    }else{
        return a+b
    }
}


console.log(crazysum (2,4))



/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
let boundary = function (n) {
    if ((n>20 && n<=100) || n===400){
    }else{
    return false
}
}
console.log(boundary=10)



/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

const reverseString=function (str){
return str.split("").reverse().join("")
}
console.log(reverseString ("EPICODE"))
 

// ESERCIZIO 4
// Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.

const StringFinal= function (string) {
        let text = string.split(" ")
        let finalString = []
        for (let i = 0; i < text.length; i++) {
          let firstLetter = text[i].charAt(0)
          console.log(firstLetter)
          let uppercaseLetter = firstLetter.toUpperCase()
          let cutString = text[i].slice(1)
          let finalText = uppercaseLetter + cutString
          finalString.push(finalText)
        }
        console.log(finalString.join(" "))
      }

      StringFinal ("Elvis is the king")

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

const giveMeRandom = function (n) {
    const arr = []
    for (let i = 0; i <= n; i++) {
      arr.push(Math.floor(Math.random() * 10))
    }
    return arr
  }
  console.log(giveMeRandom(5))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area=function(l1,l2){
return l1*l2 
}
console.log(area (7,8))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

const crazyDiff=function(num4){
if(num4>19){
  return Math.abs(num4-19)*3
}
else{
  return Math.abs(num4-19)
}
}
console.log(crazyDiff(8))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

const codify=function(stringx){
  if(stringx.startsWith('code')){
  return stringx
  }
  else{
    return 'code '+stringx
  }
}
console.log(codify ('BigMac'))


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

const check3and7=function(y){
  if (y >= 0 && (y%3=== 0||y%7=== 0)){
    return true
  }
  else {
    return false
  }
}
console.log(check3and7(10))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

const cutString=function(stringy){
  return stringy.slice(1,stringy.length-1)
}
console.log(cutString('Helloworld'))