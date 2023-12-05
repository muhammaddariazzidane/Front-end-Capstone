import axios from 'axios';

const fetcher = async (url) => {
  const res = await axios(url);
  return res.data.result;
};

export default function useDistricts(cityId) {
  const res = useSWR(
    `https://alamat.thecloudalert.com/api/kecamatan/get/?d_kabkota_id=${cityId}`,
    fetcher
  );

  return res;
}
