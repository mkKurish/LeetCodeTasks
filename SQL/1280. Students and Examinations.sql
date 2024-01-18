--PostgreSQL
select student_id, student_name, subject_name, coalesce(cnt, 0) as attended_exams 
from
    (select * 
    from students cross join subjects) stds
left join 
    (select student_id, subject_name, count(*) as cnt 
    from examinations group by (student_id, subject_name)) grpd 
using (student_id, subject_name) 
order by (student_id, subject_name);