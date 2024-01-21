--PostgreSQL
select query_name, quality, 
coalesce(
round(100 * cast(poorCount as numeric) / cast(allcount as numeric), 2)
, 0) as poor_query_percentage
from
(select query_name, count(*) as poorCount from Queries
where rating < 3
group by query_name)
right join
(select query_name, 
round(avg(cast(rating as numeric) / cast(position as numeric)), 2) as quality, 
count(rating) as allcount
from Queries
group by query_name)
using(query_name)
where query_name is not null;