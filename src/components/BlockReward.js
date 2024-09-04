import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./FunFacts.css";

function BitcoinBlockReward() {
  const [blockReward, setBlockReward] = useState(null);

  useEffect(() => {
    const getBlockReward = () => {
      axios
        .get('https://blockchain.info/q/bcperblock')
        .then((res) => {
          setBlockReward(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getBlockReward();

    const intervalId = setInterval(getBlockReward, 10000000000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className="total-btc">The current Bitcoin block reward is {blockReward}</p>
    </div>
  );
}

export default BitcoinBlockReward;
