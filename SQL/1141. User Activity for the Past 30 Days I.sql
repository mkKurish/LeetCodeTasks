--PostgreSQL
select activity_date as day, count(distinct user_id) as active_users
from activity
where 
    activity_date > '2019-07-27'::date - interval '30 days' 
    and 
    activity_date <= '2019-07-27'::date
group by activity_date;