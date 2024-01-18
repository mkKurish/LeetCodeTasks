--MySQL
select unique_id, name from
Employees left join EmployeeUNI on Employees.id = EmployeeUNI.id;

--PostgreSQL
select unique_id, e.name from EmployeeUNI as eu
right join Employees as e on eu.id = e.id;