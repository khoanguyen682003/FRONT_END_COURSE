import React from "react";

export function Project(props) {
    // Đổi màu theo progress
    const getProgressStyle = (progress) => {
        switch (progress) {
            case "Chờ xử lý":
                return { backgroundColor: "pink" };
            case "Đang thực hiện":
                return { backgroundColor: "purple", color: "white" };
            case "Hoàn thành":
                return { backgroundColor: "wheat" };
            default:
                return {};
        }
    };

    // Đổi màu theo risk
    const getRiskStyle = (risk) => {
        switch (risk) {
            case "Thấp":
                return { color: "lightgreen" };
            case "Cao":
                return { color: "red"};
            case "Trung bình":
                return { color: "rgba(221, 199, 0, 0.87)" };
            default:
                return {};
        }
    };

    return (
        <>
            <fieldset id="project" hidden={props.hidden}>
                <h3>{props.name}</h3>
                <p id="progress" style={getProgressStyle(props.progress)}>
                    {props.progress}
                </p>
                <p id="risk" style={getRiskStyle(props.risk)}>
                    {props.risk}
                </p>
                <p id="percent">{props.percent}</p>
            </fieldset>
        </>
    );
}
export default Project;
