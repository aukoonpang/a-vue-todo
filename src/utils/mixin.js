import { mapGetters, mapActions } from 'vuex'

export const todoMixin = {
  computed: {
    ...mapGetters([
      'todoList',
      'filterState',
      'toastShow',
      'toastConfig'
    ])
  },
  methods: {
    ...mapActions([
      'setTodoList',
      'setFilterState',
      'setToastShow',
      'setToastConfig'
    ])
  }
}
