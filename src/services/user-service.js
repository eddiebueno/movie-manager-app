import config from '../config'

//user services is used to save user info to local storage
const UserService = {
  saveUserId(userId) {
    window.localStorage.setItem(config.USERID, userId)
  },
  getUserId() {
    return window.localStorage.getItem(config.USERID)
  },
  clearUserId() {
    window.localStorage.removeItem(config.USERID)
  },
  hasUserId() {
    return !!UserService.getAuthToken()
  },
}

export default UserService;
