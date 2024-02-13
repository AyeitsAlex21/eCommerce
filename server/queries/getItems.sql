DECLARE
    @pageNum INTEGER;


SELECT *
FROM Items
WHERE itemID BETWEEN @pageNum * 10 AND (@pageNum * 10) + 11;