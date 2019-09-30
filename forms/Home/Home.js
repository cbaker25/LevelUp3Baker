function carloan(r,p,n){
  return (((r/12)*p)/(1-(Math.pow((1+(r/12)),-n))))}
function homeLoan15Year(r,p){
  return (((r/12)*p)/(1-(Math.pow((1+(r/12)),-180))))}
function homeLoan30Year(r,p){
  return (((r/12)*p)/(1-(Math.pow((1+(r/12)),-360))))}
for (var i=0; i<Infinity; i++) {
let loanType=prompt("If you want to calculate the finances a home loan enter 'home'. If you want to calculate the finances of a car loan enter 'car'.")
switch(loanType){
case 'home':
  let interestRate=prompt("Enter the interest rate of the loan in decimal format.")
  let principal=prompt("Enter the amount of the loan.")
  let timePeriod=prompt("Enter the number of years for your home loan (15 or 30 years) .")
  switch(timePeriod) {
  case '15':
    let payment1=homeLoan15Year(interestRate,principal)
    alert(`The monthly payment for this home loan would be $ ${payment1.toFixed(2)}.`)
    break
  case '30':
    let payment3=homeLoan30Year(interestRate,principal)
    alert(`The monthly payment for this home loan would be $ ${payment2.toFixed(2)}.`)
    break
  default:
    alert(`Oops! ${timePeriod} isn't one of the accepted loan lengths start again.`)
  }
break
case 'car':
  let interestRate1=prompt("Enter the interest rate of the loan in decimal format.")
  let principal1=prompt("Enter the amount of the loan.")
  let timePeriod1=prompt("Enter the length of time for the loan in months.")
  let payment=carloan(interestRate1,principal1,timePeriod1)
  alert(`Your monthly payment would be $ ${payment.toFixed(2)}.`)
break
default:
  alert(`Oops! ${loanType} isn't an accepted loan type please start again.`)
}
}