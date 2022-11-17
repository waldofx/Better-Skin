import { InsertProducts } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function useInsertProducts() {
    const [insertProducts, { loading: loadingInsert }] = useMutation(InsertProducts);
    return { insertProducts, loadingInsert };
}

export default useInsertProducts;
