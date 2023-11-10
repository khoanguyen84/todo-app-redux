import React, { useContext } from "react";
import { Checkbox, Row, Tag } from "antd";
import { TodoContext } from "../context/TodoContext";
import { setTodoStatus } from "../reducer/actions";

function Todo({todo}) {
    const { name, priority, status } = todo
    const [state, dispatch] = useContext(TodoContext)
    const handleChangeTodoStatus = (todo) => {
        dispatch(setTodoStatus(todo))
    }
    return (
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
    )
}

export default Todo;