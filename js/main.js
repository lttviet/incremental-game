var hours = 24;
var day = 0;
var money = 1000;
var expense = 10;
var currentLine = 0;
var finalCodeLine = 1000000;

function updateHour(num) {
  hours += num;
  if (hours === 0) {
    hours = 24;
    updateDay(1);
    updateMoney(-expense);
  };
  $("#hours").text(hours);
}

function updateDay(num) {
  day += num;
  $("#day").text(day);
  var r = Math.floor(Math.random() * (10 - 1)) + 1;
  if (r > 5) {
    randomEvent();
  };
};

function updateMoney(num) {
  money += num;
  $("#money").text(money);
};

function updateProgress() {
  $("#progress").text(currentLine / finalCodeLine);
};

function Event(args) {
  this.description = args["description"];
  this.hours = args["hours"] || 0;
  this.day = args["day"] || 0;
  this.money = args["money"] || 0;
  this.expense = args["expense"] || 0;
  this.currentLine = args["currentLine"] || 0;
}

function randomEvent() {
  var e = new Event(event1);
  alert(e.description);
  updateHour(e.hours);
};

$("#app").click(function() {
  updateHour(-12);
  currentLine += 10000;
  updateProgress();
});

$("#work").click(function() {
  updateHour(-12);
  updateMoney(100);
});

var event1 = { "description" : "You are under the weather today. Sleep the whole day. Not get any work done.",
               "hours" : -24,
};
