import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Stack, Container, Typography, Button, Divider } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import { Iconify, Image } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    paddingBottom: 0,
    paddingTop: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingLandingAbout() {
  return (
    <RootStyle>
      <Container>
        <Image
          alt="langding about"
          src="/1.jpeg"
          ratio="21/9"
          sx={{
            borderRadius: 1.5,
            mb: { xs: 5, md: 10 },
          }}
        />

        <Grid
          container
          rowSpacing={{ xs: 5, md: 0 }}
          columnSpacing={{ md: 3 }}
          justifyContent="space-between"
        >
          <Grid item xs={12} md={5} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              About Us
            </Typography>

            <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
              What We Do
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              With products ranging from hygiene to cosmetics, we believe in quality over quantity. This company was established as a small scale industry to provide for the Covid outbreak, but today, we proudly stand as one of the trusted brands dedicating our success to our consumers and employees. Our marketing is done through social media and we have specialists hired in each department with deep knowledge in their field. We believe in building lives as we built this company- with love, with dedication, and with ambition.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={5}>
              <LineItem
                total="20"
                label="products"
                text="Starting with masks and sanitisers, we diversified into cosmetics to expand and increase market share."
              />
              <LineItem
                total={fShortenNumber(27000)}
                label="followers"
                text="Created brand image because of promising quality of products across 5+ cities in Nepal."
              />
              <LineItem
                total="2"
                label="years of experience"
                text="Started as an experiment and transformed into one of the most trusted sellers."
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type LineItemProps = {
  total: string;
  label: string;
  text: string;
};

function LineItem({ total, label, text }: LineItemProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem sx={{ ml: 3, mr: 5 }} />}
    >
      <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
        <Stack direction="row">
          <Typography variant="h2">{total}</Typography>
          <Typography variant="h4" sx={{ color: 'primary.main' }}>
            +
          </Typography>
        </Stack>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          {label}
        </Typography>
      </Stack>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {text}
      </Typography>
    </Stack>
  );
}
