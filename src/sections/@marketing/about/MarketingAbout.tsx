// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, Button } from '@mui/material';
// components
import { Iconify, Image } from '../../../components';

// ----------------------------------------------------------------------


const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));


// ----------------------------------------------------------------------

export default function MarketingAbout() {
  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Image
              alt="teams"
              src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_teams.svg"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h2">Who We Are?</Typography>
            <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
              Vivamus consectetuer hendrerit lacus. Curabitur a felis in nunc fringilla tristique.
              Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.
              <br />
              <br />
              Nam pretium turpis et arcu. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
              dignissim dolor, a pretium mi sem ut ipsum. Praesent venenatis metus at tortor
              pulvinar varius.
            </Typography>

            <Button
              variant="outlined"
              color="inherit"
              size="large"
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
            >
              Check Our Work
            </Button>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

