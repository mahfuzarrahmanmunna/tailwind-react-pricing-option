import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarkChart = ({ markPromise }) => {
    const marksDataRes = use(markPromise);
    const marksData = marksDataRes.data


    const marksCharTData = marksData.map(studentData => {
        const student = {
            id: studentData.ID,
            name: studentData.Name,
            physics: studentData.marks.Physics,
            chemistry: studentData.marks.Chemistry,
            biology: studentData.marks.Biology
        }
        const avg = (student.physics + student.chemistry + student.biology) / 3
        student.avg = avg;
        return student
    })
    console.log(marksCharTData)
    return (
        <div>
            <BarChart width={500} height={300} data={marksCharTData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Bar dataKey='avg' fill='yellow' />
                <Bar dataKey='chemistry' fill='gray'/>
            </BarChart>
        </div>
    );
};

export default MarkChart;