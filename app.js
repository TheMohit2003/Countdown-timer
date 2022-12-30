// the following function gives one digit number a tenth place of zero . eg 0 -> 00 , 1->01 etc 

function digitConvertor(number) {
    switch (number) {
        case 0:
            return "00";
            break;
        case 1:
            return "01";
            break;
        case 2:
            return "02";
            break;
        case 3:
            return "03";
            break;
        case 4:
            return "04";
            break;
        case 5:
            return "05";
            break;
        case 6:
            return "06";
            break;
        case 7:
            return "07";
            break;
        case 8:
            return "08";
            break;
        case 9:
            return "09";
        default:
            return number;
            break;
    }
}

function monthIndexConvertor(input) {
  return input-1;
}

// function dateArgumentFormat() {
//     // this function converts different inputs into one javascript argument format
//     let targetDate = prompt('please type in the date .Incase you just want to see the countdown with default value , keep on clicking  "OK" on every message box');

//     // the if statement is added to provide the program a default value in case the user doesnot gives any input value to the prompt
//     if(targetDate==""|| targetDate===null){
//         targetDate=10;
//     }
//     let targetMonth = prompt("type in the month");
//     // the if statement is added to provide the program a default value in case the user doesnot gives any input value to the prompt
//     if(targetMonth==""|| targetMonth===null){
//         targetMonth=5;
//     }
//     let targetYear = prompt("year");
//     // the if statement is added to provide the program a default value in case the user doesnot gives any input value to the prompt
//     if(targetYear=="" || targetYear===null){
//         targetYear=2023;
//     }
//     let timeHour = prompt("hours");
//     // the if statement is added to provide the program a default value in case the user doesnot gives any input value to the prompt
//     if(timeHour=="" || timeHour===null){
//         timeHour=12;
//     }
//     let timeMinutes = prompt("minutes");
//     // the if statement is added to provide the program a default value in case the user doesnot gives any input value to the prompt
//     if(timeMinutes==""|| timeMinutes==null){
//         timeMinutes=59;
//     }
//     let timeSeconds = prompt("seconds");
//     // the if statement is added to provide the program a default value in case the user doesnot gives any input value to the prompt
//     if(timeSeconds=""|| timeSeconds===null){
//         timeSeconds=59;
//     }

//     // javascript date method takes month input as indexes , meaning january = 0 and december = 11;
//      targetMonth = monthIndexConvertor(targetMonth);

//     result = targetMonth + " " + targetDate + ", " + targetYear + " , " + timeHour + ":" + timeMinutes + ":" + timeSeconds;
//     return result;

// }



let countDownDate = new Date("31 may , 2023 15:35:45").getTime();

function timeCounter() {


    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById('days').innerHTML = digitConvertor(days);
    document.getElementById('hours').innerHTML = digitConvertor(hours);
    document.getElementById('minutes').innerHTML = digitConvertor(minutes);
    document.getElementById('seconds').innerHTML = digitConvertor(seconds);

    if (distance < 0) {
        prompt("countdown stop");
    }

}

// Update the count down every 1 second
setInterval(timeCounter, 1000);