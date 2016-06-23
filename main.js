var aptgetter = require('./aptgetter.js');
var async = require("async");

areas = getOmraden()

aptgetter.createCSVrecursive(areas)


function getOmraden(){
	areas = [
	/*{
"areaCode" : 874648,
"subArea" : "EnskedeGard",
"area" : "GronHagsatra"
},
{
"areaCode" : 1454,
"subArea" : "GamlaEnskede",
"area" : "GronHagsatra"
},*/
{
"areaCode" : 4175,
"subArea" : "Gubbangen",
"area" : "GronHagsatra"
},
{
"areaCode" : 221,
"subArea" : "Stureby",
"area" : "GronHagsatra"
}/*,
{
"areaCode" : 21723,
"subArea" : "Svedmyra",
"area" : "GronHagsatra"
},
{
"areaCode" : 787,
"subArea" : "Bandhagen",
"area" : "GronHagsatra"
},
{
"areaCode" : 2115,
"subArea" : "Hogdalen",
"area" : "GronHagsatra"
},
{
"areaCode" : 6553,
"subArea" : "Ragsved",
"area" : "GronHagsatra"
},
{
"areaCode" : 30,
"subArea" : "Hagerstensasen",
"area" : "RodFruangen"
},
{
"areaCode" : 1381,
"subArea" : "Fruangen",
"area" : "RodFruangen"
},
{
"areaCode" : 874654,
"subArea" : "Liljeholmen",
"area" : "RodFruangen"
},
{
"areaCode" : 874697,
"subArea" : "Midsommarkransen",
"area" : "RodFruangen"
},
{
"areaCode" : 1425,
"subArea" : "Vastertorp",
"area" : "RodFruangen"
},
{
"areaCode" : 874661,
"subArea" : "Aspudden",
"area" : "RodNorsborg"
},
{
"areaCode" : 874646,
"subArea" : "Grondal",
"area" : "RodNorsborg"
},
{
"areaCode" : 318143,
"subArea" : "Malarhojden",
"area" : "RodNorsborg"
},
{
"areaCode" : 14232,
"subArea" : "Fittja",
"area" : "RodNorsborg"
},
{
"areaCode" : 1774,
"subArea" : "Varby",
"area" : "RodNorsborg"
},
{
"areaCode" : 2640,
"subArea" : "Satra",
"area" : "RodNorsborg"
},
{
"areaCode" : 1276,
"subArea" : "Varberg",
"area" : "RodNorsborg"
},
{
"areaCode" : 2675,
"subArea" : "Bredang",
"area" : "RodNorsborg"
},
{
"areaCode" : 1140,
"subArea" : "Segeltorp",
"area" : "RodNorsborg"
},
{
"areaCode" : 874652,
"subArea" : "Hammarbyhojden",
"area" : "GronSkarpnack"
},
{
"areaCode" : 8521,
"subArea" : "Karrtorp",
"area" : "GronSkarpnack"
},
{
"areaCode" : 874650,
"subArea" : "Bagarmossen",
"area" : "GronSkarpnack"
},
{
"areaCode" : 2474,
"subArea" : "Skarpnack",
"area" : "GronSkarpnack"
},
{
"areaCode" : 7197,
"subArea" : "Katarina",
"area" : "Sodermalm"
},
{
"areaCode" : 4796,
"subArea" : "Sofia",
"area" : "Sodermalm"
},
{
"areaCode" : 8069,
"subArea" : "Maria",
"area" : "Sodermalm"
},
{
"areaCode" : 845555,
"subArea" : "Hornstull",
"area" : "Sodermalm"
},
{
"areaCode" : 300476,
"subArea" : "Zinkensdamm",
"area" : "Sodermalm"
},
{
"areaCode" : 874680,
"subArea" : "Tullgarden",
"area" : "Sodermalm"
},
{
"areaCode" : 351791,
"subArea" : "helgalunden",
"area" : "Sodermalm"
},
{
"areaCode" : 115342,
"subArea" : "Reimersholme",
"area" : "Sodermalm"
},
{
"areaCode" : 931427,
"subArea" : "VastraKungsholmen",
"area" : "Kungsholmen"
},
{
"areaCode" : 3598,
"subArea" : "Fredhall",
"area" : "Kungsholmen"
},
{
"areaCode" : 116807,
"subArea" : "Marieberg",
"area" : "Kungsholmen"
},
{
"areaCode" : 826197,
"subArea" : "FramreKungsholmen",
"area" : "Kungsholmen"
},
{
"areaCode" : 115349,
"subArea" : "Vasastan",
"area" : "City"
},
{
"areaCode" : 115350,
"subArea" : "Norrmalm",
"area" : "City"
},
{
"areaCode" : 115348,
"subArea" : "Ostermalm",
"area" : "City"
},
{
"areaCode" : 874660,
"subArea" : "Traneberg",
"area" : "GronHasselby"
},
{
"areaCode" : 874659,
"subArea" : "Alvik",
"area" : "GronHasselby"
},
{
"areaCode" : 72510,
"subArea" : "Appelviken",
"area" : "GronHasselby"
},
{
"areaCode" : 74934,
"subArea" : "StoraMossen",
"area" : "GronHasselby"
},
{
"areaCode" : 874656,
"subArea" : "Riksby",
"area" : "GronHasselby"
},
{
"areaCode" : 867414,
"subArea" : "Abrahamsberg",
"area" : "GronHasselby"
},
{
"areaCode" : 27567,
"subArea" : "Akeslund",
"area" : "GronHasselby"
},
{
"areaCode" : 172444,
"subArea" : "Akeshov",
"area" : "GronHasselby"
},
{
"areaCode" : 75722,
"subArea" : "Olovslund",
"area" : "GronHasselby"
},
{
"areaCode" : 122122,
"subArea" : "SodraAngby",
"area" : "GronHasselby"
},
{
"areaCode" : 14698,
"subArea" : "NorraAngby",
"area" : ",GronHasselby"
},
{
"areaCode" : 10927,
"subArea" : "Blackeberg",
"area" : "GronHasselby"
},
{
"areaCode" : 393540,
"subArea" : "Vallingby",
"area" : "GronHasselby"
},
{
"areaCode" : 753,
"subArea" : "Hagalund",
"area" : "BlaSolna"
},
{
"areaCode" : 7568,
"subArea" : "CentralaSolna",
"area" : "BlaSolna"
},
{
"areaCode" : 9555,
"subArea" : "Jarvastaden",
"area" : "BlaSolna"
},
{
"areaCode" : 891944,
"subArea" : "Hallonbergen",
"area" : "BlaSolna"
},
{
"areaCode" : 4790,
"subArea" : "Ursvik",
"area" : "BlaSolna"
},
{
"areaCode" : 393539,
"subArea" : "Kista",
"area" : "BlaSolna"
},
{
"areaCode" : 380138,
"subArea" : "Rasunda",
"area" : "BlaSolna"
},
{
"areaCode" : 39,
"subArea" : "Huvudsta",
"area" : "BlaSundbyberg"
},
{
"areaCode" : 7300,
"subArea" : "SundbybergCentrum",
"area" : "BlaSundbyberg"
},
{
"areaCode" : 9955,
"subArea" : "Mariehall",
"area" : "BlaSundbyberg"
},
{
"areaCode" : 1227,
"subArea" : "Duvbo",
"area" : "BlaSundbyberg"
},
{
"areaCode" : 384576,
"subArea" : "Tulemarken",
"area" : "BlaSundbyberg"
}*/]

	

	return areas

}

