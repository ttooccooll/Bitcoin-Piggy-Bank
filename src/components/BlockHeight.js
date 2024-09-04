import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./FunFacts.css";

function BitcoinBlockHeight() {
  const [blockHeight, setBlockHeight] = useState(null);

  useEffect(() => {
    const getBlockHeight = () => {
      axios
        .get('https://blockchain.info/q/getblockcount')
        .then((res) => {
          setBlockHeight(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getBlockHeight();

    const intervalId = setInterval(getBlockHeight, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className="total-btc">The current Bitcoin block height is {blockHeight}</p>
    </div>
  );
}

export default BitcoinBlockHeight;
