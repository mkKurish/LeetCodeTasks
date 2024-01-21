--PostgreSQL
SELECT contest_id, ROUND(CAST(COUNT(*) * 100 AS NUMERIC) / (SELECT COUNT(*) FROM Users), 2) AS percentage
FROM Register
GROUP BY contest_id
ORDER BY percentage DESC, contest_id ASC;