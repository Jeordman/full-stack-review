insert into user_account(
    bank_user_id,
    account_balance
) values (
    $1,
    0.00
)
returning account_balance;