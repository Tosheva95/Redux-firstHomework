const loginReducer = (
  state = {
  username: '',
  password: '',
},
action
) => {
  switch (action.type) {
    case 'SAVE_LOGIN_INFO': {
      const { username, password } = action.payload
      // debugger;

      return {
        ...state,
        username: username,
        password: password
      }
    }
    default : {
      return state
    }
  }
  
}

const saveLoginInfo = (username, password) => {
  return {
    type: 'SAVE_LOGIN_INFO',
    payload: { username, password }
    //payload moze da bide i niza i objekt i string
  }
}

export {
  saveLoginInfo,
  loginReducer
}