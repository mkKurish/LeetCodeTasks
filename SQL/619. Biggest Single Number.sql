--PostgreSQL
select coalesce((select num
from MyNumbers
group by num
having count(*) = 1
order by num desc
limit 1), null) as num;

--another way (MySQL)
SELECT MAX(num) AS num 
FROM MyNumbers 
WHERE num IN (	SELECT num 
		FROM MyNumbers 
		GROUP BY num 
		HAVING COUNT(*) = 1);