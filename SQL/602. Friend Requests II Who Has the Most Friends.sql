--PostgreSQL
with req as (
    select requester_id as id, count(*) as num from RequestAccepted
    group by requester_id
), acc as (
    select accepter_id as id, count(*) as num from RequestAccepted
    group by accepter_id
)
select id, (coalesce(req.num, 0) + coalesce(acc.num, 0)) as num from
req full join acc using (id)
order by num desc
limit 1;