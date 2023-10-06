// - dichiarare una variabile numberClass
let numberClass
// - fare un ciclo da 1 a 100
for(let i = 1; i <= 100; i++){
    numberClass = ''
//     - creare dentro il grid una box con append
//     - SE il contatore è multiplo di 3 o multiplo di 5
    if(i % 3 == 0 || i % 5 == 0){
//         - SE il contatore è multiplo di 3
        if(i % 3 == 0){
//             - la variabile numberClass è uguale a Fizz
            numberClass = 'Fizz'
        }
//         - SE il contatore è multiplo di 5
        if(i % 5 == 0){
//             - la variabile numberClass è uguale al suo contenuto + Buzz
            numberClass += 'Buzz'
        }
//         - la classe della cella creata nel DOM è uguale a numberClass
    }
//     - ALTRIMENTI la variabile numberClass = contatore
    else{
        numberClass = i
    }
//     - stampo numberClass
    console.log(i, numberClass)
}