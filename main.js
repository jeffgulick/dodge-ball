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
        listOfPlayers.push(this);
    }
  }

  //class for blue team extends construct and methods from player
  class blueTeammate extends player{
    constructor(color, mascot, id, name, age, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, placeBorn ){
        super(id, name, age, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, placeBorn);
        this.color = 'Blue';
        this.mascot = 'The Blues Clues';
    }
  }

  //class for red team extencs construct and methods from player class
  class redTeammate extends player{
    constructor(color, mascot, id, name, age, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, placeBorn){
        super(id, name, age, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, placeBorn)
        this.color = 'Red';
        this.mascot = 'Red Dogs';
    }
  }
