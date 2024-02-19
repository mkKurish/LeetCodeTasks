-- PostgreSQL
with Reduced as (
    select account, sum(amount) as balance from Transactions
    group by account
)
select name, balance from Users join Reduced using(account)
where balance > 10000;

-- another way PostgreSQL
select u.name, sum(t.amount) as balance from users as u left join transactions as t
on u.account = t.account
group by t.account, u.name
having sum(t.amount) > 10000