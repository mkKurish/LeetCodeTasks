--PostgreSQL
select 
    distinct nth_value(salary, 2) over (order by salary desc)
    as SecondHighestSalary 
from (
    select distinct salary from employee
)
order by SecondHighestSalary
limit 1;