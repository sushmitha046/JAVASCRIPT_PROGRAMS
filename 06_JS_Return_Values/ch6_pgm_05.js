
var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount) {
    return callOutCharge + costPerHour * numberOfHours - discount;
};


var costFor12Hours = totalCost(30, 40, 12, 0);
console.log("Cost for 12 hours: $" + costFor12Hours);


console.log("$" + totalCost(30, 40, 3, 20));
