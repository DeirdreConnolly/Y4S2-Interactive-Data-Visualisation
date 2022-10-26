// Square Number
function squareNumber(num) {
    var squaredNum = (num * num);
    console.log("The result of squaring the number " + num + " is " + squaredNum);
    return squaredNum;
}

squareNumber(3);


// Half Number
function halfNumber(num) {
    var halvedNum = (num / 2);
    console.log("Half of " + num + " is " + halvedNum)
    return halvedNum;
}

halfNumber(5);


// Percent Of
function percentOf(num1, num2) {
    var percentNum = ((num1 / num2) * 100);
    console.log(num1 + " is " + percentNum + "% of " + num2)
    return percentNum;
}

percentOf(2, 4);


// Area of Circle
function areaOfCircle(radius) {     // pi * r2
    area = Math.PI * squareNumber(radius);
    console.log("The area for a circle with radius " + radius + " is " + area)
    console.log("The area for a circle with radius " + radius + " is " + area.toFixed(2))
    return area;
}

areaOfCircle(2);


// Combination of Previous
function combo(num) {

    half = halfNumber(num);                 // Take half of argument num
    squared = squareNumber(half);           // Square result of half
    area = areaOfCircle(squared);           // Use squared as radius to calculate area of a circle
    percent = percentOf(area, squared);     // Use area to calculate percent in relation to squared

    return half, squared, area, percent;
}

combo(10);




