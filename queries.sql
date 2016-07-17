---- cerate booli table ----

CREATE TABLE booli (
    id        serial CONSTRAINT superkey PRIMARY KEY,
    date	date,
    address	varchar(40),
    subArea	varchar(80),
    area 	varchar(80),
    room	double precision,
    sqm		double precision,
    floor	double precision,
    objectType	varchar(40),
    constructionYear double precision,
    listPrice	double precision,
    priceUp	double precision,
    soldPrice	double precision,
    rent	double precision,
    broker	varchar(80),
    distanceToMetro double precision,
    metro	varchar(40)
);


---- insert data from raw data (raw data was created 2016-06-23)

INSERT INTO booli 
(date, 
address, 
subArea, 
area, 
room, 
sqm, 
floor, 
objectType, 
constructionYear, 
listPrice, 
priceUp, 
soldPrice, 
rent, 
broker, 
distanceToMetro, 
metro) 

Select 
date, 
address, 
subArea, 
area, 
room, 
sqm, 
floor, 
objectType, 
constructionYear, 
listPrice, 
priceUp, 
soldPrice, 
rent, 
broker, 
distanceToMetro, 
metro from raw_data 




---------------