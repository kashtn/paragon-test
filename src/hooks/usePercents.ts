import { useEffect, useState } from "react";
import { timeFormatter } from "../helpers/TimeFormatter";
import { useFetch } from "./useFetch";

export function usePercents(date = "today") {
  const results = useFetch(date);

  const [beginPercent, setBeginPercent] = useState<number>();
  const [endPercent, setEndPercent] = useState<number>();

  useEffect(() => {
    if (results) {
      let begin = timeFormatter(new Date(results.civil_twilight_begin));
      let beginArr = begin.split(":");
      let beginMinutes = Number(beginArr[0]) * 60 + Number(beginArr[1]);
      setBeginPercent(beginMinutes / 14.4);

      let end = timeFormatter(new Date(results.civil_twilight_end));
      let endArr = end.split(":");
      let endMinutes = Number(endArr[0]) * 60 + Number(endArr[1]);
      setEndPercent(endMinutes / 14.4);
    }
  }, [results]);

  return { beginPercent, endPercent };
}
