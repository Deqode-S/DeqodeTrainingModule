import React, { useState, useEffect, Component } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Button, Modal, Alert } from 'react-native';
import { commonStyle } from '../style/CommonStyle/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SwipeListView } from 'react-native-swipe-list-view';
import Textinput from '../component/common/TextInputComponent';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [email, setEmail] = useState('');
    const [phnumber, setPhNumber] = useState('');
    const [isEdit, setIsEdit] = useState("Add");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isvalidname, setIsValidName] = useState(true);
    const [isvalidnumber, setIsValidNumber] = useState(true);
    const [id, setId] = useState();
    const [toggle, setToggle] = useState(false);

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('todos', JSON.stringify(value))
        } catch (e) {
            console.log(e);
        }
    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('todos');
            if (value !== null) {
                setTodos(JSON.parse(value))
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const handleAddTodo = () => {
        let newArray = [...todos];
        const isValidEmail = validateEmail(email);
        const isvalidname = validateName(input);
        const isvalidnumber = validateNumber(phnumber);
        setIsValidEmail(isValidEmail);
        setIsValidName(isvalidname);
        setIsValidNumber(isvalidnumber);
        console.log("data====", email, input, isValidEmail, isvalidname, isvalidnumber);
        if (input.length === 0) {
            setToggle(true);
        }
        if (isEdit === "Add") {
            if (input && email && phnumber && isEdit && isValidEmail && isvalidnumber && isvalidname) {
                newArray.push({ name: input, email: email, number: phnumber })
                setTodos(newArray);
                setInput('');
                setEmail('');
                setPhNumber('');
                setToggle(false);
            }
            else {

                Alert.alert('Please enter correct field');
            }
        } else {
            if (input && email && phnumber && isEdit && isValidEmail && isvalidname && isvalidnumber) {
                let updateData = {
                    name: input,
                    email: email,
                    number: phnumber
                }
                newArray.splice(id, 1, updateData)
                setTodos(newArray);
                setInput('');
                setEmail('');
                setPhNumber('');
                setToggle(false);
                setIsEdit("Add");
            } else {
                Alert.alert('Please enter all valid field');
            }
        }
    };

    const emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validateEmail = (email) => {
        return emailExpression.test(email);
    }

    const nameExpression = /^[a-zA-Z\s]*$/;
    const validateName = (input) => {
        return nameExpression.test(input);
    }

    const numberExpression = /^\d{10}$/;
    const validateNumber = (phnumber) => {
        return numberExpression.test(phnumber);
    }


    const handleRemoveTodo = (id) => {
        let newArray = [...todos];
        newArray.splice(id, 1)
        setTodos(newArray);

    };

    const handleEditTodo = (names, email, number, index) => {
        console.log(names);
        setInput(names);
        setEmail(email);
        setPhNumber(number);
        setIsEdit("update")
        setId(index);
    };

    return (
        <View style={commonStyle.container}>
            <Text style={[commonStyle.todoList]}> FORM </Text>
            <View>
                <Textinput
                    value={input}
                    placeholder={'Name'}
                    onChangeText={(text) => setInput(text)}
                />
                {console.log("input===", isvalidname)}
                {toggle && <Text style={{ color: 'red', marginLeft: 12, }}>Please enter a valid name</Text>}
            </View>
            <View>
                <Textinput
                    value={email}
                    placeholder={'Email'}
                    onChangeText={(text) => setEmail(text)}
                />
                {!isValidEmail && <Text style={{ color: 'red', marginLeft: 12, }}>Please enter a valid email address</Text>}
            </View>
            <View>
                <Textinput
                    value={phnumber}
                    placeholder={'Mobile No'}
                    onChangeText={(text) => setPhNumber(text)}
                    keyboardType={"numeric"}
                />
                {!isvalidnumber && <Text style={{ color: 'red', marginLeft: 12, }}>Please enter a valid number</Text>}
            </View>
            <View>
                <TouchableOpacity onPress={() => handleAddTodo()}
                    style={[commonStyle.field1, { alignSelf: 'center', marginTop: 10, }]}
                >
                    <Text style={[commonStyle.plusStyle]}>{isEdit}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={todos}
                renderItem={(data) => (
                    <View style={commonStyle.renderContainer}>
                        <View style={[commonStyle.textRender]}>
                            <Text>Name : {data.item.name}</Text>
                            <Text>Email : {data.item.email}</Text>
                            <Text>Mobile No. :{data.item.number}</Text>
                        </View>
                        <View style={[commonStyle.buttonStyle]}>
                            <TouchableOpacity onPress={() => handleEditTodo(data.item.name, data.item.email, data.item.number, data.index)}
                                style={[commonStyle.editButton]}
                            >
                                <Text style={{ color: 'white', }}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleRemoveTodo(data.index)}
                                style={[commonStyle.deleteButton]}
                            >
                                <Text style={{ color: 'white', }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                )}
            />
        </View>
    );
};


export default TodoList;
