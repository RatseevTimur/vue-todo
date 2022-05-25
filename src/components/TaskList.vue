<template>

    <ul class="todo-list">
        <li
            v-for="task in tasks" 
            :key="task.id"
            :class="{completed: task.completed, editing: inputId==task.id }" >
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="task.completed">
                    
                    <label @dblclick="taskEditor(task)">
                        {{task.text}}
                    </label>

                    <button class="destroy" @click="removeTask(task)"></button>
                </div>

                <input
                    class="edit"
                    v-if="inputId===task.id"
                    :ref="'taskInput' + task.id" 
                    v-model="task.text"
                    @blur="enterEditor(task)"
                    @keyup.enter="enterEditor(task)"
                    @keyup.esc="exitEditor(task)"
                />
        </li>
    </ul>
 
</template>

<script>

export default {
    data(){
        return{
            inputId: null,
            beforeEditCache: null
        }
    },
    props: {/*
        inputId:{
            type: Object
        },
        beforeEditCache:{
            type: Object
        },*/
        tasks: {default: []},
        removeTask:{
            type: Function
        },
        enterEditor: {
            type: Function
        },
        exitEditor: {
            type: Function
        }
    },
    name: 'TaskList',
    components: {},
    methods: {
        taskEditor: function (task) {
            this.inputId = task.id
            this.beforeEditCache = task.text
            this.$refs['taskInput' + task.id][0].focus();
        }
    }
}

</script>