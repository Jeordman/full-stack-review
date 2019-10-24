insert into bank_users(
    bank_user_email,
    bank_user_password
) values (
    ${email},
    ${password}
)
returning *; 