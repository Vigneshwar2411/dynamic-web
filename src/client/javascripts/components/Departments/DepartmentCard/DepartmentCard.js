import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DepartmentImage from '../../Images/Departments/broken_department_image.png';

function doctorsList(props) {
    var list = props;
    return list;
}

export default function MultiActionAreaCard({ departmentDetail }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={DepartmentImage}
                    alt="DepartmentImage"
                />
                <CardContent sx={{ backgroundColor: "#01243f!important", color: "white" }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {departmentDetail.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
        </Card>
    );
}