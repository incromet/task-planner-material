import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import './Task.css';
import Typography from '@material-ui/core/Typography';
import WatchLaterIcon from '@material-ui/icons/WatchLater';


export class TaskCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var dateLong = this.props.dueDate,
            dateLocal = (new Date(dateLong)).toDateString(),
            status = this.props.status;
        console.log(new Date("02/25/19").getTime());

        return (
            <Card className="card">
                <CardActionArea>
                    <CardHeader
                        avatar={this.props.responsible.name}
                        action={
                            status === "Ready" ? <OfflinePinIcon /> :
                                status === "Completed" ? <CheckCircleIcon /> :
                                    status === "In Progress" ? <WatchLaterIcon /> :
                                        undefined
                        }
                        title={dateLocal}
                        subheader={this.props.status}
                    />
                    <CardContent>
                        <Typography variant="h6" component="h2">
                            {this.props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default TaskCard;