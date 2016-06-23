console.log("HEJ")


function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
	temp = []
	d_min = 10000000
	for (i in tbanor){
		lat2 = tbanor[i].lat
		lon2 = tbanor[i].lon
		var R = 6371; // Radius of the earth in km
		var dLat = deg2rad(lat2-lat1);  // deg2rad below
		var dLon = deg2rad(lon2-lon1); 
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2); 
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c*1000; 

		// Distance in km
		if (d<d_min){
			station_min = tbanor[i].station
			d_min = d
		}
	}
	//console.log("distance: " + d_min + " till " + station_min)
	return [d_min, station_min];
}

function deg2rad(deg) {
	return deg * (Math.PI/180)
}

tbanor = [
	{
	"station" : "Blasut",
	"lat" : "59.2902433",
	"lon" : "18.09106309999993"
	},
	{
	"station" : "Gubbangen",
	"lat" : "59.2634681",
	"lon" : "18.082088"
	},
	{
	"station" : "Gullmarsplan",
	"lat" : "59.2990447",
	"lon" : "18.080944899999963"
	},
	{
	"station" : "Hakarangen",
	"lat" : "59.2634681",
	"lon" : "18.082088"
	},
	{
	"station" : "Medborgarplatsen",
	"lat" : "59.3137797",
	"lon" : "18.073812999999973"
	},
	{
	"station" : "Sandsborg",
	"lat" : "59.2847872",
	"lon" : "18.09238210000001"
	},
	{
	"station" : "Skanstull",
	"lat" : "59.3078304",
	"lon" : "18.075769100000002"
	},
	{
	"station" : "Skogskyrkogarden",
	"lat" : "59.27919180000001",
	"lon" : "18.09549889999994"
	},
	{
	"station" : "Skarmarbrink",
	"lat" : "59.2953638",
	"lon" : "18.090440899999976"
	},
	{
	"station" : "Slussen",
	"lat" : "59.31951240000001",
	"lon" : "18.07214060000001"
	},
	{
	"station" : "Tallkrogen",
	"lat" : "59.2711356",
	"lon" : "18.085326699999996"
	},
	{
	"station" : "Enskede gard",
	"lat" : "59.2893938",
	"lon" : "18.070293900000024"
	},
	{
	"station" : "Globen",
	"lat" : "59.2942798",
	"lon" : "18.07797419999997"
	},
	{
	"station" : "Sockenplan",
	"lat" : "59.28330020000001",
	"lon" : "18.0705911"
	},
	{
	"station" : "Stureby",
	"lat" : "59.27459769999999",
	"lon" : "18.055626200000006"
	},
	{
	"station" : "Svedmyra",
	"lat" : "59.27763840000001",
	"lon" : "18.067232099999956"
	},
	{
	"station" : "Angbyplan",
	"lat" : "59.34188520000001",
	"lon" : "17.907047799999987"
	},
	{
	"station" : "Abrahamsberg",
	"lat" : "59.33668340000001",
	"lon" : "17.952952200000027"
	},
	{
	"station" : "Alvik",
	"lat" : "59.3336355",
	"lon" : "17.980264600000055"
	},
	{
	"station" : "Blackeberg",
	"lat" : "59.3483529",
	"lon" : "17.882797200000027"
	},
	{
	"station" : "Brommaplan",
	"lat" : "59.33838979999999",
	"lon" : "17.939261699999975"
	},
	{
	"station" : "Fridhemsplan",
	"lat" : "59.33219949999999",
	"lon" : "18.029187800000045"
	},
	{
	"station" : "Hotorget",
	"lat" : "59.3353344",
	"lon" : "18.06311400000004"
	},
	{
	"station" : "Islandstorget",
	"lat" : "59.34585689999999",
	"lon" : "17.89401959999998"
	},
	{
	"station" : "Akeshov",
	"lat" : "59.3420363",
	"lon" : "17.92489980000005"
	},
	{
	"station" : "Kristineberg",
	"lat" : "59.33281110000001",
	"lon" : "18.003182000000038"
	},
	{
	"station" : "Odenplan",
	"lat" : "59.3429601",
	"lon" : "18.049890900000037"
	},
	{
	"station" : "Racksta",
	"lat" : "59.3548066",
	"lon" : "17.881819800000017"
	},
	{
	"station" : "Radmansgatan",
	"lat" : "59.34032589999999",
	"lon" : "18.059198299999935"
	},
	{
	"station" : "Sankt Eriksplan",
	"lat" : "59.3394752",
	"lon" : "18.037698200000023"
	},
	{
	"station" : "Stora mossen",
	"lat" : "59.334534",
	"lon" : "17.96619140000007"
	},
	{
	"station" : "Thorildsplan",
	"lat" : "59.3314735",
	"lon" : "18.014882599999964"
	},
	{
	"station" : "Vallingby",
	"lat" : "59.36324949999999",
	"lon" : "17.87206309999999"
	},
	{
	"station" : "Bandhagen",
	"lat" : "59.2704022",
	"lon" : "18.049490200000037"
	},
	{
	"station" : "Hagdalen",
	"lat" : "59.2637969",
	"lon" : "18.043004699999983"
	},
	{
	"station" : "Hasselby gard",
	"lat" : "59.3669003",
	"lon" : "17.843769199999997"
	},
	{
	"station" : "Johannelund",
	"lat" : "59.3679426",
	"lon" : "17.85746549999999"
	},
	{
	"station" : "Gamla stan",
	"lat" : "59.3231599",
	"lon" : "18.067620300000044"
	},
	{
	"station" : "T-Centralen",
	"lat" : "59.330702",
	"lon" : "18.0595558"
	},
	{
	"station" : "Bagarmossen",
	"lat" : "59.27626429999999",
	"lon" : "18.131464999999935"
	},
	{
	"station" : "Bjarkhagen",
	"lat" : "59.29111390000001",
	"lon" : "18.11552119999999"
	},
	{
	"station" : "Farsta",
	"lat" : "59.243553",
	"lon" : "18.09328389999996"
	},
	{
	"station" : "Hammarbyhajden",
	"lat" : "59.29476529999999",
	"lon" : "18.10455060000004"
	},
	{
	"station" : "Hasselby strand",
	"lat" : "59.36128660000001",
	"lon" : "17.83235179999997"
	},
	{
	"station" : "Karrtorp",
	"lat" : "59.2845051",
	"lon" : "18.11447670000007"
	},
	{
	"station" : "Ragsved",
	"lat" : "59.2565804",
	"lon" : "18.02813489999994"
	},
	{
	"station" : "Hagsatra",
	"lat" : "59.26272840000001",
	"lon" : "18.012487400000055"
	},
	{
	"station" : "Ornsberg",
	"lat" : "59.3055324",
	"lon" : "17.98919980000005"
	},
	{
	"station" : "Aspudden",
	"lat" : "59.306416",
	"lon" : "18.001155799999992"
	},
	{
	"station" : "Fruangen",
	"lat" : "59.285929",
	"lon" : "17.96500579999997"
	},
	{
	"station" : "Hornstull",
	"lat" : "59.3158365",
	"lon" : "18.03402140000003"
	},
	{
	"station" : "Hagerstensasen",
	"lat" : "59.2955713",
	"lon" : "17.979151900000033"
	},
	{
	"station" : "Liljeholmen",
	"lat" : "59.3107063",
	"lon" : "18.023130100000003"
	},
	{
	"station" : "Mariatorget",
	"lat" : "59.3169863",
	"lon" : "18.06324840000002"
	},
	{
	"station" : "Midsommarkransen",
	"lat" : "59.301852",
	"lon" : "18.012036099999932"
	},
	{
	"station" : "Telefonplan",
	"lat" : "59.29832139999999",
	"lon" : "17.997235199999977"
	},
	{
	"station" : "Vastertorp",
	"lat" : "59.291379",
	"lon" : "17.96666749999997"
	},
	{
	"station" : "Zinkensdamm",
	"lat" : "59.3177777",
	"lon" : "18.050152199999957"
	},
	{
	"station" : "Ostermalmstorg",
	"lat" : "59.3349729",
	"lon" : "18.074082699999963"
	},
	{
	"station" : "Axelsberg",
	"lat" : "59.3044155",
	"lon" : "17.975431500000013"
	},
	{
	"station" : "Bredang",
	"lat" : "59.29483829999999",
	"lon" : "17.933813600000008"
	},
	{
	"station" : "Malarhajden",
	"lat" : "59.3009181",
	"lon" : "17.957281999999964"
	},
	{
	"station" : "Satra",
	"lat" : "59.28498399999999",
	"lon" : "17.921370000000024"
	},
	{
	"station" : "Gardet",
	"lat" : "59.34774410000001",
	"lon" : "18.10186909999993"
	},
	{
	"station" : "Karlaplan",
	"lat" : "59.33848889999999",
	"lon" : "18.090265899999963"
	},
	{
	"station" : "Ropsten",
	"lat" : "59.3572983",
	"lon" : "18.102217900000028"
	},
	{
	"station" : "Skarholmen",
	"lat" : "59.27714400000001",
	"lon" : "17.907005099999992"
	},
	{
	"station" : "Varberg",
	"lat" : "59.2759332",
	"lon" : "17.89015770000003"
	},
	{
	"station" : "Farsta strand",
	"lat" : "59.23500769999999",
	"lon" : "18.10173689999999"
	},
	{
	"station" : "Fittja",
	"lat" : "59.24746560000001",
	"lon" : "17.86096759999998"
	},
	{
	"station" : "Masmo",
	"lat" : "59.2496816",
	"lon" : "17.880332599999974"
	},
	{
	"station" : "Varby gard",
	"lat" : "59.2646124",
	"lon" : "17.88439740000001"
	},
	{
	"station" : "Stadion",
	"lat" : "59.3429669",
	"lon" : "18.081700700000056"
	},
	{
	"station" : "Tekniska hagskolan",
	"lat" : "59.3459088",
	"lon" : "18.071596399999976"
	},
	{
	"station" : "Alby",
	"lat" : "59.2394955",
	"lon" : "17.84532809999996"
	},
	{
	"station" : "Fridhemsplan",
	"lat" : "59.33219949999999",
	"lon" : "18.029187800000045"
	},
	{
	"station" : "Hallonbergen",
	"lat" : "59.3778945",
	"lon" : "17.96847409999998"
	},
	{
	"station" : "Hallunda",
	"lat" : "59.2432692",
	"lon" : "17.82560699999999"
	},
	{
	"station" : "Hjulsta",
	"lat" : "59.3961702",
	"lon" : "17.887712100000044"
	},
	{
	"station" : "Norsborg",
	"lat" : "59.24379089999999",
	"lon" : "17.814525199999935"
	},
	{
	"station" : "Nackrosen",
	"lat" : "59.3667379",
	"lon" : "17.983279700000026"
	},
	{
	"station" : "Rinkeby",
	"lat" : "59.3881634",
	"lon" : "17.928781399999934"
	},
	{
	"station" : "Radhuset",
	"lat" : "59.33033229999999",
	"lon" : "18.042047700000012"
	},
	{
	"station" : "Solna centrum",
	"lat" : "59.3588602",
	"lon" : "17.998973699999965"
	},
	{
	"station" : "Stadshagen",
	"lat" : "59.3369631",
	"lon" : "18.017318299999943"
	},
	{
	"station" : "Tensta",
	"lat" : "59.3944823",
	"lon" : "17.901165200000037"
	},
	{
	"station" : "Universitetet",
	"lat" : "59.3651918",
	"lon" : "18.054604400000017"
	},
	{
	"station" : "Vastra skogen",
	"lat" : "59.3474793",
	"lon" : "18.003989100000013"
	},
	{
	"station" : "Akalla",
	"lat" : "59.41481289999999",
	"lon" : "17.912797400000045"
	},
	{
	"station" : "Husby",
	"lat" : "59.410259",
	"lon" : "17.925637199999983"
	},
	{
	"station" : "Kista",
	"lat" : "59.4031774",
	"lon" : "17.942394400000012"
	},
	{
	"station" : "Kungstradgarden",
	"lat" : "59.33078399999999",
	"lon" : "18.073293799999988"
	},
	{
	"station" : "Bergshamra",
	"lat" : "59.3817007",
	"lon" : "18.036722499999996"
	},
	{
	"station" : "Danderyds sjukhus",
	"lat" : "59.3919041",
	"lon" : "18.04137179999998"
	},
	{
	"station" : "Marby centrum",
	"lat" : "59.3982573",
	"lon" : "18.036117500000046"
	},
	{
	"station" : "Duvbo",
	"lat" : "59.3678923",
	"lon" : "17.96461750000003"
	},
	{
	"station" : "Huvudsta",
	"lat" : "59.3495465",
	"lon" : "17.98569539999994"
	},
	{
	"station" : "Rissne",
	"lat" : "59.37584080000001",
	"lon" : "17.939959300000055"
	},
	{
	"station" : "Solna strand",
	"lat" : "59.35434249999999",
	"lon" : "17.97354169999994"
	},
	{
	"station" : "Sundbybergs centrum",
	"lat" : "59.3621927",
	"lon" : "17.97127069999999"
	},
	{
	"station" : "Skarpnack",
	"lat" : "59.2664138",
	"lon" : "18.13303589999998"
}
]


module.exports = {
  getDistanceFromLatLonInKm: getDistanceFromLatLonInKm
}