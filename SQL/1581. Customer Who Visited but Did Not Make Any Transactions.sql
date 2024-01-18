--PostgreSQL
select customer_id, count(*) as count_no_trans from  Visits
left join Transactions on Visits.visit_id = Transactions.visit_id
where Transactions.visit_id is null 
group by customer_id;

--MySQL
select v.customer_id as customer_id, count(*) as count_no_trans
from Visits v left join Transactions t on v.visit_id = t.visit_id
where t.visit_id is NULL
group by customer_id;