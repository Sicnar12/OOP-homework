// Exercise 1
 let dog = {
    name: "slater",
    numLegs: 4
    
    };


// Exercise 2
let dog = {
    name: "Spot",
    numLegs: 4
  };
  // Only change code below this line
  console.log(dog.numLegs);
  console.log(dog.name);

  //Exercise 3
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return "This dog has " + dog.numLegs + " legs.";
    }
  };
  
  dog.sayLegs();

  // Exercise 4
  function Dog () {
    this.name = 'Carl';
    this.color = 'green';
    this.numLegs = 2;
    }

    //Exercise 5
    function Dog() {
        this.name = "Rupert";
        this.color = "brown";
        this.numLegs = 4;
      }
      // Only change code below this line
      let hound = new Dog ();

      //Exercise 6
      function Dog(name, color) {
        this.name = name
        this.color = color
        this.numLegs = 4
      }
      let terrier = new Dog
      terrier.name = 'bald'
      terrier.color = 'green'

      //Exercise 7
      function House(numBedrooms) {
        this.numBedrooms = numBedrooms;
      }
      
      // Only change code below this line
      let myHouse = new House(3);
      
      myHouse.numBedrooms = 4
      myHouse instanceof House
      
      //Exercise 8
      function Bird(name) {
        this.name = name;
        this.numLegs = 2;
      }
      
      let canary = new Bird("Tweety");
      let ownProps = [];
      // Only change code below this line
      for (let property in canary){
        if (canary.hasOwnProperty(property)) {
          ownProps.push(property);
        }
      }
      console.log(ownProps);
      
      //Exercise 10
      function Dog(name) {
        this.name = name;
      }
      
      Dog.prototype.numLegs = 4;
      
      // Add your code above this line
      let beagle = new Dog("Snoopy");