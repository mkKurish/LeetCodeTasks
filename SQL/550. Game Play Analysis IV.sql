--PostgreSQL
select round(correctplayers::numeric / allplayers, 2) as fraction
from 
(select 
    (select count(distinct player_id) from activity) allplayers,
    (select count(*) from (select distinct
    player_id, 
    first_value(event_date) over (partition by player_id order by event_date) frstplay,
    NTH_value(event_date, 2) over (partition by player_id order by event_date) as secPlay
    from activity) subq 
    where secplay is not null and age(secplay, frstplay) = '1 day') correctplayers
);