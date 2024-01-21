--PostgreSQL
select product_id, 
    coalesce(round(sum(units * price) / cast(sum(units) as numeric), 2), 0) as average_price
from (
    select price, units, p.product_id 
    from prices as p left join unitssold as u
    on p.product_id = u.product_id and (
        purchase_date >= start_date and
        purchase_date <= end_date)
) 
group by product_id;