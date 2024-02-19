-- PostgreSQL
with numbered as (select 
    player_id, 
    event_date, 
    ROW_NUMBER() over (partition by player_id order by event_date) as rn
from Activity)
select player_id, event_date as first_login from numbered
where rn = 1;