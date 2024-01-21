--PostgreSQL
select 
round(100 * sum(case when order_date = customer_pref_delivery_date then 1 else 0 end) / cast(count(*) as numeric), 2)
as immediate_percentage
from delivery 
where (order_date, customer_id) in 
(
    select min(order_date), customer_id from delivery
    group by customer_id
)