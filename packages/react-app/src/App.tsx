import * as React from "react";
import "./App.css";
import { SimpleCard } from "./SimpleCard";
import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: "25px",
    marginTop: "25px",
  },
  button: {
    marginBottom: "25px",
    marginTop: "25px",
  },
}));

export interface ServiceQuery {
  name: string;
  owner: string;
  description: string;
  created_at: Date;
}

function App() {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [owner, setOwner] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [queryRes, setQueryRes] = React.useState<ServiceQuery[]>([]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch("http://localhost:3001/service", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        owner: owner,
        description: description,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/service",
    })
      .then((response: { data: any }) => {
        setQueryRes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <form onSubmit={onSubmit}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              type="text"
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Owner"
              type="text"
              onChange={(e) => setOwner(e.currentTarget.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              type="text"
              onChange={(e) => setDescription(e.currentTarget.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.button} variant="outlined" type="submit" value="Submit">
              Add Form
            </Button>
          </Grid>
        </form>
      </Grid>

      {queryRes &&
        queryRes.map(({ name, description, owner, created_at }: ServiceQuery) => {
          return (
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <SimpleCard
                  name={name}
                  owner={owner}
                  description={description}
                  createdAt={created_at}
                />
              </Grid>
            </Grid>
          );
        })}
    </div>
  );
}

export default App;
