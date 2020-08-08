const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      canThrowBall: "false",
      canDodgeBall: 'true',
      hasPaid: "true",
      isHealthy: "true",
      yearsExperience: "10",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      canThrowBall: "false",
      canDodgeBall: 'true',
      hasPaid: "true",
      isHealthy: "true",
      yearsExperience: "10",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      canThrowBall: "false",
      canDodgeBall: 'true',
      hasPaid: "true",
      isHealthy: "true",
      yearsExperience: "10",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      canThrowBall: "false",
      canDodgeBall: 'true',
      hasPaid: "true",
      isHealthy: "true",
      yearsExperience: "10",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      canThrowBall: "true ",
      canDodgeBall: 'true',
      hasPaid: "true",
      isHealthy: "true",
      yearsExperience: "10",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      canThrowBall: "false",
      canDodgeBall: 'true',
      hasPaid: "false",
      isHealthy: "true",
      yearsExperience: "10",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      canThrowBall: "true",
      canDodgeBall: 'true',
      hasPaid: "true",
      isHealthy: "true",
      yearsExperience: "10",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  //player class
  class player {
    constructor(id, name, age, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, placeBorn){
        this.id = id;
        this.name = name;
        this.age = age;
        this.skillSet = skillSet;
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
        this.placeBorn = placeBorn;
    }
    //method to add player to blue team
    addToBlue(){
        blueTeam.push(this);
    }
    //adds players to red
    addToRed(){
        redTeam.push(this);
    }
    //adds players to player list
    addPlayerList(){
        listOfPlayers.push(this)
    }
  }
  class blueTeammate extends player{
    constructor(color, mascot, id, name, age, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, placeBorn ){
        super(id, name, age, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, placeBorn);
        this.color = color;
        this.mascot = mascot;
    }
  }
  class redTeammate extends player{
    constructor(color, mascot, id, name, age, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, placeBorn){
        super(id, name, age, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, placeBorn)
        this.color = color;
        this.mascot = mascot;
    }
  }
  //creates list of people and gets things going
  const listPeopleChoices = () => {
    let listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      let li = document.createElement("li")
      let button = document.createElement("button")
      button.innerHTML = "Make Player";
        //calls the make player function and removes list element from dom
      button.addEventListener('click', function() {
          makePlayer(person.id);
          li.remove();
        })
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  
  const makePlayer = (id) => {
      //checks for matching id number in arrOfPeople and returns that object. also removes that object from the arrOf 
      //people array
    let locatePlayer = arrOfPeople.find((people, index) => {
        if(people.id == id){
            arrOfPeople.splice(index, 1);
        }
        return people.id == id;
    })
    
    console.log(arrOfPeople)
    //creating a new object using player class
    let createPlayer = new player(
        locatePlayer.id,
        locatePlayer.name,
        locatePlayer.age,
        locatePlayer.skillSet,
        locatePlayer.canThrowBall,
        locatePlayer.canDodgeBall,
        locatePlayer.hasPaid,
        locatePlayer.isHealthy,
        locatePlayer.yearsExperience,
        locatePlayer.placeBorn
    )
    //using method from player class to add new object to player list array
    createPlayer.addPlayerList(createPlayer);
    //adding new object to the dom
    let playerElement = document.getElementById('players');
    let poolList = document.createElement('li');
    //buttons
    let blueButton = document.createElement('button');
    let redButton = document.createElement('button');
    blueButton.innerHTML = "Blue";
    redButton.innerHTML = "Red";
    poolList.appendChild(blueButton);
    poolList.appendChild(redButton);
    //adding text and finishing up the addition
    poolList.appendChild(document.createTextNode(createPlayer.name + " - " + createPlayer.skillSet));
    playerElement.appendChild(poolList);
  }

  const makeBlue = () => {

  }

  const makeRed = () => {
      
}