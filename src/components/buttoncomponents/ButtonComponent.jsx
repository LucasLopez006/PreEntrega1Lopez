
export default function ButtonComponent({ title, ruta }) {
    return (
    <>
        <button className="Details-button">
            <Link className="Button-link" to={ruta}>{title}</Link>
        </button>
    </>
);
}