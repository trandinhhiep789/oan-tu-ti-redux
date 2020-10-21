import { combineReducers } from 'redux'
import BTUanTuTi from './BTUanTuTi'

//state tổng của ứng dụng
const rootReducer = combineReducers({
    stateBTUanTuTi: BTUanTuTi
})

export default rootReducer