--PostgreSQL
select user_id, upper(left(name, 1)) || lower(right(name, -1)) as name from Users order by user_id;