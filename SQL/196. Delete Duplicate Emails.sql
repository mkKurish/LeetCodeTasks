--PostgreSQL
delete from Person
where id in (
    select id from (
    select *, dense_rank() over (partition by email order by id) as rank
    from Person
    ) where rank > 1
);