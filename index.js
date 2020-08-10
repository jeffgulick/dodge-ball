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
    let li = document.createElement('li');

    //buttons
    let blueButton = document.createElement('button');
    let redButton = document.createElement('button');
    blueButton.innerHTML = "Blue";
    redButton.innerHTML = "Red";
    li.appendChild(blueButton);
    li.appendChild(redButton);
    
    //adding text and finishing up the addition
    li.appendChild(document.createTextNode(`${createPlayer.name} // Can Throw: ${createPlayer.canThrowBall} // Can Dodge: ${createPlayer.canDodgeBall} // Healthy: ${createPlayer.isHealthy}`));

    playerElement.appendChild(li);

    //calls function that creates blueteam
    blueButton.addEventListener('click', function(){
      li.remove();
      makeBlue(createPlayer.id);
    })

    //calls function that creates redteam
    redButton.addEventListener('click', function(){
      li.remove();
      makeRed(createPlayer.id);
    })

  }

  const makeBlue = (id) => {
    //locating players by id number and removing from listOfPlayers array
    let locatePlayer = listOfPlayers.find((people, index) => {
      if(people.id == id){
          listOfPlayers.splice(index, 1);
      }
      return people.id == id;
  })
  //creating new blue team object
    let bluePlayer = new blueTeammate(
      locatePlayer.mascot,
      locatePlayer.color,
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

    //using extended method to add player to blue team array
    bluePlayer.addToBlue(bluePlayer);
    console.log(listOfPlayers);//making sure array empties
    console.log(blueTeam);//making sure array fills

    //add blue players to blue team in dom
    let blueSquad = document.getElementById('blue');
    let li = document.createElement('li');

    let button = document.createElement('button');
    button.innerHTML = 'Remove from Team';
    li.appendChild(button);

    //removes player from team and moves to arrOFPeople
    button.addEventListener('click', function() {
      li.remove();
      arrOfPeople.push(bluePlayer);

      let id = bluePlayer.id;
      //removes from array
      redTeam.find((element, index) => {
        if(element.id == id){
            blueTeam.splice(index, 1);
        };
    })
    })

    li.appendChild(document.createTextNode(`${bluePlayer.name} - ${bluePlayer.color} - ${bluePlayer.mascot}`));
    blueSquad.appendChild(li);

  }

  const makeRed = (id) => {
    let locatePlayer = listOfPlayers.find((people, index) => {
      if(people.id == id){
          listOfPlayers.splice(index, 1);
      }
      return people.id == id;
  })

  //creating new red team object
    let redPlayer = new redTeammate(
      locatePlayer.mascot,
      locatePlayer.color,
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

    //using extended method to add player to red team array
    redPlayer.addToRed(redPlayer);
    console.log(listOfPlayers);//making sure array empties
    console.log(redTeam);//making sure array fills

    let redSquad = document.getElementById('red');
    let li = document.createElement('li');

    let button = document.createElement('button');
    button.innerHTML = 'Remove from Team';
    li.appendChild(button);

     //removes player from team and moves to arrOFPeople
    button.addEventListener('click', function() {
      li.remove();
      arrOfPeople.push(redPlayer);

      let id = redPlayer.id;

      redTeam.find((element, index) => {
        if(element.id == id){
            redTeam.splice(index, 1);
        };
    })
    })

    li.appendChild(document.createTextNode(`${redPlayer.name} - ${redPlayer.color} - ${redPlayer.mascot}`));
    redSquad.appendChild(li);


}