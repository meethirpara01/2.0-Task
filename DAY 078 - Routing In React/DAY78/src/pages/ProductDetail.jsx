import { useParams } from "react-router"

const ProductDetail = () => {
    const { id } = useParams();
    return (
        <div className="ProductDetail">
            PRODUCT ID - {id}
        </div>
    )
}

export default ProductDetail