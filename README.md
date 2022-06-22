# Hackathon 3

## Shop Calculator

### Goals

When using the lathe, a common operation is turning a piece of stock to a desired diameter. This is done by calculating the difference of the current diameter and the desired diameter, and dividing it by an appropriate depth of cut. Those passes are referred to as "roughing passes." In practice, you would make roughing passes until you approach the final diameter (< 0.05"). The final, smaller increment would be turned with a "finishing pass." Often these are performed with a higher RPM or slower feed rate, or both. This combination of settings is used to improve the surface finish of the machined part.

I would like to make a shop calculator mobile app that will calculate and track those passes. The user would enter in the current diameter of the stock, the intended finished diameter, and the desired depth of cut. The app would then calculate the number of roughing passes that should be performed to approach the final dimension. The user could make adjustments to any of the three parameters to recalculate. There will be an increment/decrement system to allow the user to keep track of passes as they are performed. When the roughing passes are completed, the app will prompt the user to measure the stock and check against the calculated diameter. If error is present, the user will correct the dimensions and start the finishing pass(es).

### Stretch Goals

- Dynamic graphic that shows passes and material dimensions at relative scale.

- Linear dimension breakdown with metric/imperial conversion
  - Ability to enter a single dimension and get a fractional (decimal) breakdown for half, third, quarter, fifth, sixth, seventh, eight, sixteenth, thirty-second, and sixty-fourth.
  - Metric and Imperial breakdowns

- RPM calculator for common materials based on tool (mill) diameter or stock (lathe) diameter
  - mild steel
  - aluminum
  - brass

### Technologies

- I hope to build this in Vue, mobile-first. Ideally it's a large button app that can be used at the machine.
- For the graphic, I will attempt to put something together in with p5.js, but if I can't get that working in a day or so, I will switch to SVG or HTML canvas.

## Dev Journal

### Day 1 (Tuesday)

I was able to get a vue project set up with all the inputs and buttons I intend to use. I'm having a little trouble with the calculations currently. It doesn't seem like Javascript is the greatest language for a calculator. I'm getting some mathematical noise, and rounding errors are creeping into my calculations. This is affecting some of my conditional logic. 
