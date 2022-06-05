<template>

    <ul class="todo-list">
        <li
            v-for="task in filteredTasks"
            :key="task.id"
            :class="{completed: task.completed, editing: inputId===task.id }" >
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="task.completed">
                    
                    <label @dblclick="editorTask(task);taskFocus(task)">
                        {{task.text}}
                    </label>

                    <button class="destroy" @click="removeTask(task)"></button>
                </div>

                <input
                    class="edit"
                    v-if="inputId===task.id"
                    :ref="'taskInput' + task.id" 
                    v-model="task.text"
                    @blur="enterEditor(task);resetInput()"
                    @keyup.enter="enterEditor(task);resetInput()"
                    @keyup.esc="exitEditor(task);resetInput()"
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
        },
        filteredTasks: {
            type: Array,
            default() {
            return []
            }
        }
    },
    name: 'TaskList',
    methods: {
        //Функция выполняющая фокус на Input при редактировании задачи
        taskFocus: function (task) {
            this.inputId = task.id;
            this.$nextTick(() => {
                this.$refs['taskInput' + task.id][0].focus();
            });
        },
        //Обнуляет inputId
        resetInput: function(){
            this.inputId=null
        }
    }
}

</script>