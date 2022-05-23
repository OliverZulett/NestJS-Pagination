db.createUser({
  user: 'admin',
  pwd: 'adminPassword123',
  roles: [
    {
      role: 'readWrite',
      db: 'world',
    },
  ],
});

db = db.getSiblingDB('world');

db.createCollection('countrylanguage');

db.countrylanguage.insertMany([
	{
		"CountryCode" : "ABW",
		"Language" : "Dutch",
		"IsOfficial" : "T",
		"Percentage" : 5.3
	},
	{
		"CountryCode" : "ABW",
		"Language" : "English",
		"IsOfficial" : "F",
		"Percentage" : 9.5
	},
	{
		"CountryCode" : "ABW",
		"Language" : "Papiamento",
		"IsOfficial" : "F",
		"Percentage" : 76.7
	},
	{
		"CountryCode" : "ABW",
		"Language" : "Spanish",
		"IsOfficial" : "F",
		"Percentage" : 7.4
	},
	{
		"CountryCode" : "AFG",
		"Language" : "Balochi",
		"IsOfficial" : "F",
		"Percentage" : 0.9
	},
	{
		"CountryCode" : "AFG",
		"Language" : "Dari",
		"IsOfficial" : "T",
		"Percentage" : 32.1
	},
	{
		"CountryCode" : "AFG",
		"Language" : "Pashto",
		"IsOfficial" : "T",
		"Percentage" : 52.4
	},
	{
		"CountryCode" : "AFG",
		"Language" : "Turkmenian",
		"IsOfficial" : "F",
		"Percentage" : 1.9
	},
	{
		"CountryCode" : "AFG",
		"Language" : "Uzbek",
		"IsOfficial" : "F",
		"Percentage" : 8.8
	},
	{
		"CountryCode" : "AGO",
		"Language" : "Ambo",
		"IsOfficial" : "F",
		"Percentage" : 2.4
	},
	{
		"CountryCode" : "AGO",
		"Language" : "Chokwe",
		"IsOfficial" : "F",
		"Percentage" : 4.2
	},
	{
		"CountryCode" : "AGO",
		"Language" : "Kongo",
		"IsOfficial" : "F",
		"Percentage" : 13.2
	},
	{
		"CountryCode" : "AGO",
		"Language" : "Luchazi",
		"IsOfficial" : "F",
		"Percentage" : 2.4
	},
	{
		"CountryCode" : "AGO",
		"Language" : "Luimbe-nganguela",
		"IsOfficial" : "F",
		"Percentage" : 5.4
	},
	{
		"CountryCode" : "AGO",
		"Language" : "Luvale",
		"IsOfficial" : "F",
		"Percentage" : 3.6
	},
	{
		"CountryCode" : "AGO",
		"Language" : "Mbundu",
		"IsOfficial" : "F",
		"Percentage" : 21.6
	},
	{
		"CountryCode" : "AGO",
		"Language" : "Nyaneka-nkhumbi",
		"IsOfficial" : "F",
		"Percentage" : 5.4
	},
	{
		"CountryCode" : "AGO",
		"Language" : "Ovimbundu",
		"IsOfficial" : "F",
		"Percentage" : 37.2
	},
	{
		"CountryCode" : "AIA",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "ALB",
		"Language" : "Albaniana",
		"IsOfficial" : "T",
		"Percentage" : 97.9
	},
	{
		"CountryCode" : "ALB",
		"Language" : "Greek",
		"IsOfficial" : "F",
		"Percentage" : 1.8
	},
	{
		"CountryCode" : "ALB",
		"Language" : "Macedonian",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "AND",
		"Language" : "Catalan",
		"IsOfficial" : "T",
		"Percentage" : 32.3
	},
	{
		"CountryCode" : "AND",
		"Language" : "French",
		"IsOfficial" : "F",
		"Percentage" : 6.2
	},
	{
		"CountryCode" : "AND",
		"Language" : "Portuguese",
		"IsOfficial" : "F",
		"Percentage" : 10.8
	},
	{
		"CountryCode" : "AND",
		"Language" : "Spanish",
		"IsOfficial" : "F",
		"Percentage" : 44.6
	},
	{
		"CountryCode" : "ANT",
		"Language" : "Dutch",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "ANT",
		"Language" : "English",
		"IsOfficial" : "F",
		"Percentage" : 7.8
	},
	{
		"CountryCode" : "ANT",
		"Language" : "Papiamento",
		"IsOfficial" : "T",
		"Percentage" : 86.2
	},
	{
		"CountryCode" : "ARE",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 42.0
	},
	{
		"CountryCode" : "ARE",
		"Language" : "Hindi",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "ARG",
		"Language" : "Indian Languages",
		"IsOfficial" : "F",
		"Percentage" : 0.3
	},
	{
		"CountryCode" : "ARG",
		"Language" : "Italian",
		"IsOfficial" : "F",
		"Percentage" : 1.7
	},
	{
		"CountryCode" : "ARG",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 96.8
	},
	{
		"CountryCode" : "ARM",
		"Language" : "Armenian",
		"IsOfficial" : "T",
		"Percentage" : 93.4
	},
	{
		"CountryCode" : "ARM",
		"Language" : "Azerbaijani",
		"IsOfficial" : "F",
		"Percentage" : 2.6
	},
	{
		"CountryCode" : "ASM",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 3.1
	},
	{
		"CountryCode" : "ASM",
		"Language" : "Samoan",
		"IsOfficial" : "T",
		"Percentage" : 90.6
	},
	{
		"CountryCode" : "ASM",
		"Language" : "Tongan",
		"IsOfficial" : "F",
		"Percentage" : 3.1
	},
	{
		"CountryCode" : "ATG",
		"Language" : "Creole English",
		"IsOfficial" : "F",
		"Percentage" : 95.7
	},
	{
		"CountryCode" : "ATG",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "AUS",
		"Language" : "Arabic",
		"IsOfficial" : "F",
		"Percentage" : 1.0
	},
	{
		"CountryCode" : "AUS",
		"Language" : "Canton Chinese",
		"IsOfficial" : "F",
		"Percentage" : 1.1
	},
	{
		"CountryCode" : "AUS",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 81.2
	},
	{
		"CountryCode" : "AUS",
		"Language" : "German",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "AUS",
		"Language" : "Greek",
		"IsOfficial" : "F",
		"Percentage" : 1.6
	},
	{
		"CountryCode" : "AUS",
		"Language" : "Italian",
		"IsOfficial" : "F",
		"Percentage" : 2.2
	},
	{
		"CountryCode" : "AUS",
		"Language" : "Serbo-Croatian",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "AUS",
		"Language" : "Vietnamese",
		"IsOfficial" : "F",
		"Percentage" : 0.8
	},
	{
		"CountryCode" : "AUT",
		"Language" : "Czech",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "AUT",
		"Language" : "German",
		"IsOfficial" : "T",
		"Percentage" : 92.0
	},
	{
		"CountryCode" : "AUT",
		"Language" : "Hungarian",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "AUT",
		"Language" : "Polish",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "AUT",
		"Language" : "Romanian",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "AUT",
		"Language" : "Serbo-Croatian",
		"IsOfficial" : "F",
		"Percentage" : 2.2
	},
	{
		"CountryCode" : "AUT",
		"Language" : "Slovene",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "AUT",
		"Language" : "Turkish",
		"IsOfficial" : "F",
		"Percentage" : 1.5
	},
	{
		"CountryCode" : "AZE",
		"Language" : "Armenian",
		"IsOfficial" : "F",
		"Percentage" : 2.0
	},
	{
		"CountryCode" : "AZE",
		"Language" : "Azerbaijani",
		"IsOfficial" : "T",
		"Percentage" : 89.0
	},
	{
		"CountryCode" : "AZE",
		"Language" : "Lezgian",
		"IsOfficial" : "F",
		"Percentage" : 2.3
	},
	{
		"CountryCode" : "AZE",
		"Language" : "Russian",
		"IsOfficial" : "F",
		"Percentage" : 3.0
	},
	{
		"CountryCode" : "BDI",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "BDI",
		"Language" : "Kirundi",
		"IsOfficial" : "T",
		"Percentage" : 98.1
	},
	{
		"CountryCode" : "BDI",
		"Language" : "Swahili",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "BEL",
		"Language" : "Arabic",
		"IsOfficial" : "F",
		"Percentage" : 1.6
	},
	{
		"CountryCode" : "BEL",
		"Language" : "Dutch",
		"IsOfficial" : "T",
		"Percentage" : 59.2
	},
	{
		"CountryCode" : "BEL",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 32.6
	},
	{
		"CountryCode" : "BEL",
		"Language" : "German",
		"IsOfficial" : "T",
		"Percentage" : 1.0
	},
	{
		"CountryCode" : "BEL",
		"Language" : "Italian",
		"IsOfficial" : "F",
		"Percentage" : 2.4
	},
	{
		"CountryCode" : "BEL",
		"Language" : "Turkish",
		"IsOfficial" : "F",
		"Percentage" : 0.9
	},
	{
		"CountryCode" : "BEN",
		"Language" : "Adja",
		"IsOfficial" : "F",
		"Percentage" : 11.1
	},
	{
		"CountryCode" : "BEN",
		"Language" : "Aizo",
		"IsOfficial" : "F",
		"Percentage" : 8.7
	},
	{
		"CountryCode" : "BEN",
		"Language" : "Bariba",
		"IsOfficial" : "F",
		"Percentage" : 8.7
	},
	{
		"CountryCode" : "BEN",
		"Language" : "Fon",
		"IsOfficial" : "F",
		"Percentage" : 39.8
	},
	{
		"CountryCode" : "BEN",
		"Language" : "Ful",
		"IsOfficial" : "F",
		"Percentage" : 5.6
	},
	{
		"CountryCode" : "BEN",
		"Language" : "Joruba",
		"IsOfficial" : "F",
		"Percentage" : 12.2
	},
	{
		"CountryCode" : "BEN",
		"Language" : "Somba",
		"IsOfficial" : "F",
		"Percentage" : 6.7
	},
	{
		"CountryCode" : "BFA",
		"Language" : "Busansi",
		"IsOfficial" : "F",
		"Percentage" : 3.5
	},
	{
		"CountryCode" : "BFA",
		"Language" : "Dagara",
		"IsOfficial" : "F",
		"Percentage" : 3.1
	},
	{
		"CountryCode" : "BFA",
		"Language" : "Dyula",
		"IsOfficial" : "F",
		"Percentage" : 2.6
	},
	{
		"CountryCode" : "BFA",
		"Language" : "Ful",
		"IsOfficial" : "F",
		"Percentage" : 9.7
	},
	{
		"CountryCode" : "BFA",
		"Language" : "Gurma",
		"IsOfficial" : "F",
		"Percentage" : 5.7
	},
	{
		"CountryCode" : "BFA",
		"Language" : "Mossi",
		"IsOfficial" : "F",
		"Percentage" : 50.2
	},
	{
		"CountryCode" : "BGD",
		"Language" : "Bengali",
		"IsOfficial" : "T",
		"Percentage" : 97.7
	},
	{
		"CountryCode" : "BGD",
		"Language" : "Chakma",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "BGD",
		"Language" : "Garo",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "BGD",
		"Language" : "Khasi",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "BGD",
		"Language" : "Marma",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "BGD",
		"Language" : "Santhali",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "BGD",
		"Language" : "Tripuri",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "BGR",
		"Language" : "Bulgariana",
		"IsOfficial" : "T",
		"Percentage" : 83.2
	},
	{
		"CountryCode" : "BGR",
		"Language" : "Macedonian",
		"IsOfficial" : "F",
		"Percentage" : 2.6
	},
	{
		"CountryCode" : "BGR",
		"Language" : "Romani",
		"IsOfficial" : "F",
		"Percentage" : 3.7
	},
	{
		"CountryCode" : "BGR",
		"Language" : "Turkish",
		"IsOfficial" : "F",
		"Percentage" : 9.4
	},
	{
		"CountryCode" : "BHR",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 67.7
	},
	{
		"CountryCode" : "BHR",
		"Language" : "English",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "BHS",
		"Language" : "Creole English",
		"IsOfficial" : "F",
		"Percentage" : 89.7
	},
	{
		"CountryCode" : "BHS",
		"Language" : "Creole French",
		"IsOfficial" : "F",
		"Percentage" : 10.3
	},
	{
		"CountryCode" : "BIH",
		"Language" : "Serbo-Croatian",
		"IsOfficial" : "T",
		"Percentage" : 99.2
	},
	{
		"CountryCode" : "BLR",
		"Language" : "Belorussian",
		"IsOfficial" : "T",
		"Percentage" : 65.6
	},
	{
		"CountryCode" : "BLR",
		"Language" : "Polish",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "BLR",
		"Language" : "Russian",
		"IsOfficial" : "T",
		"Percentage" : 32.0
	},
	{
		"CountryCode" : "BLR",
		"Language" : "Ukrainian",
		"IsOfficial" : "F",
		"Percentage" : 1.3
	},
	{
		"CountryCode" : "BLZ",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 50.8
	},
	{
		"CountryCode" : "BLZ",
		"Language" : "Garifuna",
		"IsOfficial" : "F",
		"Percentage" : 6.8
	},
	{
		"CountryCode" : "BLZ",
		"Language" : "Maya Languages",
		"IsOfficial" : "F",
		"Percentage" : 9.6
	},
	{
		"CountryCode" : "BLZ",
		"Language" : "Spanish",
		"IsOfficial" : "F",
		"Percentage" : 31.6
	},
	{
		"CountryCode" : "BMU",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 100.0
	},
	{
		"CountryCode" : "BOL",
		"Language" : "Aimará",
		"IsOfficial" : "T",
		"Percentage" : 3.2
	},
	{
		"CountryCode" : "BOL",
		"Language" : "Guaraní",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "BOL",
		"Language" : "Ketšua",
		"IsOfficial" : "T",
		"Percentage" : 8.1
	},
	{
		"CountryCode" : "BOL",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 87.7
	},
	{
		"CountryCode" : "BRA",
		"Language" : "German",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "BRA",
		"Language" : "Indian Languages",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "BRA",
		"Language" : "Italian",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "BRA",
		"Language" : "Japanese",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "BRA",
		"Language" : "Portuguese",
		"IsOfficial" : "T",
		"Percentage" : 97.5
	},
	{
		"CountryCode" : "BRB",
		"Language" : "Bajan",
		"IsOfficial" : "F",
		"Percentage" : 95.1
	},
	{
		"CountryCode" : "BRB",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "BRN",
		"Language" : "Chinese",
		"IsOfficial" : "F",
		"Percentage" : 9.3
	},
	{
		"CountryCode" : "BRN",
		"Language" : "English",
		"IsOfficial" : "F",
		"Percentage" : 3.1
	},
	{
		"CountryCode" : "BRN",
		"Language" : "Malay",
		"IsOfficial" : "T",
		"Percentage" : 45.5
	},
	{
		"CountryCode" : "BRN",
		"Language" : "Malay-English",
		"IsOfficial" : "F",
		"Percentage" : 28.8
	},
	{
		"CountryCode" : "BTN",
		"Language" : "Asami",
		"IsOfficial" : "F",
		"Percentage" : 15.2
	},
	{
		"CountryCode" : "BTN",
		"Language" : "Dzongkha",
		"IsOfficial" : "T",
		"Percentage" : 50.0
	},
	{
		"CountryCode" : "BTN",
		"Language" : "Nepali",
		"IsOfficial" : "F",
		"Percentage" : 34.8
	},
	{
		"CountryCode" : "BWA",
		"Language" : "Khoekhoe",
		"IsOfficial" : "F",
		"Percentage" : 2.5
	},
	{
		"CountryCode" : "BWA",
		"Language" : "Ndebele",
		"IsOfficial" : "F",
		"Percentage" : 1.3
	},
	{
		"CountryCode" : "BWA",
		"Language" : "San",
		"IsOfficial" : "F",
		"Percentage" : 3.5
	},
	{
		"CountryCode" : "BWA",
		"Language" : "Shona",
		"IsOfficial" : "F",
		"Percentage" : 12.3
	},
	{
		"CountryCode" : "BWA",
		"Language" : "Tswana",
		"IsOfficial" : "F",
		"Percentage" : 75.5
	},
	{
		"CountryCode" : "CAF",
		"Language" : "Banda",
		"IsOfficial" : "F",
		"Percentage" : 23.5
	},
	{
		"CountryCode" : "CAF",
		"Language" : "Gbaya",
		"IsOfficial" : "F",
		"Percentage" : 23.8
	},
	{
		"CountryCode" : "CAF",
		"Language" : "Mandjia",
		"IsOfficial" : "F",
		"Percentage" : 14.8
	},
	{
		"CountryCode" : "CAF",
		"Language" : "Mbum",
		"IsOfficial" : "F",
		"Percentage" : 6.4
	},
	{
		"CountryCode" : "CAF",
		"Language" : "Ngbaka",
		"IsOfficial" : "F",
		"Percentage" : 7.5
	},
	{
		"CountryCode" : "CAF",
		"Language" : "Sara",
		"IsOfficial" : "F",
		"Percentage" : 6.4
	},
	{
		"CountryCode" : "CAN",
		"Language" : "Chinese",
		"IsOfficial" : "F",
		"Percentage" : 2.5
	},
	{
		"CountryCode" : "CAN",
		"Language" : "Dutch",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "CAN",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 60.4
	},
	{
		"CountryCode" : "CAN",
		"Language" : "Eskimo Languages",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "CAN",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 23.4
	},
	{
		"CountryCode" : "CAN",
		"Language" : "German",
		"IsOfficial" : "F",
		"Percentage" : 1.6
	},
	{
		"CountryCode" : "CAN",
		"Language" : "Italian",
		"IsOfficial" : "F",
		"Percentage" : 1.7
	},
	{
		"CountryCode" : "CAN",
		"Language" : "Polish",
		"IsOfficial" : "F",
		"Percentage" : 0.7
	},
	{
		"CountryCode" : "CAN",
		"Language" : "Portuguese",
		"IsOfficial" : "F",
		"Percentage" : 0.7
	},
	{
		"CountryCode" : "CAN",
		"Language" : "Punjabi",
		"IsOfficial" : "F",
		"Percentage" : 0.7
	},
	{
		"CountryCode" : "CAN",
		"Language" : "Spanish",
		"IsOfficial" : "F",
		"Percentage" : 0.7
	},
	{
		"CountryCode" : "CAN",
		"Language" : "Ukrainian",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "CCK",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "CCK",
		"Language" : "Malay",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "CHE",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 19.2
	},
	{
		"CountryCode" : "CHE",
		"Language" : "German",
		"IsOfficial" : "T",
		"Percentage" : 63.6
	},
	{
		"CountryCode" : "CHE",
		"Language" : "Italian",
		"IsOfficial" : "T",
		"Percentage" : 7.7
	},
	{
		"CountryCode" : "CHE",
		"Language" : "Romansh",
		"IsOfficial" : "T",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "CHL",
		"Language" : "Aimará",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "CHL",
		"Language" : "Araucan",
		"IsOfficial" : "F",
		"Percentage" : 9.6
	},
	{
		"CountryCode" : "CHL",
		"Language" : "Rapa nui",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "CHL",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 89.7
	},
	{
		"CountryCode" : "CHN",
		"Language" : "Chinese",
		"IsOfficial" : "T",
		"Percentage" : 92.0
	},
	{
		"CountryCode" : "CHN",
		"Language" : "Dong",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "CHN",
		"Language" : "Hui",
		"IsOfficial" : "F",
		"Percentage" : 0.8
	},
	{
		"CountryCode" : "CHN",
		"Language" : "Mantšu",
		"IsOfficial" : "F",
		"Percentage" : 0.9
	},
	{
		"CountryCode" : "CHN",
		"Language" : "Miao",
		"IsOfficial" : "F",
		"Percentage" : 0.7
	},
	{
		"CountryCode" : "CHN",
		"Language" : "Mongolian",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "CHN",
		"Language" : "Puyi",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "CHN",
		"Language" : "Tibetan",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "CHN",
		"Language" : "Tujia",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "CHN",
		"Language" : "Uighur",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "CHN",
		"Language" : "Yi",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "CHN",
		"Language" : "Zhuang",
		"IsOfficial" : "F",
		"Percentage" : 1.4
	},
	{
		"CountryCode" : "CIV",
		"Language" : "[South]Mande",
		"IsOfficial" : "F",
		"Percentage" : 7.7
	},
	{
		"CountryCode" : "CIV",
		"Language" : "Akan",
		"IsOfficial" : "F",
		"Percentage" : 30.0
	},
	{
		"CountryCode" : "CIV",
		"Language" : "Gur",
		"IsOfficial" : "F",
		"Percentage" : 11.7
	},
	{
		"CountryCode" : "CIV",
		"Language" : "Kru",
		"IsOfficial" : "F",
		"Percentage" : 10.5
	},
	{
		"CountryCode" : "CIV",
		"Language" : "Malinke",
		"IsOfficial" : "F",
		"Percentage" : 11.4
	},
	{
		"CountryCode" : "CMR",
		"Language" : "Bamileke-bamum",
		"IsOfficial" : "F",
		"Percentage" : 18.6
	},
	{
		"CountryCode" : "CMR",
		"Language" : "Duala",
		"IsOfficial" : "F",
		"Percentage" : 10.9
	},
	{
		"CountryCode" : "CMR",
		"Language" : "Fang",
		"IsOfficial" : "F",
		"Percentage" : 19.7
	},
	{
		"CountryCode" : "CMR",
		"Language" : "Ful",
		"IsOfficial" : "F",
		"Percentage" : 9.6
	},
	{
		"CountryCode" : "CMR",
		"Language" : "Maka",
		"IsOfficial" : "F",
		"Percentage" : 4.9
	},
	{
		"CountryCode" : "CMR",
		"Language" : "Mandara",
		"IsOfficial" : "F",
		"Percentage" : 5.7
	},
	{
		"CountryCode" : "CMR",
		"Language" : "Masana",
		"IsOfficial" : "F",
		"Percentage" : 3.9
	},
	{
		"CountryCode" : "CMR",
		"Language" : "Tikar",
		"IsOfficial" : "F",
		"Percentage" : 7.4
	},
	{
		"CountryCode" : "COD",
		"Language" : "Boa",
		"IsOfficial" : "F",
		"Percentage" : 2.3
	},
	{
		"CountryCode" : "COD",
		"Language" : "Chokwe",
		"IsOfficial" : "F",
		"Percentage" : 1.8
	},
	{
		"CountryCode" : "COD",
		"Language" : "Kongo",
		"IsOfficial" : "F",
		"Percentage" : 16.0
	},
	{
		"CountryCode" : "COD",
		"Language" : "Luba",
		"IsOfficial" : "F",
		"Percentage" : 18.0
	},
	{
		"CountryCode" : "COD",
		"Language" : "Mongo",
		"IsOfficial" : "F",
		"Percentage" : 13.5
	},
	{
		"CountryCode" : "COD",
		"Language" : "Ngala and Bangi",
		"IsOfficial" : "F",
		"Percentage" : 5.8
	},
	{
		"CountryCode" : "COD",
		"Language" : "Rundi",
		"IsOfficial" : "F",
		"Percentage" : 3.8
	},
	{
		"CountryCode" : "COD",
		"Language" : "Rwanda",
		"IsOfficial" : "F",
		"Percentage" : 10.3
	},
	{
		"CountryCode" : "COD",
		"Language" : "Teke",
		"IsOfficial" : "F",
		"Percentage" : 2.7
	},
	{
		"CountryCode" : "COD",
		"Language" : "Zande",
		"IsOfficial" : "F",
		"Percentage" : 6.1
	},
	{
		"CountryCode" : "COG",
		"Language" : "Kongo",
		"IsOfficial" : "F",
		"Percentage" : 51.5
	},
	{
		"CountryCode" : "COG",
		"Language" : "Mbete",
		"IsOfficial" : "F",
		"Percentage" : 4.8
	},
	{
		"CountryCode" : "COG",
		"Language" : "Mboshi",
		"IsOfficial" : "F",
		"Percentage" : 11.4
	},
	{
		"CountryCode" : "COG",
		"Language" : "Punu",
		"IsOfficial" : "F",
		"Percentage" : 2.9
	},
	{
		"CountryCode" : "COG",
		"Language" : "Sango",
		"IsOfficial" : "F",
		"Percentage" : 2.6
	},
	{
		"CountryCode" : "COG",
		"Language" : "Teke",
		"IsOfficial" : "F",
		"Percentage" : 17.3
	},
	{
		"CountryCode" : "COK",
		"Language" : "English",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "COK",
		"Language" : "Maori",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "COL",
		"Language" : "Arawakan",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "COL",
		"Language" : "Caribbean",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "COL",
		"Language" : "Chibcha",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "COL",
		"Language" : "Creole English",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "COL",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 99.0
	},
	{
		"CountryCode" : "COM",
		"Language" : "Comorian",
		"IsOfficial" : "T",
		"Percentage" : 75.0
	},
	{
		"CountryCode" : "COM",
		"Language" : "Comorian-Arabic",
		"IsOfficial" : "F",
		"Percentage" : 1.6
	},
	{
		"CountryCode" : "COM",
		"Language" : "Comorian-French",
		"IsOfficial" : "F",
		"Percentage" : 12.9
	},
	{
		"CountryCode" : "COM",
		"Language" : "Comorian-madagassi",
		"IsOfficial" : "F",
		"Percentage" : 5.5
	},
	{
		"CountryCode" : "COM",
		"Language" : "Comorian-Swahili",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "CPV",
		"Language" : "Crioulo",
		"IsOfficial" : "F",
		"Percentage" : 100.0
	},
	{
		"CountryCode" : "CPV",
		"Language" : "Portuguese",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "CRI",
		"Language" : "Chibcha",
		"IsOfficial" : "F",
		"Percentage" : 0.3
	},
	{
		"CountryCode" : "CRI",
		"Language" : "Chinese",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "CRI",
		"Language" : "Creole English",
		"IsOfficial" : "F",
		"Percentage" : 2.0
	},
	{
		"CountryCode" : "CRI",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 97.5
	},
	{
		"CountryCode" : "CUB",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 100.0
	},
	{
		"CountryCode" : "CXR",
		"Language" : "Chinese",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "CXR",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "CYM",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "CYP",
		"Language" : "Greek",
		"IsOfficial" : "T",
		"Percentage" : 74.1
	},
	{
		"CountryCode" : "CYP",
		"Language" : "Turkish",
		"IsOfficial" : "T",
		"Percentage" : 22.4
	},
	{
		"CountryCode" : "CZE",
		"Language" : "Czech",
		"IsOfficial" : "T",
		"Percentage" : 81.2
	},
	{
		"CountryCode" : "CZE",
		"Language" : "German",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "CZE",
		"Language" : "Hungarian",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "CZE",
		"Language" : "Moravian",
		"IsOfficial" : "F",
		"Percentage" : 12.9
	},
	{
		"CountryCode" : "CZE",
		"Language" : "Polish",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "CZE",
		"Language" : "Romani",
		"IsOfficial" : "F",
		"Percentage" : 0.3
	},
	{
		"CountryCode" : "CZE",
		"Language" : "Silesiana",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "CZE",
		"Language" : "Slovak",
		"IsOfficial" : "F",
		"Percentage" : 3.1
	},
	{
		"CountryCode" : "DEU",
		"Language" : "German",
		"IsOfficial" : "T",
		"Percentage" : 91.3
	},
	{
		"CountryCode" : "DEU",
		"Language" : "Greek",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "DEU",
		"Language" : "Italian",
		"IsOfficial" : "F",
		"Percentage" : 0.7
	},
	{
		"CountryCode" : "DEU",
		"Language" : "Polish",
		"IsOfficial" : "F",
		"Percentage" : 0.3
	},
	{
		"CountryCode" : "DEU",
		"Language" : "Southern Slavic Languages",
		"IsOfficial" : "F",
		"Percentage" : 1.4
	},
	{
		"CountryCode" : "DEU",
		"Language" : "Turkish",
		"IsOfficial" : "F",
		"Percentage" : 2.6
	},
	{
		"CountryCode" : "DJI",
		"Language" : "Afar",
		"IsOfficial" : "F",
		"Percentage" : 34.8
	},
	{
		"CountryCode" : "DJI",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 10.6
	},
	{
		"CountryCode" : "DJI",
		"Language" : "Somali",
		"IsOfficial" : "F",
		"Percentage" : 43.9
	},
	{
		"CountryCode" : "DMA",
		"Language" : "Creole English",
		"IsOfficial" : "F",
		"Percentage" : 100.0
	},
	{
		"CountryCode" : "DMA",
		"Language" : "Creole French",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "DNK",
		"Language" : "Arabic",
		"IsOfficial" : "F",
		"Percentage" : 0.7
	},
	{
		"CountryCode" : "DNK",
		"Language" : "Danish",
		"IsOfficial" : "T",
		"Percentage" : 93.5
	},
	{
		"CountryCode" : "DNK",
		"Language" : "English",
		"IsOfficial" : "F",
		"Percentage" : 0.3
	},
	{
		"CountryCode" : "DNK",
		"Language" : "German",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "DNK",
		"Language" : "Norwegian",
		"IsOfficial" : "F",
		"Percentage" : 0.3
	},
	{
		"CountryCode" : "DNK",
		"Language" : "Swedish",
		"IsOfficial" : "F",
		"Percentage" : 0.3
	},
	{
		"CountryCode" : "DNK",
		"Language" : "Turkish",
		"IsOfficial" : "F",
		"Percentage" : 0.8
	},
	{
		"CountryCode" : "DOM",
		"Language" : "Creole French",
		"IsOfficial" : "F",
		"Percentage" : 2.0
	},
	{
		"CountryCode" : "DOM",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 98.0
	},
	{
		"CountryCode" : "DZA",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 86.0
	},
	{
		"CountryCode" : "DZA",
		"Language" : "Berberi",
		"IsOfficial" : "F",
		"Percentage" : 14.0
	},
	{
		"CountryCode" : "ECU",
		"Language" : "Ketšua",
		"IsOfficial" : "F",
		"Percentage" : 7.0
	},
	{
		"CountryCode" : "ECU",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 93.0
	},
	{
		"CountryCode" : "EGY",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 98.8
	},
	{
		"CountryCode" : "EGY",
		"Language" : "Sinaberberi",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "ERI",
		"Language" : "Afar",
		"IsOfficial" : "F",
		"Percentage" : 4.3
	},
	{
		"CountryCode" : "ERI",
		"Language" : "Bilin",
		"IsOfficial" : "F",
		"Percentage" : 3.0
	},
	{
		"CountryCode" : "ERI",
		"Language" : "Hadareb",
		"IsOfficial" : "F",
		"Percentage" : 3.8
	},
	{
		"CountryCode" : "ERI",
		"Language" : "Saho",
		"IsOfficial" : "F",
		"Percentage" : 3.0
	},
	{
		"CountryCode" : "ERI",
		"Language" : "Tigre",
		"IsOfficial" : "F",
		"Percentage" : 31.7
	},
	{
		"CountryCode" : "ERI",
		"Language" : "Tigrinja",
		"IsOfficial" : "T",
		"Percentage" : 49.1
	},
	{
		"CountryCode" : "ESH",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 100.0
	},
	{
		"CountryCode" : "ESP",
		"Language" : "Basque",
		"IsOfficial" : "F",
		"Percentage" : 1.6
	},
	{
		"CountryCode" : "ESP",
		"Language" : "Catalan",
		"IsOfficial" : "F",
		"Percentage" : 16.9
	},
	{
		"CountryCode" : "ESP",
		"Language" : "Galecian",
		"IsOfficial" : "F",
		"Percentage" : 6.4
	},
	{
		"CountryCode" : "ESP",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 74.4
	},
	{
		"CountryCode" : "EST",
		"Language" : "Belorussian",
		"IsOfficial" : "F",
		"Percentage" : 1.4
	},
	{
		"CountryCode" : "EST",
		"Language" : "Estonian",
		"IsOfficial" : "T",
		"Percentage" : 65.3
	},
	{
		"CountryCode" : "EST",
		"Language" : "Finnish",
		"IsOfficial" : "F",
		"Percentage" : 0.7
	},
	{
		"CountryCode" : "EST",
		"Language" : "Russian",
		"IsOfficial" : "F",
		"Percentage" : 27.8
	},
	{
		"CountryCode" : "EST",
		"Language" : "Ukrainian",
		"IsOfficial" : "F",
		"Percentage" : 2.8
	},
	{
		"CountryCode" : "ETH",
		"Language" : "Amhara",
		"IsOfficial" : "F",
		"Percentage" : 30.0
	},
	{
		"CountryCode" : "ETH",
		"Language" : "Gurage",
		"IsOfficial" : "F",
		"Percentage" : 4.7
	},
	{
		"CountryCode" : "ETH",
		"Language" : "Oromo",
		"IsOfficial" : "F",
		"Percentage" : 31.0
	},
	{
		"CountryCode" : "ETH",
		"Language" : "Sidamo",
		"IsOfficial" : "F",
		"Percentage" : 3.2
	},
	{
		"CountryCode" : "ETH",
		"Language" : "Somali",
		"IsOfficial" : "F",
		"Percentage" : 4.1
	},
	{
		"CountryCode" : "ETH",
		"Language" : "Tigrinja",
		"IsOfficial" : "F",
		"Percentage" : 7.2
	},
	{
		"CountryCode" : "ETH",
		"Language" : "Walaita",
		"IsOfficial" : "F",
		"Percentage" : 2.8
	},
	{
		"CountryCode" : "FIN",
		"Language" : "Estonian",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "FIN",
		"Language" : "Finnish",
		"IsOfficial" : "T",
		"Percentage" : 92.7
	},
	{
		"CountryCode" : "FIN",
		"Language" : "Russian",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "FIN",
		"Language" : "Saame",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "FIN",
		"Language" : "Swedish",
		"IsOfficial" : "T",
		"Percentage" : 5.7
	},
	{
		"CountryCode" : "FJI",
		"Language" : "Fijian",
		"IsOfficial" : "T",
		"Percentage" : 50.8
	},
	{
		"CountryCode" : "FJI",
		"Language" : "Hindi",
		"IsOfficial" : "F",
		"Percentage" : 43.7
	},
	{
		"CountryCode" : "FLK",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "FRA",
		"Language" : "Arabic",
		"IsOfficial" : "F",
		"Percentage" : 2.5
	},
	{
		"CountryCode" : "FRA",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 93.6
	},
	{
		"CountryCode" : "FRA",
		"Language" : "Italian",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "FRA",
		"Language" : "Portuguese",
		"IsOfficial" : "F",
		"Percentage" : 1.2
	},
	{
		"CountryCode" : "FRA",
		"Language" : "Spanish",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "FRA",
		"Language" : "Turkish",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "FRO",
		"Language" : "Danish",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "FRO",
		"Language" : "Faroese",
		"IsOfficial" : "T",
		"Percentage" : 100.0
	},
	{
		"CountryCode" : "FSM",
		"Language" : "Kosrean",
		"IsOfficial" : "F",
		"Percentage" : 7.3
	},
	{
		"CountryCode" : "FSM",
		"Language" : "Mortlock",
		"IsOfficial" : "F",
		"Percentage" : 7.6
	},
	{
		"CountryCode" : "FSM",
		"Language" : "Pohnpei",
		"IsOfficial" : "F",
		"Percentage" : 23.8
	},
	{
		"CountryCode" : "FSM",
		"Language" : "Trukese",
		"IsOfficial" : "F",
		"Percentage" : 41.6
	},
	{
		"CountryCode" : "FSM",
		"Language" : "Wolea",
		"IsOfficial" : "F",
		"Percentage" : 3.7
	},
	{
		"CountryCode" : "FSM",
		"Language" : "Yap",
		"IsOfficial" : "F",
		"Percentage" : 5.8
	},
	{
		"CountryCode" : "GAB",
		"Language" : "Fang",
		"IsOfficial" : "F",
		"Percentage" : 35.8
	},
	{
		"CountryCode" : "GAB",
		"Language" : "Mbete",
		"IsOfficial" : "F",
		"Percentage" : 13.8
	},
	{
		"CountryCode" : "GAB",
		"Language" : "Mpongwe",
		"IsOfficial" : "F",
		"Percentage" : 14.6
	},
	{
		"CountryCode" : "GAB",
		"Language" : "Punu-sira-nzebi",
		"IsOfficial" : "F",
		"Percentage" : 17.1
	},
	{
		"CountryCode" : "GBR",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 97.3
	},
	{
		"CountryCode" : "GBR",
		"Language" : "Gaeli",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "GBR",
		"Language" : "Kymri",
		"IsOfficial" : "F",
		"Percentage" : 0.9
	},
	{
		"CountryCode" : "GEO",
		"Language" : "Abhyasi",
		"IsOfficial" : "F",
		"Percentage" : 1.7
	},
	{
		"CountryCode" : "GEO",
		"Language" : "Armenian",
		"IsOfficial" : "F",
		"Percentage" : 6.8
	},
	{
		"CountryCode" : "GEO",
		"Language" : "Azerbaijani",
		"IsOfficial" : "F",
		"Percentage" : 5.5
	},
	{
		"CountryCode" : "GEO",
		"Language" : "Georgiana",
		"IsOfficial" : "T",
		"Percentage" : 71.7
	},
	{
		"CountryCode" : "GEO",
		"Language" : "Osseetti",
		"IsOfficial" : "F",
		"Percentage" : 2.4
	},
	{
		"CountryCode" : "GEO",
		"Language" : "Russian",
		"IsOfficial" : "F",
		"Percentage" : 8.8
	},
	{
		"CountryCode" : "GHA",
		"Language" : "Akan",
		"IsOfficial" : "F",
		"Percentage" : 52.4
	},
	{
		"CountryCode" : "GHA",
		"Language" : "Ewe",
		"IsOfficial" : "F",
		"Percentage" : 11.9
	},
	{
		"CountryCode" : "GHA",
		"Language" : "Ga-adangme",
		"IsOfficial" : "F",
		"Percentage" : 7.8
	},
	{
		"CountryCode" : "GHA",
		"Language" : "Gurma",
		"IsOfficial" : "F",
		"Percentage" : 3.3
	},
	{
		"CountryCode" : "GHA",
		"Language" : "Joruba",
		"IsOfficial" : "F",
		"Percentage" : 1.3
	},
	{
		"CountryCode" : "GHA",
		"Language" : "Mossi",
		"IsOfficial" : "F",
		"Percentage" : 15.8
	},
	{
		"CountryCode" : "GIB",
		"Language" : "Arabic",
		"IsOfficial" : "F",
		"Percentage" : 7.4
	},
	{
		"CountryCode" : "GIB",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 88.9
	},
	{
		"CountryCode" : "GIN",
		"Language" : "Ful",
		"IsOfficial" : "F",
		"Percentage" : 38.6
	},
	{
		"CountryCode" : "GIN",
		"Language" : "Kissi",
		"IsOfficial" : "F",
		"Percentage" : 6.0
	},
	{
		"CountryCode" : "GIN",
		"Language" : "Kpelle",
		"IsOfficial" : "F",
		"Percentage" : 4.6
	},
	{
		"CountryCode" : "GIN",
		"Language" : "Loma",
		"IsOfficial" : "F",
		"Percentage" : 2.3
	},
	{
		"CountryCode" : "GIN",
		"Language" : "Malinke",
		"IsOfficial" : "F",
		"Percentage" : 23.2
	},
	{
		"CountryCode" : "GIN",
		"Language" : "Susu",
		"IsOfficial" : "F",
		"Percentage" : 11.0
	},
	{
		"CountryCode" : "GIN",
		"Language" : "Yalunka",
		"IsOfficial" : "F",
		"Percentage" : 2.9
	},
	{
		"CountryCode" : "GLP",
		"Language" : "Creole French",
		"IsOfficial" : "F",
		"Percentage" : 95.0
	},
	{
		"CountryCode" : "GLP",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "GMB",
		"Language" : "Diola",
		"IsOfficial" : "F",
		"Percentage" : 9.2
	},
	{
		"CountryCode" : "GMB",
		"Language" : "Ful",
		"IsOfficial" : "F",
		"Percentage" : 16.2
	},
	{
		"CountryCode" : "GMB",
		"Language" : "Malinke",
		"IsOfficial" : "F",
		"Percentage" : 34.1
	},
	{
		"CountryCode" : "GMB",
		"Language" : "Soninke",
		"IsOfficial" : "F",
		"Percentage" : 7.6
	},
	{
		"CountryCode" : "GMB",
		"Language" : "Wolof",
		"IsOfficial" : "F",
		"Percentage" : 12.6
	},
	{
		"CountryCode" : "GNB",
		"Language" : "Balante",
		"IsOfficial" : "F",
		"Percentage" : 14.6
	},
	{
		"CountryCode" : "GNB",
		"Language" : "Crioulo",
		"IsOfficial" : "F",
		"Percentage" : 36.4
	},
	{
		"CountryCode" : "GNB",
		"Language" : "Ful",
		"IsOfficial" : "F",
		"Percentage" : 16.6
	},
	{
		"CountryCode" : "GNB",
		"Language" : "Malinke",
		"IsOfficial" : "F",
		"Percentage" : 6.9
	},
	{
		"CountryCode" : "GNB",
		"Language" : "Mandyako",
		"IsOfficial" : "F",
		"Percentage" : 4.9
	},
	{
		"CountryCode" : "GNB",
		"Language" : "Portuguese",
		"IsOfficial" : "T",
		"Percentage" : 8.1
	},
	{
		"CountryCode" : "GNQ",
		"Language" : "Bubi",
		"IsOfficial" : "F",
		"Percentage" : 8.7
	},
	{
		"CountryCode" : "GNQ",
		"Language" : "Fang",
		"IsOfficial" : "F",
		"Percentage" : 84.8
	},
	{
		"CountryCode" : "GRC",
		"Language" : "Greek",
		"IsOfficial" : "T",
		"Percentage" : 98.5
	},
	{
		"CountryCode" : "GRC",
		"Language" : "Turkish",
		"IsOfficial" : "F",
		"Percentage" : 0.9
	},
	{
		"CountryCode" : "GRD",
		"Language" : "Creole English",
		"IsOfficial" : "F",
		"Percentage" : 100.0
	},
	{
		"CountryCode" : "GRL",
		"Language" : "Danish",
		"IsOfficial" : "T",
		"Percentage" : 12.5
	},
	{
		"CountryCode" : "GRL",
		"Language" : "Greenlandic",
		"IsOfficial" : "T",
		"Percentage" : 87.5
	},
	{
		"CountryCode" : "GTM",
		"Language" : "Cakchiquel",
		"IsOfficial" : "F",
		"Percentage" : 8.9
	},
	{
		"CountryCode" : "GTM",
		"Language" : "Kekchí",
		"IsOfficial" : "F",
		"Percentage" : 4.9
	},
	{
		"CountryCode" : "GTM",
		"Language" : "Mam",
		"IsOfficial" : "F",
		"Percentage" : 2.7
	},
	{
		"CountryCode" : "GTM",
		"Language" : "Quiché",
		"IsOfficial" : "F",
		"Percentage" : 10.1
	},
	{
		"CountryCode" : "GTM",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 64.7
	},
	{
		"CountryCode" : "GUF",
		"Language" : "Creole French",
		"IsOfficial" : "F",
		"Percentage" : 94.3
	},
	{
		"CountryCode" : "GUF",
		"Language" : "Indian Languages",
		"IsOfficial" : "F",
		"Percentage" : 1.9
	},
	{
		"CountryCode" : "GUM",
		"Language" : "Chamorro",
		"IsOfficial" : "T",
		"Percentage" : 29.6
	},
	{
		"CountryCode" : "GUM",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 37.5
	},
	{
		"CountryCode" : "GUM",
		"Language" : "Japanese",
		"IsOfficial" : "F",
		"Percentage" : 2.0
	},
	{
		"CountryCode" : "GUM",
		"Language" : "Korean",
		"IsOfficial" : "F",
		"Percentage" : 3.3
	},
	{
		"CountryCode" : "GUM",
		"Language" : "Philippene Languages",
		"IsOfficial" : "F",
		"Percentage" : 19.7
	},
	{
		"CountryCode" : "GUY",
		"Language" : "Arawakan",
		"IsOfficial" : "F",
		"Percentage" : 1.4
	},
	{
		"CountryCode" : "GUY",
		"Language" : "Caribbean",
		"IsOfficial" : "F",
		"Percentage" : 2.2
	},
	{
		"CountryCode" : "GUY",
		"Language" : "Creole English",
		"IsOfficial" : "F",
		"Percentage" : 96.4
	},
	{
		"CountryCode" : "HKG",
		"Language" : "Canton Chinese",
		"IsOfficial" : "F",
		"Percentage" : 88.7
	},
	{
		"CountryCode" : "HKG",
		"Language" : "Chiu chau",
		"IsOfficial" : "F",
		"Percentage" : 1.4
	},
	{
		"CountryCode" : "HKG",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 2.2
	},
	{
		"CountryCode" : "HKG",
		"Language" : "Fukien",
		"IsOfficial" : "F",
		"Percentage" : 1.9
	},
	{
		"CountryCode" : "HKG",
		"Language" : "Hakka",
		"IsOfficial" : "F",
		"Percentage" : 1.6
	},
	{
		"CountryCode" : "HND",
		"Language" : "Creole English",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "HND",
		"Language" : "Garifuna",
		"IsOfficial" : "F",
		"Percentage" : 1.3
	},
	{
		"CountryCode" : "HND",
		"Language" : "Miskito",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "HND",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 97.2
	},
	{
		"CountryCode" : "HRV",
		"Language" : "Serbo-Croatian",
		"IsOfficial" : "T",
		"Percentage" : 95.9
	},
	{
		"CountryCode" : "HRV",
		"Language" : "Slovene",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "HTI",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "HTI",
		"Language" : "Haiti Creole",
		"IsOfficial" : "F",
		"Percentage" : 100.0
	},
	{
		"CountryCode" : "HUN",
		"Language" : "German",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "HUN",
		"Language" : "Hungarian",
		"IsOfficial" : "T",
		"Percentage" : 98.5
	},
	{
		"CountryCode" : "HUN",
		"Language" : "Romani",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "HUN",
		"Language" : "Romanian",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "HUN",
		"Language" : "Serbo-Croatian",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "HUN",
		"Language" : "Slovak",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "IDN",
		"Language" : "Bali",
		"IsOfficial" : "F",
		"Percentage" : 1.7
	},
	{
		"CountryCode" : "IDN",
		"Language" : "Banja",
		"IsOfficial" : "F",
		"Percentage" : 1.8
	},
	{
		"CountryCode" : "IDN",
		"Language" : "Batakki",
		"IsOfficial" : "F",
		"Percentage" : 2.2
	},
	{
		"CountryCode" : "IDN",
		"Language" : "Bugi",
		"IsOfficial" : "F",
		"Percentage" : 2.2
	},
	{
		"CountryCode" : "IDN",
		"Language" : "Javanese",
		"IsOfficial" : "F",
		"Percentage" : 39.4
	},
	{
		"CountryCode" : "IDN",
		"Language" : "Madura",
		"IsOfficial" : "F",
		"Percentage" : 4.3
	},
	{
		"CountryCode" : "IDN",
		"Language" : "Malay",
		"IsOfficial" : "T",
		"Percentage" : 12.1
	},
	{
		"CountryCode" : "IDN",
		"Language" : "Minangkabau",
		"IsOfficial" : "F",
		"Percentage" : 2.4
	},
	{
		"CountryCode" : "IDN",
		"Language" : "Sunda",
		"IsOfficial" : "F",
		"Percentage" : 15.8
	},
	{
		"CountryCode" : "IND",
		"Language" : "Asami",
		"IsOfficial" : "F",
		"Percentage" : 1.5
	},
	{
		"CountryCode" : "IND",
		"Language" : "Bengali",
		"IsOfficial" : "F",
		"Percentage" : 8.2
	},
	{
		"CountryCode" : "IND",
		"Language" : "Gujarati",
		"IsOfficial" : "F",
		"Percentage" : 4.8
	},
	{
		"CountryCode" : "IND",
		"Language" : "Hindi",
		"IsOfficial" : "T",
		"Percentage" : 39.9
	},
	{
		"CountryCode" : "IND",
		"Language" : "Kannada",
		"IsOfficial" : "F",
		"Percentage" : 3.9
	},
	{
		"CountryCode" : "IND",
		"Language" : "Malajalam",
		"IsOfficial" : "F",
		"Percentage" : 3.6
	},
	{
		"CountryCode" : "IND",
		"Language" : "Marathi",
		"IsOfficial" : "F",
		"Percentage" : 7.4
	},
	{
		"CountryCode" : "IND",
		"Language" : "Orija",
		"IsOfficial" : "F",
		"Percentage" : 3.3
	},
	{
		"CountryCode" : "IND",
		"Language" : "Punjabi",
		"IsOfficial" : "F",
		"Percentage" : 2.8
	},
	{
		"CountryCode" : "IND",
		"Language" : "Tamil",
		"IsOfficial" : "F",
		"Percentage" : 6.3
	},
	{
		"CountryCode" : "IND",
		"Language" : "Telugu",
		"IsOfficial" : "F",
		"Percentage" : 7.8
	},
	{
		"CountryCode" : "IND",
		"Language" : "Urdu",
		"IsOfficial" : "F",
		"Percentage" : 5.1
	},
	{
		"CountryCode" : "IRL",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 98.4
	},
	{
		"CountryCode" : "IRL",
		"Language" : "Irish",
		"IsOfficial" : "T",
		"Percentage" : 1.6
	},
	{
		"CountryCode" : "IRN",
		"Language" : "Arabic",
		"IsOfficial" : "F",
		"Percentage" : 2.2
	},
	{
		"CountryCode" : "IRN",
		"Language" : "Azerbaijani",
		"IsOfficial" : "F",
		"Percentage" : 16.8
	},
	{
		"CountryCode" : "IRN",
		"Language" : "Bakhtyari",
		"IsOfficial" : "F",
		"Percentage" : 1.7
	},
	{
		"CountryCode" : "IRN",
		"Language" : "Balochi",
		"IsOfficial" : "F",
		"Percentage" : 2.3
	},
	{
		"CountryCode" : "IRN",
		"Language" : "Gilaki",
		"IsOfficial" : "F",
		"Percentage" : 5.3
	},
	{
		"CountryCode" : "IRN",
		"Language" : "Kurdish",
		"IsOfficial" : "F",
		"Percentage" : 9.1
	},
	{
		"CountryCode" : "IRN",
		"Language" : "Luri",
		"IsOfficial" : "F",
		"Percentage" : 4.3
	},
	{
		"CountryCode" : "IRN",
		"Language" : "Mazandarani",
		"IsOfficial" : "F",
		"Percentage" : 3.6
	},
	{
		"CountryCode" : "IRN",
		"Language" : "Persian",
		"IsOfficial" : "T",
		"Percentage" : 45.7
	},
	{
		"CountryCode" : "IRN",
		"Language" : "Turkmenian",
		"IsOfficial" : "F",
		"Percentage" : 1.6
	},
	{
		"CountryCode" : "IRQ",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 77.2
	},
	{
		"CountryCode" : "IRQ",
		"Language" : "Assyrian",
		"IsOfficial" : "F",
		"Percentage" : 0.8
	},
	{
		"CountryCode" : "IRQ",
		"Language" : "Azerbaijani",
		"IsOfficial" : "F",
		"Percentage" : 1.7
	},
	{
		"CountryCode" : "IRQ",
		"Language" : "Kurdish",
		"IsOfficial" : "F",
		"Percentage" : 19.0
	},
	{
		"CountryCode" : "IRQ",
		"Language" : "Persian",
		"IsOfficial" : "F",
		"Percentage" : 0.8
	},
	{
		"CountryCode" : "ISL",
		"Language" : "English",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "ISL",
		"Language" : "Icelandic",
		"IsOfficial" : "T",
		"Percentage" : 95.7
	},
	{
		"CountryCode" : "ISR",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 18.0
	},
	{
		"CountryCode" : "ISR",
		"Language" : "Hebrew",
		"IsOfficial" : "T",
		"Percentage" : 63.1
	},
	{
		"CountryCode" : "ISR",
		"Language" : "Russian",
		"IsOfficial" : "F",
		"Percentage" : 8.9
	},
	{
		"CountryCode" : "ITA",
		"Language" : "Albaniana",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "ITA",
		"Language" : "French",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "ITA",
		"Language" : "Friuli",
		"IsOfficial" : "F",
		"Percentage" : 1.2
	},
	{
		"CountryCode" : "ITA",
		"Language" : "German",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "ITA",
		"Language" : "Italian",
		"IsOfficial" : "T",
		"Percentage" : 94.1
	},
	{
		"CountryCode" : "ITA",
		"Language" : "Romani",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "ITA",
		"Language" : "Sardinian",
		"IsOfficial" : "F",
		"Percentage" : 2.7
	},
	{
		"CountryCode" : "ITA",
		"Language" : "Slovene",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "JAM",
		"Language" : "Creole English",
		"IsOfficial" : "F",
		"Percentage" : 94.2
	},
	{
		"CountryCode" : "JAM",
		"Language" : "Hindi",
		"IsOfficial" : "F",
		"Percentage" : 1.9
	},
	{
		"CountryCode" : "JOR",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 97.9
	},
	{
		"CountryCode" : "JOR",
		"Language" : "Armenian",
		"IsOfficial" : "F",
		"Percentage" : 1.0
	},
	{
		"CountryCode" : "JOR",
		"Language" : "Circassian",
		"IsOfficial" : "F",
		"Percentage" : 1.0
	},
	{
		"CountryCode" : "JPN",
		"Language" : "Ainu",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "JPN",
		"Language" : "Chinese",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "JPN",
		"Language" : "English",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "JPN",
		"Language" : "Japanese",
		"IsOfficial" : "T",
		"Percentage" : 99.1
	},
	{
		"CountryCode" : "JPN",
		"Language" : "Korean",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "JPN",
		"Language" : "Philippene Languages",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "KAZ",
		"Language" : "German",
		"IsOfficial" : "F",
		"Percentage" : 3.1
	},
	{
		"CountryCode" : "KAZ",
		"Language" : "Kazakh",
		"IsOfficial" : "T",
		"Percentage" : 46.0
	},
	{
		"CountryCode" : "KAZ",
		"Language" : "Russian",
		"IsOfficial" : "F",
		"Percentage" : 34.7
	},
	{
		"CountryCode" : "KAZ",
		"Language" : "Tatar",
		"IsOfficial" : "F",
		"Percentage" : 2.0
	},
	{
		"CountryCode" : "KAZ",
		"Language" : "Ukrainian",
		"IsOfficial" : "F",
		"Percentage" : 5.0
	},
	{
		"CountryCode" : "KAZ",
		"Language" : "Uzbek",
		"IsOfficial" : "F",
		"Percentage" : 2.3
	},
	{
		"CountryCode" : "KEN",
		"Language" : "Gusii",
		"IsOfficial" : "F",
		"Percentage" : 6.1
	},
	{
		"CountryCode" : "KEN",
		"Language" : "Kalenjin",
		"IsOfficial" : "F",
		"Percentage" : 10.8
	},
	{
		"CountryCode" : "KEN",
		"Language" : "Kamba",
		"IsOfficial" : "F",
		"Percentage" : 11.2
	},
	{
		"CountryCode" : "KEN",
		"Language" : "Kikuyu",
		"IsOfficial" : "F",
		"Percentage" : 20.9
	},
	{
		"CountryCode" : "KEN",
		"Language" : "Luhya",
		"IsOfficial" : "F",
		"Percentage" : 13.8
	},
	{
		"CountryCode" : "KEN",
		"Language" : "Luo",
		"IsOfficial" : "F",
		"Percentage" : 12.8
	},
	{
		"CountryCode" : "KEN",
		"Language" : "Masai",
		"IsOfficial" : "F",
		"Percentage" : 1.6
	},
	{
		"CountryCode" : "KEN",
		"Language" : "Meru",
		"IsOfficial" : "F",
		"Percentage" : 5.5
	},
	{
		"CountryCode" : "KEN",
		"Language" : "Nyika",
		"IsOfficial" : "F",
		"Percentage" : 4.8
	},
	{
		"CountryCode" : "KEN",
		"Language" : "Turkana",
		"IsOfficial" : "F",
		"Percentage" : 1.4
	},
	{
		"CountryCode" : "KGZ",
		"Language" : "Kazakh",
		"IsOfficial" : "F",
		"Percentage" : 0.8
	},
	{
		"CountryCode" : "KGZ",
		"Language" : "Kirgiz",
		"IsOfficial" : "T",
		"Percentage" : 59.7
	},
	{
		"CountryCode" : "KGZ",
		"Language" : "Russian",
		"IsOfficial" : "T",
		"Percentage" : 16.2
	},
	{
		"CountryCode" : "KGZ",
		"Language" : "Tadzhik",
		"IsOfficial" : "F",
		"Percentage" : 0.8
	},
	{
		"CountryCode" : "KGZ",
		"Language" : "Tatar",
		"IsOfficial" : "F",
		"Percentage" : 1.3
	},
	{
		"CountryCode" : "KGZ",
		"Language" : "Ukrainian",
		"IsOfficial" : "F",
		"Percentage" : 1.7
	},
	{
		"CountryCode" : "KGZ",
		"Language" : "Uzbek",
		"IsOfficial" : "F",
		"Percentage" : 14.1
	},
	{
		"CountryCode" : "KHM",
		"Language" : "Chinese",
		"IsOfficial" : "F",
		"Percentage" : 3.1
	},
	{
		"CountryCode" : "KHM",
		"Language" : "Khmer",
		"IsOfficial" : "T",
		"Percentage" : 88.6
	},
	{
		"CountryCode" : "KHM",
		"Language" : "Tšam",
		"IsOfficial" : "F",
		"Percentage" : 2.4
	},
	{
		"CountryCode" : "KHM",
		"Language" : "Vietnamese",
		"IsOfficial" : "F",
		"Percentage" : 5.5
	},
	{
		"CountryCode" : "KIR",
		"Language" : "Kiribati",
		"IsOfficial" : "T",
		"Percentage" : 98.9
	},
	{
		"CountryCode" : "KIR",
		"Language" : "Tuvalu",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "KNA",
		"Language" : "Creole English",
		"IsOfficial" : "F",
		"Percentage" : 100.0
	},
	{
		"CountryCode" : "KNA",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "KOR",
		"Language" : "Chinese",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "KOR",
		"Language" : "Korean",
		"IsOfficial" : "T",
		"Percentage" : 99.9
	},
	{
		"CountryCode" : "KWT",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 78.1
	},
	{
		"CountryCode" : "KWT",
		"Language" : "English",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "LAO",
		"Language" : "Lao",
		"IsOfficial" : "T",
		"Percentage" : 67.2
	},
	{
		"CountryCode" : "LAO",
		"Language" : "Lao-Soung",
		"IsOfficial" : "F",
		"Percentage" : 5.2
	},
	{
		"CountryCode" : "LAO",
		"Language" : "Mon-khmer",
		"IsOfficial" : "F",
		"Percentage" : 16.5
	},
	{
		"CountryCode" : "LAO",
		"Language" : "Thai",
		"IsOfficial" : "F",
		"Percentage" : 7.8
	},
	{
		"CountryCode" : "LBN",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 93.0
	},
	{
		"CountryCode" : "LBN",
		"Language" : "Armenian",
		"IsOfficial" : "F",
		"Percentage" : 5.9
	},
	{
		"CountryCode" : "LBN",
		"Language" : "French",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "LBR",
		"Language" : "Bassa",
		"IsOfficial" : "F",
		"Percentage" : 13.7
	},
	{
		"CountryCode" : "LBR",
		"Language" : "Gio",
		"IsOfficial" : "F",
		"Percentage" : 7.9
	},
	{
		"CountryCode" : "LBR",
		"Language" : "Grebo",
		"IsOfficial" : "F",
		"Percentage" : 8.9
	},
	{
		"CountryCode" : "LBR",
		"Language" : "Kpelle",
		"IsOfficial" : "F",
		"Percentage" : 19.5
	},
	{
		"CountryCode" : "LBR",
		"Language" : "Kru",
		"IsOfficial" : "F",
		"Percentage" : 7.2
	},
	{
		"CountryCode" : "LBR",
		"Language" : "Loma",
		"IsOfficial" : "F",
		"Percentage" : 5.8
	},
	{
		"CountryCode" : "LBR",
		"Language" : "Malinke",
		"IsOfficial" : "F",
		"Percentage" : 5.1
	},
	{
		"CountryCode" : "LBR",
		"Language" : "Mano",
		"IsOfficial" : "F",
		"Percentage" : 7.2
	},
	{
		"CountryCode" : "LBY",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 96.0
	},
	{
		"CountryCode" : "LBY",
		"Language" : "Berberi",
		"IsOfficial" : "F",
		"Percentage" : 1.0
	},
	{
		"CountryCode" : "LCA",
		"Language" : "Creole French",
		"IsOfficial" : "F",
		"Percentage" : 80.0
	},
	{
		"CountryCode" : "LCA",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 20.0
	},
	{
		"CountryCode" : "LIE",
		"Language" : "German",
		"IsOfficial" : "T",
		"Percentage" : 89.0
	},
	{
		"CountryCode" : "LIE",
		"Language" : "Italian",
		"IsOfficial" : "F",
		"Percentage" : 2.5
	},
	{
		"CountryCode" : "LIE",
		"Language" : "Turkish",
		"IsOfficial" : "F",
		"Percentage" : 2.5
	},
	{
		"CountryCode" : "LKA",
		"Language" : "Mixed Languages",
		"IsOfficial" : "F",
		"Percentage" : 19.6
	},
	{
		"CountryCode" : "LKA",
		"Language" : "Singali",
		"IsOfficial" : "T",
		"Percentage" : 60.3
	},
	{
		"CountryCode" : "LKA",
		"Language" : "Tamil",
		"IsOfficial" : "T",
		"Percentage" : 19.6
	},
	{
		"CountryCode" : "LSO",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "LSO",
		"Language" : "Sotho",
		"IsOfficial" : "T",
		"Percentage" : 85.0
	},
	{
		"CountryCode" : "LSO",
		"Language" : "Zulu",
		"IsOfficial" : "F",
		"Percentage" : 15.0
	},
	{
		"CountryCode" : "LTU",
		"Language" : "Belorussian",
		"IsOfficial" : "F",
		"Percentage" : 1.4
	},
	{
		"CountryCode" : "LTU",
		"Language" : "Lithuanian",
		"IsOfficial" : "T",
		"Percentage" : 81.6
	},
	{
		"CountryCode" : "LTU",
		"Language" : "Polish",
		"IsOfficial" : "F",
		"Percentage" : 7.0
	},
	{
		"CountryCode" : "LTU",
		"Language" : "Russian",
		"IsOfficial" : "F",
		"Percentage" : 8.1
	},
	{
		"CountryCode" : "LTU",
		"Language" : "Ukrainian",
		"IsOfficial" : "F",
		"Percentage" : 1.1
	},
	{
		"CountryCode" : "LUX",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 4.2
	},
	{
		"CountryCode" : "LUX",
		"Language" : "German",
		"IsOfficial" : "T",
		"Percentage" : 2.3
	},
	{
		"CountryCode" : "LUX",
		"Language" : "Italian",
		"IsOfficial" : "F",
		"Percentage" : 4.6
	},
	{
		"CountryCode" : "LUX",
		"Language" : "Luxembourgish",
		"IsOfficial" : "T",
		"Percentage" : 64.4
	},
	{
		"CountryCode" : "LUX",
		"Language" : "Portuguese",
		"IsOfficial" : "F",
		"Percentage" : 13.0
	},
	{
		"CountryCode" : "LVA",
		"Language" : "Belorussian",
		"IsOfficial" : "F",
		"Percentage" : 4.1
	},
	{
		"CountryCode" : "LVA",
		"Language" : "Latvian",
		"IsOfficial" : "T",
		"Percentage" : 55.1
	},
	{
		"CountryCode" : "LVA",
		"Language" : "Lithuanian",
		"IsOfficial" : "F",
		"Percentage" : 1.2
	},
	{
		"CountryCode" : "LVA",
		"Language" : "Polish",
		"IsOfficial" : "F",
		"Percentage" : 2.1
	},
	{
		"CountryCode" : "LVA",
		"Language" : "Russian",
		"IsOfficial" : "F",
		"Percentage" : 32.5
	},
	{
		"CountryCode" : "LVA",
		"Language" : "Ukrainian",
		"IsOfficial" : "F",
		"Percentage" : 2.9
	},
	{
		"CountryCode" : "MAC",
		"Language" : "Canton Chinese",
		"IsOfficial" : "F",
		"Percentage" : 85.6
	},
	{
		"CountryCode" : "MAC",
		"Language" : "English",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "MAC",
		"Language" : "Mandarin Chinese",
		"IsOfficial" : "F",
		"Percentage" : 1.2
	},
	{
		"CountryCode" : "MAC",
		"Language" : "Portuguese",
		"IsOfficial" : "T",
		"Percentage" : 2.3
	},
	{
		"CountryCode" : "MAR",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 65.0
	},
	{
		"CountryCode" : "MAR",
		"Language" : "Berberi",
		"IsOfficial" : "F",
		"Percentage" : 33.0
	},
	{
		"CountryCode" : "MCO",
		"Language" : "English",
		"IsOfficial" : "F",
		"Percentage" : 6.5
	},
	{
		"CountryCode" : "MCO",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 41.9
	},
	{
		"CountryCode" : "MCO",
		"Language" : "Italian",
		"IsOfficial" : "F",
		"Percentage" : 16.1
	},
	{
		"CountryCode" : "MCO",
		"Language" : "Monegasque",
		"IsOfficial" : "F",
		"Percentage" : 16.1
	},
	{
		"CountryCode" : "MDA",
		"Language" : "Bulgariana",
		"IsOfficial" : "F",
		"Percentage" : 1.6
	},
	{
		"CountryCode" : "MDA",
		"Language" : "Gagauzi",
		"IsOfficial" : "F",
		"Percentage" : 3.2
	},
	{
		"CountryCode" : "MDA",
		"Language" : "Romanian",
		"IsOfficial" : "T",
		"Percentage" : 61.9
	},
	{
		"CountryCode" : "MDA",
		"Language" : "Russian",
		"IsOfficial" : "F",
		"Percentage" : 23.2
	},
	{
		"CountryCode" : "MDA",
		"Language" : "Ukrainian",
		"IsOfficial" : "F",
		"Percentage" : 8.6
	},
	{
		"CountryCode" : "MDG",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "MDG",
		"Language" : "Malagasy",
		"IsOfficial" : "T",
		"Percentage" : 98.9
	},
	{
		"CountryCode" : "MDV",
		"Language" : "Dhivehi",
		"IsOfficial" : "T",
		"Percentage" : 100.0
	},
	{
		"CountryCode" : "MDV",
		"Language" : "English",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "MEX",
		"Language" : "Mixtec",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "MEX",
		"Language" : "Náhuatl",
		"IsOfficial" : "F",
		"Percentage" : 1.8
	},
	{
		"CountryCode" : "MEX",
		"Language" : "Otomí",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "MEX",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 92.1
	},
	{
		"CountryCode" : "MEX",
		"Language" : "Yucatec",
		"IsOfficial" : "F",
		"Percentage" : 1.1
	},
	{
		"CountryCode" : "MEX",
		"Language" : "Zapotec",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "MHL",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "MHL",
		"Language" : "Marshallese",
		"IsOfficial" : "T",
		"Percentage" : 96.8
	},
	{
		"CountryCode" : "MKD",
		"Language" : "Albaniana",
		"IsOfficial" : "F",
		"Percentage" : 22.9
	},
	{
		"CountryCode" : "MKD",
		"Language" : "Macedonian",
		"IsOfficial" : "T",
		"Percentage" : 66.5
	},
	{
		"CountryCode" : "MKD",
		"Language" : "Romani",
		"IsOfficial" : "F",
		"Percentage" : 2.3
	},
	{
		"CountryCode" : "MKD",
		"Language" : "Serbo-Croatian",
		"IsOfficial" : "F",
		"Percentage" : 2.0
	},
	{
		"CountryCode" : "MKD",
		"Language" : "Turkish",
		"IsOfficial" : "F",
		"Percentage" : 4.0
	},
	{
		"CountryCode" : "MLI",
		"Language" : "Bambara",
		"IsOfficial" : "F",
		"Percentage" : 31.8
	},
	{
		"CountryCode" : "MLI",
		"Language" : "Ful",
		"IsOfficial" : "F",
		"Percentage" : 13.9
	},
	{
		"CountryCode" : "MLI",
		"Language" : "Senufo and Minianka",
		"IsOfficial" : "F",
		"Percentage" : 12.0
	},
	{
		"CountryCode" : "MLI",
		"Language" : "Songhai",
		"IsOfficial" : "F",
		"Percentage" : 6.9
	},
	{
		"CountryCode" : "MLI",
		"Language" : "Soninke",
		"IsOfficial" : "F",
		"Percentage" : 8.7
	},
	{
		"CountryCode" : "MLI",
		"Language" : "Tamashek",
		"IsOfficial" : "F",
		"Percentage" : 7.3
	},
	{
		"CountryCode" : "MLT",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 2.1
	},
	{
		"CountryCode" : "MLT",
		"Language" : "Maltese",
		"IsOfficial" : "T",
		"Percentage" : 95.8
	},
	{
		"CountryCode" : "MMR",
		"Language" : "Burmese",
		"IsOfficial" : "T",
		"Percentage" : 69.0
	},
	{
		"CountryCode" : "MMR",
		"Language" : "Chin",
		"IsOfficial" : "F",
		"Percentage" : 2.2
	},
	{
		"CountryCode" : "MMR",
		"Language" : "Kachin",
		"IsOfficial" : "F",
		"Percentage" : 1.4
	},
	{
		"CountryCode" : "MMR",
		"Language" : "Karen",
		"IsOfficial" : "F",
		"Percentage" : 6.2
	},
	{
		"CountryCode" : "MMR",
		"Language" : "Kayah",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "MMR",
		"Language" : "Mon",
		"IsOfficial" : "F",
		"Percentage" : 2.4
	},
	{
		"CountryCode" : "MMR",
		"Language" : "Rakhine",
		"IsOfficial" : "F",
		"Percentage" : 4.5
	},
	{
		"CountryCode" : "MMR",
		"Language" : "Shan",
		"IsOfficial" : "F",
		"Percentage" : 8.5
	},
	{
		"CountryCode" : "MNG",
		"Language" : "Bajad",
		"IsOfficial" : "F",
		"Percentage" : 1.9
	},
	{
		"CountryCode" : "MNG",
		"Language" : "Buryat",
		"IsOfficial" : "F",
		"Percentage" : 1.7
	},
	{
		"CountryCode" : "MNG",
		"Language" : "Dariganga",
		"IsOfficial" : "F",
		"Percentage" : 1.4
	},
	{
		"CountryCode" : "MNG",
		"Language" : "Dorbet",
		"IsOfficial" : "F",
		"Percentage" : 2.7
	},
	{
		"CountryCode" : "MNG",
		"Language" : "Kazakh",
		"IsOfficial" : "F",
		"Percentage" : 5.9
	},
	{
		"CountryCode" : "MNG",
		"Language" : "Mongolian",
		"IsOfficial" : "T",
		"Percentage" : 78.8
	},
	{
		"CountryCode" : "MNP",
		"Language" : "Carolinian",
		"IsOfficial" : "F",
		"Percentage" : 4.8
	},
	{
		"CountryCode" : "MNP",
		"Language" : "Chamorro",
		"IsOfficial" : "F",
		"Percentage" : 30.0
	},
	{
		"CountryCode" : "MNP",
		"Language" : "Chinese",
		"IsOfficial" : "F",
		"Percentage" : 7.1
	},
	{
		"CountryCode" : "MNP",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 4.8
	},
	{
		"CountryCode" : "MNP",
		"Language" : "Korean",
		"IsOfficial" : "F",
		"Percentage" : 6.5
	},
	{
		"CountryCode" : "MNP",
		"Language" : "Philippene Languages",
		"IsOfficial" : "F",
		"Percentage" : 34.1
	},
	{
		"CountryCode" : "MOZ",
		"Language" : "Chuabo",
		"IsOfficial" : "F",
		"Percentage" : 5.7
	},
	{
		"CountryCode" : "MOZ",
		"Language" : "Lomwe",
		"IsOfficial" : "F",
		"Percentage" : 7.8
	},
	{
		"CountryCode" : "MOZ",
		"Language" : "Makua",
		"IsOfficial" : "F",
		"Percentage" : 27.8
	},
	{
		"CountryCode" : "MOZ",
		"Language" : "Marendje",
		"IsOfficial" : "F",
		"Percentage" : 3.5
	},
	{
		"CountryCode" : "MOZ",
		"Language" : "Nyanja",
		"IsOfficial" : "F",
		"Percentage" : 3.3
	},
	{
		"CountryCode" : "MOZ",
		"Language" : "Ronga",
		"IsOfficial" : "F",
		"Percentage" : 3.7
	},
	{
		"CountryCode" : "MOZ",
		"Language" : "Sena",
		"IsOfficial" : "F",
		"Percentage" : 9.4
	},
	{
		"CountryCode" : "MOZ",
		"Language" : "Shona",
		"IsOfficial" : "F",
		"Percentage" : 6.5
	},
	{
		"CountryCode" : "MOZ",
		"Language" : "Tsonga",
		"IsOfficial" : "F",
		"Percentage" : 12.4
	},
	{
		"CountryCode" : "MOZ",
		"Language" : "Tswa",
		"IsOfficial" : "F",
		"Percentage" : 6.0
	},
	{
		"CountryCode" : "MRT",
		"Language" : "Ful",
		"IsOfficial" : "F",
		"Percentage" : 1.2
	},
	{
		"CountryCode" : "MRT",
		"Language" : "Hassaniya",
		"IsOfficial" : "F",
		"Percentage" : 81.7
	},
	{
		"CountryCode" : "MRT",
		"Language" : "Soninke",
		"IsOfficial" : "F",
		"Percentage" : 2.7
	},
	{
		"CountryCode" : "MRT",
		"Language" : "Tukulor",
		"IsOfficial" : "F",
		"Percentage" : 5.4
	},
	{
		"CountryCode" : "MRT",
		"Language" : "Wolof",
		"IsOfficial" : "F",
		"Percentage" : 6.6
	},
	{
		"CountryCode" : "MRT",
		"Language" : "Zenaga",
		"IsOfficial" : "F",
		"Percentage" : 1.2
	},
	{
		"CountryCode" : "MSR",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "MTQ",
		"Language" : "Creole French",
		"IsOfficial" : "F",
		"Percentage" : 96.6
	},
	{
		"CountryCode" : "MTQ",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "MUS",
		"Language" : "Bhojpuri",
		"IsOfficial" : "F",
		"Percentage" : 21.1
	},
	{
		"CountryCode" : "MUS",
		"Language" : "Creole French",
		"IsOfficial" : "F",
		"Percentage" : 70.6
	},
	{
		"CountryCode" : "MUS",
		"Language" : "French",
		"IsOfficial" : "F",
		"Percentage" : 3.4
	},
	{
		"CountryCode" : "MUS",
		"Language" : "Hindi",
		"IsOfficial" : "F",
		"Percentage" : 1.2
	},
	{
		"CountryCode" : "MUS",
		"Language" : "Marathi",
		"IsOfficial" : "F",
		"Percentage" : 0.7
	},
	{
		"CountryCode" : "MUS",
		"Language" : "Tamil",
		"IsOfficial" : "F",
		"Percentage" : 0.8
	},
	{
		"CountryCode" : "MWI",
		"Language" : "Chichewa",
		"IsOfficial" : "T",
		"Percentage" : 58.3
	},
	{
		"CountryCode" : "MWI",
		"Language" : "Lomwe",
		"IsOfficial" : "F",
		"Percentage" : 18.4
	},
	{
		"CountryCode" : "MWI",
		"Language" : "Ngoni",
		"IsOfficial" : "F",
		"Percentage" : 6.7
	},
	{
		"CountryCode" : "MWI",
		"Language" : "Yao",
		"IsOfficial" : "F",
		"Percentage" : 13.2
	},
	{
		"CountryCode" : "MYS",
		"Language" : "Chinese",
		"IsOfficial" : "F",
		"Percentage" : 9.0
	},
	{
		"CountryCode" : "MYS",
		"Language" : "Dusun",
		"IsOfficial" : "F",
		"Percentage" : 1.1
	},
	{
		"CountryCode" : "MYS",
		"Language" : "English",
		"IsOfficial" : "F",
		"Percentage" : 1.6
	},
	{
		"CountryCode" : "MYS",
		"Language" : "Iban",
		"IsOfficial" : "F",
		"Percentage" : 2.8
	},
	{
		"CountryCode" : "MYS",
		"Language" : "Malay",
		"IsOfficial" : "T",
		"Percentage" : 58.4
	},
	{
		"CountryCode" : "MYS",
		"Language" : "Tamil",
		"IsOfficial" : "F",
		"Percentage" : 3.9
	},
	{
		"CountryCode" : "MYT",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 20.3
	},
	{
		"CountryCode" : "MYT",
		"Language" : "Mahoré",
		"IsOfficial" : "F",
		"Percentage" : 41.9
	},
	{
		"CountryCode" : "MYT",
		"Language" : "Malagasy",
		"IsOfficial" : "F",
		"Percentage" : 16.1
	},
	{
		"CountryCode" : "NAM",
		"Language" : "Afrikaans",
		"IsOfficial" : "F",
		"Percentage" : 9.5
	},
	{
		"CountryCode" : "NAM",
		"Language" : "Caprivi",
		"IsOfficial" : "F",
		"Percentage" : 4.7
	},
	{
		"CountryCode" : "NAM",
		"Language" : "German",
		"IsOfficial" : "F",
		"Percentage" : 0.9
	},
	{
		"CountryCode" : "NAM",
		"Language" : "Herero",
		"IsOfficial" : "F",
		"Percentage" : 8.0
	},
	{
		"CountryCode" : "NAM",
		"Language" : "Kavango",
		"IsOfficial" : "F",
		"Percentage" : 9.7
	},
	{
		"CountryCode" : "NAM",
		"Language" : "Nama",
		"IsOfficial" : "F",
		"Percentage" : 12.4
	},
	{
		"CountryCode" : "NAM",
		"Language" : "Ovambo",
		"IsOfficial" : "F",
		"Percentage" : 50.7
	},
	{
		"CountryCode" : "NAM",
		"Language" : "San",
		"IsOfficial" : "F",
		"Percentage" : 1.9
	},
	{
		"CountryCode" : "NCL",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 34.3
	},
	{
		"CountryCode" : "NCL",
		"Language" : "Malenasian Languages",
		"IsOfficial" : "F",
		"Percentage" : 45.4
	},
	{
		"CountryCode" : "NCL",
		"Language" : "Polynesian Languages",
		"IsOfficial" : "F",
		"Percentage" : 11.6
	},
	{
		"CountryCode" : "NER",
		"Language" : "Ful",
		"IsOfficial" : "F",
		"Percentage" : 9.7
	},
	{
		"CountryCode" : "NER",
		"Language" : "Hausa",
		"IsOfficial" : "F",
		"Percentage" : 53.1
	},
	{
		"CountryCode" : "NER",
		"Language" : "Kanuri",
		"IsOfficial" : "F",
		"Percentage" : 4.4
	},
	{
		"CountryCode" : "NER",
		"Language" : "Songhai-zerma",
		"IsOfficial" : "F",
		"Percentage" : 21.2
	},
	{
		"CountryCode" : "NER",
		"Language" : "Tamashek",
		"IsOfficial" : "F",
		"Percentage" : 10.4
	},
	{
		"CountryCode" : "NFK",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "NGA",
		"Language" : "Bura",
		"IsOfficial" : "F",
		"Percentage" : 1.6
	},
	{
		"CountryCode" : "NGA",
		"Language" : "Edo",
		"IsOfficial" : "F",
		"Percentage" : 3.3
	},
	{
		"CountryCode" : "NGA",
		"Language" : "Ful",
		"IsOfficial" : "F",
		"Percentage" : 11.3
	},
	{
		"CountryCode" : "NGA",
		"Language" : "Hausa",
		"IsOfficial" : "F",
		"Percentage" : 21.1
	},
	{
		"CountryCode" : "NGA",
		"Language" : "Ibibio",
		"IsOfficial" : "F",
		"Percentage" : 5.6
	},
	{
		"CountryCode" : "NGA",
		"Language" : "Ibo",
		"IsOfficial" : "F",
		"Percentage" : 18.1
	},
	{
		"CountryCode" : "NGA",
		"Language" : "Ijo",
		"IsOfficial" : "F",
		"Percentage" : 1.8
	},
	{
		"CountryCode" : "NGA",
		"Language" : "Joruba",
		"IsOfficial" : "F",
		"Percentage" : 21.4
	},
	{
		"CountryCode" : "NGA",
		"Language" : "Kanuri",
		"IsOfficial" : "F",
		"Percentage" : 4.1
	},
	{
		"CountryCode" : "NGA",
		"Language" : "Tiv",
		"IsOfficial" : "F",
		"Percentage" : 2.3
	},
	{
		"CountryCode" : "NIC",
		"Language" : "Creole English",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "NIC",
		"Language" : "Miskito",
		"IsOfficial" : "F",
		"Percentage" : 1.6
	},
	{
		"CountryCode" : "NIC",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 97.6
	},
	{
		"CountryCode" : "NIC",
		"Language" : "Sumo",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "NIU",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "NIU",
		"Language" : "Niue",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "NLD",
		"Language" : "Arabic",
		"IsOfficial" : "F",
		"Percentage" : 0.9
	},
	{
		"CountryCode" : "NLD",
		"Language" : "Dutch",
		"IsOfficial" : "T",
		"Percentage" : 95.6
	},
	{
		"CountryCode" : "NLD",
		"Language" : "Fries",
		"IsOfficial" : "F",
		"Percentage" : 3.7
	},
	{
		"CountryCode" : "NLD",
		"Language" : "Turkish",
		"IsOfficial" : "F",
		"Percentage" : 0.8
	},
	{
		"CountryCode" : "NOR",
		"Language" : "Danish",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "NOR",
		"Language" : "English",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "NOR",
		"Language" : "Norwegian",
		"IsOfficial" : "T",
		"Percentage" : 96.6
	},
	{
		"CountryCode" : "NOR",
		"Language" : "Saame",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "NOR",
		"Language" : "Swedish",
		"IsOfficial" : "F",
		"Percentage" : 0.3
	},
	{
		"CountryCode" : "NPL",
		"Language" : "Bhojpuri",
		"IsOfficial" : "F",
		"Percentage" : 7.5
	},
	{
		"CountryCode" : "NPL",
		"Language" : "Hindi",
		"IsOfficial" : "F",
		"Percentage" : 3.0
	},
	{
		"CountryCode" : "NPL",
		"Language" : "Maithili",
		"IsOfficial" : "F",
		"Percentage" : 11.9
	},
	{
		"CountryCode" : "NPL",
		"Language" : "Nepali",
		"IsOfficial" : "T",
		"Percentage" : 50.4
	},
	{
		"CountryCode" : "NPL",
		"Language" : "Newari",
		"IsOfficial" : "F",
		"Percentage" : 3.7
	},
	{
		"CountryCode" : "NPL",
		"Language" : "Tamang",
		"IsOfficial" : "F",
		"Percentage" : 4.9
	},
	{
		"CountryCode" : "NPL",
		"Language" : "Tharu",
		"IsOfficial" : "F",
		"Percentage" : 5.4
	},
	{
		"CountryCode" : "NRU",
		"Language" : "Chinese",
		"IsOfficial" : "F",
		"Percentage" : 8.5
	},
	{
		"CountryCode" : "NRU",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 7.5
	},
	{
		"CountryCode" : "NRU",
		"Language" : "Kiribati",
		"IsOfficial" : "F",
		"Percentage" : 17.9
	},
	{
		"CountryCode" : "NRU",
		"Language" : "Nauru",
		"IsOfficial" : "T",
		"Percentage" : 57.5
	},
	{
		"CountryCode" : "NRU",
		"Language" : "Tuvalu",
		"IsOfficial" : "F",
		"Percentage" : 8.5
	},
	{
		"CountryCode" : "NZL",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 87.0
	},
	{
		"CountryCode" : "NZL",
		"Language" : "Maori",
		"IsOfficial" : "F",
		"Percentage" : 4.3
	},
	{
		"CountryCode" : "OMN",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 76.7
	},
	{
		"CountryCode" : "OMN",
		"Language" : "Balochi",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "PAK",
		"Language" : "Balochi",
		"IsOfficial" : "F",
		"Percentage" : 3.0
	},
	{
		"CountryCode" : "PAK",
		"Language" : "Brahui",
		"IsOfficial" : "F",
		"Percentage" : 1.2
	},
	{
		"CountryCode" : "PAK",
		"Language" : "Hindko",
		"IsOfficial" : "F",
		"Percentage" : 2.4
	},
	{
		"CountryCode" : "PAK",
		"Language" : "Pashto",
		"IsOfficial" : "F",
		"Percentage" : 13.1
	},
	{
		"CountryCode" : "PAK",
		"Language" : "Punjabi",
		"IsOfficial" : "F",
		"Percentage" : 48.2
	},
	{
		"CountryCode" : "PAK",
		"Language" : "Saraiki",
		"IsOfficial" : "F",
		"Percentage" : 9.8
	},
	{
		"CountryCode" : "PAK",
		"Language" : "Sindhi",
		"IsOfficial" : "F",
		"Percentage" : 11.8
	},
	{
		"CountryCode" : "PAK",
		"Language" : "Urdu",
		"IsOfficial" : "T",
		"Percentage" : 7.6
	},
	{
		"CountryCode" : "PAN",
		"Language" : "Arabic",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "PAN",
		"Language" : "Creole English",
		"IsOfficial" : "F",
		"Percentage" : 14.0
	},
	{
		"CountryCode" : "PAN",
		"Language" : "Cuna",
		"IsOfficial" : "F",
		"Percentage" : 2.0
	},
	{
		"CountryCode" : "PAN",
		"Language" : "Embera",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "PAN",
		"Language" : "Guaymí",
		"IsOfficial" : "F",
		"Percentage" : 5.3
	},
	{
		"CountryCode" : "PAN",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 76.8
	},
	{
		"CountryCode" : "PCN",
		"Language" : "Pitcairnese",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "PER",
		"Language" : "Aimará",
		"IsOfficial" : "T",
		"Percentage" : 2.3
	},
	{
		"CountryCode" : "PER",
		"Language" : "Ketšua",
		"IsOfficial" : "T",
		"Percentage" : 16.4
	},
	{
		"CountryCode" : "PER",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 79.8
	},
	{
		"CountryCode" : "PHL",
		"Language" : "Bicol",
		"IsOfficial" : "F",
		"Percentage" : 5.7
	},
	{
		"CountryCode" : "PHL",
		"Language" : "Cebuano",
		"IsOfficial" : "F",
		"Percentage" : 23.3
	},
	{
		"CountryCode" : "PHL",
		"Language" : "Hiligaynon",
		"IsOfficial" : "F",
		"Percentage" : 9.1
	},
	{
		"CountryCode" : "PHL",
		"Language" : "Ilocano",
		"IsOfficial" : "F",
		"Percentage" : 9.3
	},
	{
		"CountryCode" : "PHL",
		"Language" : "Maguindanao",
		"IsOfficial" : "F",
		"Percentage" : 1.4
	},
	{
		"CountryCode" : "PHL",
		"Language" : "Maranao",
		"IsOfficial" : "F",
		"Percentage" : 1.3
	},
	{
		"CountryCode" : "PHL",
		"Language" : "Pampango",
		"IsOfficial" : "F",
		"Percentage" : 3.0
	},
	{
		"CountryCode" : "PHL",
		"Language" : "Pangasinan",
		"IsOfficial" : "F",
		"Percentage" : 1.8
	},
	{
		"CountryCode" : "PHL",
		"Language" : "Pilipino",
		"IsOfficial" : "T",
		"Percentage" : 29.3
	},
	{
		"CountryCode" : "PHL",
		"Language" : "Waray-waray",
		"IsOfficial" : "F",
		"Percentage" : 3.8
	},
	{
		"CountryCode" : "PLW",
		"Language" : "Chinese",
		"IsOfficial" : "F",
		"Percentage" : 1.6
	},
	{
		"CountryCode" : "PLW",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 3.2
	},
	{
		"CountryCode" : "PLW",
		"Language" : "Palau",
		"IsOfficial" : "T",
		"Percentage" : 82.2
	},
	{
		"CountryCode" : "PLW",
		"Language" : "Philippene Languages",
		"IsOfficial" : "F",
		"Percentage" : 9.2
	},
	{
		"CountryCode" : "PNG",
		"Language" : "Malenasian Languages",
		"IsOfficial" : "F",
		"Percentage" : 20.0
	},
	{
		"CountryCode" : "PNG",
		"Language" : "Papuan Languages",
		"IsOfficial" : "F",
		"Percentage" : 78.1
	},
	{
		"CountryCode" : "POL",
		"Language" : "Belorussian",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "POL",
		"Language" : "German",
		"IsOfficial" : "F",
		"Percentage" : 1.3
	},
	{
		"CountryCode" : "POL",
		"Language" : "Polish",
		"IsOfficial" : "T",
		"Percentage" : 97.6
	},
	{
		"CountryCode" : "POL",
		"Language" : "Ukrainian",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "PRI",
		"Language" : "English",
		"IsOfficial" : "F",
		"Percentage" : 47.4
	},
	{
		"CountryCode" : "PRI",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 51.3
	},
	{
		"CountryCode" : "PRK",
		"Language" : "Chinese",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "PRK",
		"Language" : "Korean",
		"IsOfficial" : "T",
		"Percentage" : 99.9
	},
	{
		"CountryCode" : "PRT",
		"Language" : "Portuguese",
		"IsOfficial" : "T",
		"Percentage" : 99.0
	},
	{
		"CountryCode" : "PRY",
		"Language" : "German",
		"IsOfficial" : "F",
		"Percentage" : 0.9
	},
	{
		"CountryCode" : "PRY",
		"Language" : "Guaraní",
		"IsOfficial" : "T",
		"Percentage" : 40.1
	},
	{
		"CountryCode" : "PRY",
		"Language" : "Portuguese",
		"IsOfficial" : "F",
		"Percentage" : 3.2
	},
	{
		"CountryCode" : "PRY",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 55.1
	},
	{
		"CountryCode" : "PSE",
		"Language" : "Arabic",
		"IsOfficial" : "F",
		"Percentage" : 95.9
	},
	{
		"CountryCode" : "PSE",
		"Language" : "Hebrew",
		"IsOfficial" : "F",
		"Percentage" : 4.1
	},
	{
		"CountryCode" : "PYF",
		"Language" : "Chinese",
		"IsOfficial" : "F",
		"Percentage" : 2.9
	},
	{
		"CountryCode" : "PYF",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 40.8
	},
	{
		"CountryCode" : "PYF",
		"Language" : "Tahitian",
		"IsOfficial" : "F",
		"Percentage" : 46.4
	},
	{
		"CountryCode" : "QAT",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 40.7
	},
	{
		"CountryCode" : "QAT",
		"Language" : "Urdu",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "REU",
		"Language" : "Chinese",
		"IsOfficial" : "F",
		"Percentage" : 2.8
	},
	{
		"CountryCode" : "REU",
		"Language" : "Comorian",
		"IsOfficial" : "F",
		"Percentage" : 2.8
	},
	{
		"CountryCode" : "REU",
		"Language" : "Creole French",
		"IsOfficial" : "F",
		"Percentage" : 91.5
	},
	{
		"CountryCode" : "REU",
		"Language" : "Malagasy",
		"IsOfficial" : "F",
		"Percentage" : 1.4
	},
	{
		"CountryCode" : "REU",
		"Language" : "Tamil",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "ROM",
		"Language" : "German",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "ROM",
		"Language" : "Hungarian",
		"IsOfficial" : "F",
		"Percentage" : 7.2
	},
	{
		"CountryCode" : "ROM",
		"Language" : "Romani",
		"IsOfficial" : "T",
		"Percentage" : 0.7
	},
	{
		"CountryCode" : "ROM",
		"Language" : "Romanian",
		"IsOfficial" : "T",
		"Percentage" : 90.7
	},
	{
		"CountryCode" : "ROM",
		"Language" : "Serbo-Croatian",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "ROM",
		"Language" : "Ukrainian",
		"IsOfficial" : "F",
		"Percentage" : 0.3
	},
	{
		"CountryCode" : "RUS",
		"Language" : "Avarian",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "RUS",
		"Language" : "Bashkir",
		"IsOfficial" : "F",
		"Percentage" : 0.7
	},
	{
		"CountryCode" : "RUS",
		"Language" : "Belorussian",
		"IsOfficial" : "F",
		"Percentage" : 0.3
	},
	{
		"CountryCode" : "RUS",
		"Language" : "Chechen",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "RUS",
		"Language" : "Chuvash",
		"IsOfficial" : "F",
		"Percentage" : 0.9
	},
	{
		"CountryCode" : "RUS",
		"Language" : "Kazakh",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "RUS",
		"Language" : "Mari",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "RUS",
		"Language" : "Mordva",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "RUS",
		"Language" : "Russian",
		"IsOfficial" : "T",
		"Percentage" : 86.6
	},
	{
		"CountryCode" : "RUS",
		"Language" : "Tatar",
		"IsOfficial" : "F",
		"Percentage" : 3.2
	},
	{
		"CountryCode" : "RUS",
		"Language" : "Udmur",
		"IsOfficial" : "F",
		"Percentage" : 0.3
	},
	{
		"CountryCode" : "RUS",
		"Language" : "Ukrainian",
		"IsOfficial" : "F",
		"Percentage" : 1.3
	},
	{
		"CountryCode" : "RWA",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "RWA",
		"Language" : "Rwanda",
		"IsOfficial" : "T",
		"Percentage" : 100.0
	},
	{
		"CountryCode" : "SAU",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 95.0
	},
	{
		"CountryCode" : "SDN",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 49.4
	},
	{
		"CountryCode" : "SDN",
		"Language" : "Bari",
		"IsOfficial" : "F",
		"Percentage" : 2.5
	},
	{
		"CountryCode" : "SDN",
		"Language" : "Beja",
		"IsOfficial" : "F",
		"Percentage" : 6.4
	},
	{
		"CountryCode" : "SDN",
		"Language" : "Chilluk",
		"IsOfficial" : "F",
		"Percentage" : 1.7
	},
	{
		"CountryCode" : "SDN",
		"Language" : "Dinka",
		"IsOfficial" : "F",
		"Percentage" : 11.5
	},
	{
		"CountryCode" : "SDN",
		"Language" : "Fur",
		"IsOfficial" : "F",
		"Percentage" : 2.1
	},
	{
		"CountryCode" : "SDN",
		"Language" : "Lotuko",
		"IsOfficial" : "F",
		"Percentage" : 1.5
	},
	{
		"CountryCode" : "SDN",
		"Language" : "Nubian Languages",
		"IsOfficial" : "F",
		"Percentage" : 8.1
	},
	{
		"CountryCode" : "SDN",
		"Language" : "Nuer",
		"IsOfficial" : "F",
		"Percentage" : 4.9
	},
	{
		"CountryCode" : "SDN",
		"Language" : "Zande",
		"IsOfficial" : "F",
		"Percentage" : 2.7
	},
	{
		"CountryCode" : "SEN",
		"Language" : "Diola",
		"IsOfficial" : "F",
		"Percentage" : 5.0
	},
	{
		"CountryCode" : "SEN",
		"Language" : "Ful",
		"IsOfficial" : "F",
		"Percentage" : 21.7
	},
	{
		"CountryCode" : "SEN",
		"Language" : "Malinke",
		"IsOfficial" : "F",
		"Percentage" : 3.8
	},
	{
		"CountryCode" : "SEN",
		"Language" : "Serer",
		"IsOfficial" : "F",
		"Percentage" : 12.5
	},
	{
		"CountryCode" : "SEN",
		"Language" : "Soninke",
		"IsOfficial" : "F",
		"Percentage" : 1.3
	},
	{
		"CountryCode" : "SEN",
		"Language" : "Wolof",
		"IsOfficial" : "T",
		"Percentage" : 48.1
	},
	{
		"CountryCode" : "SGP",
		"Language" : "Chinese",
		"IsOfficial" : "T",
		"Percentage" : 77.1
	},
	{
		"CountryCode" : "SGP",
		"Language" : "Malay",
		"IsOfficial" : "T",
		"Percentage" : 14.1
	},
	{
		"CountryCode" : "SGP",
		"Language" : "Tamil",
		"IsOfficial" : "T",
		"Percentage" : 7.4
	},
	{
		"CountryCode" : "SHN",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "SJM",
		"Language" : "Norwegian",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "SJM",
		"Language" : "Russian",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "SLB",
		"Language" : "Malenasian Languages",
		"IsOfficial" : "F",
		"Percentage" : 85.6
	},
	{
		"CountryCode" : "SLB",
		"Language" : "Papuan Languages",
		"IsOfficial" : "F",
		"Percentage" : 8.6
	},
	{
		"CountryCode" : "SLB",
		"Language" : "Polynesian Languages",
		"IsOfficial" : "F",
		"Percentage" : 3.8
	},
	{
		"CountryCode" : "SLE",
		"Language" : "Bullom-sherbro",
		"IsOfficial" : "F",
		"Percentage" : 3.8
	},
	{
		"CountryCode" : "SLE",
		"Language" : "Ful",
		"IsOfficial" : "F",
		"Percentage" : 3.8
	},
	{
		"CountryCode" : "SLE",
		"Language" : "Kono-vai",
		"IsOfficial" : "F",
		"Percentage" : 5.1
	},
	{
		"CountryCode" : "SLE",
		"Language" : "Kuranko",
		"IsOfficial" : "F",
		"Percentage" : 3.4
	},
	{
		"CountryCode" : "SLE",
		"Language" : "Limba",
		"IsOfficial" : "F",
		"Percentage" : 8.3
	},
	{
		"CountryCode" : "SLE",
		"Language" : "Mende",
		"IsOfficial" : "F",
		"Percentage" : 34.8
	},
	{
		"CountryCode" : "SLE",
		"Language" : "Temne",
		"IsOfficial" : "F",
		"Percentage" : 31.8
	},
	{
		"CountryCode" : "SLE",
		"Language" : "Yalunka",
		"IsOfficial" : "F",
		"Percentage" : 3.4
	},
	{
		"CountryCode" : "SLV",
		"Language" : "Nahua",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "SLV",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 100.0
	},
	{
		"CountryCode" : "SMR",
		"Language" : "Italian",
		"IsOfficial" : "T",
		"Percentage" : 100.0
	},
	{
		"CountryCode" : "SOM",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "SOM",
		"Language" : "Somali",
		"IsOfficial" : "T",
		"Percentage" : 98.3
	},
	{
		"CountryCode" : "SPM",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "STP",
		"Language" : "Crioulo",
		"IsOfficial" : "F",
		"Percentage" : 86.3
	},
	{
		"CountryCode" : "STP",
		"Language" : "French",
		"IsOfficial" : "F",
		"Percentage" : 0.7
	},
	{
		"CountryCode" : "SUR",
		"Language" : "Hindi",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "SUR",
		"Language" : "Sranantonga",
		"IsOfficial" : "F",
		"Percentage" : 81.0
	},
	{
		"CountryCode" : "SVK",
		"Language" : "Czech and Moravian",
		"IsOfficial" : "F",
		"Percentage" : 1.1
	},
	{
		"CountryCode" : "SVK",
		"Language" : "Hungarian",
		"IsOfficial" : "F",
		"Percentage" : 10.5
	},
	{
		"CountryCode" : "SVK",
		"Language" : "Romani",
		"IsOfficial" : "F",
		"Percentage" : 1.7
	},
	{
		"CountryCode" : "SVK",
		"Language" : "Slovak",
		"IsOfficial" : "T",
		"Percentage" : 85.6
	},
	{
		"CountryCode" : "SVK",
		"Language" : "Ukrainian and Russian",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "SVN",
		"Language" : "Hungarian",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "SVN",
		"Language" : "Serbo-Croatian",
		"IsOfficial" : "F",
		"Percentage" : 7.9
	},
	{
		"CountryCode" : "SVN",
		"Language" : "Slovene",
		"IsOfficial" : "T",
		"Percentage" : 87.9
	},
	{
		"CountryCode" : "SWE",
		"Language" : "Arabic",
		"IsOfficial" : "F",
		"Percentage" : 0.8
	},
	{
		"CountryCode" : "SWE",
		"Language" : "Finnish",
		"IsOfficial" : "F",
		"Percentage" : 2.4
	},
	{
		"CountryCode" : "SWE",
		"Language" : "Norwegian",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "SWE",
		"Language" : "Southern Slavic Languages",
		"IsOfficial" : "F",
		"Percentage" : 1.3
	},
	{
		"CountryCode" : "SWE",
		"Language" : "Spanish",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "SWE",
		"Language" : "Swedish",
		"IsOfficial" : "T",
		"Percentage" : 89.5
	},
	{
		"CountryCode" : "SWZ",
		"Language" : "Swazi",
		"IsOfficial" : "T",
		"Percentage" : 89.9
	},
	{
		"CountryCode" : "SWZ",
		"Language" : "Zulu",
		"IsOfficial" : "F",
		"Percentage" : 2.0
	},
	{
		"CountryCode" : "SYC",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 3.8
	},
	{
		"CountryCode" : "SYC",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 1.3
	},
	{
		"CountryCode" : "SYC",
		"Language" : "Seselwa",
		"IsOfficial" : "F",
		"Percentage" : 91.3
	},
	{
		"CountryCode" : "SYR",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 90.0
	},
	{
		"CountryCode" : "SYR",
		"Language" : "Kurdish",
		"IsOfficial" : "F",
		"Percentage" : 9.0
	},
	{
		"CountryCode" : "TCA",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "TCD",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 12.3
	},
	{
		"CountryCode" : "TCD",
		"Language" : "Gorane",
		"IsOfficial" : "F",
		"Percentage" : 6.2
	},
	{
		"CountryCode" : "TCD",
		"Language" : "Hadjarai",
		"IsOfficial" : "F",
		"Percentage" : 6.7
	},
	{
		"CountryCode" : "TCD",
		"Language" : "Kanem-bornu",
		"IsOfficial" : "F",
		"Percentage" : 9.0
	},
	{
		"CountryCode" : "TCD",
		"Language" : "Mayo-kebbi",
		"IsOfficial" : "F",
		"Percentage" : 11.5
	},
	{
		"CountryCode" : "TCD",
		"Language" : "Ouaddai",
		"IsOfficial" : "F",
		"Percentage" : 8.7
	},
	{
		"CountryCode" : "TCD",
		"Language" : "Sara",
		"IsOfficial" : "F",
		"Percentage" : 27.7
	},
	{
		"CountryCode" : "TCD",
		"Language" : "Tandjile",
		"IsOfficial" : "F",
		"Percentage" : 6.5
	},
	{
		"CountryCode" : "TGO",
		"Language" : "Ane",
		"IsOfficial" : "F",
		"Percentage" : 5.7
	},
	{
		"CountryCode" : "TGO",
		"Language" : "Ewe",
		"IsOfficial" : "T",
		"Percentage" : 23.2
	},
	{
		"CountryCode" : "TGO",
		"Language" : "Gurma",
		"IsOfficial" : "F",
		"Percentage" : 3.4
	},
	{
		"CountryCode" : "TGO",
		"Language" : "Kabyé",
		"IsOfficial" : "T",
		"Percentage" : 13.8
	},
	{
		"CountryCode" : "TGO",
		"Language" : "Kotokoli",
		"IsOfficial" : "F",
		"Percentage" : 5.7
	},
	{
		"CountryCode" : "TGO",
		"Language" : "Moba",
		"IsOfficial" : "F",
		"Percentage" : 5.4
	},
	{
		"CountryCode" : "TGO",
		"Language" : "Naudemba",
		"IsOfficial" : "F",
		"Percentage" : 4.1
	},
	{
		"CountryCode" : "TGO",
		"Language" : "Watyi",
		"IsOfficial" : "F",
		"Percentage" : 10.3
	},
	{
		"CountryCode" : "THA",
		"Language" : "Chinese",
		"IsOfficial" : "F",
		"Percentage" : 12.1
	},
	{
		"CountryCode" : "THA",
		"Language" : "Khmer",
		"IsOfficial" : "F",
		"Percentage" : 1.3
	},
	{
		"CountryCode" : "THA",
		"Language" : "Kuy",
		"IsOfficial" : "F",
		"Percentage" : 1.1
	},
	{
		"CountryCode" : "THA",
		"Language" : "Lao",
		"IsOfficial" : "F",
		"Percentage" : 26.9
	},
	{
		"CountryCode" : "THA",
		"Language" : "Malay",
		"IsOfficial" : "F",
		"Percentage" : 3.6
	},
	{
		"CountryCode" : "THA",
		"Language" : "Thai",
		"IsOfficial" : "T",
		"Percentage" : 52.6
	},
	{
		"CountryCode" : "TJK",
		"Language" : "Russian",
		"IsOfficial" : "F",
		"Percentage" : 9.7
	},
	{
		"CountryCode" : "TJK",
		"Language" : "Tadzhik",
		"IsOfficial" : "T",
		"Percentage" : 62.2
	},
	{
		"CountryCode" : "TJK",
		"Language" : "Uzbek",
		"IsOfficial" : "F",
		"Percentage" : 23.2
	},
	{
		"CountryCode" : "TKL",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "TKL",
		"Language" : "Tokelau",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "TKM",
		"Language" : "Kazakh",
		"IsOfficial" : "F",
		"Percentage" : 2.0
	},
	{
		"CountryCode" : "TKM",
		"Language" : "Russian",
		"IsOfficial" : "F",
		"Percentage" : 6.7
	},
	{
		"CountryCode" : "TKM",
		"Language" : "Turkmenian",
		"IsOfficial" : "T",
		"Percentage" : 76.7
	},
	{
		"CountryCode" : "TKM",
		"Language" : "Uzbek",
		"IsOfficial" : "F",
		"Percentage" : 9.2
	},
	{
		"CountryCode" : "TMP",
		"Language" : "Portuguese",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "TMP",
		"Language" : "Sunda",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "TON",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "TON",
		"Language" : "Tongan",
		"IsOfficial" : "T",
		"Percentage" : 98.3
	},
	{
		"CountryCode" : "TTO",
		"Language" : "Creole English",
		"IsOfficial" : "F",
		"Percentage" : 2.9
	},
	{
		"CountryCode" : "TTO",
		"Language" : "English",
		"IsOfficial" : "F",
		"Percentage" : 93.5
	},
	{
		"CountryCode" : "TTO",
		"Language" : "Hindi",
		"IsOfficial" : "F",
		"Percentage" : 3.4
	},
	{
		"CountryCode" : "TUN",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 69.9
	},
	{
		"CountryCode" : "TUN",
		"Language" : "Arabic-French",
		"IsOfficial" : "F",
		"Percentage" : 26.3
	},
	{
		"CountryCode" : "TUN",
		"Language" : "Arabic-French-English",
		"IsOfficial" : "F",
		"Percentage" : 3.2
	},
	{
		"CountryCode" : "TUR",
		"Language" : "Arabic",
		"IsOfficial" : "F",
		"Percentage" : 1.4
	},
	{
		"CountryCode" : "TUR",
		"Language" : "Kurdish",
		"IsOfficial" : "F",
		"Percentage" : 10.6
	},
	{
		"CountryCode" : "TUR",
		"Language" : "Turkish",
		"IsOfficial" : "T",
		"Percentage" : 87.6
	},
	{
		"CountryCode" : "TUV",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "TUV",
		"Language" : "Kiribati",
		"IsOfficial" : "F",
		"Percentage" : 7.5
	},
	{
		"CountryCode" : "TUV",
		"Language" : "Tuvalu",
		"IsOfficial" : "T",
		"Percentage" : 92.5
	},
	{
		"CountryCode" : "TWN",
		"Language" : "Ami",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "TWN",
		"Language" : "Atayal",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "TWN",
		"Language" : "Hakka",
		"IsOfficial" : "F",
		"Percentage" : 11.0
	},
	{
		"CountryCode" : "TWN",
		"Language" : "Mandarin Chinese",
		"IsOfficial" : "T",
		"Percentage" : 20.1
	},
	{
		"CountryCode" : "TWN",
		"Language" : "Min",
		"IsOfficial" : "F",
		"Percentage" : 66.7
	},
	{
		"CountryCode" : "TWN",
		"Language" : "Paiwan",
		"IsOfficial" : "F",
		"Percentage" : 0.3
	},
	{
		"CountryCode" : "TZA",
		"Language" : "Chaga and Pare",
		"IsOfficial" : "F",
		"Percentage" : 4.9
	},
	{
		"CountryCode" : "TZA",
		"Language" : "Gogo",
		"IsOfficial" : "F",
		"Percentage" : 3.9
	},
	{
		"CountryCode" : "TZA",
		"Language" : "Ha",
		"IsOfficial" : "F",
		"Percentage" : 3.5
	},
	{
		"CountryCode" : "TZA",
		"Language" : "Haya",
		"IsOfficial" : "F",
		"Percentage" : 5.9
	},
	{
		"CountryCode" : "TZA",
		"Language" : "Hehet",
		"IsOfficial" : "F",
		"Percentage" : 6.9
	},
	{
		"CountryCode" : "TZA",
		"Language" : "Luguru",
		"IsOfficial" : "F",
		"Percentage" : 4.9
	},
	{
		"CountryCode" : "TZA",
		"Language" : "Makonde",
		"IsOfficial" : "F",
		"Percentage" : 5.9
	},
	{
		"CountryCode" : "TZA",
		"Language" : "Nyakusa",
		"IsOfficial" : "F",
		"Percentage" : 5.4
	},
	{
		"CountryCode" : "TZA",
		"Language" : "Nyamwesi",
		"IsOfficial" : "F",
		"Percentage" : 21.1
	},
	{
		"CountryCode" : "TZA",
		"Language" : "Shambala",
		"IsOfficial" : "F",
		"Percentage" : 4.3
	},
	{
		"CountryCode" : "TZA",
		"Language" : "Swahili",
		"IsOfficial" : "T",
		"Percentage" : 8.8
	},
	{
		"CountryCode" : "UGA",
		"Language" : "Acholi",
		"IsOfficial" : "F",
		"Percentage" : 4.4
	},
	{
		"CountryCode" : "UGA",
		"Language" : "Ganda",
		"IsOfficial" : "F",
		"Percentage" : 18.1
	},
	{
		"CountryCode" : "UGA",
		"Language" : "Gisu",
		"IsOfficial" : "F",
		"Percentage" : 4.5
	},
	{
		"CountryCode" : "UGA",
		"Language" : "Kiga",
		"IsOfficial" : "F",
		"Percentage" : 8.3
	},
	{
		"CountryCode" : "UGA",
		"Language" : "Lango",
		"IsOfficial" : "F",
		"Percentage" : 5.9
	},
	{
		"CountryCode" : "UGA",
		"Language" : "Lugbara",
		"IsOfficial" : "F",
		"Percentage" : 4.7
	},
	{
		"CountryCode" : "UGA",
		"Language" : "Nkole",
		"IsOfficial" : "F",
		"Percentage" : 10.7
	},
	{
		"CountryCode" : "UGA",
		"Language" : "Rwanda",
		"IsOfficial" : "F",
		"Percentage" : 3.2
	},
	{
		"CountryCode" : "UGA",
		"Language" : "Soga",
		"IsOfficial" : "F",
		"Percentage" : 8.2
	},
	{
		"CountryCode" : "UGA",
		"Language" : "Teso",
		"IsOfficial" : "F",
		"Percentage" : 6.0
	},
	{
		"CountryCode" : "UKR",
		"Language" : "Belorussian",
		"IsOfficial" : "F",
		"Percentage" : 0.3
	},
	{
		"CountryCode" : "UKR",
		"Language" : "Bulgariana",
		"IsOfficial" : "F",
		"Percentage" : 0.3
	},
	{
		"CountryCode" : "UKR",
		"Language" : "Hungarian",
		"IsOfficial" : "F",
		"Percentage" : 0.3
	},
	{
		"CountryCode" : "UKR",
		"Language" : "Polish",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "UKR",
		"Language" : "Romanian",
		"IsOfficial" : "F",
		"Percentage" : 0.7
	},
	{
		"CountryCode" : "UKR",
		"Language" : "Russian",
		"IsOfficial" : "F",
		"Percentage" : 32.9
	},
	{
		"CountryCode" : "UKR",
		"Language" : "Ukrainian",
		"IsOfficial" : "T",
		"Percentage" : 64.7
	},
	{
		"CountryCode" : "UMI",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "URY",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 95.7
	},
	{
		"CountryCode" : "USA",
		"Language" : "Chinese",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "USA",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 86.2
	},
	{
		"CountryCode" : "USA",
		"Language" : "French",
		"IsOfficial" : "F",
		"Percentage" : 0.7
	},
	{
		"CountryCode" : "USA",
		"Language" : "German",
		"IsOfficial" : "F",
		"Percentage" : 0.7
	},
	{
		"CountryCode" : "USA",
		"Language" : "Italian",
		"IsOfficial" : "F",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "USA",
		"Language" : "Japanese",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "USA",
		"Language" : "Korean",
		"IsOfficial" : "F",
		"Percentage" : 0.3
	},
	{
		"CountryCode" : "USA",
		"Language" : "Polish",
		"IsOfficial" : "F",
		"Percentage" : 0.3
	},
	{
		"CountryCode" : "USA",
		"Language" : "Portuguese",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "USA",
		"Language" : "Spanish",
		"IsOfficial" : "F",
		"Percentage" : 7.5
	},
	{
		"CountryCode" : "USA",
		"Language" : "Tagalog",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "USA",
		"Language" : "Vietnamese",
		"IsOfficial" : "F",
		"Percentage" : 0.2
	},
	{
		"CountryCode" : "UZB",
		"Language" : "Karakalpak",
		"IsOfficial" : "F",
		"Percentage" : 2.0
	},
	{
		"CountryCode" : "UZB",
		"Language" : "Kazakh",
		"IsOfficial" : "F",
		"Percentage" : 3.8
	},
	{
		"CountryCode" : "UZB",
		"Language" : "Russian",
		"IsOfficial" : "F",
		"Percentage" : 10.9
	},
	{
		"CountryCode" : "UZB",
		"Language" : "Tadzhik",
		"IsOfficial" : "F",
		"Percentage" : 4.4
	},
	{
		"CountryCode" : "UZB",
		"Language" : "Tatar",
		"IsOfficial" : "F",
		"Percentage" : 1.8
	},
	{
		"CountryCode" : "UZB",
		"Language" : "Uzbek",
		"IsOfficial" : "T",
		"Percentage" : 72.6
	},
	{
		"CountryCode" : "VAT",
		"Language" : "Italian",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "VCT",
		"Language" : "Creole English",
		"IsOfficial" : "F",
		"Percentage" : 99.1
	},
	{
		"CountryCode" : "VCT",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "VEN",
		"Language" : "Goajiro",
		"IsOfficial" : "F",
		"Percentage" : 0.4
	},
	{
		"CountryCode" : "VEN",
		"Language" : "Spanish",
		"IsOfficial" : "T",
		"Percentage" : 96.9
	},
	{
		"CountryCode" : "VEN",
		"Language" : "Warrau",
		"IsOfficial" : "F",
		"Percentage" : 0.1
	},
	{
		"CountryCode" : "VGB",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "VIR",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 81.7
	},
	{
		"CountryCode" : "VIR",
		"Language" : "French",
		"IsOfficial" : "F",
		"Percentage" : 2.5
	},
	{
		"CountryCode" : "VIR",
		"Language" : "Spanish",
		"IsOfficial" : "F",
		"Percentage" : 13.3
	},
	{
		"CountryCode" : "VNM",
		"Language" : "Chinese",
		"IsOfficial" : "F",
		"Percentage" : 1.4
	},
	{
		"CountryCode" : "VNM",
		"Language" : "Khmer",
		"IsOfficial" : "F",
		"Percentage" : 1.4
	},
	{
		"CountryCode" : "VNM",
		"Language" : "Man",
		"IsOfficial" : "F",
		"Percentage" : 0.7
	},
	{
		"CountryCode" : "VNM",
		"Language" : "Miao",
		"IsOfficial" : "F",
		"Percentage" : 0.9
	},
	{
		"CountryCode" : "VNM",
		"Language" : "Muong",
		"IsOfficial" : "F",
		"Percentage" : 1.5
	},
	{
		"CountryCode" : "VNM",
		"Language" : "Nung",
		"IsOfficial" : "F",
		"Percentage" : 1.1
	},
	{
		"CountryCode" : "VNM",
		"Language" : "Thai",
		"IsOfficial" : "F",
		"Percentage" : 1.6
	},
	{
		"CountryCode" : "VNM",
		"Language" : "Tho",
		"IsOfficial" : "F",
		"Percentage" : 1.8
	},
	{
		"CountryCode" : "VNM",
		"Language" : "Vietnamese",
		"IsOfficial" : "T",
		"Percentage" : 86.8
	},
	{
		"CountryCode" : "VUT",
		"Language" : "Bislama",
		"IsOfficial" : "T",
		"Percentage" : 56.6
	},
	{
		"CountryCode" : "VUT",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 28.3
	},
	{
		"CountryCode" : "VUT",
		"Language" : "French",
		"IsOfficial" : "T",
		"Percentage" : 14.2
	},
	{
		"CountryCode" : "WLF",
		"Language" : "Futuna",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "WLF",
		"Language" : "Wallis",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "WSM",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 0.6
	},
	{
		"CountryCode" : "WSM",
		"Language" : "Samoan",
		"IsOfficial" : "T",
		"Percentage" : 47.5
	},
	{
		"CountryCode" : "WSM",
		"Language" : "Samoan-English",
		"IsOfficial" : "F",
		"Percentage" : 52.0
	},
	{
		"CountryCode" : "YEM",
		"Language" : "Arabic",
		"IsOfficial" : "T",
		"Percentage" : 99.6
	},
	{
		"CountryCode" : "YEM",
		"Language" : "Soqutri",
		"IsOfficial" : "F",
		"Percentage" : 0.0
	},
	{
		"CountryCode" : "YUG",
		"Language" : "Albaniana",
		"IsOfficial" : "F",
		"Percentage" : 16.5
	},
	{
		"CountryCode" : "YUG",
		"Language" : "Hungarian",
		"IsOfficial" : "F",
		"Percentage" : 3.4
	},
	{
		"CountryCode" : "YUG",
		"Language" : "Macedonian",
		"IsOfficial" : "F",
		"Percentage" : 0.5
	},
	{
		"CountryCode" : "YUG",
		"Language" : "Romani",
		"IsOfficial" : "F",
		"Percentage" : 1.4
	},
	{
		"CountryCode" : "YUG",
		"Language" : "Serbo-Croatian",
		"IsOfficial" : "T",
		"Percentage" : 75.2
	},
	{
		"CountryCode" : "YUG",
		"Language" : "Slovak",
		"IsOfficial" : "F",
		"Percentage" : 0.7
	},
	{
		"CountryCode" : "ZAF",
		"Language" : "Afrikaans",
		"IsOfficial" : "T",
		"Percentage" : 14.3
	},
	{
		"CountryCode" : "ZAF",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 8.5
	},
	{
		"CountryCode" : "ZAF",
		"Language" : "Ndebele",
		"IsOfficial" : "F",
		"Percentage" : 1.5
	},
	{
		"CountryCode" : "ZAF",
		"Language" : "Northsotho",
		"IsOfficial" : "F",
		"Percentage" : 9.1
	},
	{
		"CountryCode" : "ZAF",
		"Language" : "Southsotho",
		"IsOfficial" : "F",
		"Percentage" : 7.6
	},
	{
		"CountryCode" : "ZAF",
		"Language" : "Swazi",
		"IsOfficial" : "F",
		"Percentage" : 2.5
	},
	{
		"CountryCode" : "ZAF",
		"Language" : "Tsonga",
		"IsOfficial" : "F",
		"Percentage" : 4.3
	},
	{
		"CountryCode" : "ZAF",
		"Language" : "Tswana",
		"IsOfficial" : "F",
		"Percentage" : 8.1
	},
	{
		"CountryCode" : "ZAF",
		"Language" : "Venda",
		"IsOfficial" : "F",
		"Percentage" : 2.2
	},
	{
		"CountryCode" : "ZAF",
		"Language" : "Xhosa",
		"IsOfficial" : "T",
		"Percentage" : 17.7
	},
	{
		"CountryCode" : "ZAF",
		"Language" : "Zulu",
		"IsOfficial" : "T",
		"Percentage" : 22.7
	},
	{
		"CountryCode" : "ZMB",
		"Language" : "Bemba",
		"IsOfficial" : "F",
		"Percentage" : 29.7
	},
	{
		"CountryCode" : "ZMB",
		"Language" : "Chewa",
		"IsOfficial" : "F",
		"Percentage" : 5.7
	},
	{
		"CountryCode" : "ZMB",
		"Language" : "Lozi",
		"IsOfficial" : "F",
		"Percentage" : 6.4
	},
	{
		"CountryCode" : "ZMB",
		"Language" : "Nsenga",
		"IsOfficial" : "F",
		"Percentage" : 4.3
	},
	{
		"CountryCode" : "ZMB",
		"Language" : "Nyanja",
		"IsOfficial" : "F",
		"Percentage" : 7.8
	},
	{
		"CountryCode" : "ZMB",
		"Language" : "Tongan",
		"IsOfficial" : "F",
		"Percentage" : 11.0
	},
	{
		"CountryCode" : "ZWE",
		"Language" : "English",
		"IsOfficial" : "T",
		"Percentage" : 2.2
	},
	{
		"CountryCode" : "ZWE",
		"Language" : "Ndebele",
		"IsOfficial" : "F",
		"Percentage" : 16.2
	},
	{
		"CountryCode" : "ZWE",
		"Language" : "Nyanja",
		"IsOfficial" : "F",
		"Percentage" : 2.2
	},
	{
		"CountryCode" : "ZWE",
		"Language" : "Shona",
		"IsOfficial" : "F",
		"Percentage" : 72.1
	}
]);
