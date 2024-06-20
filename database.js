import { createPool} from 'mysql2/promise';


const pool = await createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'league'
})


export async function getTeams(){
  const [Teams] = await pool.query('SELECT * FROM teams')
  return Teams

}

export async function getTeam(id){
    const [Team] = await pool.query(`SELECT * FROM teams WHERE teamid = ?`, [id])
    return Team
  }  

  export async function AddTeam(idTeams,Team,Wins,Loses,Draws,Points){
    const [newTeam] = await pool.query(`
    INSERT INTO teams
    (teamid,Team,Wins,Loses,Draws,Points) 
    VALUES (?,?,?,?,?,?)`,[idTeams,Team,Wins,Loses,Draws,Points])
    return newTeam
  }
 // fix the update method here 
  export async function updateTeam(Points,id){
    const [updatedTeam] = await pool.query(
      `UPDATE teams SET Points = ?
       WHERE teamid = ?
    ` , [Points,id])
    return updatedTeam
  }    

  export async function deleteTeam(id){
    const [Team] = await pool.query(`DELETE FROM teams WHERE teamid = ?`, [id])
    return Team
  }    