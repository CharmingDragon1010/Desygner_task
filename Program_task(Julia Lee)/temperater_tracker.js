////// Tracker Class definition
class Tracker {
	// define constructor
	constructor(){
		this.max = Number.NEGATIVE_INFINITY;
		this.min = Number.POSITIVE_INFINITY;
		this.average = null;
		this.count = 0;
	}

	// define insert method -setter-
	insert(new_val) {
		if (new_val > this.max) {
			this.max = new_val;
		}
		if (new_val < this.min) {
			this.min = new_val;
		}
		this.average = (this.average * this.count + new_val) / ++this.count;
		
	}

	// define max getter
	get getMax() {
		return this.max;
	}

	// define min getter
	get getMin() {
		return this.min;
	}

	// define average getter
	get getAverage() {
		return this.average;
	}
}

////// demonstrate how this class methods works

// initiate an object of Tracker class
let tracker = new Tracker();

// execute insert method of object
tracker.insert(5);

// output feature values 
console.log("Max Temperature: " + tracker.getMax);
console.log("Min Temperature: " + tracker.getMin);
console.log("Average Temperature: " + tracker.getAverage);
console.log("Count: " + tracker.count);