// utils.js - A file for utility functions

export const formatCurrency = (value) => {
    return '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  
  // dashboardData.js - A file for generating data for the Dashboard component
  
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const generateWidgetData = () => {
    const revenue = getRandomInt(1000, 10000);
    const orders = getRandomInt(50, 500);
    const customers = getRandomInt(100, 1000);
  
    return [
      { label: 'Revenue', value: revenue },
      { label: 'Orders', value: orders },
      { label: 'Customers', value: customers },
    ];
  }
  
  export const getDashboardData = () => {
    return generateWidgetData();
  }
  
  // reportsData.js - A file for generating data for the Reports component
  
  const generateReportData = (numRows) => {
    const data = [];
  
    for (let i = 0; i < numRows; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
  
      const revenue = getRandomInt(100, 1000);
      const orders = getRandomInt(5, 50);
      const customers = getRandomInt(10, 100);
  
      data.push({
        date: date.toLocaleDateString(),
        revenue,
        orders,
        customers,
      });
    }
  
    return data;
  }
  
  export const getReportData = (numRows) => {
    return generateReportData(numRows);
  }

//   class Dashboard extends React.Component {
//     render() {
//       const data = getDashboardData();
  
//       return (
//         <div className="dashboard">
//           {data.map((widget, index) => (
//             <div className="widget" key={index}>
//               <h2>{widget.label}</h2>
//               <p><span>{formatCurrency(widget.value)}</span></p>
//             </div>
//           ))}
//         </div>
//       );
//     }
//   }
//   class Reports extends React.Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         data: [],
//       };
//     }
  
//     componentDidMount() {
//       const data = getReportData(30);
//       this.setState({ data });
//     }
  
//     render() {
//       // Rest of the code for the Reports component
//     }
//   }
    