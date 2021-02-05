import { useState } from "react";

export const useCoords = () => {
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();

  function success(pos: any) {
    setLat(pos.coords.latitude);
    setLng(pos.coords.longitude);
  }

  navigator.geolocation.getCurrentPosition(success);

  return { lat, lng };
};
