import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const PageContainer = styled(Box)({
  paddingTop: '80px', // Reduced from 120px to 80px
  minHeight: '100vh',
  backgroundColor: '#f9fafb',
});

const PageTitle = styled('h2')({
  fontSize: '1.875rem', // text-3xl
  lineHeight: '2.25rem',
  '@media (min-width: 768px)': {
    fontSize: '2.25rem', // md:text-4xl
    lineHeight: '2.5rem',
  },
  fontWeight: 700, // font-bold
  textAlign: 'center', // text-center
  marginBottom: '3rem', // mb-12
  color: '#2563eb', // text-blue-600
  textTransform: 'uppercase', // uppercase
  fontFamily: 'inherit', // Use the default font family
});

const TeamMemberCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  maxWidth: '1000px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    maxWidth: '500px',
  },
}));

const MemberImage = styled('img')(({ theme }) => ({
  width: '40%',
  objectFit: 'cover',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '400px',
  },
}));

const MemberInfo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  flex: 1,
  backgroundColor: '#f8fafc',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const MemberName = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  fontSize: '1.75rem',
}));

const MemberPosition = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 500,
  marginBottom: theme.spacing(3),
  fontSize: '1.25rem',
}));

const MemberDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  lineHeight: 1.8,
  marginBottom: theme.spacing(2),
}));

const OurTeam = () => {

  return (
    <PageContainer>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <PageTitle>
          OUR TEAM
        </PageTitle>
        
        <TeamMemberCard>
          <MemberImage 
            src="/src/assets/Our team/Maheshsir.jpg" 
            alt="Mahesh Sir - Team Member"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x600/F3F4F6/9CA3AF?text=Mahesh+Sir';
            }}
          />
          <MemberInfo>
            <MemberName>Mahesh Sir</MemberName>
            <MemberPosition>Chief Executive Officer</MemberPosition>
            <MemberDescription>
              Mahesh Sir is a dedicated professional with extensive experience in the social sector. His leadership and vision have been instrumental in driving our organization's mission forward.
            </MemberDescription>
            <MemberDescription>
              With a passion for community development and social change, Mahesh Sir has been at the forefront of numerous initiatives that have made a significant impact in the lives of many.
            </MemberDescription>
            <MemberDescription>
              His strategic approach and commitment to excellence continue to inspire our team and drive our organization towards achieving its goals.
            </MemberDescription>
          </MemberInfo>
        </TeamMemberCard>
      </Container>
    </PageContainer>
  );
};

export default OurTeam;