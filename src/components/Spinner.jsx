import React from "react";
import { Flex, Spin } from "antd";

function Spinner(){
    return (
        <div
            style={
                {
                    backgroundColor: 'rgba(255,255,255,.6)',
                    position: 'absolute',
                    top: "0px",
                    left: "0px",
                    height: "100%",
                    width: '100%',
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: 'center',
                    zIndex: 1000
                }
            }
        >
            <Spin size="large"></Spin>
        </div>
    )
}

export default Spinner