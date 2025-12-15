import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { HeartHandshake, Sparkles, Users } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import missionImage from '../assets/missionvision.jpg';
import childrenPic from '../assets/Children-pic.jpg';

// Inline styles instead of styled components
const styles = {
  heroSection: {
    position: 'relative',
    width: '100%',
    height: { xs: '35vh', sm: '40vh', md: '47vh', lg: '55vh' },
    marginTop: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: '#fff',
    padding: '2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '8px',
    backdropFilter: 'blur(2px)',
    maxWidth: '800px',
    margin: '0 auto'
  },
  heroGif: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'left',
    zIndex: 1
  },
  section: {
    paddingTop: { xs: '0.5rem', sm: '1rem', md: '1.5rem', lg: '2rem' },
    paddingBottom: '2rem',
    backgroundColor: '#f9f9f9',
    '& > .vaani-foundation-container': {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 1rem',
      width: '100%',
      '@media (max-width: 900px)': {
        padding: '0 0.5rem',
      },
    }
  },
  vaaniFoundationContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 1rem',
    width: '100%',
    '@media (max-width: 900px)': {
      padding: '0 0.5rem',
    },
  },
  visionMissionWrapper: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '0 0 1rem',
    '& > div': {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0',
      width: '100%',
    },
    '@media (max-width: 900px)': {
      padding: '1.5rem 0 0.75rem',
      '& > div': {
        padding: '0',
      },
    },
  },
  visionMissionRow: (isReverse) => ({
    display: 'flex',
    flexDirection: isReverse ? 'row-reverse' : 'row',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    height: '520px !important',
    minHeight: '520px !important',
    maxHeight: '520px !important',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      height: 'auto !important',
      minHeight: 'auto !important',
      maxHeight: 'none !important',
    },
  }),
  visionMissionText: (bgColor) => ({
    flex: '0 0 50%',
    padding: { xs: '1.5rem 1rem', md: '2rem 2rem' },
    backgroundColor: bgColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    overflow: 'auto',
  }),
  visionMissionImageBox: {
    flex: '0 0 50%',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    height: '100%',
  },
  visionMissionImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  },
  commitmentsSection: {
    py: 1,
    width: '100%',
    backgroundColor: '#dbeafe', // blue-100
    '& .MuiContainer-root': {
      maxWidth: '1650px',
      margin: '0 auto',
      padding: '0.5rem',
      position: 'relative',
      overflow: 'hidden',
      '@media (max-width: 600px)': {
        padding: '1rem',
      },
    },
    '& > *': {
      position: 'relative',
      zIndex: 1,
    },
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: 6,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    mb: 4,
  },
  card: {
    flex: '1 1 300px',
    maxWidth: '280px',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
    position: 'relative',
    marginTop: '30px',
    border: '1px solid rgba(0,0,0,0.05)',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    },
  },
  cardHeader: {
    height: '70px',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-55px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '110px',
      height: '110px',
      backgroundColor: 'white',
      borderRadius: '50%',
      zIndex: 1,
    }
  },
  cardIcon: {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    width: '110px',
    height: '110px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    color: '#333',
    borderRadius: '50%',
  },
  cardText: {
    p: 3,
    textAlign: 'center',
    fontSize: '1.1rem',
    lineHeight: 1.7,
    color: '#333',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '260px',
    paddingTop: '40px',
  },
  commitmentFooter: {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#555',
    fontStyle: 'italic',
    mt: 6,
    maxWidth: '800px',
    mx: 'auto',
    lineHeight: 1.8,
  }
};

