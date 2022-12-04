import { useLazyQuery } from "@apollo/client";
import { GetUsersByLogin } from "../graphql/query";

function useGetDataByLogin() {
    const [usersLogin, { data, loading, error }] = useLazyQuery(GetUsersByLogin);
    return {
        usersLogin,
        data,
        loading,
        error,
    };
}

export default useGetDataByLogin;
