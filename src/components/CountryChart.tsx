import { FC, useEffect, useRef } from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController,
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController,
);

import { ICountryChartProps } from '../types';

const CountryChart: FC<ICountryChartProps> = ({ population }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: population.map((pop) => pop.year),
            datasets: [
              {
                label: 'Population',
                data: population.map((pop) => parseInt(pop.value)),
                fill: false,
                borderColor: '#ad7709',
                tension: 0.1,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Year',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Population',
                },
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [population]);

  return (
    <div className="countryChart-container">
      <h3 className="countryChart-title">Population growth over time</h3>
      <canvas ref={chartRef} />
    </div>
  );
};

export default CountryChart;
