module.exports = {
    updateBalance: async(req, res) => {
        const {bank_user_id, account_balance} = req.body;
        const db = req.app.get('db');
        await db.update_balance(account_balance, bank_user_id);
        let updatedUser = await db.check_user(bank_user_id);
        updatedUser = updatedUser[0]
        req.session.user = updatedUser;
        res.status(200).send(req.session.user);
    },
}