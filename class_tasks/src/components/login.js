import { Box, Avatar, TextField, Typography, Grid } from '@mui/material'
import { Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import Paper from '@mui/material/Paper'
import '../styles/login.css'

export default function Login() {
  return (
    <Grid
      className="main"
      container
      justifyContent={'center'}
      alignItems={'center'}
      alignContent={'center'}
    >
      <Grid item>
        <Paper
          elevation={19}
          sx={{ width: '50vh', height: '60vh', borderRadius: '10px' }}
        >
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Avatar sx={{ marginY: '2rem', backgroundColor: 'green' }}>
              <PersonIcon />
            </Avatar>
            <Box component={'form'} display={'flex'} flexDirection={'column'}>
              <TextField type="email" required label="Email" color="success" />
              <TextField
                fullWidth
                type="password"
                required
                label="password"
                sx={{ marginY: '2rem', width: '22rem' }}
                color="success"
              />
              <a
                href="#"
                style={{ alignSelf: 'baseline', marginBottom: '2rem' }}
              >
                <Typography variant="body2">Forgot your password ?</Typography>
              </a>
              <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
                sx={{ width: '22rem' }}
              >
                Sign in
              </Button>
              <a href="#" style={{ alignSelf: 'flex-end', marginTop: '2rem' }}>
                <Typography variant="body2">
                  Don&apos;t have an account? Sign up
                </Typography>
              </a>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  )
}
