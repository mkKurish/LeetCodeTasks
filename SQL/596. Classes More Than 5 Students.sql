--PostgreSQL
select class from courses
group by class
having count(*) >= 5;

--PostgreSQL
select class from (
    select class, count(*) as quantity 
    from Courses 
    group by class)
where quantity >= 5;