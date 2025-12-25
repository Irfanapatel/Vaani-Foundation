import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import CertificateCard from '../components/CertificateCard';

// Import certificate images and PDFs
import registrationCert from '../assets/documents/registration certificate.pdf';
import registrationPreview from '../assets/certificates/registration_preview.jpg';
import panCert from '../assets/documents/PAN.pdf';
import panPreview from '../assets/certificates/pan.jpg';
import gCert from '../assets/documents/80G.pdf';
import gPreview from '../assets/certificates/80G.jpg';
import cert12A from '../assets/documents/12A.pdf';
import preview12A from '../assets/certificates/12A.jpg';
import csrCert from '../assets/documents/Approval Letter for form CSR1.PDF';
import csrPreview from '../assets/certificates/CSR-1.jpg';
import darpanCert from '../assets/documents/NGO Darpan.pdf';
import darpanPreview from '../assets/documents/NGO Darpan.jpg';

// Page wrapper
const PageContainer = styled(Box)({
  paddingTop: '80px',
  minHeight: '100vh',
  backgroundColor: '#f9fafb',
});

const PageTitle = styled('h2')({
  fontSize: '1.875rem',
  lineHeight: '2.25rem',
  '@media (min-width: 768px)': {
    fontSize: '2.25rem',
    lineHeight: '2.5rem',
  },
  fontWeight: 700,
  textAlign: 'center',
  marginBottom: '3rem',
  color: '#2563eb',
  textTransform: 'uppercase',
  fontFamily: 'inherit',
});

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Registration Certificate',
      image: registrationPreview,
      pdfPath: registrationCert
    },
    {
      id: 2,
      title: 'PAN Card',
      image: panPreview,
      pdfPath: panCert
    },
    {
      id: 3,
      title: '80G Certificate',
      image: gPreview,
      pdfPath: gCert
    },
    {
      id: 4,
      title: '12A Certificate',
      image: preview12A,
      pdfPath: cert12A
    },
    {
      id: 5,
      title: 'CSR Registration Certificate',
      image: csrPreview,
      pdfPath: csrCert
    },
    {
      id: 6,
      title: 'Darpan Registration Certificate',
      image: darpanPreview,
      pdfPath: darpanCert
    }
  ];

  return (
    <PageContainer>
      <Box sx={{ pt: '60px' }}>
        <Breadcrumbs />
      </Box>
      <Container
        maxWidth={false}
        sx={{
          py: 4,
          px: { xs: 1, sm: 2, md: 3 },
          width: '100%',
        }}
      >
        <PageTitle>Certificates</PageTitle>
        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center', 
            color: '#4b5563', 
            maxWidth: '1200px', 
            mx: 'auto',
            mb: 4,
            fontSize: '1.1rem',
            lineHeight: 1.7
          }}
        >
          Vaani Foundation is registered under sections 12A & 80G of the Income Tax Act, 1961 and CSR-1 registered under the Ministry of Corporate Affairs for undertaking CSR activities.
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center', 
            color: '#4b5563', 
            maxWidth: '1200px', 
            mx: 'auto',
            mb: 6,
            fontSize: '1.1rem',
            lineHeight: 1.7
          }}
        >
          Click on any report below to open it in a new tab for easy viewing, or choose to download the PDF directly to your device for offline access.
        </Typography>

        <Box sx={{ 
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          px: { xs: 2, sm: 3, md: 4 },
        }}>
          <Grid 
            container 
            spacing={3}
            sx={{
              maxWidth: '1200px',
              margin: 0,
              justifyContent: 'center',
              '& > .MuiGrid-item': {
                padding: '12px',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.2s ease-in-out'
                },
                transition: 'transform 0.2s ease-in-out',
              }
            }}
          >
            {certificates.map((cert) => (
              <Grid 
                item 
                key={cert.id} 
                xs={12}
                sm={6}
                md={4}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '12px !important'
                }}
              >
                <CertificateCard
                  title={cert.title}
                  image={cert.image}
                  pdfPath={cert.pdfPath}
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    boxShadow: 3,
                    '&:hover': {
                      boxShadow: 6
                    },
                    transition: 'box-shadow 0.3s ease-in-out',
                    borderRadius: 2,
                    overflow: 'hidden'
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </PageContainer>
  );
};

export default Certificates;