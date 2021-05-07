import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

type SimpleCardProps = {
  name: string;
  owner: string;
  description: string;
  createdAt: Date;
};

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const SimpleCard = ({ name, owner, description, createdAt }: SimpleCardProps) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {name}
          </Typography>

          <Typography variant="body2" component="p">
            {owner}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {description}
          </Typography>

          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {new Date(createdAt).toDateString()}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
