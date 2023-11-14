import React from "react";
import { Checkbox, Row, Tag } from "antd";
import { useDispatch } from "react-redux";
import { setTodoStatus } from "../redux/actions";

function Todo({ todo }) {
    const { name, priority, status } = todo
    const dispatch = useDispatch()
    const handleChangeTodoStatus = () => {
        dispatch(setTodoStatus(todo))
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