// Grön linje mot hagsätra 

//aptgetter.createcsvfromarea(874648, "Enskede Gård", "Grön Hagsätra"); 		// Enskede Gård
//aptgetter.createcsvfromarea(1454, "Gamla Enskede", "Grön Hagsätra");			// Gamla Enskede
//aptgetter.createcsvfromarea(4175, "Gubbängen", "Grön Hagsätra");				// Gubbängen
//aptgetter.createcsvfromarea(221, "Stureby", "Grön Hagsätra");					// Stureby 
//aptgetter.createcsvfromarea(21723, "Svedmyra", "Grön Hagsätra");				// Svedmyra
//aptgetter.createcsvfromarea(787, "Bandhagen", "Grön Hagsätra");				// Bandhagen
//aptgetter.createcsvfromarea(2115, "Högdalen", "Grön Hagsätra");				// Högdalen
//aptgetter.createcsvfromarea(6553, "Rågsved", "Grön Hagsätra");				// Rågsved

// Röd linje mot fruängen 

//aptgetter.createcsvfromarea(30, "Hägerstensåsen", "Röd Fruängen"); 		// Hägerstensåsen
//aptgetter.createcsvfromarea(1381, "Fruängen", "Röd Fruängen");			// Fruängen 
//aptgetter.createcsvfromarea(874654, "Liljeholmen", "Röd Fruängen");		// Liljeholmen
//aptgetter.createcsvfromarea(874697, "Midsommarkransen", "Röd Fruängen");	// Midsommarkransen
//aptgetter.createcsvfromarea(1425, "Västertorp", "Röd Fruängen");			// Västertorp

