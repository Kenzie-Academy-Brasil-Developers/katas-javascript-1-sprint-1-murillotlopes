function oneThroughTwenty() {
   let myReturn = []

   for (let i=1; i< 21; i++){
     myReturn.push(i)
   }
  return myReturn
}
console.log(oneThroughTwenty())
//call function oneThroughTwenty

function evensToTwenty() {
  let myReturn = []

  for (let i=1; i< 21; i++ ){
    if (i%2 === 0 && i !=0){
      myReturn.push(i)
    }
  }
  return myReturn
}
console.log(evensToTwenty())
//call function evensToTwenty

function oddsToTwenty() {
  let myReturn = []

  for (let i=1; i<21; i++){
    if (i%2 !==0){
      myReturn.push(i)
    }
  }   
  return myReturn
}
console.log(oddsToTwenty())
//call function oddsToTwenty

function multiplesOfFive() {
  let myReturn = []
  
  for (let i=1; i<=100; i++){
    if (i%5 ===0){
      myReturn.push(i)
    }
  }
  return myReturn
}
console.log(multiplesOfFive())
//call function multiplesOfFive

function squareNumbers() {
  let myReturn = [] 
  
  for (let i=1; i<=100; i++){
      
    if (Number.isInteger(Math.sqrt((i))) === true){
      myReturn.push(i)
    }
  }
  return myReturn    
}
console.log(squareNumbers())
//call function squareNumbers

function countingBackwards() {
  let myReturn = []
  
  for (let i=20; i>0; i--){
    myReturn.push(i)
  }
  return myReturn
}
console.log(countingBackwards())
//call function countingBackwards

function evenNumbersBackwards() {
  let myReturn = [] 
  
  for (let i=20; i> 0; i--){
    if (i%2 === 0){
      myReturn.push(i)
    }
  }
  return myReturn
}
console.log(evenNumbersBackwards())
//call function evenNumbersBackwards

function oddNumbersBackwards() {
  let myReturn = []

  for (let i=20; i> 0; i--){
    if (i%2 !== 0){
      myReturn.push(i)
    }
  }
  return myReturn
}
console.log(oddNumbersBackwards())
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  let myReturn = []
  
  for (let i=100; i> 0; i--){
    if (i%5 === 0){
      myReturn.push(i)
    }
  }
  return myReturn
}
console.log(multiplesOfFiveBackwards())
//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
  let myReturn = [] 
  
  for (let i=100; i>0; i--){
      
    if (Number.isInteger(Math.sqrt((i))) === true){
      myReturn.push(i)
    }
  }
  return myReturn
}
console.log(squareNumbersBackwards())
//call function squareNumbersBackwards
