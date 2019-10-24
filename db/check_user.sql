select b.bank_user_id, b.bank_user_email, b.bank_user_password, a.account_balance from bank_users b 
join user_account a on b.bank_user_id = a.bank_user_id
where b.bank_user_id = $1;