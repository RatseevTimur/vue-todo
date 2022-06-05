<template>

  <footer class="footer" v-show="tasks.length" v-cloak>
        <span class="todo-count">
          <strong>{{ countActive }}</strong> {{ pluralSingular }} left
        </span>
    <ul class="filters">

      <li>
        <router-link :class="{selected: this.pageURL === '/all'}"
                     to="/all"
        >All
        </router-link>
      </li>
      <li>
        <router-link :class="{selected: this.pageURL === '/active'}"
                     to="/active"
        >Active
        </router-link>
      </li>
      <li>
        <router-link :class="{selected: this.pageURL === '/completed'}"
                     to="/completed"
        >Completed
        </router-link>
      </li>

    </ul>
    <button class="clear-completed"
            @click="removeCompleted()">
      Clear completed
    </button>
  </footer>

</template>

<script>

export default {
  data() {
    return {}
  },
  props: {
    tasks: {
      type: Array,
      default() {
        return []
      }
    },
    removeCompleted: {
      type: Function
    },
    pluralSingular: {
      type: String
    },
    countActive: {
      type: Number
    },
    pageURL: {
      type: String
    },
    filteredTasks: {
      type: Array
    }

  },
  name: 'FilterFooter'
}

</script>
