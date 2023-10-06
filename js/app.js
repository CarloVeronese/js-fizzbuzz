// - dichiarare una variabile numberClass
let numberClass
// - dichiarare una variabile  
const gridDOMElement = document.querySelector('.grid')
// - fare un ciclo da 1 a 100
for(let i = 1; i <= 100; i++){
    numberClass = ''
//     - creare una variabile per il box da inserire nel grid
    const boxDOMElement = document.createElement('div')
//     - aggiungo all'elemento appena creato la classe box
    boxDOMElement.classList.add('box')
//     - SE il contatore è multiplo di 3 o multiplo di 5
    if(i % 3 == 0 || i % 5 == 0){
//         - SE il contatore è multiplo di 3
        if(i % 3 == 0){
//             - la variabile numberClass è uguale a Fizz
            numberClass = 'fizz'
        }
//         - SE il contatore è multiplo di 5
        if(i % 5 == 0){
//             - la variabile numberClass è uguale al suo contenuto + Buzz
            numberClass += 'buzz'
        }
//         - aggiungo alla boxDOMElement la classe uguale a numberClass  
        boxDOMElement.classList.add(numberClass)
    }
//     - ALTRIMENTI la variabile numberClass = contatore
    else{
        numberClass = i
    }
//     - inserirsco nell'elemento box il numero o la scritta corrispondente
    boxDOMElement.innerHTML = numberClass
    // console.log(i, numberClass)
//     - inserisco nel grid del DOM la box creata in questa iterazione del ciclo
    gridDOMElement.append(boxDOMElement)
} 