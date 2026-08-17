const cards = [
  {
    "name": "Space Mirrors",
    "cost": 3,
    "color": "Blue",
    "tags": [
      "Space",
      "Energy"
    ],
    "effects": [
      "negMC",
      "Powerprod"
    ],
    "image": "images/cards/Space Mirrors.webp",
    "requirement": "None"
  },
  {
    "name": "Comet",
    "cost": 21,
    "color": "Red",
    "tags": [
      "Space"
    ],
    "effects": [
      "Ocean",
      "Temperature",
      "negPlant"
    ],
    "image": "images/cards/Comet.webp",
    "requirement": "None"
  },
  {
    "name": "Mining Area",
    "cost": 4,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Special",
      "Steelprod",
      "Titaniumprod"
    ],
    "image": "images/cards/Mining Area.webp",
    "requirement": "None"
  },
  {
    "name": "Windmills",
    "cost": 6,
    "color": "Green",
    "tags": [
      "Energy",
      "Building"
    ],
    "effects": [
      "Powerprod",
      "VP"
    ],
    "image": "images/cards/Windmills.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Equatorial Magnetizer",
    "cost": 11,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPowerprod",
      "TR"
    ],
    "image": "images/cards/Equatorial Magnetizer.webp",
    "requirement": "None"
  },
  {
    "name": "Urbanized Area",
    "cost": 10,
    "color": "Green",
    "tags": [
      "Building",
      "City"
    ],
    "effects": [
      "negPowerprod",
      "MCprod",
      "City"
    ],
    "image": "images/cards/Urbanized Area.webp",
    "requirement": "None"
  },
  {
    "name": "Mars University",
    "cost": 8,
    "color": "Blue",
    "tags": [
      "Science",
      "Building"
    ],
    "effects": [
      "Other",
      "Card",
      "VP"
    ],
    "image": "images/cards/Mars University.webp",
    "requirement": "None"
  },
  {
    "name": "Power Supply Consortium",
    "cost": 5,
    "color": "Green",
    "tags": [
      "Energy"
    ],
    "effects": [
      "Powerprod",
      "negPowerprod"
    ],
    "image": "images/cards/Power Supply Consortium.webp",
    "requirement": "Tags"
  },
  {
    "name": "Archaebacteria",
    "cost": 6,
    "color": "Green",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "Plantprod"
    ],
    "image": "images/cards/Archaebacteria.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Deep Well Heating",
    "cost": 13,
    "color": "Green",
    "tags": [
      "Energy",
      "Building"
    ],
    "effects": [
      "Powerprod",
      "Temperature"
    ],
    "image": "images/cards/Deep Well Heating.webp",
    "requirement": "None"
  },
  {
    "name": "Space Elevator",
    "cost": 27,
    "color": "Blue",
    "tags": [
      "Building",
      "Space"
    ],
    "effects": [
      "negSteel",
      "MC",
      "Titaniumprod",
      "VP"
    ],
    "image": "images/cards/Space Elevator.webp",
    "requirement": "None"
  },
  {
    "name": "Symbiotic Fungus",
    "cost": 4,
    "color": "Blue",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "Microbe"
    ],
    "image": "images/cards/Symbiotic Fungus.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Cupola City",
    "cost": 16,
    "color": "Green",
    "tags": [
      "Building",
      "City"
    ],
    "effects": [
      "negPowerprod",
      "MCprod",
      "City"
    ],
    "image": "images/cards/Cupola City.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Bushes",
    "cost": 10,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "Plant",
      "Plantprod"
    ],
    "image": "images/cards/Bushes.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Indentured Workers",
    "cost": 0,
    "color": "Red",
    "tags": [
      "None"
    ],
    "effects": [
      "Other"
    ],
    "image": "images/cards/Indentured Workers.webp",
    "requirement": "None"
  },
  {
    "name": "Miranda Resort",
    "cost": 12,
    "color": "Green",
    "tags": [
      "Space",
      "Jovian"
    ],
    "effects": [
      "MCprod",
      "VP"
    ],
    "image": "images/cards/Miranda Resort.webp",
    "requirement": "None"
  },
  {
    "name": "Lightning Harvest",
    "cost": 8,
    "color": "Green",
    "tags": [
      "Energy"
    ],
    "effects": [
      "Powerprod",
      "MCprod",
      "VP"
    ],
    "image": "images/cards/Lightning Harvest.webp",
    "requirement": "Tags"
  },
  {
    "name": "Peroxide Power",
    "cost": 7,
    "color": "Green",
    "tags": [
      "Building",
      "Energy"
    ],
    "effects": [
      "negMCprod",
      "Powerprod"
    ],
    "image": "images/cards/Peroxide Power.webp",
    "requirement": "None"
  },
  {
    "name": "Aerobraked Ammonia Asteroid",
    "cost": 26,
    "color": "Green",
    "tags": [
      "Space"
    ],
    "effects": [
      "Microbe",
      "Heatprod",
      "Plantprod"
    ],
    "image": "images/cards/Aerobraked Ammonia Asteroid.webp",
    "requirement": "None"
  },
  {
    "name": "Rad-Chem Factory",
    "cost": 8,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPowerprod",
      "TR"
    ],
    "image": "images/cards/Rad-Chem Factory.webp",
    "requirement": "None"
  },
  {
    "name": "Space Hotels",
    "cost": 12,
    "color": "Green",
    "tags": [
      "Earth",
      "Space"
    ],
    "effects": [
      "MCprod"
    ],
    "image": "images/cards/Space Hotels.webp",
    "requirement": "Tags"
  },
  {
    "name": "Ants",
    "cost": 9,
    "color": "Blue",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "VP",
      "Microbe"
    ],
    "image": "images/cards/Ants.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Cartel",
    "cost": 8,
    "color": "Green",
    "tags": [
      "Earth"
    ],
    "effects": [
      "MCprod"
    ],
    "image": "images/cards/Cartel.webp",
    "requirement": "None"
  },
  {
    "name": "Heather",
    "cost": 6,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "Plant",
      "Plantprod"
    ],
    "image": "images/cards/Heather.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Lagrange Observatory",
    "cost": 9,
    "color": "Green",
    "tags": [
      "Space",
      "Science"
    ],
    "effects": [
      "Card",
      "VP"
    ],
    "image": "images/cards/Lagrange Observatory.webp",
    "requirement": "None"
  },
  {
    "name": "Steelworks",
    "cost": 15,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPower",
      "Steel",
      "Oxygen"
    ],
    "image": "images/cards/Steelworks.webp",
    "requirement": "None"
  },
  {
    "name": "Martian Survey",
    "cost": 9,
    "color": "Red",
    "tags": [
      "Science"
    ],
    "effects": [
      "Card",
      "VP"
    ],
    "image": "images/cards/Martian Survey.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Trans-Neptune Probe",
    "cost": 6,
    "color": "Green",
    "tags": [
      "Science",
      "Space"
    ],
    "effects": [
      "VP"
    ],
    "image": "images/cards/Trans-Neptune Probe.webp",
    "requirement": "None"
  },
  {
    "name": "Local Heat Trapping",
    "cost": 1,
    "color": "Red",
    "tags": [
      "None"
    ],
    "effects": [
      "negHeat",
      "Plant",
      "Animal"
    ],
    "image": "images/cards/Local Heat Trapping.webp",
    "requirement": "None"
  },
  {
    "name": "Permafrost Extraction",
    "cost": 8,
    "color": "Red",
    "tags": [
      "None"
    ],
    "effects": [
      "Ocean"
    ],
    "image": "images/cards/Permafrost Extraction.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Imported Hydrogen",
    "cost": 16,
    "color": "Red",
    "tags": [
      "Space",
      "Earth"
    ],
    "effects": [
      "Plant",
      "Microbe",
      "Animal",
      "Ocean"
    ],
    "image": "images/cards/Imported Hydrogen.webp",
    "requirement": "None"
  },
  {
    "name": "Fusion Power",
    "cost": 14,
    "color": "Green",
    "tags": [
      "Science",
      "Energy",
      "Building"
    ],
    "effects": [
      "Powerprod"
    ],
    "image": "images/cards/Fusion Power.webp",
    "requirement": "Tags"
  },
  {
    "name": "Nitrogen-Rich Asteroid",
    "cost": 31,
    "color": "Red",
    "tags": [
      "Space"
    ],
    "effects": [
      "Plantprod",
      "TR",
      "Temperature"
    ],
    "image": "images/cards/Nitrogen-Rich Asteroid.webp",
    "requirement": "None"
  },
  {
    "name": "Interstellar Colony Ship",
    "cost": 24,
    "color": "Red",
    "tags": [
      "Space",
      "Earth"
    ],
    "effects": [
      "VP"
    ],
    "image": "images/cards/Interstellar Colony Ship.webp",
    "requirement": "Tags"
  },
  {
    "name": "Insulation",
    "cost": 2,
    "color": "Green",
    "tags": [
      "None"
    ],
    "effects": [
      "negHeatprod",
      "MCprod"
    ],
    "image": "images/cards/Insulation.webp",
    "requirement": "None"
  },
  {
    "name": "Building Industries",
    "cost": 6,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPowerprod",
      "Steelprod"
    ],
    "image": "images/cards/Building Industries.webp",
    "requirement": "None"
  },
  {
    "name": "Research Outpost",
    "cost": 18,
    "color": "Blue",
    "tags": [
      "Science",
      "Building",
      "City"
    ],
    "effects": [
      "Reduction",
      "City"
    ],
    "image": "images/cards/Research Outpost.webp",
    "requirement": "None"
  },
  {
    "name": "Dust Seals",
    "cost": 2,
    "color": "Green",
    "tags": [
      "None"
    ],
    "effects": [
      "VP"
    ],
    "image": "images/cards/Dust Seals.webp",
    "requirement": "Oceans"
  },
  {
    "name": "Immigrant City",
    "cost": 13,
    "color": "Blue",
    "tags": [
      "Building",
      "City"
    ],
    "effects": [
      "MCprod",
      "negMCprod",
      "negPowerprod",
      "City"
    ],
    "image": "images/cards/Immigrant City.webp",
    "requirement": "None"
  },
  {
    "name": "Titanium Mine",
    "cost": 7,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Titaniumprod"
    ],
    "image": "images/cards/Titanium Mine.webp",
    "requirement": "None"
  },
  {
    "name": "Soil Factory",
    "cost": 9,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPowerprod",
      "Plantprod",
      "VP"
    ],
    "image": "images/cards/Soil Factory.webp",
    "requirement": "None"
  },
  {
    "name": "Subterranean Reservoir",
    "cost": 11,
    "color": "Red",
    "tags": [
      "None"
    ],
    "effects": [
      "Ocean"
    ],
    "image": "images/cards/Subterranean Reservoir.webp",
    "requirement": "None"
  },
  {
    "name": "Sponsors",
    "cost": 6,
    "color": "Green",
    "tags": [
      "Earth"
    ],
    "effects": [
      "MCprod"
    ],
    "image": "images/cards/Sponsors.webp",
    "requirement": "None"
  },
  {
    "name": "Rover Construction",
    "cost": 8,
    "color": "Blue",
    "tags": [
      "None"
    ],
    "effects": [
      "MC",
      "VP"
    ],
    "image": "images/cards/Rover Construction.webp",
    "requirement": "None"
  },
  {
    "name": "Fueled Generators",
    "cost": 1,
    "color": "Green",
    "tags": [
      "Energy",
      "Building"
    ],
    "effects": [
      "Powerprod",
      "negMCprod"
    ],
    "image": "images/cards/Fueled Generators.webp",
    "requirement": "None"
  },
  {
    "name": "Herbivores",
    "cost": 12,
    "color": "Blue",
    "tags": [
      "Animal"
    ],
    "effects": [
      "Animal",
      "negPlantprod",
      "VP"
    ],
    "image": "images/cards/Herbivores.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "CEO's Favorite Project",
    "cost": 1,
    "color": "Red",
    "tags": [
      "None"
    ],
    "effects": [
      "Microbe",
      "Animal",
      "Other"
    ],
    "image": "images/cards/CEO's Favorite Project.webp",
    "requirement": "None"
  },
  {
    "name": "Giant Space Mirror",
    "cost": 17,
    "color": "Green",
    "tags": [
      "Energy",
      "Space"
    ],
    "effects": [
      "Powerprod"
    ],
    "image": "images/cards/Giant Space Mirror.webp",
    "requirement": "None"
  },
  {
    "name": "Import of Advanced GHG",
    "cost": 9,
    "color": "Red",
    "tags": [
      "Space",
      "Earth"
    ],
    "effects": [
      "Heatprod"
    ],
    "image": "images/cards/Import of Advanced GHG.webp",
    "requirement": "None"
  },
  {
    "name": "Virus",
    "cost": 1,
    "color": "Red",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "negPlant",
      "Animal"
    ],
    "image": "images/cards/Virus.webp",
    "requirement": "None"
  },
  {
    "name": "Imported Nitrogen",
    "cost": 23,
    "color": "Red",
    "tags": [
      "Space",
      "Earth"
    ],
    "effects": [
      "TR",
      "Plant",
      "Microbe",
      "Animal"
    ],
    "image": "images/cards/Imported Nitrogen.webp",
    "requirement": "None"
  },
  {
    "name": "Business Contacts",
    "cost": 7,
    "color": "Red",
    "tags": [
      "Earth"
    ],
    "effects": [
      "Card",
      "Other"
    ],
    "image": "images/cards/Business Contacts.webp",
    "requirement": "None"
  },
  {
    "name": "Mass Converter",
    "cost": 8,
    "color": "Blue",
    "tags": [
      "Science",
      "Energy"
    ],
    "effects": [
      "Powerprod",
      "Reduction"
    ],
    "image": "images/cards/Mass Converter.webp",
    "requirement": "Tags"
  },
  {
    "name": "Land Claim",
    "cost": 1,
    "color": "Red",
    "tags": [
      "None"
    ],
    "effects": [
      "Other"
    ],
    "image": "images/cards/Land Claim.webp",
    "requirement": "None"
  },
  {
    "name": "Convoy from Europa",
    "cost": 15,
    "color": "Red",
    "tags": [
      "Space"
    ],
    "effects": [
      "Ocean",
      "Card"
    ],
    "image": "images/cards/Convoy from Europa.webp",
    "requirement": "None"
  },
  {
    "name": "Big Asteroid",
    "cost": 27,
    "color": "Red",
    "tags": [
      "Space"
    ],
    "effects": [
      "Titanium",
      "negPlant",
      "Temperature"
    ],
    "image": "images/cards/Big Asteroid.webp",
    "requirement": "None"
  },
  {
    "name": "Aquifer Pumping",
    "cost": 18,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "negMC",
      "negSteel",
      "Ocean"
    ],
    "image": "images/cards/Aquifer Pumping.webp",
    "requirement": "None"
  },
  {
    "name": "Magnetic Field Dome",
    "cost": 5,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPowerprod",
      "Plantprod",
      "TR"
    ],
    "image": "images/cards/Magnetic Field Dome.webp",
    "requirement": "None"
  },
  {
    "name": "Gene Repair",
    "cost": 12,
    "color": "Green",
    "tags": [
      "Science"
    ],
    "effects": [
      "MCprod",
      "VP"
    ],
    "image": "images/cards/Gene Repair.webp",
    "requirement": "Tags"
  },
  {
    "name": "Inventors' Guild",
    "cost": 9,
    "color": "Blue",
    "tags": [
      "Science"
    ],
    "effects": [
      "Other",
      "Card",
      "negMC"
    ],
    "image": "images/cards/Inventors' Guild.webp",
    "requirement": "None"
  },
  {
    "name": "Sabotage",
    "cost": 1,
    "color": "Red",
    "tags": [
      "None"
    ],
    "effects": [
      "negTitanium",
      "negSteel",
      "negMC"
    ],
    "image": "images/cards/Sabotage.webp",
    "requirement": "None"
  },
  {
    "name": "Large Convoy",
    "cost": 36,
    "color": "Red",
    "tags": [
      "Space",
      "Earth"
    ],
    "effects": [
      "Ocean",
      "Card",
      "Animal",
      "Plant",
      "VP"
    ],
    "image": "images/cards/Large Convoy.webp",
    "requirement": "None"
  },
  {
    "name": "Earth Office",
    "cost": 1,
    "color": "Blue",
    "tags": [
      "Earth"
    ],
    "effects": [
      "Reduction"
    ],
    "image": "images/cards/Earth Office.webp",
    "requirement": "None"
  },
  {
    "name": "Eos Chasma National Park",
    "cost": 16,
    "color": "Green",
    "tags": [
      "Building",
      "Plant"
    ],
    "effects": [
      "Animal",
      "Plant",
      "MCprod",
      "VP"
    ],
    "image": "images/cards/Eos Chasma National Park.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Standard Technology",
    "cost": 6,
    "color": "Blue",
    "tags": [
      "Science"
    ],
    "effects": [
      "MC"
    ],
    "image": "images/cards/Standard Technology.webp",
    "requirement": "None"
  },
  {
    "name": "Wave Power",
    "cost": 8,
    "color": "Green",
    "tags": [
      "Energy"
    ],
    "effects": [
      "Powerprod",
      "VP"
    ],
    "image": "images/cards/Wave Power.webp",
    "requirement": "Oceans"
  },
  {
    "name": "Development Center",
    "cost": 11,
    "color": "Blue",
    "tags": [
      "Building",
      "Science"
    ],
    "effects": [
      "negPower",
      "Card"
    ],
    "image": "images/cards/Development Center.webp",
    "requirement": "None"
  },
  {
    "name": "Earth Catapult",
    "cost": 23,
    "color": "Blue",
    "tags": [
      "Earth"
    ],
    "effects": [
      "VP",
      "Reduction"
    ],
    "image": "images/cards/Earth Catapult.webp",
    "requirement": "None"
  },
  {
    "name": "Underground Detonations",
    "cost": 6,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "negMC",
      "Heatprod"
    ],
    "image": "images/cards/Underground Detonations.webp",
    "requirement": "None"
  },
  {
    "name": "Business Network",
    "cost": 4,
    "color": "Blue",
    "tags": [
      "Earth"
    ],
    "effects": [
      "negMCprod",
      "Card",
      "negMC",
      "Other"
    ],
    "image": "images/cards/Business Network.webp",
    "requirement": "None"
  },
  {
    "name": "Zeppelins",
    "cost": 13,
    "color": "Green",
    "tags": [
      "None"
    ],
    "effects": [
      "MCprod",
      "VP"
    ],
    "image": "images/cards/Zeppelins.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "House Printing",
    "cost": 10,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Steelprod",
      "VP"
    ],
    "image": "images/cards/House Printing.webp",
    "requirement": "None"
  },
  {
    "name": "Methane from Titan",
    "cost": 28,
    "color": "Green",
    "tags": [
      "Space",
      "Jovian"
    ],
    "effects": [
      "Heatprod",
      "Plantprod",
      "VP"
    ],
    "image": "images/cards/Methane from Titan.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Advanced Ecosystems",
    "cost": 11,
    "color": "Green",
    "tags": [
      "Plant",
      "Microbe",
      "Animal"
    ],
    "effects": [
      "VP"
    ],
    "image": "images/cards/Advanced Ecosystems.webp",
    "requirement": "Tags"
  },
  {
    "name": "Hackers",
    "cost": 3,
    "color": "Green",
    "tags": [
      "None"
    ],
    "effects": [
      "negPowerprod",
      "MCprod",
      "negMCprod"
    ],
    "image": "images/cards/Hackers.webp",
    "requirement": "None"
  },
  {
    "name": "Greenhouses",
    "cost": 6,
    "color": "Green",
    "tags": [
      "Building",
      "Plant"
    ],
    "effects": [
      "Plant"
    ],
    "image": "images/cards/Greenhouses.webp",
    "requirement": "None"
  },
  {
    "name": "Plantation",
    "cost": 15,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "Greenery"
    ],
    "image": "images/cards/Plantation.webp",
    "requirement": "Tags"
  },
  {
    "name": "Algae",
    "cost": 10,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "Plantprod",
      "Plant"
    ],
    "image": "images/cards/Algae.webp",
    "requirement": "Oceans"
  },
  {
    "name": "Optimal Aerobraking",
    "cost": 7,
    "color": "Blue",
    "tags": [
      "Space"
    ],
    "effects": [
      "MC",
      "Heat"
    ],
    "image": "images/cards/Optimal Aerobraking.webp",
    "requirement": "None"
  },
  {
    "name": "Ecological Zone",
    "cost": 12,
    "color": "Blue",
    "tags": [
      "Plant",
      "Animal"
    ],
    "effects": [
      "Special",
      "VP",
      "Animal"
    ],
    "image": "images/cards/Ecological Zone.webp",
    "requirement": "Other"
  },
  {
    "name": "Flooding",
    "cost": 7,
    "color": "Red",
    "tags": [
      "None"
    ],
    "effects": [
      "Ocean",
      "negMC"
    ],
    "image": "images/cards/Flooding.webp",
    "requirement": "None"
  },
  {
    "name": "Immigration Shuttles",
    "cost": 31,
    "color": "Green",
    "tags": [
      "Space",
      "Earth"
    ],
    "effects": [
      "MCprod",
      "VP"
    ],
    "image": "images/cards/Immigration Shuttles.webp",
    "requirement": "None"
  },
  {
    "name": "Solar Wind Power",
    "cost": 11,
    "color": "Green",
    "tags": [
      "Space",
      "Science",
      "Energy"
    ],
    "effects": [
      "Powerprod",
      "Titanium"
    ],
    "image": "images/cards/Solar Wind Power.webp",
    "requirement": "None"
  },
  {
    "name": "Lava Flows",
    "cost": 18,
    "color": "Red",
    "tags": [
      "None"
    ],
    "effects": [
      "Temperature",
      "Special"
    ],
    "image": "images/cards/Lava Flows.webp",
    "requirement": "None"
  },
  {
    "name": "Cloud Seeding",
    "cost": 11,
    "color": "Green",
    "tags": [
      "None"
    ],
    "effects": [
      "negMCprod",
      "negHeatprod",
      "Plantprod"
    ],
    "image": "images/cards/Cloud Seeding.webp",
    "requirement": "Oceans"
  },
  {
    "name": "Great Dam",
    "cost": 12,
    "color": "Green",
    "tags": [
      "Energy",
      "Building"
    ],
    "effects": [
      "Powerprod",
      "VP"
    ],
    "image": "images/cards/Great Dam.webp",
    "requirement": "Oceans"
  },
  {
    "name": "Psychrophiles",
    "cost": 2,
    "color": "Blue",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "Microbe",
      "Other"
    ],
    "image": "images/cards/Psychrophiles.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Rad-Suits",
    "cost": 6,
    "color": "Green",
    "tags": [
      "None"
    ],
    "effects": [
      "MCprod",
      "VP"
    ],
    "image": "images/cards/Rad-Suits.webp",
    "requirement": "Other"
  },
  {
    "name": "Ironworks",
    "cost": 11,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPower",
      "Steel",
      "Oxygen"
    ],
    "image": "images/cards/Ironworks.webp",
    "requirement": "None"
  },
  {
    "name": "IO Mining Industries",
    "cost": 41,
    "color": "Green",
    "tags": [
      "Space",
      "Jovian"
    ],
    "effects": [
      "Titaniumprod",
      "MCprod",
      "VP"
    ],
    "image": "images/cards/IO Mining Industries.webp",
    "requirement": "None"
  },
  {
    "name": "Giant Ice Asteroid",
    "cost": 36,
    "color": "Red",
    "tags": [
      "Space"
    ],
    "effects": [
      "Temperature",
      "Ocean",
      "negPlant"
    ],
    "image": "images/cards/Giant Ice Asteroid.webp",
    "requirement": "None"
  },
  {
    "name": "Arctic Algae",
    "cost": 12,
    "color": "Blue",
    "tags": [
      "Plant"
    ],
    "effects": [
      "Plant"
    ],
    "image": "images/cards/Arctic Algae.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Food Factory",
    "cost": 12,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPlantprod",
      "MCprod",
      "VP"
    ],
    "image": "images/cards/Food Factory.webp",
    "requirement": "None"
  },
  {
    "name": "Asteroid",
    "cost": 14,
    "color": "Red",
    "tags": [
      "Space"
    ],
    "effects": [
      "Temperature",
      "Titanium",
      "negPlant"
    ],
    "image": "images/cards/Asteroid.webp",
    "requirement": "None"
  },
  {
    "name": "Callisto Penal Mines",
    "cost": 24,
    "color": "Green",
    "tags": [
      "Space",
      "Jovian"
    ],
    "effects": [
      "MCprod",
      "VP"
    ],
    "image": "images/cards/Callisto Penal Mines.webp",
    "requirement": "None"
  },
  {
    "name": "Nuclear Power",
    "cost": 10,
    "color": "Green",
    "tags": [
      "Energy",
      "Building"
    ],
    "effects": [
      "negMCprod",
      "Powerprod"
    ],
    "image": "images/cards/Nuclear Power.webp",
    "requirement": "None"
  },
  {
    "name": "Geothermal Power",
    "cost": 11,
    "color": "Green",
    "tags": [
      "Energy",
      "Building"
    ],
    "effects": [
      "Powerprod"
    ],
    "image": "images/cards/Geothermal Power.webp",
    "requirement": "None"
  },
  {
    "name": "Adaptation Technology",
    "cost": 12,
    "color": "Blue",
    "tags": [
      "Science"
    ],
    "effects": [
      "Other",
      "VP"
    ],
    "image": "images/cards/Adaptation Technology.webp",
    "requirement": "None"
  },
  {
    "name": "Mohole Area",
    "cost": 20,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Heatprod",
      "Special"
    ],
    "image": "images/cards/Mohole Area.webp",
    "requirement": "None"
  },
  {
    "name": "Industrial Center",
    "cost": 4,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "Special",
      "negMC",
      "Steelprod"
    ],
    "image": "images/cards/Industrial Center.webp",
    "requirement": "None"
  },
  {
    "name": "Decomposers",
    "cost": 5,
    "color": "Blue",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "VP",
      "Microbe"
    ],
    "image": "images/cards/Decomposers.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "AI Central",
    "cost": 21,
    "color": "Blue",
    "tags": [
      "Science",
      "Building"
    ],
    "effects": [
      "negPowerprod",
      "VP",
      "Card"
    ],
    "image": "images/cards/AI Central.webp",
    "requirement": "Tags"
  },
  {
    "name": "Underground City",
    "cost": 18,
    "color": "Green",
    "tags": [
      "Building",
      "City"
    ],
    "effects": [
      "negPowerprod",
      "Steelprod",
      "City"
    ],
    "image": "images/cards/Underground City.webp",
    "requirement": "None"
  },
  {
    "name": "Farming",
    "cost": 16,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "MCprod",
      "Plantprod",
      "Plant",
      "VP"
    ],
    "image": "images/cards/Farming.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Nitrite Reducing Bacteria",
    "cost": 11,
    "color": "Blue",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "Microbe",
      "TR"
    ],
    "image": "images/cards/Nitrite Reducing Bacteria.webp",
    "requirement": "None"
  },
  {
    "name": "Carbonate Processing",
    "cost": 6,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPowerprod",
      "Heatprod"
    ],
    "image": "images/cards/Carbonate Processing.webp",
    "requirement": "None"
  },
  {
    "name": "Investment Loan",
    "cost": 3,
    "color": "Red",
    "tags": [
      "Earth"
    ],
    "effects": [
      "negMCprod",
      "MC"
    ],
    "image": "images/cards/Investment Loan.webp",
    "requirement": "None"
  },
  {
    "name": "Noctis City",
    "cost": 18,
    "color": "Green",
    "tags": [
      "Building",
      "City"
    ],
    "effects": [
      "negPowerprod",
      "MCprod",
      "City"
    ],
    "image": "images/cards/Noctis City.webp",
    "requirement": "None"
  },
  {
    "name": "SF Memorial",
    "cost": 7,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "VP",
      "Card"
    ],
    "image": "images/cards/SF Memorial.webp",
    "requirement": "None"
  },
  {
    "name": "Protected Habitats",
    "cost": 5,
    "color": "Blue",
    "tags": [
      "None"
    ],
    "effects": [
      "Other"
    ],
    "image": "images/cards/Protected Habitats.webp",
    "requirement": "None"
  },
  {
    "name": "Vesta Shipyard",
    "cost": 15,
    "color": "Green",
    "tags": [
      "Space",
      "Jovian"
    ],
    "effects": [
      "Titaniumprod",
      "VP"
    ],
    "image": "images/cards/Vesta Shipyard.webp",
    "requirement": "None"
  },
  {
    "name": "Adapted Lichen",
    "cost": 9,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "Plantprod"
    ],
    "image": "images/cards/Adapted Lichen.webp",
    "requirement": "None"
  },
  {
    "name": "Phobos Space Haven",
    "cost": 25,
    "color": "Green",
    "tags": [
      "Space",
      "City"
    ],
    "effects": [
      "Titaniumprod",
      "City",
      "VP"
    ],
    "image": "images/cards/Phobos Space Haven.webp",
    "requirement": "None"
  },
  {
    "name": "Towing a Comet",
    "cost": 23,
    "color": "Red",
    "tags": [
      "Space"
    ],
    "effects": [
      "Plant",
      "Oxygen",
      "Ocean"
    ],
    "image": "images/cards/Towing a Comet.webp",
    "requirement": "None"
  },
  {
    "name": "Mine",
    "cost": 4,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Steelprod"
    ],
    "image": "images/cards/Mine.webp",
    "requirement": "None"
  },
  {
    "name": "Electro Catapult",
    "cost": 17,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPlant",
      "negSteel",
      "MC",
      "negPowerprod",
      "VP"
    ],
    "image": "images/cards/Electro Catapult.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Lunar Beam",
    "cost": 13,
    "color": "Green",
    "tags": [
      "Energy",
      "Earth"
    ],
    "effects": [
      "negMCprod",
      "Powerprod",
      "Heatprod"
    ],
    "image": "images/cards/Lunar Beam.webp",
    "requirement": "None"
  },
  {
    "name": "Domed Crater",
    "cost": 24,
    "color": "Green",
    "tags": [
      "City",
      "Building"
    ],
    "effects": [
      "Plant",
      "City",
      "negPowerprod",
      "MCprod",
      "VP"
    ],
    "image": "images/cards/Domed Crater.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Tropical Resort",
    "cost": 13,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "negHeatprod",
      "MCprod",
      "VP"
    ],
    "image": "images/cards/Tropical Resort.webp",
    "requirement": "None"
  },
  {
    "name": "Lichen",
    "cost": 7,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "Plantprod"
    ],
    "image": "images/cards/Lichen.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Magnetic Field Generators",
    "cost": 20,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPowerprod",
      "Plantprod",
      "TR"
    ],
    "image": "images/cards/Magnetic Field Generators.webp",
    "requirement": "None"
  },
  {
    "name": "Energy Saving",
    "cost": 15,
    "color": "Green",
    "tags": [
      "Energy"
    ],
    "effects": [
      "Powerprod"
    ],
    "image": "images/cards/Energy Saving.webp",
    "requirement": "None"
  },
  {
    "name": "Soletta",
    "cost": 35,
    "color": "Green",
    "tags": [
      "Space"
    ],
    "effects": [
      "Heatprod"
    ],
    "image": "images/cards/Soletta.webp",
    "requirement": "None"
  },
  {
    "name": "Deimos Down",
    "cost": 31,
    "color": "Red",
    "tags": [
      "Space"
    ],
    "effects": [
      "Steel",
      "negPlant",
      "Temperature"
    ],
    "image": "images/cards/Deimos Down.webp",
    "requirement": "None"
  },
  {
    "name": "Water Splitting Plant",
    "cost": 12,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPower",
      "Oxygen"
    ],
    "image": "images/cards/Water Splitting Plant.webp",
    "requirement": "Oceans"
  },
  {
    "name": "Black Polar Dust",
    "cost": 15,
    "color": "Green",
    "tags": [
      "None"
    ],
    "effects": [
      "negMCprod",
      "Heatprod",
      "Ocean"
    ],
    "image": "images/cards/Black Polar Dust.webp",
    "requirement": "None"
  },
  {
    "name": "Tectonic Stress Power",
    "cost": 18,
    "color": "Green",
    "tags": [
      "Energy",
      "Building"
    ],
    "effects": [
      "Powerprod",
      "VP"
    ],
    "image": "images/cards/Tectonic Stress Power.webp",
    "requirement": "Tags"
  },
  {
    "name": "Beam from a Thorium Asteroid",
    "cost": 32,
    "color": "Green",
    "tags": [
      "Space",
      "Energy",
      "Jovian"
    ],
    "effects": [
      "Heatprod",
      "Powerprod",
      "VP"
    ],
    "image": "images/cards/Beam from a Thorium Asteroid.webp",
    "requirement": "Tags"
  },
  {
    "name": "Insects",
    "cost": 9,
    "color": "Green",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "Plantprod"
    ],
    "image": "images/cards/Insects.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Technology Demonstration",
    "cost": 5,
    "color": "Red",
    "tags": [
      "Space",
      "Science"
    ],
    "effects": [
      "Card"
    ],
    "image": "images/cards/Technology Demonstration.webp",
    "requirement": "None"
  },
  {
    "name": "Mineral Deposit",
    "cost": 5,
    "color": "Red",
    "tags": [
      "None"
    ],
    "effects": [
      "Steel"
    ],
    "image": "images/cards/Mineral Deposit.webp",
    "requirement": "None"
  },
  {
    "name": "Robotic Workforce",
    "cost": 9,
    "color": "Green",
    "tags": [
      "Science"
    ],
    "effects": [
      "Other"
    ],
    "image": "images/cards/Robotic Workforce.webp",
    "requirement": "None"
  },
  {
    "name": "Predators",
    "cost": 14,
    "color": "Blue",
    "tags": [
      "Animal"
    ],
    "effects": [
      "Animal",
      "VP"
    ],
    "image": "images/cards/Predators.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Quantum Extractor",
    "cost": 13,
    "color": "Blue",
    "tags": [
      "Science",
      "Energy"
    ],
    "effects": [
      "Powerprod",
      "Reduction"
    ],
    "image": "images/cards/Quantum Extractor.webp",
    "requirement": "Tags"
  },
  {
    "name": "Power Grid",
    "cost": 18,
    "color": "Green",
    "tags": [
      "Energy"
    ],
    "effects": [
      "Powerprod"
    ],
    "image": "images/cards/Power Grid.webp",
    "requirement": "None"
  },
  {
    "name": "Lava Tube Settlement",
    "cost": 15,
    "color": "Green",
    "tags": [
      "Building",
      "City"
    ],
    "effects": [
      "negPowerprod",
      "MCprod",
      "City"
    ],
    "image": "images/cards/Lava Tube Settlement.webp",
    "requirement": "None"
  },
  {
    "name": "Hired Raiders",
    "cost": 1,
    "color": "Red",
    "tags": [
      "None"
    ],
    "effects": [
      "Steel",
      "negSteel",
      "MC",
      "negMC"
    ],
    "image": "images/cards/Hired Raiders.webp",
    "requirement": "None"
  },
  {
    "name": "Shuttles",
    "cost": 10,
    "color": "Blue",
    "tags": [
      "Space"
    ],
    "effects": [
      "negPowerprod",
      "MCprod",
      "VP",
      "Reduction"
    ],
    "image": "images/cards/Shuttles.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Colonizer Training Camp",
    "cost": 8,
    "color": "Green",
    "tags": [
      "Building",
      "Jovian"
    ],
    "effects": [
      "VP"
    ],
    "image": "images/cards/Colonizer Training Camp.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Advanced Alloys",
    "cost": 9,
    "color": "Blue",
    "tags": [
      "Science"
    ],
    "effects": [
      "Other"
    ],
    "image": "images/cards/Advanced Alloys.webp",
    "requirement": "None"
  },
  {
    "name": "Artificial Lake",
    "cost": 15,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Ocean",
      "VP"
    ],
    "image": "images/cards/Artificial Lake.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Terraforming Ganymede",
    "cost": 33,
    "color": "Green",
    "tags": [
      "Space",
      "Jovian"
    ],
    "effects": [
      "TR",
      "VP"
    ],
    "image": "images/cards/Terraforming Ganymede.webp",
    "requirement": "None"
  },
  {
    "name": "Regolith Eaters",
    "cost": 13,
    "color": "Blue",
    "tags": [
      "Science",
      "Microbe"
    ],
    "effects": [
      "Microbe",
      "Oxygen"
    ],
    "image": "images/cards/Regolith Eaters.webp",
    "requirement": "None"
  },
  {
    "name": "Heat Trappers",
    "cost": 6,
    "color": "Green",
    "tags": [
      "Energy",
      "Building"
    ],
    "effects": [
      "negHeatprod",
      "Powerprod"
    ],
    "image": "images/cards/Heat Trappers.webp",
    "requirement": "None"
  },
  {
    "name": "Nuclear Zone",
    "cost": 10,
    "color": "Green",
    "tags": [
      "Earth"
    ],
    "effects": [
      "Special",
      "Temperature"
    ],
    "image": "images/cards/Nuclear Zone.webp",
    "requirement": "None"
  },
  {
    "name": "Ganymede Colony",
    "cost": 20,
    "color": "Green",
    "tags": [
      "Jovian",
      "Space",
      "City"
    ],
    "effects": [
      "City",
      "VP"
    ],
    "image": "images/cards/Ganymede Colony.webp",
    "requirement": "None"
  },
  {
    "name": "Solar Power",
    "cost": 11,
    "color": "Green",
    "tags": [
      "Energy",
      "Building"
    ],
    "effects": [
      "Powerprod",
      "VP"
    ],
    "image": "images/cards/Solar Power.webp",
    "requirement": "None"
  },
  {
    "name": "Strip Mine",
    "cost": 25,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPowerprod",
      "Steelprod",
      "Titaniumprod",
      "Oxygen"
    ],
    "image": "images/cards/Strip Mine.webp",
    "requirement": "None"
  },
  {
    "name": "Asteroid Mining Consortium",
    "cost": 13,
    "color": "Green",
    "tags": [
      "Jovian"
    ],
    "effects": [
      "negTitaniumprod",
      "Titaniumprod",
      "VP"
    ],
    "image": "images/cards/Asteroid Mining Consortium.webp",
    "requirement": "Other"
  },
  {
    "name": "GHG Producing Bacteria",
    "cost": 8,
    "color": "Blue",
    "tags": [
      "Science",
      "Microbe"
    ],
    "effects": [
      "Microbe",
      "Temperature"
    ],
    "image": "images/cards/GHG Producing Bacteria.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Olympus Conference",
    "cost": 10,
    "color": "Blue",
    "tags": [
      "Science",
      "Building",
      "Earth"
    ],
    "effects": [
      "VP",
      "Other",
      "Card"
    ],
    "image": "images/cards/Olympus Conference.webp",
    "requirement": "None"
  },
  {
    "name": "Livestock",
    "cost": 13,
    "color": "Blue",
    "tags": [
      "Animal"
    ],
    "effects": [
      "Animal",
      "negPlantprod",
      "MCprod",
      "VP"
    ],
    "image": "images/cards/Livestock.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Anti-Gravity Technology",
    "cost": 14,
    "color": "Blue",
    "tags": [
      "Science"
    ],
    "effects": [
      "Reduction",
      "VP"
    ],
    "image": "images/cards/Anti-Gravity Technology.webp",
    "requirement": "Tags"
  },
  {
    "name": "Worms",
    "cost": 8,
    "color": "Green",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "Plantprod"
    ],
    "image": "images/cards/Worms.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Energy Tapping",
    "cost": 3,
    "color": "Green",
    "tags": [
      "Energy"
    ],
    "effects": [
      "Powerprod",
      "negPowerprod"
    ],
    "image": "images/cards/Energy Tapping.webp",
    "requirement": "None"
  },
  {
    "name": "Corporate Stronghold",
    "cost": 11,
    "color": "Green",
    "tags": [
      "Building",
      "City"
    ],
    "effects": [
      "negPowerprod",
      "MCprod",
      "City"
    ],
    "image": "images/cards/Corporate Stronghold.webp",
    "requirement": "None"
  },
  {
    "name": "Nitrophilic Moss",
    "cost": 8,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "negPlant",
      "Plantprod"
    ],
    "image": "images/cards/Nitrophilic Moss.webp",
    "requirement": "Oceans"
  },
  {
    "name": "Space Station",
    "cost": 10,
    "color": "Blue",
    "tags": [
      "Space"
    ],
    "effects": [
      "Reduction",
      "VP"
    ],
    "image": "images/cards/Space Station.webp",
    "requirement": "None"
  },
  {
    "name": "Industrial Microbes",
    "cost": 12,
    "color": "Green",
    "tags": [
      "Microbe",
      "Building"
    ],
    "effects": [
      "Steelprod",
      "Powerprod"
    ],
    "image": "images/cards/Industrial Microbes.webp",
    "requirement": "None"
  },
  {
    "name": "Artificial Photosynthesis",
    "cost": 12,
    "color": "Green",
    "tags": [
      "Science"
    ],
    "effects": [
      "Plantprod",
      "Powerprod"
    ],
    "image": "images/cards/Artificial Photosynthesis.webp",
    "requirement": "None"
  },
  {
    "name": "Pets",
    "cost": 10,
    "color": "Blue",
    "tags": [
      "Earth",
      "Animal"
    ],
    "effects": [
      "Animal",
      "Other",
      "VP"
    ],
    "image": "images/cards/Pets.webp",
    "requirement": "None"
  },
  {
    "name": "Protected Valley",
    "cost": 23,
    "color": "Green",
    "tags": [
      "Plant",
      "Building"
    ],
    "effects": [
      "MCprod",
      "Greenery"
    ],
    "image": "images/cards/Protected Valley.webp",
    "requirement": "None"
  },
  {
    "name": "Power Infrastructure",
    "cost": 4,
    "color": "Blue",
    "tags": [
      "Energy",
      "Building"
    ],
    "effects": [
      "MC",
      "negPower"
    ],
    "image": "images/cards/Power Infrastructure.webp",
    "requirement": "None"
  },
  {
    "name": "Extreme-Cold Fungus",
    "cost": 13,
    "color": "Blue",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "Plant",
      "Microbe"
    ],
    "image": "images/cards/Extreme-Cold Fungus.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Open City",
    "cost": 23,
    "color": "Green",
    "tags": [
      "Building",
      "City"
    ],
    "effects": [
      "negPowerprod",
      "MCprod",
      "Plant",
      "City",
      "VP"
    ],
    "image": "images/cards/Open City.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Breathing Filters",
    "cost": 11,
    "color": "Green",
    "tags": [
      "Science"
    ],
    "effects": [
      "VP"
    ],
    "image": "images/cards/Breathing Filters.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Research Coordination",
    "cost": 4,
    "color": "Green",
    "tags": [
      "Wild"
    ],
    "effects": [
      "None"
    ],
    "image": "images/cards/Research Coordination.webp",
    "requirement": "None"
  },
  {
    "name": "Biomass Combustors",
    "cost": 4,
    "color": "Green",
    "tags": [
      "Energy",
      "Building"
    ],
    "effects": [
      "negPlantprod",
      "Powerprod"
    ],
    "image": "images/cards/Biomass Combustors.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Mining Rights",
    "cost": 9,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Special",
      "Steelprod",
      "Titaniumprod"
    ],
    "image": "images/cards/Mining Rights.webp",
    "requirement": "None"
  },
  {
    "name": "Satellites",
    "cost": 10,
    "color": "Green",
    "tags": [
      "Space"
    ],
    "effects": [
      "MCprod"
    ],
    "image": "images/cards/Satellites.webp",
    "requirement": "None"
  },
  {
    "name": "Commercial District",
    "cost": 16,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPowerprod",
      "MCprod",
      "Special",
      "VP"
    ],
    "image": "images/cards/Commercial District.webp",
    "requirement": "None"
  },
  {
    "name": "Fish",
    "cost": 9,
    "color": "Blue",
    "tags": [
      "Animal"
    ],
    "effects": [
      "Animal",
      "negPlantprod",
      "VP"
    ],
    "image": "images/cards/Fish.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Asteroid Mining",
    "cost": 30,
    "color": "Green",
    "tags": [
      "Space",
      "Jovian"
    ],
    "effects": [
      "Titaniumprod",
      "VP"
    ],
    "image": "images/cards/Asteroid Mining.webp",
    "requirement": "None"
  },
  {
    "name": "Grass",
    "cost": 11,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "Plant",
      "Plantprod"
    ],
    "image": "images/cards/Grass.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Micro-Mills",
    "cost": 3,
    "color": "Green",
    "tags": [
      "None"
    ],
    "effects": [
      "Heatprod"
    ],
    "image": "images/cards/Micro-Mills.webp",
    "requirement": "None"
  },
  {
    "name": "Medical Lab",
    "cost": 13,
    "color": "Green",
    "tags": [
      "Science",
      "Building"
    ],
    "effects": [
      "MCprod",
      "VP"
    ],
    "image": "images/cards/Medical Lab.webp",
    "requirement": "None"
  },
  {
    "name": "Media Group",
    "cost": 6,
    "color": "Blue",
    "tags": [
      "Earth"
    ],
    "effects": [
      "MC"
    ],
    "image": "images/cards/Media Group.webp",
    "requirement": "None"
  },
  {
    "name": "Security Fleet",
    "cost": 12,
    "color": "Blue",
    "tags": [
      "Space"
    ],
    "effects": [
      "negTitanium",
      "Other",
      "VP"
    ],
    "image": "images/cards/Security Fleet.webp",
    "requirement": "None"
  },
  {
    "name": "Toll Station",
    "cost": 12,
    "color": "Green",
    "tags": [
      "Space"
    ],
    "effects": [
      "MCprod"
    ],
    "image": "images/cards/Toll Station.webp",
    "requirement": "None"
  },
  {
    "name": "Bribed Committee",
    "cost": 7,
    "color": "Red",
    "tags": [
      "Earth"
    ],
    "effects": [
      "TR"
    ],
    "image": "images/cards/Bribed Committee.webp",
    "requirement": "None"
  },
  {
    "name": "Invention Contest",
    "cost": 2,
    "color": "Red",
    "tags": [
      "Science"
    ],
    "effects": [
      "Card",
      "Other"
    ],
    "image": "images/cards/Invention Contest.webp",
    "requirement": "None"
  },
  {
    "name": "Great Escarpment Consortium",
    "cost": 6,
    "color": "Green",
    "tags": [
      "None"
    ],
    "effects": [
      "negSteelprod",
      "Steelprod"
    ],
    "image": "images/cards/Great Escarpment Consortium.webp",
    "requirement": "Other"
  },
  {
    "name": "Noctis Farming",
    "cost": 10,
    "color": "Green",
    "tags": [
      "Plant",
      "Building"
    ],
    "effects": [
      "MCprod",
      "Plant",
      "VP"
    ],
    "image": "images/cards/Noctis Farming.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Power Plant",
    "cost": 4,
    "color": "Green",
    "tags": [
      "Building",
      "Energy"
    ],
    "effects": [
      "Powerprod"
    ],
    "image": "images/cards/Power Plant.webp",
    "requirement": "None"
  },
  {
    "name": "Small Animals",
    "cost": 6,
    "color": "Blue",
    "tags": [
      "Animal"
    ],
    "effects": [
      "Animal",
      "negPlantprod",
      "VP"
    ],
    "image": "images/cards/Small Animals.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Imported GHG",
    "cost": 7,
    "color": "Red",
    "tags": [
      "Space",
      "Earth"
    ],
    "effects": [
      "negHeat",
      "Heat"
    ],
    "image": "images/cards/Imported GHG.webp",
    "requirement": "None"
  },
  {
    "name": "Special Design",
    "cost": 4,
    "color": "Red",
    "tags": [
      "Science"
    ],
    "effects": [
      "Other"
    ],
    "image": "images/cards/Special Design.webp",
    "requirement": "None"
  },
  {
    "name": "Capital",
    "cost": 26,
    "color": "Green",
    "tags": [
      "Building",
      "City"
    ],
    "effects": [
      "negPowerprod",
      "MCprod",
      "Special",
      "City",
      "VP"
    ],
    "image": "images/cards/Capital.webp",
    "requirement": "Oceans"
  },
  {
    "name": "Mining Expedition",
    "cost": 12,
    "color": "Red",
    "tags": [
      "None"
    ],
    "effects": [
      "Oxygen",
      "negPlant",
      "Steel"
    ],
    "image": "images/cards/Mining Expedition.webp",
    "requirement": "None"
  },
  {
    "name": "Acquired Company",
    "cost": 10,
    "color": "Green",
    "tags": [
      "Earth"
    ],
    "effects": [
      "MCprod"
    ],
    "image": "images/cards/Acquired Company.webp",
    "requirement": "None"
  },
  {
    "name": "Fuel Factory",
    "cost": 6,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPowerprod",
      "Titaniumprod",
      "MCprod"
    ],
    "image": "images/cards/Fuel Factory.webp",
    "requirement": "None"
  },
  {
    "name": "Search for Life",
    "cost": 3,
    "color": "Blue",
    "tags": [
      "Science"
    ],
    "effects": [
      "negMC",
      "Other",
      "VP"
    ],
    "image": "images/cards/Search for Life.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Designed Microorganisms",
    "cost": 16,
    "color": "Green",
    "tags": [
      "Science",
      "Microbe"
    ],
    "effects": [
      "Plantprod"
    ],
    "image": "images/cards/Designed Microorganisms.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Kelp Farming",
    "cost": 17,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "MCprod",
      "Plantprod",
      "Plant",
      "VP"
    ],
    "image": "images/cards/Kelp Farming.webp",
    "requirement": "Oceans"
  },
  {
    "name": "Water Import from Europa",
    "cost": 25,
    "color": "Blue",
    "tags": [
      "Space",
      "Jovian"
    ],
    "effects": [
      "VP",
      "Ocean",
      "negMC",
      "negTitanium"
    ],
    "image": "images/cards/Water Import from Europa.webp",
    "requirement": "None"
  },
  {
    "name": "Mangrove",
    "cost": 12,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "Greenery",
      "VP"
    ],
    "image": "images/cards/Mangrove.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Media Archives",
    "cost": 8,
    "color": "Green",
    "tags": [
      "Earth"
    ],
    "effects": [
      "MC"
    ],
    "image": "images/cards/Media Archives.webp",
    "requirement": "None"
  },
  {
    "name": "Ice Cap Melting",
    "cost": 5,
    "color": "Red",
    "tags": [
      "None"
    ],
    "effects": [
      "Ocean"
    ],
    "image": "images/cards/Ice Cap Melting.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Release of Inert Gases",
    "cost": 14,
    "color": "Red",
    "tags": [
      "None"
    ],
    "effects": [
      "TR"
    ],
    "image": "images/cards/Release of Inert Gases.webp",
    "requirement": "None"
  },
  {
    "name": "Restricted Area",
    "cost": 11,
    "color": "Blue",
    "tags": [
      "Science"
    ],
    "effects": [
      "Special",
      "Card",
      "negMC"
    ],
    "image": "images/cards/Restricted Area.webp",
    "requirement": "None"
  },
  {
    "name": "Viral Enhancers",
    "cost": 9,
    "color": "Blue",
    "tags": [
      "Science",
      "Microbe"
    ],
    "effects": [
      "Microbe",
      "Animal",
      "Plant"
    ],
    "image": "images/cards/Viral Enhancers.webp",
    "requirement": "None"
  },
  {
    "name": "Trees",
    "cost": 13,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "Plant",
      "Plantprod",
      "VP"
    ],
    "image": "images/cards/Trees.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Lake Marineris",
    "cost": 18,
    "color": "Green",
    "tags": [
      "None"
    ],
    "effects": [
      "Ocean",
      "VP"
    ],
    "image": "images/cards/Lake Marineris.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Ice Asteroid",
    "cost": 23,
    "color": "Red",
    "tags": [
      "Space"
    ],
    "effects": [
      "Ocean"
    ],
    "image": "images/cards/Ice Asteroid.webp",
    "requirement": "None"
  },
  {
    "name": "Physics Complex",
    "cost": 12,
    "color": "Blue",
    "tags": [
      "Building",
      "Science"
    ],
    "effects": [
      "negPower",
      "Other",
      "VP"
    ],
    "image": "images/cards/Physics Complex.webp",
    "requirement": "None"
  },
  {
    "name": "Tardigrades",
    "cost": 4,
    "color": "Blue",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "Microbe",
      "VP"
    ],
    "image": "images/cards/Tardigrades.webp",
    "requirement": "None"
  },
  {
    "name": "Natural Preserve",
    "cost": 9,
    "color": "Green",
    "tags": [
      "Science",
      "Building"
    ],
    "effects": [
      "Special",
      "MCprod",
      "VP"
    ],
    "image": "images/cards/Natural Preserve.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Moss",
    "cost": 4,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "Plantprod",
      "negPlant"
    ],
    "image": "images/cards/Moss.webp",
    "requirement": "Oceans"
  },
  {
    "name": "Martian Rails",
    "cost": 13,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPower",
      "MC"
    ],
    "image": "images/cards/Martian Rails.webp",
    "requirement": "None"
  },
  {
    "name": "GHG Factories",
    "cost": 11,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPowerprod",
      "Heatprod"
    ],
    "image": "images/cards/GHG Factories.webp",
    "requirement": "None"
  },
  {
    "name": "Research",
    "cost": 11,
    "color": "Green",
    "tags": [
      "Science",
      "Science"
    ],
    "effects": [
      "Card",
      "VP"
    ],
    "image": "images/cards/Research.webp",
    "requirement": "None"
  },
  {
    "name": "Birds",
    "cost": 10,
    "color": "Blue",
    "tags": [
      "Animal"
    ],
    "effects": [
      "negPlantprod",
      "Animal",
      "VP"
    ],
    "image": "images/cards/Birds.webp",
    "requirement": "Oxygen"
  },
  {
    "name": "Tundra Farming",
    "cost": 16,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "Plantprod",
      "Plant",
      "MCprod",
      "VP"
    ],
    "image": "images/cards/Tundra Farming.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Caretaker Contract",
    "cost": 3,
    "color": "Blue",
    "tags": [
      "None"
    ],
    "effects": [
      "negHeat",
      "TR"
    ],
    "image": "images/cards/Caretaker Contract.webp",
    "requirement": "Temperature"
  },
  {
    "name": "Ore Processor",
    "cost": 13,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "negPower",
      "Titanium",
      "Oxygen"
    ],
    "image": "images/cards/Ore Processor.webp",
    "requirement": "None"
  }
]