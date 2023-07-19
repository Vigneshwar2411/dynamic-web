import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DepartmentCard from '../DepartmentCard';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const departmentLists = [{
    "id": 1,
    "name": "Cardiology",
    "image": ""
}, {
    "id": 2,
    "name": "Orthopaedics",
    "image": ""
}, {
    "id": 3,
    "name": "Obstetrics & Gynecokigy",
    "image": ""
}, {
    "id": 4,
    "name": "Paediatrics",
    "image": ""
}, {
    "id": 5,
    "name": "Master Health Check up",
    "image": ""
}, {
    "id": 6,
    "name": "Blood Test & Labs",
    "image": ""
}, {
    "id": 7,
    "name": "ECG, 2D ECHO, Tread Mill",
    "image": ""
}, {
    "id": 8,
    "name": "Holter Monitoring",
    "image": ""
}, {
    "id": 9,
    "name": "24 hours Ambulatory",
    "image": ""
}, {
    "id": 10,
    "name": "BP Monitoring",
    "image": ""
}, {
    "id": 11,
    "name": "Carotid Doppler",
    "image": ""
}, {
    "id": 12,
    "name": "Digital X-Ray",
    "image": ""
}, {
    "id": 13,
    "name": "Pharmacy",
    "image": ""
}
]

export default function ResponsiveGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(departmentLists).map((departmentDetail, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item><DepartmentCard departmentDetail={departmentDetail} /></Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}