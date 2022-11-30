import { InsertUsers } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function useInsertUsers() {
    const [insertUsers, { loading: loadingInsert }] = useMutation(InsertUsers);
    return { insertUsers, loadingInsert };
}

export default useInsertUsers;
