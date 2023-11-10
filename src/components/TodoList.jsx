import React, { useContext, useState } from "react";
import Todo from "./Todo";
import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import { TodoContext } from "../context/TodoContext";
import {v4 as uuid} from 'uuid'
import { addTodo } from "../reducer/actions";

function TodoList() {
    const [newTodo, setNewTodo] = useState({
        id: uuid(),
        name: '',
        priority: 'Medium'
    })
    const [state, dispatch] = useContext(TodoContext)
    const { todoList, filters: { searchText, status, priorities } } = state

    const queryTodoList = () => {
        if (!searchText && !priorities.length) {
            return todoList.filter(todo => (status == "All" || !status) ? true : todo.status == status)
        }

        if (searchText && !priorities.length) {
            return todoList.filter(todo =>
                ((status == "All" || !status) ? true : todo.status == status)
                && todo.name.toLowerCase().includes(searchText.toLowerCase()))
        }
        if (!searchText && priorities.length) {
            return todoList.filter(todo =>
                ((status == "All" || !status) ? true : todo.status == status)
                && priorities.includes(todo.priority))
        }

        if (searchText && priorities.length) {
            return todoList.filter(todo =>
                ((status == "All" || !status) ? true : todo.status == status)
                && priorities.includes(todo.priority)
                && todo.name.toLowerCase().includes(searchText.toLowerCase()))
        }
    }
    const filterTodoList = queryTodoList()
    
    const handleAddNewTodo = () => {
        dispatch(addTodo(newTodo))
        setNewTodo({
            id: uuid(),
            name: '',
            priority: 'Medium'
        })
    }
    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {
                    filterTodoList?.map((todo) => (
                        <Todo key={todo.id} todo={todo} />
                    ))
                }
            </Col>
            <Col span={24}>
                <Space.Compact style={{ display: 'flex' }}>
                    <Input value={newTodo.name} onInput={(e) => setNewTodo({...newTodo, name: e.target.value})}/>
                    <Select defaultValue="Medium" onChange={(e) => setNewTodo({...newTodo, priority: e})}>
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