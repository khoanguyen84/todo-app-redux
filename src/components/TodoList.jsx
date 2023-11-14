import React from "react";
import Todo from "./Todo";
import { Col, Row, Input, Button, Select, Tag } from "antd";

function TodoList() {
    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto'}}>
                <Todo name={'Learning ReactJS'} priority={'High'} />
                <Todo name={'Learning NextJS'} priority={'Medium'} />
                <Todo name={'Learning Piano'} priority={'Low'} />
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input />
                    <Select defaultValue="Medium">
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
                    <Button type="primary">Add</Button>
                </Input.Group>
            </Col>
        </Row>
    )
}

export default TodoList;