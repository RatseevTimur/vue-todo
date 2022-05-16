<template>

    <ul class="todo-list">
        <li v-for="task in tasks" :key="task.id" class="">
            <div class="view">
                <input class="toggle" type="checkbox">
                <label>{{task.text}}</label>
                <button class="destroy" v-on:click="removeTask(task)"></button>
            </div>
        </li>
    </ul>
 
</template>

<script>

export default {
    props: {tasks: {default: []}},
    name: 'TaskList',
    components: {},
    methods: {
        removeTask: function(task) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
        }
    }
}

</script>