const heroes = ['Jason', 'Heracles', 'Perseus', 'Theseus', 'Achilles', 'Greg'];
const cities = ['Thebes', 'Ephesus', 'Sparta', 'Corinth', 'Argos', 'Los Angeles'];
const creatures = ['minotaur', 'hydra', 'poodle', 'chimera', 'pgymy goat', 'rabbit'];

const numGenerator = numOptions => Math.floor(Math.random() * numOptions);

const formatMyth = () => {
    const hero = heroes[numGenerator(heroes.length)];
    const city = cities[numGenerator(cities.length)];
    const creature = creatures[numGenerator(creatures.length)];
    const template = `The great hero ${hero} was traveling near the city of ${city} when he heard \
that the city was being menaced by a vicious ${creature}. The ${creature} would lurk at the outskirts \
of the city and eat anyone who dared to come near. But ${hero} was not deterred and set out to \
confront the ${creature}. They fought a great battle! But through his strength and cunning ${hero} was \
able to slay the beast. The citizens of ${city} were grateful and presented ${hero} with a cloak of the \
${creature}'s hide to wear. To this day the area around ${city} is sometimes called the land of ${hero}.`;
    return template;
};

const generateMyth = () => {
    // will be used to pick a template when more than 1 is available
    console.log(formatMyth());
};

generateMyth();