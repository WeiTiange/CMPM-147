const fillers = {
  protagonist: [
    "Traveler",
    "Tourist",
    "Adventurer",
    "Space Explorer",
    "Scientist",
    "Professor",
    "Tony Stark",
    "$protagonist and $protagonist"
  ],

  travel_time: [
    "10 minutes",
    "243 years",
    "1 second",
    "375 hours"
  ],

  destination: [
    "YYDS",
    "Bilibili",
    "H28",
    "M78",
    "Ogrihiri",
    "Xunkotune",
    "Elliri",
    "Ezora",
    "Uanus",
    "Kowei",
    "Lluiphus",
    "Chizuphus",
    "Grars 9M6",
    "Dronoe 5I",
    "Unknown planet in $galaxy Area"
  ],

  planet: [
    "YYDS",
    "Bilibili",
    "H28",
    "M78",
    "Ogrihiri",
    "Xunkotune",
    "Elliri",
    "Ezora",
    "Uanus",
    "Kowei",
    "Lluiphus",
    "Chizuphus",
    "Grars 9M6",
    "Dronoe 5I",
    ],

  planet_type: [
    "gas planet",
    "liquid planet",
    "planet like Earth"
  ],

  life: [
    "with very basic organisms",
    "with unknown organisms",
    "without any organism",
    "with high intelligence creatures"
  ],

  rotation_period: [
    "2 hours",
    "36 hours",
    "95 minutes",
    "1 earth year",
    "78 earth days"
  ],

  galaxy: [
    "B839-H6",
    "Carina Aquarii",
    "Beta Arcturus",
    "Pavo Lyra",
    "Ilioneus Nebula",
    "Zephyrus Star System",
    "Hurricane Nebula",
    "Grain Cloud",
    "Crescent Cloud",
    "KB-937",
    "OOY 87H"
  ],

  radius: [
    "23849285 km",
    "98098509283507 km",
    "305002 km",
    "2315 km"
  ],

  time: [
    "10 days",
    "12 hours",
    "3 months",
    "4 years",
    "2 centries",
    "90 minutes"
  ],
  distance: [
    "0.74 light-year",
    "233 light-year",
    "114514 light-year",
    "1919 light-year",
    "1145141919 light-year"
  ]
  };
  
const template = "$protagonist, you've arrived on $destination, which is $distance away from the Earth!\n\nIt took you $travel_time to arrive on this planet. \n\nThe radius of this planet is $radius.\n\nIt is a $planet_type $life. The rotation period of this planet is $rotation_period.\n\nIt's in the $galaxy Galaxy, planets $planet, $planet, and $planet are in this galaxy as well.\n\n You will have $time to explore this planet, when the time is up, we need to go to a new planet!";

  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