const MissionVision = () => {
  return (
    <Box>
      <Box sx={styles.heroSection}>
        <img 
          src={missionImage} 
          alt="Mission and Vision"
          style={styles.heroGif}
        />
      </Box>
      
      {/* Breadcrumbs below hero section */}
      <Breadcrumbs />
      
      {/*Vaani Foundation */}
      <Box sx={styles.section}>
        <Box className="vaani-foundation-container" sx={styles.vaaniFoundationContainer}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-blue-600 uppercase">
            VAANI FOUNDATION MISSION AND VISION
          </h2>
          <div className="space-y-6">
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
              Vaani Foundation is a grassroots-driven nonprofit organization committed to uplifting underserved and marginalized communities across rural India. Since our inception, we have been working to ensure that every individual—regardless of their background—has access to education, healthcare, livelihood opportunities, and a dignified life.
            </Typography>

            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
              We strongly believe that progress becomes meaningful only when it reaches those who need it the most. Guided by compassion, transparency, and long-term commitment, we work hand-in-hand with communities to build sustainable and self-reliant futures. With a bold vision and community-led approach, we strive to deliver practical solutions that create measurable, lasting impact.
            </Typography>

            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
              Across villages and rural regions, Vaani Foundation implements programs focused on education support, women empowerment, livelihood training, environmental conservation, and improved healthcare access. Our initiatives address local needs, strengthen community capacities, and create opportunities for growth and empowerment.
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
                We are proud to contribute to equitable development by collaborating with CSR partners, government bodies, and local institutions. Together, we work to reduce inequalities, support vulnerable groups, and build resilient communities capable of driving their own progress.
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
                By transforming challenges into opportunities, we stay committed to shaping a future where every person—especially the underserved—can learn, grow, and live with dignity. At Vaani Foundation, we don’t just dream of change—we work every day to make it a reality.
              </Typography>
          </div>
        </Box>
      </Box>

      {/* Commitments Section */}
      <Box sx={styles.commitmentsSection}>
        <Box className="vaani-foundation-container" sx={{
          maxWidth: '1400px',
          px: { xs: 4, md: 6 },
          width: '100%',
          margin: '0 auto'
        }}>
          <div className="space-y-6">
            
            <Box sx={styles.cardsContainer}>
              {/* Card 1 */}
              <Box sx={styles.card}>
                <Box sx={{ ...styles.cardHeader, backgroundColor: '#93c5fd' }}>
                  <Box sx={styles.cardIcon}>
                    <HeartHandshake size={64} strokeWidth={1.5} />
                  </Box>
                </Box>
                <Typography variant="body1" sx={styles.cardText}>
                  We stand with every community dreaming of a better tomorrow
                </Typography>
              </Box>

              {/* Card 2 */}
              <Box sx={styles.card}>
                <Box sx={{ ...styles.cardHeader, backgroundColor: '#d8b4fe' }}>
                  <Box sx={styles.cardIcon}>
                    <Sparkles size={64} strokeWidth={1.5} />
                  </Box>
                </Box>
                <Typography variant="body1" sx={styles.cardText}>
                  Every child deserves a future built on opportunity, not limitation.
                </Typography>
              </Box>

              {/* Card 3 */}
              <Box sx={styles.card}>
                <Box sx={{ ...styles.cardHeader, backgroundColor:'#5eead4' }}>
                  <Box sx={styles.cardIcon}>
                    <Users size={64} strokeWidth={1.5} />
                  </Box>
                </Box>
                <Typography variant="body1" sx={styles.cardText}>
                  When women rise, families thrive — and communities transform
                </Typography>
              </Box>
            </Box>

          
          </div>
        </Box>
      </Box>

      {/* Our Vision & Our Mission section */}
      <Box sx={styles.visionMissionWrapper}>
        {/* Vision row */}
        <Box sx={styles.visionMissionRow(false)}>
          <Box sx={styles.visionMissionText('#e7caf6')}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontFamily: '"Playfair Display", serif',
              }}
            >
              Our Vision
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              Build a world where every child and every marginalized community
              has the right to survival, safety, development, and participation
              in a life of dignity.
            </Typography>
          </Box>
          <Box sx={styles.visionMissionImageBox}>
            <Box
              component="img"
              src={childrenPic}
              alt="Children - Vaani Foundation vision"
              sx={styles.visionMissionImage}
            />
          </Box>
        </Box>

        {/* Mission row (reverse order on desktop) */}
        <Box sx={styles.visionMissionRow(true)}>
          <Box sx={styles.visionMissionText('#f9c3c7')}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontFamily: '"Playfair Display", serif',
              }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              To inspire meaningful change in the way society engages with
              vulnerable communities, and to create immediate and lasting
              impact through education, healthcare, and livelihood programmes.
            </Typography>
          </Box>
          <Box sx={styles.visionMissionImageBox}>
            <Box
              component="img"
              src={missionImage}
              alt="Community work - Vaani Foundation mission"
              sx={styles.visionMissionImage}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MissionVision;