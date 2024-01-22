--PostgreSQL
select teacher_id, count(distinct subject_id) as cnt
from teacher
group by teacher_id;

--MySQL
select teacher_id, count(distinct subject_id) as cnt
from Teacher
group by teacher_id