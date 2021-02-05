import { FC, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { usePercents } from "../../hooks/usePercents";
import { dateFormatter } from "../../helpers/DateFormatter";
import { SecondsToTime } from "../../helpers/SecondsToTime";
import { timeFormatter } from "../../helpers/TimeFormatter";
import "./Main.css";

type PropsType = {
  children?: never;
};

export const Main: FC<PropsType> = () => {
  const [data, setData] = useState<any>();
  const [sunRise, setSunRise] = useState<string>();
  const [sunSet, setSunSet] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [date, setDate] = useState<string>("today");

  const results = useFetch(date);
  const { beginPercent, endPercent } = usePercents(date);

  useEffect(() => {
    setLoading(true);
    if (results) {
      setData(results);
      if (data) {
        setSunRise(timeFormatter(new Date(data.sunrise)));
        setSunSet(timeFormatter(new Date(data.sunset)));
        setLoading(false);
      }
    }
  }, [results, data]);

  return (
    <>
      <div className="container">
        {!loading ? (
          <>
            <div className="datesContainer">
              <h3>{data && dateFormatter(new Date(data.sunrise))}</h3>
              <p>
                <b>Sunrise:</b> {sunRise}
              </p>
              <p>
                <b>Sunset:</b> {sunSet}
              </p>
              <p>
                <b>Length:</b> {data && SecondsToTime(data.day_length)}
              </p>
            </div>
            <div className="buttonsContainer">
              <div className="buttons">
                <button
                  onClick={() => {
                    setLoading(true);
                    setDate(dateFormatter(new Date(), 7, "-")!);
                  }}
                >
                  - 7 days
                </button>
                <button
                  onClick={() => {
                    setLoading(true);
                    setDate(dateFormatter(new Date(), 1, "-")!);
                  }}
                >
                  - 1 day
                </button>
                <button
                  onClick={() => {
                    setLoading(true);
                    setDate(dateFormatter(new Date(), 1, "+")!);
                  }}
                >
                  + 1 day
                </button>
                <button
                  onClick={() => {
                    setLoading(true);
                    setDate(dateFormatter(new Date(), 7, "+")!);
                  }}
                >
                  + 7 days
                </button>
              </div>
            </div>
            <div className="twilightContainer">
              <div
                className="gradient"
                style={{
                  background: `linear-gradient(
                  0.25turn,
                  rgb(25, 1, 67) ${0 + beginPercent! - 5}%,
                  rgb(2, 230, 255) ${beginPercent}% ${endPercent}%,
                  rgb(25, 1, 67) ${0 + endPercent! + 5}%
                )`,
                }}
              ></div>
            </div>
          </>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    </>
  );
};
