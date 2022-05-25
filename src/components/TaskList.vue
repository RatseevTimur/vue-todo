<template>

    <ul class="todo-list">
        <li
            v-for="task in tasks" 
            :key="task.id"
            :class="{completed: task.completed, editing: inputId==task.id }" >
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="task.completed">
                    
                    <label @dblclick="editorTask(task) + taskFocus(task)">
                        {{task.text}}
                    </label>

                    <button class="destroy" @click="removeTask(task)"></button>
                </div>

                <input
                    class="edit"
                    v-if="inputId===task.id"
                    :ref="'taskInput' + task.id" 
                    v-model="task.text"
                    @blur="enterEditor(task) + InputNull()"
                    @keyup.enter="enterEditor(task)+ InputNull()"
                    @keyup.esc="exitEditor(task)+ InputNull()"
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
    props: {
        tasks: {default: []},
        removeTask:{
            type: Function
        },
        enterEditor: {
            type: Function
        },
        exitEditor: {
            type: Function
        },
        editorTask: {
            type: Function
        }
    },
    name: 'TaskList',
    components: {},
    methods: {
        taskFocus: function (task) {
            this.inputId = task.id;
            this.$nextTick(() => {
                this.$refs['taskInput' + task.id][0].focus();
            });
        },
        InputNull: function(){
            this.inputId=null
        }
    }
}

</script>