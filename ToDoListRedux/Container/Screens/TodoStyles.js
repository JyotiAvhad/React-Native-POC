import { StyleSheet, Dimensions } from 'react-native';

let width = Dimensions.get('window').width;

const TodoStyles = {
    main: {
        alignItems: 'center',
    },
    mainInput: {
        borderWidth: 1,
        height: 55,
        width: width * 0.9,
        padding: 20,
        margin: 10,
        alignItems: 'center',
        borderRadius: 9,
    },
    AddToDoButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: '#1E6738',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    AddToDoText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    todoList: {
        borderWidth: 1,
        borderRadius: 10,
        width: width * 0.55,
        height: 40,
        padding:10,
    },
    todoView: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        padding: 2,
    },
    removeTodo: {
        backgroundColor: '#1E6738',
        borderRadius: 4,
        alignItems: 'center',
        margin: 5,
    },
    removeToDoText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingTop:5,
        paddingRight: 10
    },
};

export const styles = StyleSheet.create(TodoStyles);