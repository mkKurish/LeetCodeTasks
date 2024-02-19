-- PostgreSQL
select id, 
    (case 
        when p_id is not null 
            then (case
                    when id in (select p_id from Tree)
                        then 'Inner'
                    else 'Leaf'
                    end)
        else 'Root'
    end) as type
from Tree;