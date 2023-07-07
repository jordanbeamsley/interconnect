import React, { useEffect, useRef } from "react";

import "./canvas.scss"

interface CanvasProps {
    draw(ctx:CanvasRenderingContext2D): void;
}

function Canvas(props: CanvasProps) {

    const {draw, ...rest} = props;

    const canvasRef = useRef<HTMLCanvasElement>(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        const context = (canvas) ? canvas.getContext('2d') : null;


        if (!context)
            return;

        draw(context);

    }, [draw])

    return (
        <canvas ref={canvasRef} className={"canvas"} {...props}/>
    )
}

export default Canvas;