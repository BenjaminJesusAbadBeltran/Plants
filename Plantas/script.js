document.addEventListener('DOMContentLoaded', () => {
    const addAccountForm = document.getElementById('add-account-form');
    const deleteAccountForm = document.getElementById('delete-account-form');
    const accountList = document.getElementById('account-list');

    addAccountForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        if (username) {
            const li = document.createElement('li');
            li.textContent = username;
            accountList.appendChild(li);
            document.getElementById('username').value = '';
        }
    });

    deleteAccountForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const delUsername = document.getElementById('del-username').value.trim();
        if (delUsername) {
            const accounts = accountList.getElementsByTagName('li');
            for (let i = 0; i < accounts.length; i++) {
                if (accounts[i].textContent === delUsername) {
                    accountList.removeChild(accounts[i]);
                    break;
                }
            }
            document.getElementById('del-username').value = '';
        }
    });
});