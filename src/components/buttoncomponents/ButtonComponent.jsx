import { Link } from "react-router-dom";
export default function ButtonComponent({ title, ruta }) {
    return (
    <>
        <button className="btn btn-sm btn-outline bg-[#f7d77d] join-item">
            <Link className="text-[#202020] hover:text-white " to={ruta}>{title}</Link>
        </button>
    </>
);
}