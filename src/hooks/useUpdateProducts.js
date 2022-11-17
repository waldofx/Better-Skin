import { UpdateProducts } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function useUpdateProducts() {
    const [updateProducts, { loading: loadingUpdate }] = useMutation(UpdateProducts);
    return { updateProducts, loadingUpdate };
}

export default useUpdateProducts;
