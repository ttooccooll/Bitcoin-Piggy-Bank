import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./FunFacts.css";
//this is no longer hashes to win. It's the time until the next block//

function BitcoinHashWin() {
  const [hashWin, setHashWin] = useState(null);

  useEffect(() => {
    const getHashWin = () => {
      axios
        .get('https://blockchain.info/q/eta')
        .then((res) => {
          const hashWin = parseFloat(res.data);
          const roundedHashWin = hashWin.toFixed(4);
          setHashWin(roundedHashWin);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getHashWin();

    const intervalId = setInterval(getHashWin, 12000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className="total-btc">The next block should be here in {hashWin} seconds</p>
    </div>
  );
}

export default BitcoinHashWin;
