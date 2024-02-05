--PostgreSQL
select 
    visited_on,
    (select sum(amount)
        from Customer 
        where visited_on between c.visited_on - interval '6 day' and c.visited_on) as amount,
    (select round(sum(amount)::numeric / 7, 2)
        from Customer 
        where visited_on between c.visited_on - interval '6 day' and c.visited_on) as average_amount
from Customer c
where visited_on >= (
    select min(visited_on) + interval '6 day' from customer
)
group by visited_on
order by visited_on;