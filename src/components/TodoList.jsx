import React, { useState } from "react";
import Todo from "./Todo";
import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { remainTodoList } from "../redux-toolkit/selectors";
import { v4 as uuid } from 'uuid'
import { todoSlice } from "../redux-toolkit/todoSlice";

function TodoList() {
    const todoList = useSelector(remainTodoList)
    const [newTodo, setNewTodo] = useState({
        id: uuid(),
        name: '',
        status: 'Todo',
        priority: 'Medium'
    })

    const dispatch = useDispatch()

    const handleAddNewTodo = () => {
        dispatch(todoSlice.actions.addTodo(newTodo))
        setNewTodo({
            id: uuid(),
            name: '',
            status: 'Todo',
            priority: 'Medium'
        })
    }
    console.log(todoList);
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
                    <Select defaultValue="Medium"
                        value={newTodo.priority}
                        onChange={(e) => setNewTodo({ ...newTodo, priority: e })}
                    >
                        <Select.Option value='Hight' label='High'>
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