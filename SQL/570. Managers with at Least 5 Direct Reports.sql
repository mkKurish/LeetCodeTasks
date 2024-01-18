--PostgreSQL
select name from 
	(select name, count(*) from 
		(select e1.id, e1.name 
		from employee e1 join employee e2 
		on e2.managerId = e1.id) managers
	group by (id, name)) managers_stat
where count >= 5;

--PostgreSQL
select name from employee 
where id = any (select distinct managerid from employee
group by (managerid)
having count(*) >= 5)