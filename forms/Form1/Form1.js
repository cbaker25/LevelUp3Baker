function carloan(r,p,n){
  return (((r/12)*p)/(1-(Math.pow((1+(r/12)),-n))))}
function homeLoan15(r,p){
  return (((r/12)*p)/(1-(Math.pow((1+(r/12)),-180))))}
function homeLoan30(r,p){
  return (((r/12)*p)/(1-(Math.pow((1+(r/12)),-360))))}
for (var i=0; i<Infinity; i++) {
let carOrHome=prompt("If you would like to calculate a home loan enter 'home' in all lowercase letters. If you would like to calculate a car loan enter 'car' in all lowercase letters.")
switch(carOrHome){
case 'home':
  let interestRate=prompt("Please enter the interest rate of the loan in decimal form (i.e. 5% would be entered as .05).")
  let principal=prompt("Please enter the amount of the loan with no commas (i.e. $250,000 would be entered as 250000).")
  let loanLength=prompt("Please enther the number of years for your home loan (either 15 years or 30 years).")
  switch(loanLength) {
  case '15':
    let payment2=homeLoan15(interestRate,principal)
    alert(`Your monthly payment for this home loan would be $ ${parseFloat(payment2.toFixed(2))}.`)
    break
  case '30':
    let payment3=homeLoan30(interestRate,principal)
    alert(`Your monthly payment for this home loan would be $ ${parseFloat(payment3.toFixed(2))}.`)
    break
  default:
    alert(`Sorry ${loanLength} isn't one of the accepted loan lengths please begin again.`)
  }
break
case 'car':
  let interestRate2=prompt("Please enter the interest rate of the loan in decimal form (i.e. 5% would be entered as .05).")
  let principal2=prompt("Please enter the amount of the loan with no commas (i.e. $25,000 would be entered as 25000).")
  let loanTime=prompt("Please enter the length of time for the loan in months (i.e. 4 years would be entered as 48).")
  let payment=carloan(interestRate2,principal2,loanTime)
  alert(`Your monthly payment would be $ ${parseFloat(payment.toFixed(2))}.`)
break
default:
  alert(`Sorry ${carOrHome} isn't one of the accepted loan types please begin again.`)
}
}