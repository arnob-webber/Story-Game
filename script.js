// expanded story with more levels
const story = {
  start: {
    text: "You find yourself at a fork in the road. Which way do you want to go?",
    choices: [
      { text: "Go left", next: "leftPath" },
      { text: "Go right", next: "rightPath" }
    ]
  },
  leftPath: {
    text: "You walk down a shady path and encounter a mysterious figure. What will you do?",
    choices: [
      { text: "Talk to the figure", next: "talkFigure" },
      { text: "Run away", next: "runAway" }
    ]
  },
  rightPath: {
    text: "You take the right path and find a beautiful garden. You see a shiny object in the grass.",
    choices: [
      { text: "Pick up the object", next: "findTreasure" },
      { text: "Ignore it and walk away", next: "walkAway" }
    ]
  },
  talkFigure: {
    text: "The figure reveals themselves to be a friendly wizard who gives you a magic potion. Where will you go now?",
    choices: [
      { text: "Go deeper into the forest", next: "deepForest" },
      { text: "Return to the fork", next: "start" }
    ]
  },
  runAway: {
    text: "You run away as fast as you can and find yourself back at the start.",
    choices: [
      { text: "Go back to the start", next: "start" }
    ]
  },
  findTreasure: {
    text: "You pick up the object and realize it's a magical gem that grants wishes! What will you wish for?",
    choices: [
      { text: "Wish for endless riches", next: "riches" },
      { text: "Wish for ultimate power", next: "power" }
    ]
  },
  walkAway: {
    text: "You walk away and enjoy the peaceful garden, leaving the shiny object behind. Suddenly, you hear a noise. What do you do?",
    choices: [
      { text: "Investigate the noise", next: "investigateNoise" },
      { text: "Run back to the path", next: "runBackPath" }
    ]
  },
  riches: {
    text: "Your wish is granted! You're now the richest person in the world, but you find that money can't buy happiness. The end.",
    choices: []
  },
  power: {
    text: "Your wish is granted! You now have ultimate power, but with great power comes great responsibility. How will you use your power?",
    choices: [
      { text: "Help people", next: "helpPeople" },
      { text: "Rule the world", next: "ruleWorld" }
    ]
  },
  deepForest: {
    text: "You go deeper into the forest and find a hidden cave. Do you enter the cave?",
    choices: [
      { text: "Enter the cave", next: "enterCave" },
      { text: "Stay outside", next: "stayOutside" }
    ]
  },
  investigateNoise: {
    text: "You investigate the noise and find a small animal in distress. Do you help it?",
    choices: [
      { text: "Help the animal", next: "helpAnimal" },
      { text: "Leave it alone", next: "leaveAnimal" }
    ]
  },
  runBackPath: {
    text: "You run back to the path and find yourself at the fork again.",
    choices: [
      { text: "Go left", next: "leftPath" },
      { text: "Go right", next: "rightPath" }
    ]
  },
  enterCave: {
    text: "Inside the cave, you find an ancient treasure guarded by a dragon! What will you do?",
    choices: [
      { text: "Fight the dragon", next: "fightDragon" },
      { text: "Befriend the dragon", next: "befriendDragon" }
    ]
  },
  stayOutside: {
    text: "You decide to stay outside, but as you wait, night falls. It's getting cold. What now?",
    choices: [
      { text: "Enter the cave after all", next: "enterCave" },
      { text: "Build a fire and camp", next: "buildFire" }
    ]
  },
  helpAnimal: {
    text: "You help the animal, and it turns out to be a magical creature that grants you one wish. What do you wish for?",
    choices: [
      { text: "Wish for a peaceful life", next: "peacefulLife" },
      { text: "Wish for adventure", next: "adventure" }
    ]
  },
  leaveAnimal: {
    text: "You leave the animal and continue walking. You feel a sense of guilt. The end.",
    choices: []
  },
  fightDragon: {
    text: "You bravely fight the dragon, but it's a fierce battle. You barely escape with your life. The end.",
    choices: []
  },
  befriendDragon: {
    text: "You befriend the dragon, and it offers to take you on adventures across the world. Your journey begins!",
    choices: []
  },
  buildFire: {
    text: "You build a fire and camp for the night, but in the morning, you find strange footprints near your camp. What now?",
    choices: [
      { text: "Follow the footprints", next: "followFootprints" },
      { text: "Ignore them and move on", next: "moveOn" }
    ]
  },
  peacefulLife: {
    text: "Your wish is granted, and you live a peaceful, quiet life from then on. The end.",
    choices: []
  },
  adventure: {
    text: "Your wish for adventure is granted, and you're taken on a wild journey through magical lands. The end.",
    choices: []
  },
  helpPeople: {
    text: "You use your power to help people all over the world, becoming a beloved hero. The end.",
    choices: []
  },
  ruleWorld: {
    text: "You use your power to rule the world, but ruling isn't as easy as you thought. The end.",
    choices: []
  },
  followFootprints: {
    text: "You follow the footprints and discover a hidden village of magical creatures. They welcome you and invite you to stay. The end.",
    choices: []
  },
  moveOn: {
    text: "You decide to move on and continue your journey. What lies ahead remains a mystery. The end.",
    choices: []
  }
};


let currentStory = story.start;

function displayStory() {

  document.getElementById("story").textContent = currentStory.text;


  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";


  currentStory.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.onclick = () => {
      currentStory = story[choice.next];
      displayStory();
    };
    choicesDiv.appendChild(button);
  });
}


displayStory();
