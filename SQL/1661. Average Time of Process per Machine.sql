--PostgreSQL
select machine_id, 
round(cast(sum(ts) / count(*) as numeric), 3) as processing_time
from
(select first.machine_id as machine_id, (second.timestamp - first.timestamp) as ts
from Activity as first join Activity as second
on first.machine_id = second.machine_id
where first.activity_type = 'start' and second.activity_type = 'end')
group by machine_id;