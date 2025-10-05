-- Query 1 add to account
INSERT INTO public.account (
	account_firstname, 
	account_lastname, 
	account_email, 
	account_password
	)
VALUES (
	'Tony', 
	'Stark', 
	'tony@starkent.com', 
	'Iam1ronM@n'
	);

-- Query 2
UPDATE account 
SET account_type = 'Admin'
WHERE account_id = 1;

-- Query 3
DELETE FROM account
WHERE account_id = 1;

-- Query 4
UPDATE inventory
SET inv_description = 
REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_id = 10;

-- Query 5
SELECT inv_make, inv_model
FROM inventory 
INNER JOIN classification
ON inventory.classification_id = classification.classification_id
WHERE classification.classification_name = 'Sport';

-- Query 6
UPDATE inventory
SET inv_image = 
	REPLACE(inv_image, 'ges/', 'ges/vehicles/'),
	inv_thumbnail = 
	REPLACE(inv_thumbnail, 'ges/', 'ges/vehicles/')
;