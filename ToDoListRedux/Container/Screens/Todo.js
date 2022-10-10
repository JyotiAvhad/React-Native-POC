import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo, RemoveTodo, UpdateTodo} from '../Action/todoActions';
import { styles } from './TodoStyles';
import AddTodoButton from '../Components/AddTodoButton';

import {
    Text,
    View,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
} from 'react-native';

const Todo = () => {

    const [todoValue, setTodoValue] = useState('');
    const dispatch = useDispatch();
    const data = useSelector(state => state);
    const todos = data.todos.todos;

    //for add todo list
    const addTodo = () => {
        if (todos && !todos.includes(todoValue)) {
            dispatch(AddTodo(todoValue));
            setTodoValue('');
        } else {
            alert(`${todoValue} already added in Todo List`);
        }
    };

    // for delete todo list
    const removeTodo = item => {
        const todoIndex = todos.indexOf(item);

        if (todoIndex > -1) {
            dispatch(RemoveTodo(item));
        } else {
            alert(`${todoValue} is not in the Todo List`);
        }
    };

    // for update todo list
    const updateTodo = item => {
       
    };

    const renderTodoList = () => {
        return (
            <FlatList
                data={todos}
                renderItem={({ item }) => (

                    <View style={styles.todoView}>

                        <View style={styles.todoList}>
                            <Text>{item}</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.removeTodo}
                            onPress={() => removeTodo(item)}>
                            <Text style={styles.removeToDoText}>
                                Remove
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.removeTodo}
                            onPress={() => updateTodo(item)}>
                            <Text style={styles.removeToDoText}>
                                Update
                            </Text>
                        </TouchableOpacity>

                    </View>

                )}
            />
        );
    };

    return (
        <View style={styles.main}>

            <TextInput
                style={styles.mainInput}
                onChangeText={setTodoValue}
                placeholder={'Add your todo here.....!'}
                value={todoValue}
            />

            {/* <AddTodoButton/> */}
            {/* <Button
                name="increase"
                title="Add Todo"
                color="#1E6738"s
                onPress={addTodo} /> */}
            <TouchableOpacity
                style={styles.AddToDoButton}
                onPress={addTodo}>

                <Text style={styles.AddToDoText}>
                    Add Todos
                </Text>

            </TouchableOpacity>

            <Text style={{ alignSelf: 'stretch', paddingLeft: 25, paddingTop: 20, fontWeight: 'bold' }}>
                List of Todos :
            </Text>

            {renderTodoList()}
        </View>

    );
};

export default Todo;