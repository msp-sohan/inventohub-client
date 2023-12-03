import { Line } from "@react-pdf/renderer";
import {
   Area,
   XAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
   ComposedChart,
   YAxis,
   Legend,
   Bar,
} from "recharts";

const data2 = [
   { "name": "Jan", "uv": 4000, "pv": 2400, "amt": 2400 },
   { "name": "Feb", "uv": 3000, "pv": 3980, "amt": 2210 },
   { "name": "Mar", "uv": 2000, "pv": 9000, "amt": 2290 },
   { "name": "Apr", "uv": 2780, "pv": 3908, "amt": 2000 },
   { "name": "May", "uv": 1890, "pv": 4800, "amt": 2181 },
   { "name": "Jun", "uv": 2390, "pv": 3800, "amt": 2500 },
   { "name": "Jul", "uv": 3490, "pv": 4300, "amt": 2100 },
   { "name": "Aug", "uv": 3490, "pv": 2300, "amt": 2100 },
   { "name": "Sep", "uv": 3490, "pv": 6300, "amt": 2100 },
   { "name": "Oct", "uv": 3490, "pv": 7300, "amt": 2100 },
   { "name": "Nov", "uv": 3490, "pv": 4900, "amt": 2100 },
   { "name": "Dec", "uv": 3490, "pv": 6500, "amt": 2100 },
]

const AdminChart = () => {
   return (
      <div className="chart mt-4 ">
         <div className="title text-3xl mb-4">Revenue of this Year</div>
         <ResponsiveContainer width="100%" aspect={3 / 1}>
            <ComposedChart width={730} data={data2} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
               <XAxis dataKey="name" />
               <YAxis />
               <Tooltip />
               <Legend />
               <CartesianGrid stroke="#f5f5f5" />
               <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
               <Bar dataKey="pv" barSize={20} fill="#413ea0" />
               <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
         </ResponsiveContainer>
      </div>
   );
};

export default AdminChart;
