import React from 'react'
import { Button,  Grid, Link, Paper, TextField, Typography } from '@mui/material';

const Signup=()=>{ 

    const paperStyle={padding :60,height:'',width:280, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Create Account</h2>
                </Grid>
                <p>
                <Typography align='left'>Enter Full Name</Typography>
                  <TextField  placeholder='Enter full name' type='text' fullWidth required/>
</p>
                <p>
                <Typography align='left'>Enter Email-id</Typography>
                <TextField  placeholder='Enter email' type='email' fullWidth required/></p>
                <p></p>
               
               <p>
               <Typography align='left'>Enter Password</Typography>
                <TextField  placeholder='Enter password' type='password' fullWidth required/></p> 
                
                <p>
                  <Typography align='left'>Re-enter Password</Typography>
                  <TextField  id="outlined-error-helper-text" helperText=""placeholder='Re-Enter password' type='password' fullWidth required
        />      </p>  
                
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>
                
                <Typography > Already have an account ?
                     <Link href="#" >
                        Login
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Signup