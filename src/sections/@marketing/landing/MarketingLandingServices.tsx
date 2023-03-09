// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Container, Typography, Card, Box } from '@mui/material';
// routes
import Routes from '../../../routes';
// components
import { Iconify, TextMaxLine, SvgIconStyle } from '../../../components';
import { IconButtonAnimate } from '../../../components/animate';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'success', 'warning'] as const;

const SERVICES = [
  {
    name: 'Handwash',
    icon: '/Handwash.png',
    text: 'Nunc nonummy metus. Donec elit libero',
    path: Routes.products,
  },
  {
    name: 'Comfort Mask',
    icon: '/idk/Comfort_Mask.png',
    text: 'Nunc nonummy metus. Donec elit libero',
    path: Routes.products,
  },
  {
    name: 'Pocket Sanitizer',
    icon: '/Pocket_Sanitizer.png',
    text: 'Nunc nonummy metus. Donec elit libero',
    path: Routes.products,
  },
  {
    name: 'Medicated Handwash',
    icon: '/Medicated_Handwash.png',
    text: 'Nunc nonummy metus. Donec elit libero',
    path: Routes.products,
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingLandingServices() {
  return (
    <RootStyle>
      <Container>
        <Stack
          sx={{
            maxWidth: 480,
            mb: { xs: 8, md: 5 },
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Our Services
          </Typography>

          <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
            We Provide
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            We sell high quality hygene products in Nepal.
          </Typography>
        </Stack>

        <Box
          sx={{
            alignItems: 'center',
            display: 'grid',
            gap: 4,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {SERVICES.map((service, index) => (
            <ServiceItem key={service.name} service={service} index={index} />
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type ServiceItemProps = {
  service: {
    name: string;
    text: string;
    path: string;
    icon: string;
  };
  index: number;
};

function ServiceItem({ service, index }: ServiceItemProps) {
  const { name, icon, text, path } = service;

  return (
    <Card
      sx={{
        px: 4,
        // py: 5,
        textAlign: 'center',
        boxShadow: (theme) => ({ md: theme.customShadows.z8 }),
        py: { xs: 7, md: 8 },  
      }}
    >
      {/* <Image alt={icon} src={icon} sx={{ width: 88, height: 88, mx: 'auto' }} /> */}
      <SvgIconStyle
        src={icon}
        sx={{
          width: 88,
          height: 88,
          mx: 'auto',
          color: (theme) => theme.palette[COLORS[index]].main,
        }}
      />

      <Stack spacing={1} sx={{ mt: 5 }}>
        <TextMaxLine variant="h6">{name}</TextMaxLine>
      </Stack>
    </Card>
  );
}
