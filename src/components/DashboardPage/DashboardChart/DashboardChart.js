import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
 

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Cash Flow Graph ',
        color: '#252525'
      },
    },
  };
  const labels = ['Thur', 'Fri' , 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'];

  export const data = {
    labels,
    datasets: [
      {
        label: 'Cash in (Naira)',
        data: [50000, 90000, 10000, 80000, 20000, 50000, 60000],
        backgroundColor: '#E21616',
        borderRadius: 7,
      },
      {
        label: 'Cash out (Naira)',
        data: [9000, 75000, 65000, 60000, 90000, 8000, 50000],
        backgroundColor: '#00BE7C',
        borderRadius: 7,
      },
    ],
  };


const DashboardChart = () => {
    return (
        <Bar options={options} data={data} />
    )
  }  

  export default DashboardChart;