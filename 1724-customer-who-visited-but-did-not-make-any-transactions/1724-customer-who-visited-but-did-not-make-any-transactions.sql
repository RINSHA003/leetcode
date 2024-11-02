/* Write your T-SQL query statement below */
select customer_id ,Count(*) As count_no_trans
From Visits
Where Visit_id Not in (select visit_id from Transactions)
group by customer_id