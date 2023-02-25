import useSWR from "swr";

export default function useGetLatLon(city) {
  const { data: get_lat_lon } = useSWR(
    city
      ? `https://.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=8ea10f3dedd722fcbaeee3dec733cbac`
      : undefined
  );
  const lat = get_lat_lon?.[0]?.lat;
  const lon = get_lat_lon?.[0]?.lon;

  return { lat, lon };
}
