INSERT INTO hours (day, hours, current, season) 
	VALUES ('Monday', '11:00 AM - 9:00 PM', TRUE, 'Summer'),
			('Tuesday', '11:00 AM - 9:00 PM', TRUE, 'Summer'),
			('Wednesday', '11:00 AM - 9:00 PM', TRUE, 'Summer'),
			('Thursday', '11:00 AM - 10:00 PM', TRUE, 'Summer'),
			('Friday', '11:00 AM - 10:00 PM', TRUE, 'Summer'),
			('Saturday', '11:00 AM - 10:00 PM', TRUE, 'Summer'),
			('Sunday', '11:00 AM - 9:00 PM', TRUE, 'Summer'),
            ('Monday', '11:00 AM - 9:00 PM', FALSE, 'Winter'),
			('Tuesday', '11:00 AM - 9:00 PM', FALSE, 'Winter'),
			('Wednesday', '11:00 AM - 9:00 PM', FALSE, 'Winter'),
			('Thursday', '11:00 AM - 9:00 PM', FALSE, 'Winter'),
			('Friday', '11:00 AM - 9:00 PM', FALSE, 'Winter'),
			('Saturday', '11:00 AM - 9:00 PM', FALSE, 'Winter'),
			('Sunday', '11:00 AM - 9:00 PM', FALSE, 'Winter');

INSERT INTO specials (day, special, type)
	VALUES ('Monday', '4.00 Well Drinks', 'Bar'),
			('Tuesday', '5.00 U-Call It (Excludes frozen, blended, and specialty drinks)', 'Bar'),
			('Wednesday', '5.00 Regular Frozen or Rocks Margaritas', 'Bar'),
			('Thursday', '3.00 Domestic / 5.00 Craft Drafts', 'Bar'),
			('Friday', '10.00 Mextinis', 'Bar'),
			('Saturday', '11.00 Domestic / 18.00 Craft Draft Pitchers', 'Bar'),
			('Sunday', '6.00 Bloody Marys', 'Bar');
			            
INSERT INTO bands (band, year, month, day, start, end)
	VALUES ('band1', 2019, 9, 6, '19', '22'),
			('band2', 2019, 9, 7, '19', '22'),
			('band3', 2019, 9, 8, '12', '16');