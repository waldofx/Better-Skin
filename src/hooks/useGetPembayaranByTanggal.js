import { useQuery } from "@apollo/client";
import { GetPembayaranByTanggal } from "../graphql/query";

function useGetDataByTanggal() {
    const { data: dataByTanggal, loading: loadingDataByTanggal, error: errorDataByTanggal } = useQuery(GetPembayaranByTanggal);
    return {
        dataByTanggal,
        loadingDataByTanggal,
        errorDataByTanggal,
    };
}

export default useGetDataByTanggal;