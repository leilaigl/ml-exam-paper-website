import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-gradient';

const TimeSpent = ({ timeData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#4F46E5');
    gradient.addColorStop(0.5, '#4F46E5');
    gradient.addColorStop(1, '#ffffff');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Object.keys(timeData),
        datasets: [{
          label: 'Time Spent (mins)',
          data: Object.values(timeData),
          fill: {
            target: 'origin',
            above: 'rgb(238, 241, 244)',
          },
          borderColor: '#545F71',
          borderWidth: 2,
        }],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
        font: {
          family: 'Inter',
          color: '#9ba5b7',
        },
      },
    });

    return () => chart.destroy();
  }, [timeData]);

  return (
    <canvas
      ref={chartRef}
      className='p-4 rounded-md border-[#545F71] border-2'
      style={{ height: '100px', width: '100%' }}
    ></canvas>
  );
};

export default TimeSpent;