// Röd linje mot Norsborg 
// https://www.booli.se/slutpriser/aspudden,grondal,malarhojden,fittja,varby,satra,varberg,bredang,segeltorp/874661,874646,318143,14232,1774,2640,1276,2675,1140/
//aptgetter.createcsvfromarea(874661, "Aspudden", "Röd Norsborg"); 			// Aspudden
//aptgetter.createcsvfromarea(874646, "Gröndal", "Röd Norsborg");			// Gröndal 
//aptgetter.createcsvfromarea(318143, "Mälarhojden", "Röd Norsborg");		// Mälarhojden
//aptgetter.createcsvfromarea(14232, "Fittja", "Röd Norsborg");			// Fittja
//aptgetter.createcsvfromarea(1774, "Vårby", "Röd Norsborg");				// Vårby
//aptgetter.createcsvfromarea(2640, "Sätra", "Röd Norsborg");				// Sätra
//aptgetter.createcsvfromarea(1276, "Vårberg", "Röd Norsborg");			// Vårberg
//aptgetter.createcsvfromarea(2675, "Bredang", "Röd Norsborg");				// Bredang
//aptgetter.createcsvfromarea(1140, "Segeltorp", "Röd Norsborg");			// Segeltorp


// Grön linje mot skarpnäck

//aptgetter.createcsvfromarea(874652, "Hammarbyhojden", "Grön Skarpnäck"); 	// Hammarbyhöjden
//aptgetter.createcsvfromarea(8521, "Kärrtorp", "Grön Skarpnäck");			// Kärrtorp
//aptgetter.createcsvfromarea(874650, "Bagarmossen", "Grön Skarpnäck");		// Bagarmossen
//aptgetter.createcsvfromarea(2474, "Skarpnäck", "Grön Skarpnäck");			// Skarpnäck
	
/* ===================================================================================================== */




/* ============================ Södermalm  ===================================================== */

//aptgetter.createcsvfromarea(7197, "Katarina", "Södermalm"); 				// Katarina
//aptgetter.createcsvfromarea(4796, "Sofia", "Södermalm");					// Sofia
//aptgetter.createcsvfromarea(8069, "Maria", "Södermalm");					// Maria
//aptgetter.createcsvfromarea(845555, "Hornstull", "Södermalm");			// Hornstull 
//aptgetter.createcsvfromarea(300476, "Zinkensdamm", "Södermalm");			// Zinkensdamm
//aptgetter.createcsvfromarea(874680, "Tullgården", "Södermalm");			// Tullgården
//aptgetter.createcsvfromarea(351791, "helgalunden", "Södermalm");			// helgalunden
//aptgetter.createcsvfromarea(115342, "Reimersholme", "Södermalm");			// Reimersholme
	
/*
Södermalm
Katarina
Sofia
Maria
Hornstull
Zinkensdamm
Tullgården
helgalunden
Reimersholme
*/

/* ===================================================================================================== */


/* ============================ Kungsholmen  ===================================================== */


//aptgetter.createcsvfromarea(931427, "Västra Kungsholmen", "Kungsholmen"); 	// Västra Kungsholmen
//aptgetter.createcsvfromarea(3598, "Fredhall", "Kungsholmen");				// Fredhall
//aptgetter.createcsvfromarea(116807, "Marieberg", "Kungsholmen");			// Marieberg
//aptgetter.createcsvfromarea(826197, "Främre Kungsholmen", "Kungsholmen");	// Främre Kungsholmen 
	
/*
Kungsholmen
Västra Kungsholmen
Fredhall
Marieberg
Främre Kungsholmen
*/
/* ===================================================================================================== */

/* ============================ Stan  ===================================================== */


//aptgetter.createcsvfromarea(115349, "Vasastan", "City"); 					// Vasastan
//aptgetter.createcsvfromarea(115350, "Norrmalm", "City");					// Fredhall
//aptgetter.createcsvfromarea(115348, "Östermalm", "City");					// Marieberg

/*
City
Vasastan
Norrmalm
Östermalm
*/

	

