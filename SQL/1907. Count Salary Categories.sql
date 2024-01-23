--PostgreSQL
with lowS as (
    select 'Low Salary' as category, count(*) as accounts_count 
    from Accounts where income < 20000
),
avgS as (
    select 'Average Salary' as category, count(*) as accounts_count 
    from Accounts where income between 20000 and 50000
),
highS as (
    select 'High Salary' as category, count(*) as accounts_count 
    from Accounts where income > 50000
)

select * from (
        select * from lows union all
        select * from avgs union all
        select * from highs);