--PostgreSQL
select distinct product_id, 
coalesce(first_value(new_price) over (
    partition by product_id order by change_date desc), 10) as price
from (
    select product_id, new_price, change_date 
    from products where change_date <= '2019-08-16'::date) np 
right join (
    select distinct product_id from products) ps
using (product_id);

--another way (PostgreSQL)
with lastprice as (
    select
        distinct on (product_id)
        product_id, new_price as price
    from Products
    where change_date <= '2019-08-16'
    order by 1, change_date desc
)

select product_id, coalesce(lp.price, 10) as price
from (select distinct product_id FROM Products)p
LEFT OUTER JOIN lastprice lp USING (product_id)