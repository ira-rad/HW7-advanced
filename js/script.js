const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1
function getMyTaxes(salary){
  return salary * this.tax
}
document.writeln(`<p> №1  Податок, який платять IT спеціалісти в Україні при з/п 15000UAH - ${(getMyTaxes.call(ukraine, 15000))} UAH </p>`);
document.writeln(`<p> Податок, який платять IT спеціалісти в Латвії при з/п 15000UAH - ${(getMyTaxes.call(latvia, 15000))} UAH</p>`);
document.writeln(`<p> Податок, який платять IT спеціалісти в Литві при з/п 15000UAH  - ${(getMyTaxes.call(litva, 15000))} UAH </p>`);


function getMiddleTaxes(){
  return  this.tax * this.middleSalary
}
document.writeln(`<p> №2 Податок, який в середньому платять IT спеціалісти в Україні - ${(getMiddleTaxes.call(ukraine))} UAH</p>`);
document.writeln(`<p> Податок, який в середньому платять IT спеціалісти в Литві  - ${(getMiddleTaxes.call(latvia))} UAH</p>`);
document.writeln(`<p> Податок, який в середньому платять IT спеціалісти в Латвії - ${(getMiddleTaxes.call(litva))} UAH</p>`);

function getTotalTaxes(){
  return  this.tax * this.middleSalary * this.vacancies
}
document.writeln(`<p> №3 Весь податок, який платять IT спеціалісти в Україні - ${(getTotalTaxes.call(ukraine))} UAH</p>`);
document.writeln(`<p> Весь податок, який платять IT спеціалісти в Литві  - ${(getTotalTaxes.call(latvia))} UAH</p>`);
document.writeln(`<p> Весь податок, який платять IT спеціалісти в Латвії - ${(getTotalTaxes.call(litva))} UAH</p>`);

function getMySalary(country){
  let taxOfCountry = country.tax;
  let salary = +Math.floor(Math.random() * (2000 - 1500) + 1500).toFixed(1);
  let taxes = +(taxOfCountry * salary).toFixed(1);
  let profit = +(salary - taxes).toFixed(2);
    return {salary,
            taxes,
            profit
          }


  };

document.writeln(`<p> №4 Результат в console </p>`);

console.log(getMySalary(ukraine));
let timerUk = setInterval(() => console.log(getMySalary(ukraine)), 10000);
console.log((getMySalary(latvia)));
let timerLa = setInterval(() => console.log(getMySalary(latvia)), 10000);
console.log((getMySalary(litva)));
let timerLi = setInterval(() => console.log(getMySalary(litva)), 10000);
//document.writeln(`<p> - ${(getMySalary.call(ukraine))} UAH</p>`);