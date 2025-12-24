import React from 'react';
import { Box, Card, CardContent, Typography, Button, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const CardContainer = styled(Card)({
  height: '400px', // Fixed height
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  borderRadius: '16px',
  overflow: 'hidden',
  border: '1px solid #e5e7eb',
  width: '300px', // Fixed width
  margin: '0 auto',
});

const StyledCardMedia = styled(CardMedia)({
  height: '240px',
  width: '100%',
  objectFit: 'contain',
  backgroundColor: '#f8fafc',
});

const TitleOverlay = styled(Box)({
  padding: '12px 16px',
  textAlign: 'center',
  color: '#1f2937',
  backgroundColor: 'white',
  minHeight: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: '1.2',
});

const StyledButton = styled(Button)({
  marginTop: '8px',
  width: '100%',
  backgroundColor: '#2563eb',
  color: 'white',
  '&:hover': {
    backgroundColor: '#1d4ed8',
  },
  fontWeight: 600,
  textTransform: 'none',
  padding: '12px 24px',
  fontSize: '1rem',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
});

const CertificateCard = ({ title, image, pdfPath }) => {
  const handleViewCertificate = () => {
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };

  return (
    <CardContainer elevation={3}>
      <Box>
        <StyledCardMedia
          component="img"
          image={image}
          alt={title}
        />
      </Box>
      <TitleOverlay>
        <Typography variant="h6" component="div" fontWeight={600}>
          {title}
        </Typography>
      </TitleOverlay>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flexGrow: 1 }} />
        <StyledButton
          variant="contained"
          onClick={handleViewCertificate}
        >
          View Certificate
        </StyledButton>
      </CardContent>
    </CardContainer>
  );
};

export default CertificateCard;
