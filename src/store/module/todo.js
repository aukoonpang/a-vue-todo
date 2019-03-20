const todo = {
  state: {
    todoList: [
      {
        completed: false,
        content: 'this is an unfinished example',
        createTime: new Date(),
        id: 1
      },
      {
        completed: true,
        content: 'this is a finished example',
        createTime: new Date(),
        id: 0
      }
    ],
    filterState: 'all',
    toastShow: false,
    toastConfig: {
      headerText: '',
      contentText: '',
      btnShow: false,
      duration: 0,
      delId: 0,
      type: ''
    }
  },
  mutations: {
    'SET_TODOLIST': (state, newTodoList) => {
      state.todoList = newTodoList
    },
    'SET_FILTERSTATE': (state, newFilterState) => {
      state.filterState = newFilterState
    },
    'SET_TOASTSHOW': (state, newShow) => {
      state.toastShow = newShow
    },
    'SET_TOASTCONFIG': (state, newtoastConfig) => {
      state.toastConfig = newtoastConfig
    }
  }
}

export default todo
