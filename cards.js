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
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "Powerprod"
    ],
    "image": "images/cards/Space Mirrors.webp"
  },
  {
    "name": "Comet",
    "cost": 21,
    "color": "Red",
    "tags": [
      "Space"
    ],
    "effects": [
      "Temperature",
      "Ocean",
      "Plant",
      "Plant",
      "Plant"
    ],
    "image": "images/cards/Comet.webp"
  },
  {
    "name": "Mining Area",
    "cost": 4,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Steelprod",
      "Titaniumprod",
      "Special"
    ],
    "image": "images/cards/Mining Area.webp"
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
      "Powerprod"
    ],
    "image": "images/cards/Windmills.webp"
  },
  {
    "name": "Equatorial Magnetizer",
    "cost": 11,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "Powerprod",
      "TR"
    ],
    "image": "images/cards/Equatorial Magnetizer.webp"
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
      "Powerprod",
      "MCprod",
      "MCprod",
      "City"
    ],
    "image": "images/cards/Urbanized Area.webp"
  },
  {
    "name": "Mars University",
    "cost": 8,
    "color": "Blue",
    "tags": [
      "Science",
      "Building"
    ],
    "effects": [],
    "image": "images/cards/Mars University.webp"
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
      "Powerprod"
    ],
    "image": "images/cards/Power Supply Consortium.webp"
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
    "image": "images/cards/Archaebacteria.webp"
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
    "image": "images/cards/Deep Well Heating.webp"
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
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "Steel",
      "Titaniumprod"
    ],
    "image": "images/cards/Space Elevator.webp"
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
    "image": "images/cards/Symbiotic Fungus.webp"
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
      "Powerprod",
      "MCprod",
      "MCprod",
      "MCprod",
      "City"
    ],
    "image": "images/cards/Cupola City.webp"
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
      "Plant",
      "Plantprod",
      "Plantprod"
    ],
    "image": "images/cards/Bushes.webp"
  },
  {
    "name": "Indentured Workers",
    "cost": 0,
    "color": "Red",
    "tags": [],
    "effects": [
      "Other"
    ],
    "image": "images/cards/Indentured Workers.webp"
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
      "anyMCprod"
    ],
    "image": "images/cards/Miranda Resort.webp"
  },
  {
    "name": "Lightning Harvest",
    "cost": 8,
    "color": "Green",
    "tags": [
      "Energy"
    ],
    "effects": [
      "MCprod",
      "Powerprod"
    ],
    "image": "images/cards/Lightning Harvest.webp"
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
      "MCprod",
      "Powerprod",
      "Powerprod"
    ],
    "image": "images/cards/Peroxide Power.webp"
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
      "Microbe",
      "Heatprod",
      "Heatprod",
      "Heatprod",
      "Plantprod"
    ],
    "image": "images/cards/Aerobraked Ammonia Asteroid.webp"
  },
  {
    "name": "Rad-Chem Factory",
    "cost": 8,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Powerprod",
      "TR",
      "TR"
    ],
    "image": "images/cards/Rad-Chem Factory.webp"
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
      "MCprod",
      "MCprod",
      "MCprod",
      "MCprod"
    ],
    "image": "images/cards/Space Hotels.webp"
  },
  {
    "name": "Ants",
    "cost": 9,
    "color": "Blue",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "Microbe",
      "Microbe"
    ],
    "image": "images/cards/Ants.webp"
  },
  {
    "name": "Cartel",
    "cost": 8,
    "color": "Green",
    "tags": [
      "Earth"
    ],
    "effects": [
      "anyMCprod"
    ],
    "image": "images/cards/Cartel.webp"
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
    "image": "images/cards/Heather.webp"
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
      "Card"
    ],
    "image": "images/cards/Lagrange Observatory.webp"
  },
  {
    "name": "Steelworks",
    "cost": 13,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "Power",
      "Power",
      "Power",
      "Power",
      "Steel",
      "Steel",
      "Oxygen"
    ],
    "image": "images/cards/Steelworks.webp"
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
      "Card"
    ],
    "image": "images/cards/Martian Survey.webp"
  },
  {
    "name": "Trans-Neptune Probe",
    "cost": 6,
    "color": "Green",
    "tags": [
      "Science",
      "Space"
    ],
    "effects": [],
    "image": "images/cards/Trans-Neptune Probe.webp"
  },
  {
    "name": "Local Heat Trapping",
    "cost": 1,
    "color": "Red",
    "tags": [],
    "effects": [
      "Heat",
      "Heat",
      "Heat",
      "Heat",
      "Heat",
      "Plant",
      "Plant",
      "Plant",
      "Plant",
      "Animal",
      "Animal"
    ],
    "image": "images/cards/Local Heat Trapping.webp"
  },
  {
    "name": "Permafrost Extraction",
    "cost": 8,
    "color": "Red",
    "tags": [],
    "effects": [
      "Ocean"
    ],
    "image": "images/cards/Permafrost Extraction.webp"
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
      "Ocean",
      "Plant",
      "Plant",
      "Plant",
      "Microbe",
      "Microbe",
      "Microbe",
      "Animal",
      "Animal"
    ],
    "image": "images/cards/Imported Hydrogen.webp"
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
      "Powerprod",
      "Powerprod",
      "Powerprod"
    ],
    "image": "images/cards/Fusion Power.webp"
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
      "Plantprod",
      "Plantprod",
      "Plantprod",
      "TR",
      "TR",
      "Temperature"
    ],
    "image": "images/cards/Nitrogen-Rich Asteroid.webp"
  },
  {
    "name": "Interstellar Colony Ship",
    "cost": 24,
    "color": "Red",
    "tags": [
      "Space",
      "Earth"
    ],
    "effects": [],
    "image": "images/cards/Interstellar Colony Ship.webp"
  },
  {
    "name": "Insulation",
    "cost": 2,
    "color": "Green",
    "tags": [],
    "effects": [
      "anyHeatprod",
      "anyMCprod"
    ],
    "image": "images/cards/Insulation.webp"
  },
  {
    "name": "Building Industries",
    "cost": 6,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Powerprod",
      "Steelprod",
      "Steelprod"
    ],
    "image": "images/cards/Building Industries.webp"
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
      "City"
    ],
    "image": "images/cards/Research Outpost.webp"
  },
  {
    "name": "Dust Seals",
    "cost": 2,
    "color": "Green",
    "tags": [],
    "effects": [],
    "image": "images/cards/Dust Seals.webp"
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
      "MCprod",
      "Powerprod",
      "City"
    ],
    "image": "images/cards/Immigrant City.webp"
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
    "image": "images/cards/Titanium Mine.webp"
  },
  {
    "name": "Soil Factory",
    "cost": 9,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Powerprod",
      "Plantprod"
    ],
    "image": "images/cards/Soil Factory.webp"
  },
  {
    "name": "Subterranean Reservoir",
    "cost": 11,
    "color": "Red",
    "tags": [],
    "effects": [
      "Ocean"
    ],
    "image": "images/cards/Subterranean Reservoir.webp"
  },
  {
    "name": "Sponsors",
    "cost": 6,
    "color": "Green",
    "tags": [
      "Earth"
    ],
    "effects": [
      "MCprod",
      "MCprod"
    ],
    "image": "images/cards/Sponsors.webp"
  },
  {
    "name": "Rover Construction",
    "cost": 8,
    "color": "Blue",
    "tags": [],
    "effects": [],
    "image": "images/cards/Rover Construction.webp"
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
      "MCprod",
      "Powerprod"
    ],
    "image": "images/cards/Fueled Generators.webp"
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
      "Plantprod"
    ],
    "image": "images/cards/Herbivores.webp"
  },
  {
    "name": "CEO's Favorite Project",
    "cost": 1,
    "color": "Red",
    "tags": [],
    "effects": [
      "Microbe",
      "Animal",
      "Other"
    ],
    "image": "images/cards/CEO's Favorite Project.webp"
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
      "Powerprod",
      "Powerprod",
      "Powerprod"
    ],
    "image": "images/cards/Giant Space Mirror.webp"
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
      "Heatprod",
      "Heatprod"
    ],
    "image": "images/cards/Import of Advanced GHG.webp"
  },
  {
    "name": "Virus",
    "cost": 1,
    "color": "Red",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "Animal",
      "Animal",
      "Plant",
      "Plant",
      "Plant",
      "Plant",
      "Plant"
    ],
    "image": "images/cards/Virus.webp"
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
      "Plant",
      "Plant",
      "Plant",
      "Microbe",
      "Microbe",
      "Microbe",
      "Animal",
      "Animal"
    ],
    "image": "images/cards/Imported Nitrogen.webp"
  },
  {
    "name": "Business Contacts",
    "cost": 7,
    "color": "Red",
    "tags": [
      "Earth"
    ],
    "effects": [
      "Other"
    ],
    "image": "images/cards/Business Contacts.webp"
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
      "Powerprod",
      "Powerprod",
      "Powerprod",
      "Powerprod",
      "Powerprod"
    ],
    "image": "images/cards/Mass Converter.webp"
  },
  {
    "name": "Land Claim",
    "cost": 1,
    "color": "Red",
    "tags": [],
    "effects": [
      "Other"
    ],
    "image": "images/cards/Land Claim.webp"
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
    "image": "images/cards/Convoy from Europa.webp"
  },
  {
    "name": "Big Asteroid",
    "cost": 27,
    "color": "Red",
    "tags": [
      "Space"
    ],
    "effects": [
      "Temperature",
      "Temperature",
      "Titanium",
      "Titanium",
      "Titanium",
      "Titanium",
      "Plant",
      "Plant",
      "Plant",
      "Plant"
    ],
    "image": "images/cards/Big Asteroid.webp"
  },
  {
    "name": "Aquifer Pumping",
    "cost": 18,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "Steel",
      "Steel",
      "Steel",
      "Steel",
      "Ocean"
    ],
    "image": "images/cards/Aquifer Pumping.webp"
  },
  {
    "name": "Magnetic Field Dome",
    "cost": 5,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Powerprod",
      "Powerprod",
      "Plantprod",
      "TR"
    ],
    "image": "images/cards/Magnetic Field Dome.webp"
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
      "MCprod"
    ],
    "image": "images/cards/Gene Repair.webp"
  },
  {
    "name": "Inventors' Guild",
    "cost": 9,
    "color": "Blue",
    "tags": [
      "Science"
    ],
    "effects": [
      "Other"
    ],
    "image": "images/cards/Inventors' Guild.webp"
  },
  {
    "name": "Sabotage",
    "cost": 1,
    "color": "Red",
    "tags": [],
    "effects": [
      "Titanium",
      "Titanium",
      "Titanium",
      "Steel",
      "Steel",
      "Steel",
      "Steel",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC"
    ],
    "image": "images/cards/Sabotage.webp"
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
      "Card",
      "Plant",
      "Plant",
      "Plant",
      "Plant",
      "Plant",
      "Animal",
      "Animal",
      "Animal",
      "Animal"
    ],
    "image": "images/cards/Large Convoy.webp"
  },
  {
    "name": "Earth Office",
    "cost": 1,
    "color": "Blue",
    "tags": [
      "Earth"
    ],
    "effects": [],
    "image": "images/cards/Earth Office.webp"
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
      "Plant",
      "Plant",
      "MCprod",
      "MCprod"
    ],
    "image": "images/cards/Eos Chasma National Park.webp"
  },
  {
    "name": "Standard Technology",
    "cost": 6,
    "color": "Blue",
    "tags": [
      "Science"
    ],
    "effects": [],
    "image": "images/cards/Standard Technology.webp"
  },
  {
    "name": "Wave Power",
    "cost": 8,
    "color": "Green",
    "tags": [
      "Energy"
    ],
    "effects": [
      "Powerprod"
    ],
    "image": "images/cards/Wave Power.webp"
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
      "Power",
      "Card"
    ],
    "image": "images/cards/Development Center.webp"
  },
  {
    "name": "Earth Catapult",
    "cost": 23,
    "color": "Blue",
    "tags": [
      "Earth"
    ],
    "effects": [],
    "image": "images/cards/Earth Catapult.webp"
  },
  {
    "name": "Underground Detonations",
    "cost": 6,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "Heatprod",
      "Heatprod"
    ],
    "image": "images/cards/Underground Detonations.webp"
  },
  {
    "name": "Business Network",
    "cost": 4,
    "color": "Blue",
    "tags": [
      "Earth"
    ],
    "effects": [
      "MCprod",
      "Other"
    ],
    "image": "images/cards/Business Network.webp"
  },
  {
    "name": "Zeppelins",
    "cost": 13,
    "color": "Green",
    "tags": [],
    "effects": [
      "anyMCprod"
    ],
    "image": "images/cards/Zeppelins.webp"
  },
  {
    "name": "House Printing",
    "cost": 10,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Steelprod"
    ],
    "image": "images/cards/House Printing.webp"
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
      "Heatprod",
      "Plantprod",
      "Plantprod"
    ],
    "image": "images/cards/Methane from Titan.webp"
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
    "effects": [],
    "image": "images/cards/Advanced Ecosystems.webp"
  },
  {
    "name": "Hackers",
    "cost": 3,
    "color": "Green",
    "tags": [],
    "effects": [
      "Powerprod",
      "MCprod",
      "MCprod",
      "MCprod",
      "MCprod"
    ],
    "image": "images/cards/Hackers.webp"
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
      "anyPlant"
    ],
    "image": "images/cards/Greenhouses.webp"
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
    "image": "images/cards/Plantation.webp"
  },
  {
    "name": "Algae",
    "cost": 10,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "Plant",
      "Plantprod",
      "Plantprod"
    ],
    "image": "images/cards/Algae.webp"
  },
  {
    "name": "Optimal Aerobraking",
    "cost": 7,
    "color": "Blue",
    "tags": [
      "Space"
    ],
    "effects": [],
    "image": "images/cards/Optimal Aerobraking.webp"
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
      "Special"
    ],
    "image": "images/cards/Ecological Zone.webp"
  },
  {
    "name": "Flooding",
    "cost": 7,
    "color": "Red",
    "tags": [],
    "effects": [
      "Ocean",
      "MC",
      "MC",
      "MC",
      "MC"
    ],
    "image": "images/cards/Flooding.webp"
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
      "MCprod",
      "MCprod",
      "MCprod",
      "MCprod"
    ],
    "image": "images/cards/Immigration Shuttles.webp"
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
      "Titanium",
      "Titanium"
    ],
    "image": "images/cards/Solar Wind Power.webp"
  },
  {
    "name": "Lava Flows",
    "cost": 18,
    "color": "Red",
    "tags": [],
    "effects": [
      "Temperature",
      "Temperature",
      "Special"
    ],
    "image": "images/cards/Lava Flows.webp"
  },
  {
    "name": "Cloud Seeding",
    "cost": 11,
    "color": "Green",
    "tags": [],
    "effects": [
      "MCprod",
      "Heatprod",
      "Plantprod",
      "Plantprod"
    ],
    "image": "images/cards/Cloud Seeding.webp"
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
      "Powerprod"
    ],
    "image": "images/cards/Great Dam.webp"
  },
  {
    "name": "Psychrophiles",
    "cost": 2,
    "color": "Blue",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "Microbe"
    ],
    "image": "images/cards/Psychrophiles.webp"
  },
  {
    "name": "Rad-Suits",
    "cost": 6,
    "color": "Green",
    "tags": [],
    "effects": [
      "MCprod"
    ],
    "image": "images/cards/Rad-Suits.webp"
  },
  {
    "name": "Ironworks",
    "cost": 11,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "Power",
      "Power",
      "Power",
      "Power",
      "Steel",
      "Oxygen"
    ],
    "image": "images/cards/Ironworks.webp"
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
      "Titaniumprod",
      "MCprod",
      "MCprod"
    ],
    "image": "images/cards/IO Mining Industries.webp"
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
      "Temperature",
      "Ocean",
      "Ocean",
      "Plant",
      "Plant",
      "Plant",
      "Plant",
      "Plant",
      "Plant"
    ],
    "image": "images/cards/Giant Ice Asteroid.webp"
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
    "image": "images/cards/Arctic Algae.webp"
  },
  {
    "name": "Food Factory",
    "cost": 12,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Plantprod",
      "MCprod",
      "MCprod",
      "MCprod",
      "MCprod"
    ],
    "image": "images/cards/Food Factory.webp"
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
      "Titanium",
      "Plant",
      "Plant",
      "Plant"
    ],
    "image": "images/cards/Asteroid.webp"
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
      "MCprod",
      "MCprod"
    ],
    "image": "images/cards/Callisto Penal Mines.webp"
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
      "MCprod",
      "MCprod",
      "Powerprod",
      "Powerprod",
      "Powerprod"
    ],
    "image": "images/cards/Nuclear Power.webp"
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
      "Powerprod",
      "Powerprod"
    ],
    "image": "images/cards/Geothermal Power.webp"
  },
  {
    "name": "Adaptation Technology",
    "cost": 12,
    "color": "Blue",
    "tags": [
      "Science"
    ],
    "effects": [],
    "image": "images/cards/Adaptation Technology.webp"
  },
  {
    "name": "Mohole Area",
    "cost": 20,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Special",
      "Heatprod",
      "Heatprod",
      "Heatprod",
      "Heatprod"
    ],
    "image": "images/cards/Mohole Area.webp"
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
      "Steelprod",
      "MC",
      "MC",
      "MC",
      "MC"
    ],
    "image": "images/cards/Industrial Center.webp"
  },
  {
    "name": "Decomposers",
    "cost": 5,
    "color": "Blue",
    "tags": [
      "Microbe"
    ],
    "effects": [],
    "image": "images/cards/Decomposers.webp"
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
      "Powerprod",
      "Card",
      "Card"
    ],
    "image": "images/cards/AI Central.webp"
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
      "Powerprod",
      "Powerprod",
      "Steelprod",
      "Steelprod",
      "City"
    ],
    "image": "images/cards/Underground City.webp"
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
      "MCprod",
      "Plantprod",
      "Plantprod",
      "Plant",
      "Plant"
    ],
    "image": "images/cards/Farming.webp"
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
      "Microbe",
      "Microbe",
      "TR"
    ],
    "image": "images/cards/Nitrite Reducing Bacteria.webp"
  },
  {
    "name": "Carbonate Processing",
    "cost": 6,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Powerprod",
      "Heatprod",
      "Heatprod",
      "Heatprod"
    ],
    "image": "images/cards/Carbonate Processing.webp"
  },
  {
    "name": "Investment Loan",
    "cost": 3,
    "color": "Red",
    "tags": [
      "Earth"
    ],
    "effects": [
      "MCprod",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC"
    ],
    "image": "images/cards/Investment Loan.webp"
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
      "Powerprod",
      "MCprod",
      "MCprod",
      "MCprod",
      "City"
    ],
    "image": "images/cards/Noctis City.webp"
  },
  {
    "name": "SF Memorial",
    "cost": 7,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Card"
    ],
    "image": "images/cards/SF Memorial.webp"
  },
  {
    "name": "Protected Habitats",
    "cost": 5,
    "color": "Blue",
    "tags": [],
    "effects": [],
    "image": "images/cards/Protected Habitats.webp"
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
      "Titaniumprod"
    ],
    "image": "images/cards/Vesta Shipyard.webp"
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
    "image": "images/cards/Adapted Lichen.webp"
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
      "City"
    ],
    "image": "images/cards/Phobos Space Haven.webp"
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
      "Plant",
      "Oxygen",
      "Ocean"
    ],
    "image": "images/cards/Towing a Comet.webp"
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
    "image": "images/cards/Mine.webp"
  },
  {
    "name": "Electro Catapult",
    "cost": 17,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "Plant",
      "Steel",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "Powerprod"
    ],
    "image": "images/cards/Electro Catapult.webp"
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
      "MCprod",
      "MCprod",
      "Powerprod",
      "Powerprod",
      "Heatprod",
      "Heatprod"
    ],
    "image": "images/cards/Lunar Beam.webp"
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
      "Plant",
      "Plant",
      "City",
      "Powerprod",
      "MCprod",
      "MCprod",
      "MCprod"
    ],
    "image": "images/cards/Domed Crater.webp"
  },
  {
    "name": "Tropical Resort",
    "cost": 13,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Heatprod",
      "Heatprod",
      "MCprod",
      "MCprod",
      "MCprod"
    ],
    "image": "images/cards/Tropical Resort.webp"
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
    "image": "images/cards/Lichen.webp"
  },
  {
    "name": "Magnetic Field Generators",
    "cost": 20,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Powerprod",
      "Powerprod",
      "Powerprod",
      "Powerprod",
      "Plantprod",
      "Plantprod",
      "TR",
      "TR",
      "TR"
    ],
    "image": "images/cards/Magnetic Field Generators.webp"
  },
  {
    "name": "Energy Saving",
    "cost": 15,
    "color": "Green",
    "tags": [
      "Energy"
    ],
    "effects": [
      "anyPowerprod"
    ],
    "image": "images/cards/Energy Saving.webp"
  },
  {
    "name": "Soletta",
    "cost": 35,
    "color": "Green",
    "tags": [
      "Space"
    ],
    "effects": [
      "Heatprod",
      "Heatprod",
      "Heatprod",
      "Heatprod",
      "Heatprod",
      "Heatprod",
      "Heatprod"
    ],
    "image": "images/cards/Soletta.webp"
  },
  {
    "name": "Deimos Down",
    "cost": 31,
    "color": "Red",
    "tags": [
      "Space"
    ],
    "effects": [
      "Temperature",
      "Temperature",
      "Temperature",
      "Steel",
      "Steel",
      "Steel",
      "Steel",
      "Plant",
      "Plant",
      "Plant",
      "Plant",
      "Plant",
      "Plant",
      "Plant",
      "Plant"
    ],
    "image": "images/cards/Deimos Down.webp"
  },
  {
    "name": "Water Splitting Plant",
    "cost": 12,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "Power",
      "Power",
      "Power",
      "Oxygen"
    ],
    "image": "images/cards/Water Splitting Plant.webp"
  },
  {
    "name": "Black Polar Dust",
    "cost": 15,
    "color": "Green",
    "tags": [],
    "effects": [
      "MCprod",
      "MCprod",
      "Heatprod",
      "Heatprod",
      "Heatprod",
      "Ocean"
    ],
    "image": "images/cards/Black Polar Dust.webp"
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
      "Powerprod",
      "Powerprod"
    ],
    "image": "images/cards/Tectonic Stress Power.webp"
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
      "Powerprod",
      "Powerprod",
      "Powerprod",
      "Heatprod",
      "Heatprod",
      "Heatprod"
    ],
    "image": "images/cards/Beam from a Thorium Asteroid.webp"
  },
  {
    "name": "Insects",
    "cost": 9,
    "color": "Green",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "anyPlantprod"
    ],
    "image": "images/cards/Insects.webp"
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
      "Card",
      "Card"
    ],
    "image": "images/cards/Technology Demonstration.webp"
  },
  {
    "name": "Mineral Deposit",
    "cost": 5,
    "color": "Red",
    "tags": [],
    "effects": [
      "Steel",
      "Steel",
      "Steel",
      "Steel",
      "Steel"
    ],
    "image": "images/cards/Mineral Deposit.webp"
  },
  {
    "name": "Robotic Workforce",
    "cost": 9,
    "color": "Green",
    "tags": [
      "Science"
    ],
    "effects": [
      "anyMCprod",
      "Steelprod",
      "Steelprod",
      "Titaniumprod",
      "Plantprod",
      "Plantprod",
      "Powerprod",
      "Powerprod",
      "Powerprod",
      "Powerprod",
      "Heatprod",
      "Heatprod",
      "Heatprod",
      "Heatprod"
    ],
    "image": "images/cards/Robotic Workforce.webp"
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
      "Animal"
    ],
    "image": "images/cards/Predators.webp"
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
      "Powerprod",
      "Powerprod",
      "Powerprod"
    ],
    "image": "images/cards/Quantum Extractor.webp"
  },
  {
    "name": "Power Grid",
    "cost": 18,
    "color": "Green",
    "tags": [
      "Energy"
    ],
    "effects": [
      "anyPowerprod"
    ],
    "image": "images/cards/Power Grid.webp"
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
      "Powerprod",
      "MCprod",
      "MCprod",
      "City"
    ],
    "image": "images/cards/Lava Tube Settlement.webp"
  },
  {
    "name": "Hired Raiders",
    "cost": 1,
    "color": "Red",
    "tags": [],
    "effects": [
      "Steel",
      "Steel",
      "Steel",
      "Steel",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC"
    ],
    "image": "images/cards/Hired Raiders.webp"
  },
  {
    "name": "Shuttles",
    "cost": 10,
    "color": "Blue",
    "tags": [
      "Space"
    ],
    "effects": [
      "Powerprod",
      "MCprod",
      "MCprod"
    ],
    "image": "images/cards/Shuttles.webp"
  },
  {
    "name": "Colonizer Training Camp",
    "cost": 8,
    "color": "Green",
    "tags": [
      "Building",
      "Jovian"
    ],
    "effects": [],
    "image": "images/cards/Colonizer Training Camp.webp"
  },
  {
    "name": "Advanced Alloys",
    "cost": 9,
    "color": "Blue",
    "tags": [
      "Science"
    ],
    "effects": [],
    "image": "images/cards/Advanced Alloys.webp"
  },
  {
    "name": "Artificial Lake",
    "cost": 15,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Ocean"
    ],
    "image": "images/cards/Artificial Lake.webp"
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
      "anyTR"
    ],
    "image": "images/cards/Terraforming Ganymede.webp"
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
      "Microbe",
      "Oxygen"
    ],
    "image": "images/cards/Regolith Eaters.webp"
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
      "Heatprod",
      "Heatprod",
      "Powerprod"
    ],
    "image": "images/cards/Heat Trappers.webp"
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
      "Temperature",
      "Temperature"
    ],
    "image": "images/cards/Nuclear Zone.webp"
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
      "City"
    ],
    "image": "images/cards/Ganymede Colony.webp"
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
      "Powerprod"
    ],
    "image": "images/cards/Solar Power.webp"
  },
  {
    "name": "Strip Mine",
    "cost": 25,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Powerprod",
      "Powerprod",
      "Steelprod",
      "Steelprod",
      "Titaniumprod",
      "Oxygen",
      "Oxygen"
    ],
    "image": "images/cards/Strip Mine.webp"
  },
  {
    "name": "Asteroid Mining Consortium",
    "cost": 13,
    "color": "Green",
    "tags": [
      "Jovian"
    ],
    "effects": [
      "Titaniumprod",
      "Titaniumprod"
    ],
    "image": "images/cards/Asteroid Mining Consortium.webp"
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
      "Microbe",
      "Temperature"
    ],
    "image": "images/cards/GHG Producing Bacteria.webp"
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
    "effects": [],
    "image": "images/cards/Olympus Conference.webp"
  },
  {
    "name": "Livestock",
    "cost": 13,
    "color": "Blue",
    "tags": [
      "Animal"
    ],
    "effects": [
      "Plantprod",
      "MCprod",
      "MCprod",
      "Animal"
    ],
    "image": "images/cards/Livestock.webp"
  },
  {
    "name": "Anti-Gravity Technology",
    "cost": 14,
    "color": "Blue",
    "tags": [
      "Science"
    ],
    "effects": [],
    "image": "images/cards/Anti-Gravity Technology.webp"
  },
  {
    "name": "Worms",
    "cost": 8,
    "color": "Green",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "anyPlantprod"
    ],
    "image": "images/cards/Worms.webp"
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
      "Powerprod"
    ],
    "image": "images/cards/Energy Tapping.webp"
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
      "Powerprod",
      "MCprod",
      "MCprod",
      "MCprod",
      "City"
    ],
    "image": "images/cards/Corporate Stronghold.webp"
  },
  {
    "name": "Nitrophilic Moss",
    "cost": 8,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "Plant",
      "Plant",
      "Plantprod",
      "Plantprod"
    ],
    "image": "images/cards/Nitrophilic Moss.webp"
  },
  {
    "name": "Space Station",
    "cost": 10,
    "color": "Blue",
    "tags": [
      "Space"
    ],
    "effects": [],
    "image": "images/cards/Space Station.webp"
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
      "Powerprod",
      "Steelprod"
    ],
    "image": "images/cards/Industrial Microbes.webp"
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
      "Powerprod",
      "Powerprod"
    ],
    "image": "images/cards/Artificial Photosynthesis.webp"
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
      "Animal"
    ],
    "image": "images/cards/Pets.webp"
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
      "MCprod",
      "Greenery"
    ],
    "image": "images/cards/Protected Valley.webp"
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
      "anyMC",
      "anyPower"
    ],
    "image": "images/cards/Power Infrastructure.webp"
  },
  {
    "name": "Extreme-Cold Fungus",
    "cost": 13,
    "color": "Blue",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "Microbe",
      "Microbe",
      "Plant"
    ],
    "image": "images/cards/Extreme-Cold Fungus.webp"
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
      "MCprod",
      "MCprod",
      "MCprod",
      "MCprod",
      "Powerprod",
      "Plant",
      "Plant",
      "City"
    ],
    "image": "images/cards/Open City.webp"
  },
  {
    "name": "Breathing Filters",
    "cost": 11,
    "color": "Green",
    "tags": [
      "Science"
    ],
    "effects": [],
    "image": "images/cards/Breathing Filters.webp"
  },
  {
    "name": "Research Coordination",
    "cost": 4,
    "color": "Green",
    "tags": [
      "Wild"
    ],
    "effects": [],
    "image": "images/cards/Research Coordination.webp"
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
      "Plantprod",
      "Powerprod",
      "Powerprod"
    ],
    "image": "images/cards/Biomass Combustors.webp"
  },
  {
    "name": "Mining Rights",
    "cost": 9,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Steelprod",
      "Titaniumprod",
      "Special"
    ],
    "image": "images/cards/Mining Rights.webp"
  },
  {
    "name": "Satellites",
    "cost": 10,
    "color": "Green",
    "tags": [
      "Space"
    ],
    "effects": [
      "anyMCprod"
    ],
    "image": "images/cards/Satellites.webp"
  },
  {
    "name": "Commercial District",
    "cost": 16,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Powerprod",
      "MCprod",
      "MCprod",
      "MCprod",
      "MCprod",
      "Special"
    ],
    "image": "images/cards/Commercial District.webp"
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
      "Plantprod"
    ],
    "image": "images/cards/Fish.webp"
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
      "Titaniumprod"
    ],
    "image": "images/cards/Asteroid Mining.webp"
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
      "Plant",
      "Plant",
      "Plantprod"
    ],
    "image": "images/cards/Grass.webp"
  },
  {
    "name": "Micro-Mills",
    "cost": 3,
    "color": "Green",
    "tags": [],
    "effects": [
      "Heatprod"
    ],
    "image": "images/cards/Micro-Mills.webp"
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
      "anyMCprod"
    ],
    "image": "images/cards/Medical Lab.webp"
  },
  {
    "name": "Media Group",
    "cost": 6,
    "color": "Blue",
    "tags": [
      "Earth"
    ],
    "effects": [],
    "image": "images/cards/Media Group.webp"
  },
  {
    "name": "Security Fleet",
    "cost": 12,
    "color": "Blue",
    "tags": [
      "Space"
    ],
    "effects": [
      "Titanium",
      "Other"
    ],
    "image": "images/cards/Security Fleet.webp"
  },
  {
    "name": "Toll Station",
    "cost": 12,
    "color": "Green",
    "tags": [
      "Space"
    ],
    "effects": [
      "anyMCprod"
    ],
    "image": "images/cards/Toll Station.webp"
  },
  {
    "name": "Bribed Committee",
    "cost": 7,
    "color": "Red",
    "tags": [
      "Earth"
    ],
    "effects": [
      "TR",
      "TR"
    ],
    "image": "images/cards/Bribed Committee.webp"
  },
  {
    "name": "Invention Contest",
    "cost": 2,
    "color": "Red",
    "tags": [
      "Science"
    ],
    "effects": [
      "Other"
    ],
    "image": "images/cards/Invention Contest.webp"
  },
  {
    "name": "Great Escarpment Consortium",
    "cost": 6,
    "color": "Green",
    "tags": [],
    "effects": [
      "Steelprod",
      "Steelprod"
    ],
    "image": "images/cards/Great Escarpment Consortium.webp"
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
      "Plant"
    ],
    "image": "images/cards/Noctis Farming.webp"
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
    "image": "images/cards/Power Plant.webp"
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
      "Plantprod"
    ],
    "image": "images/cards/Small Animals.webp"
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
      "Heatprod",
      "Heat",
      "Heat",
      "Heat"
    ],
    "image": "images/cards/Imported GHG.webp"
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
    "image": "images/cards/Special Design.webp"
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
      "Powerprod",
      "Powerprod",
      "MCprod",
      "MCprod",
      "MCprod",
      "MCprod",
      "MCprod",
      "Special",
      "City"
    ],
    "image": "images/cards/Capital.webp"
  },
  {
    "name": "Mining Expedition",
    "cost": 12,
    "color": "Red",
    "tags": [],
    "effects": [
      "Oxygen",
      "Plant",
      "Plant",
      "Steel",
      "Steel"
    ],
    "image": "images/cards/Mining Expedition.webp"
  },
  {
    "name": "Acquired Company",
    "cost": 10,
    "color": "Green",
    "tags": [
      "Earth"
    ],
    "effects": [
      "MCprod",
      "MCprod",
      "MCprod"
    ],
    "image": "images/cards/Acquired Company.webp"
  },
  {
    "name": "Fuel Factory",
    "cost": 6,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Powerprod",
      "MCprod",
      "Titaniumprod"
    ],
    "image": "images/cards/Fuel Factory.webp"
  },
  {
    "name": "Search for Life",
    "cost": 3,
    "color": "Blue",
    "tags": [
      "Science"
    ],
    "effects": [
      "MC",
      "Other"
    ],
    "image": "images/cards/Search for Life.webp"
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
      "Plantprod",
      "Plantprod"
    ],
    "image": "images/cards/Designed Microorganisms.webp"
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
      "MCprod",
      "Plantprod",
      "Plantprod",
      "Plantprod",
      "Plant",
      "Plant"
    ],
    "image": "images/cards/Kelp Farming.webp"
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
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "MC",
      "Titanium",
      "Titanium",
      "Titanium",
      "Titanium",
      "Ocean"
    ],
    "image": "images/cards/Water Import from Europa.webp"
  },
  {
    "name": "Mangrove",
    "cost": 12,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "Greenery"
    ],
    "image": "images/cards/Mangrove.webp"
  },
  {
    "name": "Media Archives",
    "cost": 8,
    "color": "Green",
    "tags": [
      "Earth"
    ],
    "effects": [
      "anyMC"
    ],
    "image": "images/cards/Media Archives.webp"
  },
  {
    "name": "Ice Cap Melting",
    "cost": 5,
    "color": "Red",
    "tags": [],
    "effects": [
      "Ocean"
    ],
    "image": "images/cards/Ice Cap Melting.webp"
  },
  {
    "name": "Release of Inert Gases",
    "cost": 14,
    "color": "Red",
    "tags": [],
    "effects": [
      "TR",
      "TR"
    ],
    "image": "images/cards/Release of Inert Gases.webp"
  },
  {
    "name": "Restricted Area",
    "cost": 11,
    "color": "Blue",
    "tags": [
      "Science"
    ],
    "effects": [
      "MC",
      "MC",
      "Card",
      "Special"
    ],
    "image": "images/cards/Restricted Area.webp"
  },
  {
    "name": "Viral Enhancers",
    "cost": 9,
    "color": "Blue",
    "tags": [
      "Science",
      "Microbe"
    ],
    "effects": [],
    "image": "images/cards/Viral Enhancers.webp"
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
      "Plantprod",
      "Plantprod"
    ],
    "image": "images/cards/Trees.webp"
  },
  {
    "name": "Lake Marineris",
    "cost": 18,
    "color": "Green",
    "tags": [],
    "effects": [
      "Ocean",
      "Ocean"
    ],
    "image": "images/cards/Lake Marineris.webp"
  },
  {
    "name": "Ice Asteroid",
    "cost": 23,
    "color": "Red",
    "tags": [
      "Space"
    ],
    "effects": [
      "Ocean",
      "Ocean"
    ],
    "image": "images/cards/Ice Asteroid.webp"
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
      "Power",
      "Power",
      "Power",
      "Power",
      "Power",
      "Power",
      "Other"
    ],
    "image": "images/cards/Physics Complex.webp"
  },
  {
    "name": "Tardigrades",
    "cost": 4,
    "color": "Blue",
    "tags": [
      "Microbe"
    ],
    "effects": [
      "Microbe"
    ],
    "image": "images/cards/Tardigrades.webp"
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
      "MCprod"
    ],
    "image": "images/cards/Natural Preserve.webp"
  },
  {
    "name": "Moss",
    "cost": 4,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "Plant",
      "Plantprod"
    ],
    "image": "images/cards/Moss.webp"
  },
  {
    "name": "Martian Rails",
    "cost": 13,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "Power",
      "anyMC"
    ],
    "image": "images/cards/Martian Rails.webp"
  },
  {
    "name": "GHG Factories",
    "cost": 11,
    "color": "Green",
    "tags": [
      "Building"
    ],
    "effects": [
      "Powerprod",
      "Heatprod",
      "Heatprod",
      "Heatprod",
      "Heatprod"
    ],
    "image": "images/cards/GHG Factories.webp"
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
      "Card"
    ],
    "image": "images/cards/Research.webp"
  },
  {
    "name": "Birds",
    "cost": 10,
    "color": "Blue",
    "tags": [
      "Animal"
    ],
    "effects": [
      "Animal",
      "Plantprod",
      "Plantprod"
    ],
    "image": "images/cards/Birds.webp"
  },
  {
    "name": "Tundra Farming",
    "cost": 16,
    "color": "Green",
    "tags": [
      "Plant"
    ],
    "effects": [
      "Plant",
      "Plantprod",
      "MCprod",
      "MCprod"
    ],
    "image": "images/cards/Tundra Farming.webp"
  },
  {
    "name": "Caretaker Contract",
    "cost": 3,
    "color": "Blue",
    "tags": [],
    "effects": [
      "Heat",
      "Heat",
      "Heat",
      "Heat",
      "Heat",
      "Heat",
      "Heat",
      "Heat",
      "TR"
    ],
    "image": "images/cards/Caretaker Contract.webp"
  },
  {
    "name": "Ore Processor",
    "cost": 13,
    "color": "Blue",
    "tags": [
      "Building"
    ],
    "effects": [
      "Power",
      "Power",
      "Power",
      "Titanium",
      "Oxygen"
    ],
    "image": "images/cards/Ore Processor.webp"
  }
]