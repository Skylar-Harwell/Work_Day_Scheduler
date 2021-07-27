$( document ).ready(function() {

var currentDate = document.querySelector("#currentDay");
var time9am = document.querySelector(".nineAm");
var time10am = document.querySelector(".tenAm");
var time11am = document.querySelector(".elevenAm");
var time12pm = document.querySelector(".twelvePm");
var time1pm = document.querySelector(".onePm");
var time2pm = document.querySelector(".twoPm");
var time3pm = document.querySelector(".threePm");
var time4pm = document.querySelector(".fourPm");
var time5pm = document.querySelector(".fivePm");
var time6pm = document.querySelector(".sixPm");
var time7pm = document.querySelector(".sevenPm");
var time8pm = document.querySelector(".eightPm");
var save9am = document.querySelector("#saveNine");
var save10am = document.querySelector("#saveTen");
var save11am = document.querySelector("#saveEleven");
var save12pm = document.querySelector("#saveTwelve");
var save1pm = document.querySelector("#saveOne");
var save2pm = document.querySelector("#saveTwo");
var save3pm = document.querySelector("#saveThree");
var save4pm = document.querySelector("#saveFour");
var save5pm = document.querySelector("#saveFive");
var save6pm = document.querySelector("#saveSix");
var save7pm = document.querySelector("#saveSeven");
var save8pm = document.querySelector("#saveEight");
var text9am = document.querySelector("#textFieldNine");
var text10am = document.querySelector("#textFieldTen");
var text11am = document.querySelector("#textFieldEleven");
var text12pm = document.querySelector("#textFieldTwelve");
var text1pm = document.querySelector("#textFieldOne");
var text2pm = document.querySelector("#textFieldTwo");
var text3pm = document.querySelector("#textFieldThree");
var text4pm = document.querySelector("#textFieldFour");
var text5pm = document.querySelector("#textFieldFive");
var text6pm = document.querySelector("#textFieldSix");
var text7pm = document.querySelector("#textFieldSeven");
var text8pm = document.querySelector("#textFieldEight");

console.log(save9am);
setInterval(updateTime, 1000);
function updateTime(){
    var currentTime = moment().format('MMMM Do YYYY, dddd, h:mm:ss a');
    currentDate.textContent = currentTime;
}

setInterval(updateNineAm, 1000);
function updateNineAm() {
    var format = 'hh:mm:ss';
    var currentTime = moment();
    var beforeTime = moment('09:00:00', format);
    var afterTime = moment('09:59:59', format);
    // if (currentTime.isBetween(beforeTime, afterTime)) {
    //     $(time9am).addClass('present');
    // }
    // if (currentTime.isBefore(beforeTime)) {
    //     $(time9am).addClass('future');
    // }
    // if (currentTime.isAfter(afterTime)) {
    //     $(time9am).addClass('past');
    // };
    addTimeColor(time9am, beforeTime, afterTime);
}

setInterval(updateTenAm, 1000);
function updateTenAm() {
    var format = 'hh:mm:ss';
    var currentTime = moment();
    var beforeTime = moment('10:00:00', format);
    var afterTime = moment('10:59:59', format);
    // if (currentTime.isBetween(beforeTime, afterTime)) {
    //     $(time10am).addClass('present');
    // }
    // if (currentTime.isBefore(beforeTime)) {
    //     $(time10am).addClass('future');
    // }
    // if (currentTime.isAfter(afterTime)) {
    //     $(time10am).addClass('past');
    // };
    addTimeColor(time10am, beforeTime, afterTime);
}

setInterval(updateElevenAm, 1000);
function updateElevenAm() {
    var format = 'hh:mm:ss';
    var currentTime = moment();
    var beforeTime = moment('11:00:00', format);
    var afterTime = moment('11:59:59', format);
    // if (currentTime.isBetween(beforeTime, afterTime)) {
    //     $(time11am).addClass('present');
    // }
    // if (currentTime.isBefore(beforeTime)) {
    //     $(time11am).addClass('future');
    // }
    // if (currentTime.isAfter(afterTime)) {
    //     $(time11am).addClass('past');
    // };
    addTimeColor(time11am, beforeTime, afterTime);
}

setInterval(updateTwelvePm, 1000);
function updateTwelvePm() {
    var format = 'hh:mm:ss';
    var currentTime = moment();
    var beforeTime = moment('12:00:00', format);
    var afterTime = moment('12:59:59', format);
    // if (currentTime.isBetween(beforeTime, afterTime)) {
    //     $(time12pm).addClass('present');
    // }
    // if (currentTime.isBefore(beforeTime)) {
    //     $(time12pm).addClass('future');
    // }
    // if (currentTime.isAfter(afterTime)) {
    //     $(time12pm).addClass('past');
    // };
    addTimeColor(time12pm, beforeTime, afterTime);
}

setInterval(updateOnePm, 1000);
function updateOnePm() {
    var format = 'hh:mm:ss';
    var currentTime = moment();
    var beforeTime = moment('13:00:00', format);
    var afterTime = moment('13:59:59', format);
    // if (currentTime.isBetween(beforeTime, afterTime)) {
    //     $(time1pm).addClass('present');
    // }
    // if (currentTime.isBefore(beforeTime)) {
    //     $(time1pm).addClass('future');
    // }
    // if (currentTime.isAfter(afterTime)) {
    //     $(time1pm).addClass('past');
    // };
    addTimeColor(time1pm, beforeTime, afterTime);
}

setInterval(updateTwoPm, 1000);
function updateTwoPm() {
    var format = 'hh:mm:ss';
    var currentTime = moment();
    var beforeTime = moment('14:00:00', format);
    var afterTime = moment('14:59:59', format);
    // if (currentTime.isBetween(beforeTime, afterTime)) {
    //     $(time2pm).addClass('present');
    // }
    // if (currentTime.isBefore(beforeTime)) {
    //     $(time2pm).addClass('future');
    // }
    // if (currentTime.isAfter(afterTime)) {
    //     $(time2pm).addClass('past');
    // };
    addTimeColor(time2pm, beforeTime, afterTime);
}

setInterval(updateThreePm, 1000);
function updateThreePm() {
    var format = 'hh:mm:ss';
    var currentTime = moment();
    var beforeTime = moment('15:00:00', format);
    var afterTime = moment('15:59:59', format);
    // if (currentTime.isBetween(beforeTime, afterTime)) {
    //     $(time3pm).addClass('present');
    // }
    // if (currentTime.isBefore(beforeTime)) {
    //     $(time3pm).addClass('future');
    // }
    // if (currentTime.isAfter(afterTime)) {
    //     $(time3pm).addClass('past');
    // };
    addTimeColor(time3pm, beforeTime, afterTime);
}

setInterval(updateFourPm, 1000);
function updateFourPm() {
    var format = 'hh:mm:ss';
    var currentTime = moment();
    var beforeTime = moment('16:00:00', format);
    var afterTime = moment('16:59:59', format);
    // if (currentTime.isBetween(beforeTime, afterTime)) {
    //     $(time4pm).addClass('present');
    // }
    // if (currentTime.isBefore(beforeTime)) {
    //     $(time4pm).addClass('future');
    // }
    // if (currentTime.isAfter(afterTime)) {
    //     $(time4pm).addClass('past');
    // };
    addTimeColor(time4pm, beforeTime, afterTime);
}

setInterval(updateFivePm, 1000);
function updateFivePm() {
    var format = 'hh:mm:ss';
    var currentTime = moment();
    var beforeTime = moment('17:00:00', format);
    var afterTime = moment('17:59:59', format);
    // if (currentTime.isBetween(beforeTime, afterTime)) {
    //     $(time5pm).addClass('present');
    // }
    // if (currentTime.isBefore(beforeTime)) {
    //     $(time5pm).addClass('future');
    // }
    // if (currentTime.isAfter(afterTime)) {
    //     $(time5pm).addClass('past');
    // };
    addTimeColor(time5pm, beforeTime, afterTime);
}

setInterval(updateSixPm, 1000);
function updateSixPm() {
    var format = 'hh:mm:ss';
    var currentTime = moment();
    var beforeTime = moment('18:00:00', format);
    var afterTime = moment('18:59:59', format);
    // if (currentTime.isBetween(beforeTime, afterTime)) {
    //     $(time6pm).addClass('present');
    // }
    // if (currentTime.isBefore(beforeTime)) {
    //     $(time6pm).addClass('future');
    // }
    // if (currentTime.isAfter(afterTime)) {
    //     $(time6pm).addClass('past');
    // };
    addTimeColor(time6pm, beforeTime, afterTime);
}

setInterval(updateSevenPm, 1000);
function updateSevenPm() {
    var format = 'hh:mm:ss';
    var currentTime = moment();
    var beforeTime = moment('19:00:00', format);
    var afterTime = moment('19:59:59', format);
    // if (currentTime.isBetween(beforeTime, afterTime)) {
    //     $(time7pm).addClass('present');
    //     $(time7pm).removeClass('future');
    // }
    // if (currentTime.isBefore(beforeTime)) {
    //     $(time7pm).addClass('future');
    //     $(time7pm).removeClass('past');
    // }
    // if (currentTime.isAfter(afterTime)) {
    //     $(time7pm).addClass('past');
    //     $(time7pm).removeClass('present');
    // };
    addTimeColor(time7pm, beforeTime, afterTime);
}

setInterval(updateEightPm, 1000);
function updateEightPm() {
    var format = 'hh:mm:ss';
    var currentTime = moment();
    var beforeTime = moment('20:00:00', format);
    var afterTime = moment('20:59:59', format);
    // if (currentTime.isBetween(beforeTime, afterTime)) {
    //     $(time8pm).addClass('present');
    // }
    // if (currentTime.isBefore(beforeTime)) {
    //     $(time8pm).addClass('future');
    // }
    // if (currentTime.isAfter(afterTime)) {
    //     $(time8pm).addClass('past');
    // };
    addTimeColor(time8pm, beforeTime, afterTime);
}

function addTimeColor(selector, beforeTime, afterTime) {
    var currentTime = moment();
    if (currentTime.isBetween(beforeTime, afterTime)) {
        $(selector).addClass('present');
        $(selector).removeClass('future');
    }
    if (currentTime.isBefore(beforeTime)) {
        $(selector).addClass('future');
        $(selector).removeClass('past');
    }
    if (currentTime.isAfter(afterTime)) {
        $(selector).addClass('past');
        $(selector).removeClass('present');
    };
}

$('#saveNine').on('click', function() {
    var userInput = $('#textFieldNine').val();
    localStorage.text9am = userInput;
});

loadEventNine();

function loadEventNine() {
    $('#textFieldNine').val(localStorage.text9am);
};

$('#saveTen').on('click', function() {
    var userInput = $('#textFieldTen').val();
    localStorage.text10am = userInput;
});

loadEventTen();

function loadEventTen() {
    $('#textFieldTen').val(localStorage.text10am);
};

$('#saveEleven').on('click', function() {
    var userInput = $('#textFieldEleven').val();
    localStorage.text11am = userInput;
});

loadEventEleven();

function loadEventEleven() {
    $('#textFieldEleven').val(localStorage.text11am);
};

$('#saveTwelve').on('click', function() {
    var userInput = $('#textFieldTwelve').val();
    localStorage.text12pm = userInput;
});

loadEventTwelve();

function loadEventTwelve() {
    $('#textFieldTwelve').val(localStorage.text12pm);
};

$('#saveOne').on('click', function() {
    var userInput = $('#textFieldOne').val();
    localStorage.text1pm = userInput;
});

loadEventOne();

function loadEventOne() {
    $('#textFieldOne').val(localStorage.text1pm);
};

$('#saveTwo').on('click', function() {
    var userInput = $('#textFieldTwo').val();
    localStorage.text2pm = userInput;
});

loadEventTwo();

function loadEventTwo() {
    $('#textFieldTwo').val(localStorage.text2pm);
};

$('#saveThree').on('click', function() {
    var userInput = $('#textFieldThree').val();
    localStorage.text3pm = userInput;
});

loadEventThree();

function loadEventThree() {
    $('#textFieldThree').val(localStorage.text3pm);
};

$('#saveFour').on('click', function() {
    var userInput = $('#textFieldFour').val();
    localStorage.text4pm = userInput;
});

loadEventFour();

function loadEventFour() {
    $('#textFieldFour').val(localStorage.text4pm);
};

$('#saveFive').on('click', function() {
    var userInput = $('#textFieldFive').val();
    localStorage.text5pm = userInput;
});

loadEventFive();

function loadEventFive() {
    $('#textFieldFive').val(localStorage.text5pm);
};

$('#saveSix').on('click', function() {
    var userInput = $('#textFieldSix').val();
    localStorage.text6pm = userInput;
});

loadEventSix();

function loadEventSix() {
    $('#textFieldSix').val(localStorage.text6pm);
};

$('#saveSeven').on('click', function() {
    var userInput = $('#textFieldSeven').val();
    localStorage.text7pm = userInput;
});

loadEventSeven();

function loadEventSeven() {
    $('#textFieldSeven').val(localStorage.text7pm);
};

$('#saveEight').on('click', function() {
    var userInput = $('#textFieldEight').val();
    localStorage.text8pm = userInput;
});

loadEventEight();

function loadEventEight() {
    $('#textFieldEight').val(localStorage.text8pm);
};

});