import axios from "axios"
import { Dispatch } from "redux"
import { UserAction, UserActionType } from "../../types/user"

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionType.FETCH_USERS})
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setTimeout(() => {
        dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: response.data})
      }, 1000);
    } catch (e) {
      dispatch({type: UserActionType.FETCH_USERS_ERROR, payload: 'Произошла ошибка при получении списка пользователей'})
    }
  }
}