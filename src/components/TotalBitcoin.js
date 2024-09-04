import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./FunFacts.css";

function TotalBitcoin() {
  const [totalBTC, setTotalBTC] = useState(null);

  useEffect(() => {
    const getTotalBTC = () => {
      axios
        .get('https://blockchain.info/q/totalbc')
        .then((res) => {
            const totalBTCString = res.data.toString();
            const adjustedTotalBTCString = totalBTCString.slice(0, -8);
            const adjustedTotalBTC = parseFloat(adjustedTotalBTCString);
            setTotalBTC(adjustedTotalBTC);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getTotalBTC();

    const intervalId = setInterval(getTotalBTC, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className="total-btc">The total amount of bitcoin in circulation is {totalBTC} out of 21000000</p>
    </div>
  );
}

export default TotalBitcoin;