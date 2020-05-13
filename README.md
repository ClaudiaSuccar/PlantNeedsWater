# plantNeedsWater
Call methods from an object to water a plant.

List of methods which can be called:
+ `plant.advanceToNextDay();` Progresses to the next day and restores the plant's water level to its default.
+ `plant.water();` Waters the plant incrementally. Different levels are 'low', 'medium', and 'high'.
+ `plant.checkLevel();` Displays the current status of the plant's water level.

1. The program consists of an object called 'plant', which houses the default water level and available methods.

```javascript
const plant = {
  waterLevel: 'low', //Water level is 'low' by default.
  checkLevel() {
    console.log(`The current water level is ${this.waterLevel}.`);
  },
  water() {
  
  ...
```
2. The checkLevel method allows the user to check the current water level of the plant at any time.

```javascript
checkLevel() { //CheckLevel method outputs curent water level.
  console.log(`The curent water level is ${this.waterLevel}.`);
},

...
```
3. The water method contains an else-if statement, which allows the user to water the plant incrementally.

```javascript
if(this.waterLevel === 'low) {
    this.waterLevel = 'medium';
    console.log(`Watered! Water level is currently at ${this.waterLevel}.`)
  } else if(this. waterLevel === 'medium') { //Water level is high if 'medium'.
    this.waterLevel = 'high';
    console.log(`Watered! Water level is currently at ${this.waterLevel}.`)
  } else { //The current state of the water level will not change if the water level is already high.
    console.log('The plant has max amount of water!');
  }
},

...
```
4. `advanceToNextDay();` resets the water level, using the 'this' keyword, back to 'low'.

```javascript
advanceToNextDay() { //advanceToNextDay method resets the water level to 'low'.
  console.log('It is now the next day!\n');
  this.waterLevel = 'low';
}

...
```

# What I learned

- How to create objects in Javascript that contain properties and methods.
- How to refer to variables within an object using the 'this' keyword, such as `this.waterLevel = 'medium';`.
- How to call a method outside of an object using the proper syntax, for example, `plant.water();`
