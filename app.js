const numMyths = 3;

const choices = {
    cities: ['Thebes', 'London', 'Sparta', 'Corinth', 'Argos', 'Los Angeles'],
    creatures: ['minotaur', 'hydra', 'poodle', 'chimera', 'pgymy goat', 'rabbit'],
    plagues: ['fever', 'rubber ducks', 'locusts', 'hiccups'],
    instruments: ['kithara', 'aulos flute', 'Casio CT-S200 keyboard', 'bongo drum'],
    heroes: [
        {name: 'Jason', gender: 'm'},
        {name: 'Heracles', gender: 'm'},
        {name: 'Perseus', gender: 'm'},
        {name: 'Theseus', gender: 'm'},
        {name: 'Luke Skywalker', gender: 'm'},
        {name: 'Greg', gender: 'm'},
    ],
    gods: [
        {name: 'Apollo', gender: 'm'}, 
        {name: 'Aphrodite', gender: 'f'},
        {name: 'Hephaestus', gender: 'm'},
        {name: 'Hermes', gender: 'm'}
    ],
    mortals: [
        {name: 'Hilarion', gender: 'm'},
        {name: 'Euanthe', gender: 'f'},
        {name: 'Korinna', gender: 'f'},
        {name: 'Kallias', gender: 'm'}
    ]
};

const people = ['heroes', 'gods', 'mortals'];

const numGenerator = numOptions => Math.floor(Math.random() * numOptions);

const engender = (person) => {
    if (person.gender === 'f') {
        person.pronoun = ['she', 'her'];
        person.possessive = 'her';
        person.suffix = 'dess';
    } else {
        person.pronoun = ['he', 'him'];
        person.possessive = 'his';
        person.suffix ='';
    }
    return person;
};

const pickFrom = list => {
    const index = numGenerator(choices[list].length);
    let choice = choices[list][index];
    if (people.includes(list)) {
        choice = engender(choice);
    }
    return choice;
};

const creatureMyth = () => {
    const hero = pickFrom('heroes');
    const city = pickFrom('cities');
    const creature = pickFrom('creatures');
    const template = `\n${hero.name} and the ${creature}\n\n`+
    `The great hero ${hero.name} was traveling near the city of ${city} when he `+
    `heard that the city was being menaced by a vicious ${creature}. The `+
    `${creature} would lurk at the outskirts of the city and eat anyone who `+
    `dared to come near. But ${hero.name} was not deterred and set out to confront`+
    ` the ${creature}. They fought a great battle! But through his strength `+
    `and cunning ${hero.name} was able to slay the beast. The citizens of ${city} `+
    `were grateful and presented ${hero.name} with a cloak of the ${creature}'s `+
    `hide to wear. To this day the area around ${city} is sometimes called `+
    `the land of ${hero.name}.`;
    return template;
};

const plagueMyth = () => {
    const god = pickFrom('gods');
    const city = pickFrom('cities');
    const plague = pickFrom('plagues');
    const template = `\nThe plague of ${plague}\n\n`+
    `The king of ${city} once angered ${god.name} by refusing to make `+
    `sacrifices to ${god.pronoun[1]}. "${god.name} is a powerless `+
    `god${god.suffix}" he declared, "and ${god.possessive} altar will see no `+
    `offerings from us." As punishment, ${god.name} sent a plague of `+
    `${plague} against the city. For three weeks the plague raged, and the `+
    `citizens of ${city} beseeched the king to change his mind. Finally, `+
    `realizing his hubris, the king ordered sacrifices to be made. At once `+
    `the plague ceased - no trace of ${plague} could be found in the city. `+
    `Ever after ${city} held a yearly festival to honor the power of `+
    `${god.name}, ${god.pronoun[0]} who sends ${plague}.`;
    return template;
};

const immortalityMyth = () => {
    const god = pickFrom('gods');
    const mortal = pickFrom('mortals');
    const instrument = pickFrom('instruments');
    const template = `\n${god.name} and ${mortal.name}\n\n`+
    `The god${god.suffix} ${god.name} once fell in love with a mortal, `+
    `${mortal.name}, who was renowned not only for ${mortal.possessive} `+
    `beauty but also for ${mortal.possessive} talent at playing the `+
    `${instrument}. Afraid to lose ${mortal.name}, ${god.name} begged Zeus `+
    `to grant ${mortal.pronoun[1]} immortality. But Zeus was loathe to so `+
    `easily give away immortality, the greatest gift of the gods, and `+
    `declared that he would not. He would only, he said, grant immortality `+
    `to a musician whose music could move the gods, one whose music was `+
    `worthy of being played for generations to come. Hearing this, `+
    `${god.name} knew that Zeus could be persuaded and brought ${mortal.name}`+
    ` to Olympus. Standing before the gods, ${mortal.name} picked up `+
    `${mortal.possessive} ${instrument} and began to play. From the first `+
    `note all the gods were enthralled! When the song ended, Zeus reversed `+
    `his decision and immortalized ${mortal.name}, who became a minor deity `+
    `of music.`;
    return template;
};

const generateMyth = () => {
    const randNum = numGenerator(numMyths);
    let story;
    switch (randNum) {
        case 0:
            story = creatureMyth();
            break;
        case 1:
            story = plagueMyth();
            break;
        case 2:
            story = immortalityMyth();
            break;
    }
    console.log(story);
};

generateMyth();