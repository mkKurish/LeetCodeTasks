--PostgreSQL
select w2.id from Weather as w1
join Weather w2 on w1.recordDate = w2.recordDate - interval '1 DAY'
where w2.temperature > w1.temperature;