import config from '../config'

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
