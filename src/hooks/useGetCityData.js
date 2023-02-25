import useSWR from "swr";
import useGetLatLon from "./useGetLatLon";

export default function useGetCityData(city) {
  const { lat, lon } = useGetLatLon(city);

  const {
    data: city_data,
    error: city_error,
    isLoading: city_loading,
  } = useSWR(
    lat && lon
      ? `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&appid=8ea10f3dedd722fcbaeee3dec733cbac&units=metric`
      : undefined
  );

  return { city_data, city_error, city_loading };
}
