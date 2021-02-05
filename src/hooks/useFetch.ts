import { useEffect, useState } from "react";
import { useCoords } from "./useCoords";

export function useFetch(date: string = "today") {
  const { lat, lng } = useCoords();
  const [results, setResults] = useState<any>();

  useEffect(() => {
    async function getToday() {
      const response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}&formatted=0`
      );
      const result = await response.json();
      setResults(result.results);
    }
    if (lat && lng) {
      getToday();
    }
  }, [lat, lng, date]);

  return results;
}
