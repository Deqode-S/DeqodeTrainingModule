import React, { useState } from "react";
import { Text, View, TextInput, Button, TouchableOpacity, FlatList, } from "react-native";
import { commonStyle } from "../style/CommonStyle/Styles";
import HeaderComponent from "../component/common/CustomHeader";

const TodoList = ({ navigation }) => {
    const [todo, setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleTodo = () => {
        if (newTodo) {
            setTodo([...todo, { id: Date.now(), name: newTodo }]);
            setNewTodo('');
        }
    };
    const deleteTodo = (id) => {
        setTodo(todo.filter((todo) => todo.id !== id));
    }

    // const editTodo = () => {

    // }

    const renderItem = ({ item }) => {
        return (
            <View style={[commonStyle.renderView]}>
                <Text>{item.name}</Text>
                {/* <TouchableOpacity onPress={editTodo}>
                    <Text style={{}}>Edit</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={deleteTodo(item.id)}>
                    <Text style={{}}>Delete</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (

        <View>
            <HeaderComponent
                home={false}
                onPress={() => navigation.pop()}
            />
            <Text style={[commonStyle.todoList]}>Your TodoList</Text>
            <View style={{ display: 'flex', flexDirection: "row", justifyContent: "space-around" }}>
                <TextInput
                    style={[commonStyle.field]}
                    placeholder="Enter the TASK"
                    value={newTodo}
                    onChangeText={(name) => setNewTodo(name)}
                />
                <View>
                    <TouchableOpacity onPress={handleTodo}>
                        <Text style={[commonStyle.plusStyle]}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <FlatList
                    data={todo}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />

            </View>


        </View>
    );
}

export default TodoList;









{/* {todo.map((newTodo, index) => (
                    <Text key={index} style={{ margin: 15, padding: 10, fontSize: 22, backgroundColor: 'pink' }}>
                        {newTodo}
                    </Text>
                ))} */}