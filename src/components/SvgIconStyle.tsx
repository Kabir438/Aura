import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface SvgIconStyleProps extends BoxProps {
  src: string;
}

export default function SvgIconStyle({ src, sx }: SvgIconStyleProps) {
  return (
    <Box
      component="span"
      sx={{
        width: 24,
        height: 30,
        display: 'inline-block',
        // bgcolor: 'currentColor',
        backgroundImage: `url(${src})`,
        backgroundSize: "81%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
    />
  );
}