/* ===================================================================================================== */

/* ============================ Grön Hässelby  ===================================================== */
//https://www.booli.se/slutpriser/traneberg,akeshov,olovslund,abrahamsberg,akeslund,alvik,appelviken,sodra+angby,norra+angby,blackeberg,vallingby,stora+mossen,riksby/874660,172444,75722,867414,27567,874659,72510,122122,14698,10927,393540,74934,874656/

//aptgetter.createcsvfromarea(874660, "Traneberg", "Grön Hässelby"); 			// Traneberg
//aptgetter.createcsvfromarea(874659, "Alvik", "Grön Hässelby");				// Alvik
//aptgetter.createcsvfromarea(72510, "Äppelviken", "Grön Hässelby");			// Äppelviken

//aptgetter.createcsvfromarea(74934, "Stora Mossen", "Grön Hässelby");			// Stora Mossen
//aptgetter.createcsvfromarea(874656, "Riksby", "Grön Hässelby");				// Riksby 
//aptgetter.createcsvfromarea(867414, "Abrahamsberg", "Grön Hässelby");			// Abrahamsberg
//aptgetter.createcsvfromarea(27567, "Åkeslund", "Grön Hässelby");				// Åkeslund

//aptgetter.createcsvfromarea(172444, "Åkeshov", "Grön Hässelby");				// Åkeshov
////aptgetter.createcsvfromarea(75722, "Olovslund", "Grön Hässelby");				// Olovslund 
////aptgetter.createcsvfromarea(122122, "Södra Ångby", "Grön Hässelby");			// Södra Ångby
//aptgetter.createcsvfromarea(14698, "Norra Ångby,", "Grön Hässelby");			// Norra Ångby
//aptgetter.createcsvfromarea(10927, "Blackeberg", "Grön Hässelby");			// Blackeberg
//aptgetter.createcsvfromarea(393540, "Vällingby", "Grön Hässelby");			// Vällingby

/*
Grön Hässelby
Traneberg
Alvik
Äppelviken
Stora Mossen
Riksby
Abrahamsberg
Åkeslund
Åkeshov
Olovslund
Södra Ångby
Norra Ångby
Blackeberg
Vällingby
*/

/* ===================================================================================================== */


/* ============================ Blå Solna  ===================================================== */
//https://www.booli.se/slutpriser/hagalund,centrala+solna,jarvastaden,hallonbergen,ursvik,kista,solna+rasunda/753,7568,9555,891944,4790,393539,380138/




//aptgetter.createcsvfromarea(753, "Hagalund", "Blå Solna");					// Hagalund
//aptgetter.createcsvfromarea(7568, "Centrala Solna", "Blå Solna");				// Centrala Solna
//aptgetter.createcsvfromarea(9555, "Järvastaden", "Blå Solna");				// Järvastaden
//aptgetter.createcsvfromarea(891944, "Hallonbergen", "Blå Solna");				// Hallonbergen
//aptgetter.createcsvfromarea(4790, "Ursvik", "Blå Solna");						// Ursvik
//aptgetter.createcsvfromarea(393539, "Kista", "Blå Solna");					// Kista
//aptgetter.createcsvfromarea(380138, "Råsunda", "Blå Solna");					// Råsunda

/*
Blå Solna
Hagalund
Centrala Solna
Järvastaden
Hallonbergen
Ursvik
Kista
Råsunda
*/


/* ===================================================================================================== */


/* ============================ Blå Sunbyberg  ===================================================== */
//https://www.booli.se/slutpriser/huvudsta,centrum,mariehall,duvbo,tulemarken/39,7300,9955,1227,384576/

//aptgetter.createcsvfromarea(39, "Huvudsta", "Blå Sundbyberg");					// Huvudsta
//aptgetter.createcsvfromarea(7300, "Sundbyberg Centrum", "Blå Sundbyberg");		// Sundbyberg Centrum
//aptgetter.createcsvfromarea(9955, "Mariehäll", "Blå Sundbyberg"); 				// Mariehäll
//aptgetter.createcsvfromarea(1227, "Duvbo", "Blå Sundbyberg");						// Duvbo
//aptgetter.createcsvfromarea(384576, "Tulemarken", "Blå Sundbyberg");				// Tulemarken

/*
Blå Sunbyberg
Huvudsta
Sundbyberg Centrum
Mariehäll
Duvbo
Tulemarken
*/








