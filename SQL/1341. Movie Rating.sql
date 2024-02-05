--PostgreSQL
with greatestCritics as (
    select name as results from
    Users u join MovieRating using (user_id)
    group by name
    order by count(*) desc, name
    limit 1
),
bestAVGrating as (
    select title  as results from
    Movies m join MovieRating using (movie_id)
    where created_at between '2020-02-01'::date and '2020-02-29'::date
    group by title
    order by AVG(rating) desc, title
    limit 1
)
select * from (
    select * from greatestCritics union all
    select * from bestAVGrating
)