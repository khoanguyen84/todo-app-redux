import React, { useState } from "react";
import { Checkbox, Row, Tag } from "antd";

function Todo({ name, priority }) {
    const [checked, setChecked] = useState(false)
    return (
        <Row justify={'space-between'}
            style={{ marginBottom: '5px', ...(checked ? { textDecoration: 'line-through', opacity: 0.5 } : {}) }}
        >
            <Checkbox
                checked={checked} onChange={() => setChecked(!checked)}
            >
                {name}
            </Checkbox>
            <Tag color={`${priority == 'High' ? 'red' : priority == 'Medium' ? 'blue' : 'gray'}`}>{priority}</Tag>
        </Row>
    )
}

export default Todo;