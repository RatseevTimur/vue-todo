<template>

    <ul class="todo-list">
        <li v-for="task in tasks" :key="task.id" class="">
            <div class="view">
                <input class="toggle" type="checkbox">
                <label >{{task.text}}</label>
        
                <button class="destroy" @click="removeTask(task)"></button>
            </div>
        </li>
    </ul>
 
</template>

<script>

export default {
    props: {tasks: {default: []},
    removeTask:{
        type: Function
    }},
    name: 'TaskList',
    components: {},
    methods: {}
}

</script>