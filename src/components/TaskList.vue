<template>

    <ul class="todo-list">
        <li
        class="todo" 
        v-for="task in tasks" 
        :key="task.id"
        :class="{completed: task.completed, editing: inputId == task.id }" >
            <div class="view">
                <input class="toggle" type="checkbox" v-model="task.completed">
                
                <label @dblclick="editorTask(task)"
                @click='taskFocus'>
                    {{task.text}}
                </label>

                <button class="destroy" @click="removeTask(task)"></button>
            </div>
             <input
                ref="task"
                              
                type="text"
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
        inputId: null
        }
    },
    props: {
        tasks: {default: []},
        removeTask:{
            type: Function
        },
        editorTask: {
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
        "taskFocus": function(){
            console.log("Focus сработал",this.$refs.task)
            this.$refs.task.focus();
        }
    }
}

</script>