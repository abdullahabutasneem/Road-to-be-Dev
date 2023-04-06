const displayTime = () => {
    // Declaring Date() methods and contain the data in dateTime variable
    var dateTime = new Date();

    // getting the hours, min, seconds by Date -> getHours(), getMinutes() and getSeconds() method.
    // and saving the data in the hrs, min, sec variable
    var hrs = dateTime.getHours().toString().padStart(2, '0');
    var min = dateTime.getMinutes().toString().padStart(2, '0');
    var sec = dateTime.getSeconds().toString().padStart(2, '0');

    var meridiem;

    // here is the condition for AM/PM. For greater than or equal to 12, we declare them as PM
    // otherwise AM.
    if (hrs >= 12) {
        meridiem = 'PM'
    }
    else {
        meridiem = 'AM'
    }

    // This conditon is for '12 hours' method.
    // for example, it will show us 13:10 pm to 01:10 pm
    if (hrs > 12) {
        hrs = hrs - 12;
    }

    var time = `${hrs} : ${min} : ${sec} ${meridiem}`;
    document.querySelector('.clock').textContent = time;
}

displayTime();

setInterval(displayTime, 1000);
