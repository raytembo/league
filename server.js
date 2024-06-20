import express from 'express';
import { getTeam, getTeams,AddTeam,deleteTeam, updateTeam} from './database.js';

const app = express();
//app.use(express.json());

app.get ('/', (req,res)=>{
    res.send('Welcome to League');
})

app.get('/teams', async (req,res) =>{
  const teams = await getTeams();
   res.send(teams);   
})

app.get('/team/:id', async (req,res) =>{
  const id = req.params.id;
  const team = await getTeam(id);
  const oneTeam = team[0];
   res.send(oneTeam);   
})

app.post('/team', async (req,res)=>{
  const {idTeams,Team,Wins,Loses,Draws,Points} = req.body
  const newteam = await AddTeam(idTeams,Team,Wins,Loses,Draws,Points);
  res.send(newteam).status(201);
})

app.delete('/team/:id', async (req,res) =>{
  const id = req.params.id;
  const team = await deleteTeam(id);
   res.send(team);   
})

app.patch('/team/:id', async (req,res) =>{
  const id = req.params.id;
  const newPoints = req.body;
  const team = await updateTeam(newPoints,id);
   res.send(team);   
})


app.listen(4000,()=>{
 console.log("Listening on port 4000");
})