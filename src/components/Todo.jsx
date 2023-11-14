import React from "react";
import { Checkbox, Row, Tag } from "antd";
import { useDispatch } from "react-redux";
import { todoSlice } from "../redux-toolkit/todoSlice";

function Todo({ todo }) {
    const { name, priority, status, id } = todo
    const dispatch = useDispatch()
    const handleChangeTodoStatus = () => {
        dispatch(todoSlice.actions.toggleTodoState(todo))
    }
    return (
        <Row justify={'space-between'}
            style={{ marginBottom: '5px', ...(status == 'Completed' ? { textDecoration: 'line-through', opacity: 0.5 } : {}) }}
        >
            <Checkbox
                checked={status == 'Completed'} onChange={handleChangeTodoStatus}
            >
                {name}
            </Checkbox>
            <Tag color={`${priority == 'High' ? 'red' : priority == 'Medium' ? 'blue' : 'gray'}`}>{priority}</Tag>
        </Row>
    )
}

export default Todo;