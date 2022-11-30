import { DeleteUsers } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function useDeleteUsers() {
    const [deleteUsers, { loading: loadingDelete }] = useMutation(DeleteUsers);
    return { deleteUsers, loadingDelete };
}

export default useDeleteUsers;
