const words = [
    {
      "word": "Afghanistan",
      "hint": "Known as the 'Graveyard of Empires'"
    },
    {
      "word": "Albania",
      "hint": "Home to bunkers built during the Cold War"
    },
    {
      "word": "Algeria",
      "hint": "Largest country in Africa by land area"
    },
    {
      "word": "Andorra",
      "hint": "A microstate located between France and Spain"
    }
    ,
    {
      "word": "Angola",
      "hint": "Major producer of oil and diamonds"
    },
    {
      "word": "Antigua and Barbuda",
      "hint": "Two islands in the Caribbean Sea"
    },
    {
      "word": "Argentina",
      "hint": "Second largest country in South America"
    },
    {
      "word": "Armenia",
      "hint": "One of the oldest wine producing countries"
    },
    {
      "word": "Australia",
      "hint": "Known for its Great Barrier Reef"
    },
    {
      "word": "Austria",
      "hint": "Birthplace of classical composers Mozart and Haydn"
    },
    {
      "word": "Azerbaijan",
      "hint": "Located at the crossroads of Eastern Europe and Western Asia"
    },
    {
      "word": "Bahamas",
      "hint": "Archipelago of islands in the Atlantic Ocean"
    },
    {
      "word": "Bahrain",
      "hint": "An archipelago in the Persian Gulf"
    },
    {
      "word": "Bangladesh",
      "hint": "Home to the Sundarbans mangrove forest"
    },
    {
      "word": "Barbados",
      "hint": "Known for its white sandy beaches"
    },
    {
      "word": "Belarus",
      "hint": "Often referred to as Europe's last dictatorship"
    },
    {
      "word": "Belgium",
      "hint": "Famous for its chocolates, waffles, and beers"
    },
    {
      "word": "Belize",
      "hint": "Home to the ancient Maya ruins of Caracol"
    },
    {
      "word": "Benin",
      "hint": "Birthplace of the voodoo religion"
    },
    {
      "word": "Bhutan",
      "hint": "Known for its concept of Gross National Happiness"
    },
    {
      "word": "Bolivia",
      "hint": "Landlocked country in South America"
    },
    {
      "word": "Bosnia and Herzegovina",
      "hint": "Former part of Yugoslavia"
    },
    {
      "word": "Botswana",
      "hint": "Known for its wildlife and diamond mining"
    },
    {
      "word": "Brazil",
      "hint": "Famous for its Carnival festival"
    },
    {
      "word": "Brunei",
      "hint": "Located on the island of Borneo"
    },
    {
      "word": "Bulgaria",
      "hint": "Home to ancient Thracian tombs and Roman ruins"
    },
    {
      "word": "Burkina Faso",
      "hint": "Formerly known as Upper Volta"
    },
    {
      "word": "Burundi",
      "hint": "Landlocked country in East Africa"
    },
    {
      "word": "Cabo Verde",
      "hint": "A group of islands in the Atlantic Ocean"
    },
    {
      "word": "Cambodia",
      "hint": "Home to the Angkor Wat temple complex"
    },
    {
      "word": "Cameroon",
      "hint": "Known for its diverse culture and wildlife"
    },
    {
      "word": "Canada",
      "hint": "Has the longest coastline in the world"
    },
    {
      "word": "Central African Republic",
      "hint": "Landlocked country in Central Africa"
    },
    {
      "word": "Chad",
      "hint": "Located in north-central Africa"
    },
    {
      "word": "Chile",
      "hint": "Longest north-south country in the world"
    },
    {
      "word": "China",
      "hint": "Most populous country in the world"
    },
    {
      "word": "Colombia",
      "hint": "Famous for its coffee and emeralds"
    },
    {
      "word": "Comoros",
      "hint": "Archipelago in the Indian Ocean"
    },
    {
      "word": "Congo (Congo-Brazzaville)",
      "hint": "Located in Central Africa"
    },
    {
      "word": "Costa Rica",
      "hint": "Known for its biodiversity and eco-tourism"
    },
    {
      "word": "Croatia",
      "hint": "Home to the Dalmatian coast and islands"
    },
    {
      "word": "Cuba",
      "hint": "Largest island in the Caribbean"
    },
    {
      "word": "Cyprus",
      "hint": "Eastern Mediterranean island nation"
    },
    {
      "word": "Czech Republic",
      "hint": "Famous for its beer and medieval architecture"
    },
    {
      "word": "Denmark",
      "hint": "Home to the famous author Hans Christian Andersen"
    },
    {
      "word": "Djibouti",
      "hint": "Located in the Horn of Africa"
    },
    {
      "word": "Dominica",
      "hint": "Known as the 'Nature Isle of the Caribbean'"
    },
    {
      "word": "Dominican Republic",
      "hint": "Shares the island of Hispaniola with Haiti"
    },
    {
      "word": "Ecuador",
      "hint": "Named after the equator which runs through it"
    },
    {
      "word": "Egypt",
      "hint": "Home to the ancient pyramids"
    },
    {
      "word": "El Salvador",
      "hint": "Smallest and most densely populated country in Central America"
    },
    {
      "word": "Equatorial Guinea",
      "hint": "Located on the west coast of Central Africa"
    },
    {
      "word": "Eritrea",
      "hint": "Located in the Horn of Africa"
    },
    {
      "word": "Estonia",
      "hint": "Known for its digital innovations"
    },
    {
      "word": "Eswatini",
      "hint": "Formerly known as Swaziland"
    },
    {
      "word": "Ethiopia",
      "hint": "One of the oldest countries in the world"
    },
    {
      "word": "Fiji",
      "hint": "Archipelago of islands in the South Pacific Ocean"
    },
    {
      "word": "Finland",
      "hint": "Land of a thousand lakes"
    },
    {
      "word": "France",
      "hint": "Known for its fashion, cuisine, and art"
    },
    {
      "word": "Gabon",
      "hint": "Known for its rainforests and biodiversity"
    },
    {
      "word": "Gambia",
      "hint": "Smallest country in mainland Africa"
    },
    {
      "word": "Georgia",
      "hint": "Located at the intersection of Europe and Asia"
    },
    {
      "word": "Germany",
      "hint": "Largest economy in Europe"
    },
    {
      "word": "Ghana",
      "hint": "First country in sub-Saharan Africa to gain independence"
    },
    {
      "word": "Greece",
      "hint": "Known as the cradle of Western civilization"
    },
    {
      "word": "Grenada",
      "hint": "Known as the 'Spice Isle'"
    },
    {
      "word": "Guatemala",
      "hint": "Home to ancient Maya ruins"
    },
    {
      "word": "Guinea",
      "hint": "Located in West Africa"
    },
    {
      "word": "Guinea Bissau",
      "hint": "Located on the west coast of Africa"
    },
    {
      "word": "Guyana",
      "hint": "Only English-speaking country in South America"
    },
    {
      "word": "Haiti",
      "hint": "Second oldest independent nation in the Western Hemisphere"
    },
    {
      "word": "Honduras",
      "hint": "Located in Central America"
    },
    {
      "word": "Hungary",
      "hint": "Known for its thermal springs and spas"
    },
    {
      "word": "Iceland",
      "hint": "Known as the 'Land of Fire and Ice'"
    },
    {
      "word": "India",
      "hint": "Largest democracy in the world"
    },
    {
      "word": "Indonesia",
      "hint": "Largest island country in the world"
    },
    {
      "word": "Iran",
      "hint": "Formerly known as Persia"
    },
    {
      "word": "Iraq",
      "hint": "Known as the 'Cradle of Civilization'"
    },
    {
      "word": "Ireland",
      "hint": "Famous for its lush green landscapes"
    },
    {
      "word": "Israel",
      "hint": "Located in the Middle East"
    },
    {
      "word": "Italy",
      "hint": "Known for its art, history, and cuisine"
    },
    {
      "word": "Jamaica",
      "hint": "Home of reggae music and Usain Bolt"
    },
    {
      "word": "Japan",
      "hint": "Land of the Rising Sun"
    },
    {
      "word": "Jordan",
      "hint": "Home to the ancient city of Petra"
    },
    {
      "word": "Kazakhstan",
      "hint": "Largest landlocked country in the world"
    },
    {
      "word": "Kenya",
      "hint": "Famous for its wildlife and safaris"
    },
    {
      "word": "Kiribati",
      "hint": "A group of islands in the Pacific Ocean"
    },
    {
      "word": "Kuwait",
      "hint": "Located at the tip of the Persian Gulf"
    },
    {
      "word": "Kyrgyzstan",
      "hint": "Landlocked country in Central Asia"
    },
    {
      "word": "Laos",
      "hint": "Landlocked country in Southeast Asia"
    },
    {
      "word": "Latvia",
      "hint": "Known for its beautiful Baltic coastline"
    },
    {
      "word": "Lebanon",
      "hint": "Known for its cedar trees and cuisine"
    },
    {
      "word": "Lesotho",
      "hint": "Landlocked country surrounded by South Africa"
    },
    {
      "word": "Liberia",
      "hint": "Founded by freed American slaves"
    },
    {
      "word": "Libya",
      "hint": "Located in North Africa"
    },
    {
      "word": "Liechtenstein",
      "hint": "A microstate located between Austria and Switzerland"
    },
    {
      "word": "Lithuania",
      "hint": "Formerly part of the Soviet Union"
    },
    {
      "word": "Luxembourg",
      "hint": "One of the smallest countries in Europe"
    },
    {
      "word": "Madagascar",
      "hint": "Known for its unique wildlife"
    },
    {
      "word": "Malawi",
      "hint": "Known as the 'Warm Heart of Africa'"
    },
    {
      "word": "Malaysia",
      "hint": "Known for its tropical rainforests and beaches"
    },
    {
      "word": "Maldives",
      "hint": "Archipelago of islands in the Indian Ocean"
    },
    {
      "word": "Mali",
      "hint": "Home to the ancient city of Timbuktu"
    },
    {
      "word": "Malta",
      "hint": "Located in the Mediterranean Sea"
    },
    {
      "word": "Marshall Islands",
      "hint": "A group of islands in the Pacific Ocean"
    },
    {
      "word": "Mauritania",
      "hint": "Located in Northwest Africa"
    },
    {
      "word": "Mauritius",
      "hint": "Known for its beaches, lagoons, and reefs"
    },
    {
      "word": "Mexico",
      "hint": "Known for its ancient civilizations and cuisine"
    },
    {
      "word": "Micronesia",
      "hint": "A group of islands in the Pacific Ocean"
    },
    {
      "word": "Moldova",
      "hint": "Landlocked country in Eastern Europe"
    },
    {
      "word": "Monaco",
      "hint": "Smallest country with a coastline"
    },
    {
      "word": "Mongolia",
      "hint": "Known for its nomadic culture and vast steppes"
    },
    {
      "word": "Montenegro",
      "hint": "Located in the Balkans"
    },
    {
      "word": "Morocco",
      "hint": "Known for its vibrant cities and souks"
    },
    {
      "word": "Mozambique",
      "hint": "Located on the east coast of Africa"
    },
    {
      "word": "Myanmar",
      "hint": "Formerly known as Burma"
    },
    {
      "word": "Namibia",
      "hint": "Known for its desert landscapes and wildlife"
    },
    {
      "word": "Nauru",
      "hint": "Smallest island country in the world"
    },
    {
      "word": "Nepal",
      "hint": "Home to Mount Everest"
    },
    {
      "word": "Netherlands",
      "hint": "Known for its windmills, tulips, and canals"
    },
    {
      "word": "New Zealand",
      "hint": "Known for its stunning landscapes and Maori culture"
    },
    {
      "word": "Nicaragua",
      "hint": "Located in Central America"
    },
    {
      "word": "Niger",
      "hint": "Located in West Africa"
    },
    {
      "word": "Nigeria",
      "hint": "Most populous country in Africa"
    },
    {
      "word": "North Korea",
      "hint": "Known for its secretive regime"
    },
    {
      "word": "North Macedonia",
      "hint": "Formerly part of Yugoslavia"
    },
    {
      "word": "Norway",
      "hint": "Known for its fjords and Northern Lights"
    },
    {
      "word": "Oman",
      "hint": "Located on the southeastern coast of the Arabian Peninsula"
    },
    {
      "word": "Pakistan",
      "hint": "Home to the world's second highest peak, K2"
    },
    {
      "word": "Palau",
      "hint": "Archipelago of islands in the Pacific Ocean"
    },
    {
      "word": "Palestine",
      "hint": "Historically known as the Holy Land"
    },
    {
      "word": "Panama",
      "hint": "Known for its canal linking the Atlantic and Pacific Oceans"
    },
    {
      "word": "Papua New Guinea",
      "hint": "Located on the eastern half of the island of New Guinea"
    },
    {
      "word": "Paraguay",
      "hint": "Landlocked country in South America"
    },
    {
      "word": "Peru",
      "hint": "Home to Machu Picchu and the Inca Empire"
    },
    {
      "word": "Philippines",
      "hint": "Archipelago of islands in Southeast Asia"
    },
    {
      "word": "Poland",
      "hint": "Known for its rich history and resilient spirit"
    },
    {
      "word": "Portugal",
      "hint": "Known for its explorers and Port wine"
    },
    {
      "word": "Qatar",
      "hint": "Located on the northeastern coast of the Arabian Peninsula"
    },
    {
      "word": "Romania",
      "hint": "Home to the legend of Dracula"
    },
    {
      "word": "Russia",
      "hint": "Largest country in the world by land area"
    },
    {
      "word": "Rwanda",
      "hint": "Known for its recovery since the genocide in 1994"
    },
    {
      "word": "Saint Kitts and Nevis",
      "hint": "Two islands in the Caribbean Sea"
    },
    {
      "word": "Saint Lucia",
      "hint": "Known for its volcanic beaches and reef-diving sites"
    },
    {
      "word": "Saint Vincent and the Grenadines",
      "hint": "Archipelago of islands in the Caribbean Sea"
    },
    {
      "word": "Samoa",
      "hint": "Archipelago of islands in the South Pacific Ocean"
    },
    {
      "word": "San Marino",
      "hint": "One of the world's oldest republics"
    },
    {
      "word": "Sao Tome and Principe",
      "hint": "Two islands in the Gulf of Guinea"
    },
    {
      "word": "Saudi Arabia",
      "hint": "Known for its vast deserts and oil reserves"
    },
    {
      "word": "Senegal",
      "hint": "Known for its music and culture"
    },
    {
      "word": "Serbia",
      "hint": "Located in the Balkans"
    },
    {
      "word": "Seychelles",
      "hint": "Archipelago of islands in the Indian Ocean"
    },
    {
      "word": "Sierra Leone",
      "hint": "Known for its diamonds and wildlife"
    },
    {
      "word": "Singapore",
      "hint": "City-state known for its cleanliness and gardens"
    },
    {
      "word": "Slovakia",
      "hint": "Formerly part of Czechoslovakia"
    },
    {
      "word": "Slovenia",
      "hint": "Known for its mountains and lakes"
    },
    {
      "word": "Solomon Islands",
      "hint": "Archipelago of islands in the Pacific Ocean"
    },
    {
      "word": "Somalia",
      "hint": "Located in the Horn of Africa"
    },
    {
      "word": "South Africa",
      "hint": "Known for its diversity, wildlife, and wine"
    },
    {
      "word": "South Korea",
      "hint": "Highly developed country in East Asia"
    },
    {
      "word": "South Sudan",
      "hint": "Newest country in the world"
    },
    {
      "word": "Spain",
      "hint": "Known for its siestas, fiestas, and paella"
    },
    {
      "word": "Sri Lanka",
      "hint": "Known for its tea plantations and beaches"
    },
    {
      "word": "Sudan",
      "hint": "Largest country in Africa by land area"
    },
    {
      "word": "Suriname",
      "hint": "Only Dutch-speaking country in South America"
    },
    {
      "word": "Sweden",
      "hint": "Known for its innovation and welfare state"
    },
    {
      "word": "Switzerland",
      "hint": "Famous for its chocolate, cheese, and watches"
    },
    {
      "word": "Syria",
      "hint": "Located in the Middle East"
    },
    {
      "word": "Taiwan",
      "hint": "Island nation in East Asia"
    },
    {
      "word": "Tajikistan",
      "hint": "Landlocked country in Central Asia"
    },
    {
      "word": "Tanzania",
      "hint": "Home to Mount Kilimanjaro and Serengeti National Park"
    },
    {
      "word": "Thailand",
      "hint": "Known for its temples, beaches, and cuisine"
    },
    {
      "word": "Timor-Leste",
      "hint": "Southeast Asian nation on the eastern half of the island of Timor"
    },
    {
      "word": "Togo",
      "hint": "Located in West Africa"
    },
    {
      "word": "Tonga",
      "hint": "Archipelago of islands in the South Pacific Ocean"
    },
    {
      "word": "Trinidad and Tobago",
      "hint": "Two islands in the Caribbean Sea"
    },
    {
      "word": "Tunisia",
      "hint": "Known for its ancient ruins and Mediterranean beaches"
    },
    {
      "word": "Turkey",
      "hint": "Known for its historical sites and cuisine"
    },
    {
      "word": "Turkmenistan",
      "hint": "Located in Central Asia"
    },
    {
      "word": "Tuvalu",
      "hint": "Small island nation in the Pacific Ocean"
    },
    {
      "word": "Uganda",
      "hint": "Known as the 'Pearl of Africa'"
    },
    {
      "word": "Ukraine",
      "hint": "Known for its Orthodox churches and Soviet heritage"
    },
    {
      "word": "United Arab Emirates",
      "hint": "Known for its modern architecture and luxury shopping"
    },
    {
      "word": "United Kingdom",
      "hint": "Home of Big Ben, Buckingham Palace, and fish and chips"
    },
    {
      "word": "United States",
      "hint": "Known for its diversity and innovation"
    },
    {
      "word": "Uruguay",
      "hint": "Known for its progressive social policies"
    },
    {
      "word": "Uzbekistan",
      "hint": "Landlocked country in Central Asia"
    },
    {
      "word": "Vanuatu",
      "hint": "Archipelago of islands in the South Pacific Ocean"
    },
    {
      "word": "Vatican City",
      "hint": "Smallest country in the world"
    },
    {
      "word": "Venezuela",
      "hint": "Known for its oil reserves and Angel Falls"
    },
    {
      "word": "Vietnam",
      "hint": "Known for its bustling cities and delicious cuisine"
    },
    {
      "word": "Yemen",
      "hint": "Located on the southern tip of the Arabian Peninsula"
    },
    {
      "word": "Zambia",
      "hint": "Home to the Victoria Falls on the Zambezi River"
    },
    {
      "word": "Zimbabwe",
      "hint": "Known for its dramatic landscape and wildlife"
    }
]

        
  