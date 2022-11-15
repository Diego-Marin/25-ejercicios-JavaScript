//----------------------------------------------------------------------------------------------------------------------
/* Ejemplo */

function daysToXmas2(inputDate) {

    let dateOfChristmas = 'Dec 25, 2021'; 

    let dateOfChristmasTimeStamp = new Date(dateOfChristmas).getTime();
    console.log(dateOfChristmasTimeStamp);

    let nowTimeStamp = inputDate.getTime();
    console.log(nowTimeStamp);

    let microSecondsDiff = dateOfChristmasTimeStamp - nowTimeStamp;
    console.log(microSecondsDiff);

    let daysDiff = Math.round(microSecondsDiff / (1000 * 60 * 60 * 24));

    return daysDiff;

}
console.log(daysToXmas2(new Date('Dec 25, 2021')));

//----------------------------------------------------------------------------------------------------------------------
/* Ejemplo */

function daysToXmas(date) {

    const christmasDate = new Date("Dec 25, 2021")
    console.log(christmasDate);

    const secondsTillChristmas = christmasDate.getTime()/1000 - date.getTime()/1000
    console.log(secondsTillChristmas)

    const daysTillChristmas = secondsTillChristmas/60/60/24
    console.log(daysTillChristmas);
    
    return Math.ceil(daysTillChristmas)

  }
const date1 = new Date('Jun 15, 2025')
console.log(daysToXmas(date1))


//----------------------------------------------------------------------------------------------------------------------
/* Ejemplo */

function daysToXmas(date) {
  // ¡Y no olvides compartir tu solución en redes!
  const date_time_xmas = new Date("Dec 25, 2021").getTime()
  return Math.ceil((date_time_xmas - date.getTime())/(24*3600*1000))
}

const date2 = new Date('Jun 15, 2025')
console.log(daysToXmas(date2))