INSERT INTO houses
(name, address, city, state, zip, img, mortgage, rent)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8);


--ALTER TABLE houses
--ADD COLUMN image TEXT,
--ADD COLUMN mortgage DECIMAL,
--ADD COLUMN rent DECIMAL