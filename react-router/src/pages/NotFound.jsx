import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/", { state: "Error not found" })
        }, 2000)
    }, [])
    return (
        <h1>Not Found</h1>
    )
}