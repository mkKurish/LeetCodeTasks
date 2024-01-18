--PostgreSQL
select user_id, 
round(
    cast(
        sum(
            case when action = 'confirmed' then 1 else 0 end
            )
        as numeric) / cast(count(*) as numeric)
, 2) confirmation_rate 
from signups left join confirmations using (user_id)
group by user_id;