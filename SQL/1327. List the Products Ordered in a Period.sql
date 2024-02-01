--PostgreSQL
select product_name, sum(unit) as unit
from products join orders using(product_id)
where order_date between '2020-02-01'::date and '2020-02-29'::date
group by product_name
having sum(unit) >= 100;