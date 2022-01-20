import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import './Components/bitcoin.css';
import {
  Card,
  Dimmer,
  Loader,
  Select
} from 'semantic-ui-react';

function Bitcoin() {
  const [loading, setLoading] = useState(true);
  const [priceData, setPriceData] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [series, setSeries] = useState(null);

  const options = [
    { value: 'USD', text: 'USD' },
    { value: 'EUR', text: 'EUR' },
    { value: 'GBP', text: 'GPB' }
  ];

  useEffect(() => {
    async function fetchPrices() {
      const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      const data = await res.json();
      setCurrency(data.bpi.USD.code);
      setPriceData(data.bpi);
      getChartData();
    }
    fetchPrices();
  }, []);

  const getChartData = async () => {
    const res = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?`)
    const data = await res.json();
    const categories = Object.keys(data.bpi);
    const series = Object.values(data.bpi);
    setChartData({
      xaxis: {
        categories: categories
      }
    })
    setSeries([
      {
        name: "Bitcoin Price",
        data: series
      }
    ])
    setLoading(false);
  }

  const handleSelect = (e, data) => {
    setCurrency(data.value);
  };

  return (
    <div className='container' id='containerBitcoin'>
      <div className="nav" style={{ padding: '15px', backgroundColor: 'blue', fontWeight: '500', fontSize: '28px', color: 'white' }}>
        The price of bitcoin
        </div>
      {loading ? (
        <div>
          <Dimmer active inverted>
            <Loader>Loading</Loader>
          </Dimmer>
        </div>
      ) : (
          <>
            <div className="price-container"
              style={{
                display: 'flex', justifyContent: 'space-around', alignItems: 'center',
                width: 600,
                height: 300,
                margin: '0 auto'
              }}>
              <div className='form'>
                <Select placeholder='Select your currency' onChange={handleSelect} options={options} />
              </div>
              <div className='price'>
                <Card>
                  <Card.Content>
                    <Card.Header>{currency} Price</Card.Header>
                    <Card.Description>{priceData[currency].rate}</Card.Description>
                  </Card.Content>
                </Card>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Chart
                options={chartData}
                series={series}
                type="line"
                width="1200"
                height="300"
              />
            </div>
          </>
        )}
    </div>
  );
}

export default Bitcoin;
