import { Link } from "react-router-dom";
export default function ButtonComponent({ title, ruta }) {
    return (
    <>
        <button className="">
            <Link className="" to={ruta}>{title}</Link>
        </button>
    </>
);
}