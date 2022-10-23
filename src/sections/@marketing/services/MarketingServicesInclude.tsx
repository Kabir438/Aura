// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Stack, Box, Card } from '@mui/material';
// components
import { SvgIconStyle } from '../../../components';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Handwash',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/Handwash.png',
  },
  {
    title: 'Comfort Mask',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/idk/Comfort_Mask.png',
  },
  {
    title: 'Pocket Sanitizer',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/Pocket_Sanitizer.png',
  },
  {
    title: 'Medicated Handwash',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/Medicated_Handwash.png',
  },
  {
    title: 'Lip Balm',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/Lip_Balm.png',
  },
  {
    title: 'Mask',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    icon: '/Mask.png',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingServicesInclude() {
  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={3}
          sx={{
            mx: 'auto',
            maxWidth: 480,
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h2">Products Include</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Our Products range hygiene essentials to cosmetics
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            rowGap: { xs: 8, md: 10 },
            columnGap: 10,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {CORE_VALUES.map((value) => (
            <Card sx={{pt: "40px"}} key={value.title}>
              <SvgIconStyle
                src={value.icon}
                // color="info"
                sx={{ width: 50, height: 64, mx: 'auto', bgcolor: '', transform: 'scale(1.5)'}}
              />
              <Typography variant="h5" sx={{ mt: 3.5, mb: 3.5 }}>
                {value.title}
              </Typography>
            </Card>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
