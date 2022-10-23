import React, { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { Button } from "antd";



const Home = () => {

    const styles = {
        border: "0.0625rem solid #9c9c9c",
        borderRadius: "0.25rem",
        height: "70vh",
        width: "90vw"
    };

    const isAuth = useSelector(state => state.isAuth.isAuth)
    const navigate = useNavigate()
    const canvas = useRef(null)

    useEffect(() => {
        if (!isAuth) {
            navigate("/login")
        }
    }, [isAuth])



    return <div style={{marginTop: "20px" , display : "flex", flexDirection : "column", justifyContent : "center", alignItems: "center" }}> <ReactSketchCanvas
        style={styles}
        width="600"
        height="400"
        strokeWidth={4}
        ref={canvas}
        strokeColor="red"
    />
        <Button type="primary"
            style={{marginTop : "10px"}}
            onClick={() => {
                canvas.current
                    .exportImage("png")
                    .then(data => {
                        console.log(data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }}
        >
            Save
        </Button>
    </div>
}

export default Home;