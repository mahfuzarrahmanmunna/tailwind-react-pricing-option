import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
const ResultData = [
    { "ID": 1, "Name": "Alice", "Physics": 85, "Chemistry": 78, "Biology": 90, "Math": 88 },
    { "ID": 2, "Name": "Bob", "Physics": 92, "Chemistry": 88, "Biology": 84, "Math": 91 },
    { "ID": 3, "Name": "Charlie", "Physics": 75, "Chemistry": 80, "Biology": 70, "Math": 73 },
    { "ID": 4, "Name": "David", "Physics": 88, "Chemistry": 85, "Biology": 82, "Math": 86 },
    { "ID": 5, "Name": "Eva", "Physics": 95, "Chemistry": 91, "Biology": 89, "Math": 94 },
    { "ID": 6, "Name": "Frank", "Physics": 67, "Chemistry": 72, "Biology": 65, "Math": 70 },
    { "ID": 7, "Name": "Grace", "Physics": 74, "Chemistry": 76, "Biology": 79, "Math": 75 },
    { "ID": 8, "Name": "Henry", "Physics": 81, "Chemistry": 83, "Biology": 77, "Math": 80 },
    { "ID": 9, "Name": "Isla", "Physics": 90, "Chemistry": 89, "Biology": 93, "Math": 92 },
    { "ID": 10, "Name": "Jack", "Physics": 60, "Chemistry": 65, "Biology": 58, "Math": 62 }
]





const ResultChart = () => {
    return (
        <div>
            <LineChart lg:width={800} width={350} height={400} data={ResultData}>
                <XAxis dataKey='Name' />
                <YAxis />
                <Line dataKey="Math" stroke="#8884d8" />
                <Line dataKey="Chemistry" stroke="red" />
            </LineChart>
        </div>
    );
};

export default ResultChart;