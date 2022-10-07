// icons
import playIcon from '@iconify/icons-carbon/play';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Grid, Stack, Container, Typography, Button, Box } from '@mui/material';
// components
import { Iconify } from '../../../components';
import { CareerHeroIllustration } from '../../../assets';
import cssStyles from '../../../utils/cssStyles'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  ...cssStyles(theme).bgImage(),
  padding: theme.spacing(15, 0),
  [theme.breakpoints.up('md')]: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
}));

// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
  return (
    <RootStyle>
      <Container>
        <Grid container id="hi" sx={{
          flexDirection: {
            lg: "row",
            xl: "row",
            sm: "column-reverse",
            xs: "column-reverse",
            md: "column-reverse",
          },
          transform: {
            // lg: "",
            // xl: "",
            // sm: `scale(0.9)`,
            // xs: `scale(0.9)`,
            // md: ``,
          },
          // marginTop: "12rem"
        }} columnSpacing={0} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6} lg={5} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Stack spacing={5}>
              <Typography variant="h1">Boosts Your Website Traffic</Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
                venenatis ante odio sit amet eros.
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent={{ xs: 'center', md: 'unset' }}
                spacing={3}
              >
                <Button
                  disableRipple
                  color="inherit"
                  size="large"
                  startIcon={
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: (theme) => `solid 2px ${alpha(theme.palette.primary.main, 0.24)}`,
                      }}
                    >
                      <Iconify
                        icon={playIcon}
                        sx={{ width: 24, height: 24, color: 'primary.main' }}
                      />
                    </Box>
                  }
                  sx={{
                    px: 0,
                    '&:hover': { bgcolor: 'transparent' },
                  }}
                >
                  See Our Work
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={7}
            pl={0}
            sx={{
              padding: "0px",
              // width: "fit-content",
              transform: {
                xl: "scale(1)",
                lg: "scale(1)",
                md: "scale(0.7)",
                sm: "scale(0.6)",
                xs: "scale(0.5)"
              }
            }}
          >
            <CareerHeroIllustration sx={{
              // height: "auto",
              // width: {
              //   lg: "50%",
              //   xl: "50%",
              //   md: `50%`,
              //   sm: `50%`,
              //   xs: `50%`,
              // }
              maxWidth: "100%", width: {
                sm: "max-content",
                xs: "max-content",
                md: "initial"
              }
            }} />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
