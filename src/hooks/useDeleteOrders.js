import { DeleteOrders } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function useDeleteOrders() {
    const [deleteOrders, { loading: loadingDelete }] = useMutation(DeleteOrders);
    return { deleteOrders, loadingDelete };
}

export default useDeleteOrders;