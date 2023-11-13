import React, { useContext, useState } from "react";
import { Checkbox, Row, Tag } from "antd";
import { TodoContext } from "../context/TodoContext";
import { setTodoStatus, toggleLoading } from "../reducer/actions";
import Spinner from "./Spinner";

function Todo({ todo }) {
    const { name, priority, status, id } = todo
    const [state, dispatch] = useContext(TodoContext)
    const handleChangeTodoStatus = async (todo) => {
        dispatch(toggleLoading(true))
        let setStatusRes = await fetch(`https://jsonserver-vercel-api.vercel.app/api/todos/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                status: status == 'Todo' ? 'Completed' : 'Todo'
            })
        })
        let updateTodo = await setStatusRes.json()
        dispatch(setTodoStatus(updateTodo))
        dispatch(toggleLoading(false))
    }
    return (
        <>
            <Row justify={'space-between'}
                style={{ marginBottom: '5px', ...(status == 'Completed' ? { textDecoration: 'line-through', opacity: 0.5 } : {}) }}
            >
                <Checkbox
                    checked={status == 'Completed'} onChange={() => handleChangeTodoStatus(todo)}
                >
                    {name}
                </Checkbox>
                <Tag color={`${priority == 'High' ? 'red' : priority == 'Medium' ? 'blue' : 'gray'}`}>{priority}</Tag>
            </Row>
        </>
    )
}

export default Todo;