import React from "react";
import { Row, Col, Typography, Input, Radio, Select, Tag } from "antd";
import { useDispatch } from "react-redux";
import { filtersSlice } from "../redux-toolkit/filtersSlice";
const { Paragraph } = Typography
const { Search } = Input

function FilterTodo() {
    const dispatch = useDispatch()
    const handleSearchText = (e) => {
        dispatch(filtersSlice.actions.setSearchText(e.target.value))
    }
    const handleSearchStatus = (e) => {
        dispatch(filtersSlice.actions.setSearchStatus(e.target.value))
    }
    const handleSearchPriorities = (e) => {
        dispatch(filtersSlice.actions.setSearchPriorities(e))
    }
    return (
        <Row justify={"center"}>
            <Col span={24}>
                <Paragraph className="paragraph">Search</Paragraph>
                <Search placeholder="input search text" onInput={handleSearchText}/>
            </Col>
            <Col span={24}>
                <Paragraph className="paragraph">Filter By Status</Paragraph>
                <Radio.Group defaultValue={"All"}
                    onChange={handleSearchStatus}
                >
                    <Radio value={"All"}>All</Radio>
                    <Radio value={"Completed"}>Completed</Radio>
                    <Radio value={"Todo"}>To do</Radio>
                </Radio.Group>
            </Col>
            <Col span={24}>
                <Paragraph className="paragraph">Filter By Priority</Paragraph>
                <Select mode="multiple" placeholder="Please select" 
                        style={{width: '100%'}} allowClear
                        onChange={handleSearchPriorities}
                >
                    <Select.Option value="High" label="High">
                        <Tag color="red">High</Tag>
                    </Select.Option>
                    <Select.Option value="Medium" label="Medium">
                        <Tag color="blue">Medium</Tag>
                    </Select.Option>
                    <Select.Option value="Low" label="Low">
                        <Tag color="gray">Low</Tag>
                    </Select.Option>
                </Select>
            </Col>
        </Row>
    )
}

export default FilterTodo;