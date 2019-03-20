const actions = {
  setTodoList: ({ commit }, todoList) => {
    return commit('SET_TODOLIST', todoList)
  },
  setFilterState: ({ commit }, newFilterState) => {
    return commit('SET_FILTERSTATE', newFilterState)
  },
  setToastShow: ({ commit }, newShow) => {
    return commit('SET_TOASTSHOW', newShow)
  },
  setToastConfig: ({ commit }, newToastConfig) => {
    return commit('SET_TOASTCONFIG', newToastConfig)
  }
}

export default actions
