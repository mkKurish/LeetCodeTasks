--PostgreSQL
select d.name as Department, e.name as Employee, salary
from Employee e join Department d on e.departmentId = d.id
where salary >= (
    select case
        when (select count(distinct salary) from employee where employee.departmentId = d.id) >= 3
            then (
                    select distinct salary
                    from employee 
                    where employee.departmentId = d.id 
                    order by salary desc 
                    limit 1
                    offset 2
                )
        else 
            0
        end
);

-- another way (MySQL)
SELECT Department, Employee, Salary
FROM (
    SELECT 
        d.name AS Department,
        e.name AS Employee,
        e.salary AS Salary,
        DENSE_RANK() OVER (PARTITION BY d.name ORDER BY Salary DESC) AS rnk
    FROM Employee e
    JOIN Department d
    ON e.departmentId = d.id
) AS rnk_tbl
WHERE rnk <= 3;