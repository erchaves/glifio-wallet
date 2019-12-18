export const initialState = {
  accounts: [],
  selectedAccount: null,
  isLoggedIn: false,
  error: null,
}

export const walletList = (state, { accounts }) => ({
  ...state,
  accounts,
  selectedAccount: accounts[0],
});

export const switchAccount = (state, {account}) => ({
  ...state,
  selectedAccount: account
})

export const newAccount = (state, {account}) => ({
  ...state,
  selectedAccount: account,
  accounts: [...state.accounts, account]
})

export const error = (state, error) => ({
  ...state,
  error
})
