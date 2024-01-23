--PostgreSQL
with subq as (
    select person_name, sum(weight) over (order by turn) as total_weight
    from queue order by turn
)

select distinct first_value(person_name) over (order by total_weight desc) as person_name 
from subq where total_weight <= 1000;

--PostgreSQL
with subq as (
    select person_name, sum(weight) over (order by turn) as total_weight
    from queue order by turn
)

select person_name from subq
where total_weight <= 1000
order by total_weight desc
limit 1;