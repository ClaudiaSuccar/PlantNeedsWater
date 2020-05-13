const plant = { //Object plant is created.
  waterLevel: 'low', //Water level is 'low' by default.
  checkLevel() { //CheckLevel method outputs curent water level.
    console.log(`The curent water level is ${this.waterLevel}.`);
  },
  water() { //Water method allows the user to water the plant.
    if(this.waterLevel === 'low') { //Water level becomes medium if 'low'.
      this.waterLevel = 'medium';
      console.log(`Watered! Water level is currently at ${this.waterLevel}.`)
    } else if(this. waterLevel === 'medium') { //Water level becomes high if 'medium'.
      this.waterLevel = 'high';
      console.log(`Watered! Water level is currently at ${this.waterLevel}.`)
    } else { //The current state of the water level will not change if the water level is already high.
      console.log('The plant has max amount of water!');
    }
  },
  advanceToNextDay() { //advanceToNextDay method resets the water level to 'low'.
    console.log('It is now the next day!');
    this.waterLevel = 'low';
  }
}

plant.checkLevel(); //Checks the current amount of water, which is 'low'.
plant.water(); //Waters the plant from 'low' to 'medium'.
plant.water(); //Waters the plant from 'medium' to 'high'.
plant.water(); //Max water level reached!
plant.advanceToNextDay(); //Progresses to the next day.
plant.checkLevel(); //Water level for the plant is 'low' again.
