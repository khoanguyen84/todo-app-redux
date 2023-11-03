import React from "react";
import Todo from "./Todo";
import { Col, Row } from "antd";

function TodoList() {
    return (
        <Row>
            <Col span={24}>
                <Todo name={'Learning ReactJS'} priority={'Hight'} />
                <Todo name={'Learning NextJS'} priority={'Medium'} />
                <Todo name={'Learning Piano'} priority={'Low'} />
            </Col>
        </Row>
    )
}

export default TodoList;