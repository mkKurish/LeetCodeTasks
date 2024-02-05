--PostgreSQL
with odds as(
    select 
        case 
            when id = (select max(id) from seat) then id 
            else id + 1 end as id
        , student 
        from Seat where id % 2 = 1
), evens as(
    select id - 1 as id, student 
        from Seat where id % 2 = 0
)
select * from odds union select * from evens;