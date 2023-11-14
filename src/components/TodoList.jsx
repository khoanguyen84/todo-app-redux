import React, { useState } from "react";
import Todo from "./Todo";
import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from 'uuid'
import { addTodo } from "../redux/actions";
import { remainTodoListSelector, todoListSelector } from "../redux/selectors";

function TodoList() {
    // const todoList = useSelector((state) => {
    //     const { todoList, filters: { searchText, status, priorities } } = state
    //     if (searchText && !priorities.length) {
    //         let newTodoList = todoList.filter((todo) =>
    //             todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
    //             (status != 'All' ? todo.status == status : true))
    //         return newTodoList
    //     }

    //     if (!searchText && priorities.length) {
    //         let newTodoList = todoList.filter((todo) =>
    //             priorities.includes(todo.priority) &&
    //             (status != 'All' ? todo.status == status : true))
    //         return newTodoList
    //     }

    //     if (searchText && priorities.length) {
    //         let newTodoList = todoList.filter((todo) =>
    //             priorities.includes(todo.priority) &&
    //             todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
    //             (status != 'All' ? todo.status == status : true)
    //         )
    //         return newTodoList
    //     }
    //     return todoList.filter(todo => status != 'All' ? todo.status == status : true)
    // })
    // const todoList = useSelector(todoListSelector)
    const todoList = useSelector(remainTodoListSelector)
    const [newTodo, setNewTodo] = useState({
        id: uuid(),
        name: '',
        status: 'Todo',
        priority: 'Medium'
    })
    const dispatch = useDispatch()
    const handleAddNewTodo = () => {
        dispatch(addTodo(newTodo))
        setNewTodo({
            id: uuid(),
            name: '',
            status: 'Todo',
            priority: 'Medium'
        })
    }
    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {
                    todoList.map((todo) => (
                        <Todo key={todo.id} todo={todo} />
                    ))
                }
            </Col>
            <Col span={24}>
                <Space.Compact style={{ display: 'flex' }}>
                    <Input value={newTodo.name} onInput={(e) => setNewTodo({ ...newTodo, name: e.target.value })} />
                    <Select defaultValue="Medium" value={newTodo.priority}
                        onChange={(e) => setNewTodo({ ...newTodo, priority: e })}>
                        <Select.Option value='High' label='High'>
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type="primary" onClick={handleAddNewTodo}>Add</Button>
                </Space.Compact>
            </Col>
        </Row>
    )
}

export default TodoList;