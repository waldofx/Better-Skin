import { DeleteProducts } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function useDeleteProducts() {
    const [deleteProducts, { loading: loadingDelete }] = useMutation(DeleteProducts);
    return { deleteProducts, loadingDelete };
}

export default useDeleteProducts;
