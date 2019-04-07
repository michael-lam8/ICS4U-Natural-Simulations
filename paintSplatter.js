// Michael Lam
// March 2019
// Randomness: Paint Splatter

// Declaring variables
var xRandomizer = new Random(1);
var fillRandomizer = new Random(1);
var standardDev = 50, mean = width/2;
var x = floor(random(11));

// Randomly drawing dots with normal distribution
var draw = function() {
    var a = xRandomizer.nextGaussian();
    var b = fillRandomizer.nextGaussian();
    var pointX = a * standardDev + mean;
    var fill = b * standardDev + mean;

    stroke(0, fill, fill, 25);
    strokeWeight(8);
    point(pointX, height/2);
};
