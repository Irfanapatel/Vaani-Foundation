import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import maheshImage from '../assets/Our team/Maheshsir.jpg';
import userImage from '../assets/Our team/user.png';
import jagdishImage from '../assets/Our team/Jagdishsir.jpeg';
import rajputImage from '../assets/Our team/rajput.png';
import mehtaImage from '../assets/Our team/mr.mehta.png';
import yogeshImage from '../assets/Our team/yogesh.png';
import shandilImage from '../assets/Our team/shandil.png';
import sananImage from '../assets/Our team/sanan.png';
import adnanImage from '../assets/Our team/adnan.png';
import muniraImage from '../assets/Our team/munira.png';
import irfanaImage from '../assets/Our team/irfana.jpeg';
import meetImage from '../assets/Our team/Meet.png';
import pratikImage from '../assets/Our team/pratil.png';
import martinImage from '../assets/Our team/martinsir.jpeg';

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

// Team card styled like the reference
const TeamCard = styled(Box)({
  width: '100%',
  maxWidth: '92%',
  margin: '0 auto 2rem auto',
  backgroundColor: '#e3f3ff',
  borderRadius: '16px',
  display: 'flex',
  gap: '2.5rem',
  padding: '0.75rem 2rem',
  alignItems: 'center',
  boxShadow: '0 20px 40px rgba(15, 23, 42, 0.18)',
  backgroundImage:
    'radial-gradient(circle at top left, #fce7f3 0, transparent 50%), radial-gradient(circle at bottom right, #bfdbfe 0, transparent 55%)',
  minHeight: '480px',
  '@media (max-width: 900px)': {
    flexDirection: 'column',
    textAlign: 'center',
    padding: '0.75rem 1.25rem',
  },
});

// Alternative team card with different background color
const TeamCardAlt = styled(Box)({
  width: '100%',
  maxWidth: '92%',
  margin: '0 auto 2rem auto',
  backgroundColor: '#fce7f3',
  borderRadius: '16px',
  display: 'flex',
  gap: '2.5rem',
  padding: '0.75rem 2rem',
  alignItems: 'center',
  boxShadow: '0 20px 40px rgba(15, 23, 42, 0.18)',
  backgroundImage:
    'radial-gradient(circle at top left, #dbeafe 0, transparent 40%), radial-gradient(circle at bottom right, #fce7f3 0, transparent 55%)',
  minHeight: '480px',
  '@media (max-width: 900px)': {
    flexDirection: 'column',
    textAlign: 'center',
    padding: '0.75rem 1.25rem',
  },
});

// Third team card with combined colors from other cards
const TeamCardAlt2 = styled(Box)({
  width: '100%',
  maxWidth: '92%',
  margin: '0 auto 2rem auto',
  backgroundColor: '#f0fdf4',
  borderRadius: '16px',
  display: 'flex',
  gap: '2.5rem',
  padding: '0.75rem 2rem',
  alignItems: 'center',
  boxShadow: '0 20px 40px rgba(15, 23, 42, 0.18)',
  backgroundImage:
    'radial-gradient(circle at top left, #e0f2fe 0, transparent 40%), radial-gradient(circle at bottom right, #bbf7d0 0, transparent 55%)',
  minHeight: '480px',
  '@media (max-width: 900px)': {
    flexDirection: 'column',
    textAlign: 'center',
    padding: '0.75rem 1.25rem',
  },
});

// Fourth team card with purple background
const TeamCardAlt3 = styled(Box)({
  width: '100%',
  maxWidth: '92%',
  margin: '0 auto 2rem auto',
  backgroundColor: '#faf5ff',
  borderRadius: '16px',
  display: 'flex',
  gap: '2.5rem',
  padding: '0.75rem 2rem',
  alignItems: 'center',
  boxShadow: '0 20px 40px rgba(15, 23, 42, 0.18)',
  backgroundImage:
    'radial-gradient(circle at top left, #fce7f3 0, transparent 50%), radial-gradient(circle at bottom right, #ddd6fe 0, transparent 55%)',
  minHeight: '480px',
  '@media (max-width: 900px)': {
    flexDirection: 'column',
    textAlign: 'center',
    padding: '0.75rem 1.25rem',
  },
});

const PhotoWrapper = styled(Box)({
  flexShrink: 0,
  width: '320px',
  height: '350px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media (max-width: 900px)': {
    width: '250px',
    height: '280px',
  },
});

const Photo = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ContentWrapper = styled(Box)({
  flex: 1,
  marginTop: '-0.5rem',
});

const NameText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.4rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.75rem',
  },
  marginBottom: '0.75rem',
}));

const RoleText = styled(Typography)({
  fontWeight: 600,
  fontSize: '1.05rem',
  color: '#1e293b',
  marginBottom: '1.5rem',
});

const BodyText = styled(Typography)({
  fontSize: '0.98rem',
  lineHeight: 1.7,
  color: '#374151',
  marginBottom: '0.9rem',
});

const OurTeam = () => {
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
        <PageTitle>OUR TEAM</PageTitle>

        <TeamCardAlt>
          <PhotoWrapper>
            <Photo src={martinImage} alt="Team member" />
          </PhotoWrapper>

          <ContentWrapper>
            <NameText>
            Martin Patel – President
            </NameText>
            <BodyText>
            Martin Patel, President of Vaani Foundation, leads the organization with a strong commitment to meaningful and sustainable community development. His approach blends practical experience with a clear vision for empowering underserved families through education, healthcare and livelihood initiatives.
            </BodyText>
            <BodyText>
            Under his leadership, the foundation has strengthened its grassroots engagement, ensuring that every program is designed around real community needs and delivers measurable impact. Martin places high importance on transparency, collaboration and responsible execution in every project.
            </BodyText>
            <BodyText>
              He is known for fostering partnerships with local institutions, CSR bodies and community groups to expand the foundation’s reach and effectiveness. His dedication to inclusive development continues to guide VAANI Foundation’s work toward creating long-term, positive change.
            </BodyText>
          </ContentWrapper>
        </TeamCardAlt>

        <TeamCard>
          <PhotoWrapper>
            <Photo src={maheshImage} alt="Mahesh Sir - Team member" />
          </PhotoWrapper>

          <ContentWrapper>
            <NameText>
              Mahesh Bhadani – Chief Executive Officer
            </NameText>

            <BodyText>
            Mahesh Bhadani serves as the Chief Executive Officer of Vaani Foundation, where he provides strategic guidance and oversees the organization’s core programs with a strong focus on impact, accountability and community empowerment. With extensive experience in managing development initiatives, he ensures that every project aligns with the foundation’s mission to uplift underserved communities through education, healthcare, environmental action and sustainable development.
            </BodyText>
            <BodyText>
            His leadership emphasizes efficiency, transparency and innovation across all operations. By strengthening internal processes and supporting field teams, he plays a key role in expanding the foundation’s reach and effectiveness.
            </BodyText>
            <BodyText>
            Through his commitment to responsible execution and long-term planning, he continues to drive Vaani Foundation toward measurable, inclusive and sustainable growth.
            </BodyText>
          </ContentWrapper>
        </TeamCard>

        <TeamCardAlt2>
          <PhotoWrapper>
            <Photo src={jagdishImage} alt="Jagdish - Team member" />
          </PhotoWrapper>

          <ContentWrapper>
            <NameText>
            Jagadish Malaviya – Chief Executive Officer
            </NameText>

            <BodyText>
            Jagadish Malaviya, Chief Executive Officer, brings a strong foundation in engineering and technical solutions to the organization. With deep expertise in structural design and infrastructure development, he contributes valuable insight to ensure that every project is planned and executed with precision.
            </BodyText>
            <BodyText>
            His commitment to sustainability and responsible engineering plays a central role in shaping the organization’s approach to project development. By integrating modern methods, quality standards, and environmentally conscious practices, he ensures that each initiative supports long-term durability and community well-being.
            </BodyText>
            <BodyText>
            With his analytical mindset and technical leadership, Jagadish helps maintain the organization’s focus on excellence, innovation, and reliability. His guidance strengthens operational execution and reinforces the foundation’s commitment to delivering safe, sustainable, and high-quality outcomes.
            </BodyText>
          </ContentWrapper>
        </TeamCardAlt2>


        <TeamCard>
          <PhotoWrapper>
            <Photo src={rajputImage} alt="Dr J J Rajput - Team member" />
          </PhotoWrapper>

          <ContentWrapper>
            <NameText>
            Dr J J Rajput - Vice President of Dahej Industry Association
            </NameText>

            <BodyText>
            Dr. J. J. Rajput, Vice President of the Dahej Industry Association, oversees the financial governance of Vaani Foundation, bringing extensive expertise in financial management, budgeting and resource allocation. His focus on transparency, accountability and regulatory compliance ensures that the foundation’s operations are both responsible and strategically aligned with its mission.
            </BodyText>
            <BodyText>
            By implementing robust fiscal strategies, Dr. Rajput ensures optimal utilization of resources, enabling Vaani Foundation to plan and execute its initiatives effectively. His guidance strengthens the foundation’s financial framework, enhancing its capacity to deliver sustainable social impact and meaningful benefits to the communities it serves.
            </BodyText>
          </ContentWrapper>
        </TeamCard>
        <TeamCardAlt3>
          <PhotoWrapper>
            <Photo src={mehtaImage} alt="Maheshkumar G. Maheta - Team member" />
          </PhotoWrapper>

          <ContentWrapper>
            <NameText>
            Maheshkumar G. Maheta – Executive Engineering irrigation Department-Bharuch
            </NameText>
            <BodyText>
            Maheshkumar G. Maheta, serving as the Executive Engineer in the Irrigation Department, Bharuch, brings extensive expertise in water resource management and sustainable irrigation practices. His rich experience in planning, designing, and executing irrigation projects ensures that Vaani Foundation’s initiatives in water and agriculture management are technically robust, environmentally sustainable, and aligned with best industry practices.
            </BodyText>
            <BodyText>
            His role encompasses strategic project planning, efficient execution, and strict adherence to regulatory standards. By optimizing resources and promoting effective irrigation and water conservation methods, he contributes significantly to achieving tangible, long-term outcomes. Through his guidance, Vaani Foundation strengthens its capacity to deliver impactful programs that enhance community welfare, support sustainable development, address critical water management challenges, and improve the overall quality of life for local communities.
            </BodyText>
          </ContentWrapper>
        </TeamCardAlt3>

        <TeamCardAlt2>
          <PhotoWrapper>
            <Photo src={yogeshImage} alt="Yogesh R. Ashodariya - Team member" />
          </PhotoWrapper>

          <ContentWrapper>
            <NameText>
            Yogesh R. Ashodariya –  Member - Tech Consultant at TCS
            </NameText>

            <BodyText>
           Yogesh Ashodariya, serving as a Technology Consultant at Tata Consultancy Services (TCS), brings extensive expertise in designing and implementing transformative digital solutions for complex organizational challenges. His strong understanding of technology architecture and strategic advisory enables the seamless integration of advanced systems, ensuring that digital initiatives are effective, sustainable, and aligned with organizational objectives.
           </BodyText>
            <BodyText>
            By focusing on optimizing operational workflows, he applies industry best practices and modern methodologies to improve efficiency and deliver measurable outcomes. Through his contributions, VAANI Foundation benefits from robust, scalable technology frameworks that support data-driven decision-making, streamline operations, and enhance the overall impact of its programs, ultimately strengthening the foundation’s ability to deliver meaningful social and community outcomes.
            </BodyText>
          </ContentWrapper>
        </TeamCardAlt2>
        <TeamCardAlt>
          <PhotoWrapper>
            <Photo src={shandilImage} alt="Shandil Patel - Team member" />
          </PhotoWrapper>

          <ContentWrapper>
            <NameText>
             Shandil Patel – EDCS Panel officer at Reliance Industries Limited
            </NameText>
            <BodyText>
            Shandil Patel, a DCS Panel Officer at Reliance Industries Limited, brings strong technical expertise and operational experience that adds significant value to Vaani Foundation’s initiatives. His background in Chemical Engineering and his involvement in pre-commissioning and plant start-up processes provide a solid foundation for supporting technically driven projects.
            </BodyText>
            <BodyText>
            His understanding of system efficiency, process control and safety standards helps the foundation ensure that its programs are implemented with precision and reliability.
            </BodyText>
            <BodyText>
            By applying his analytical thinking and practical problem-solving skills, he contributes to the foundation’s mission of delivering well-designed, sustainable, and community-centric development initiatives.
          </BodyText>
          </ContentWrapper>
        </TeamCardAlt>
        <TeamCard>
          <PhotoWrapper>
            <Photo src={sananImage} alt="Sanan Saiyed - Team member" />
          </PhotoWrapper>

          <ContentWrapper>
            <NameText>
            Sanan Saiyed –Tech Lead - Software Team
            </NameText>

            <BodyText>
            Sanan Saiyed, serving as the Tech Lead of the Software Team, plays a pivotal role in guiding the strategic development of innovative and efficient digital solutions. His leadership ensures that technical strategies are thoughtfully designed and effectively implemented to support organizational objectives.
            </BodyText>
            <BodyText>
            He oversees the complete project lifecycle—from planning and architecture to execution and deployment—ensuring that each solution integrates seamlessly with advanced technologies and industry best practices.
            </BodyText>
            <BodyText>
            With a strong emphasis on collaboration, quality assurance, and performance, he drives the team toward building scalable, reliable, and high-impact systems. His commitment to operational excellence consistently elevates the standard of software development within the organization.
            </BodyText>
          </ContentWrapper>
        </TeamCard>
        <TeamCardAlt2>
          <PhotoWrapper>
            <Photo src={adnanImage} alt="Adnan Patel - Team member" />
          </PhotoWrapper>

          <ContentWrapper>
            <NameText>
            Adnan Patel –  Tech Lead - Software Team
            </NameText>

            <BodyText>
            Adnan Patel, serving as the Tech Lead of the Software Team, provides strategic direction to the technical development of scalable and high-performance software systems. His leadership ensures that every architectural decision and project framework aligns with the organization’s long-term digital objectives and operational goals.
            </BodyText>
            <BodyText>
            His responsibilities include overseeing the complete project structure, guiding cross-functional collaboration, and maintaining rigorous quality standards. By ensuring seamless coordination between teams, he creates an environment where efficient development, innovation, and accountability thrive.
            </BodyText>
            <BodyText>
            Leveraging deep technical expertise and a solution-driven mindset, he leads the team in tackling complex challenges with clarity and precision. His commitment to excellence ensures that all software solutions not only meet industry standards but also deliver meaningful, result-oriented impact for the organization.
            </BodyText>
          </ContentWrapper>
        </TeamCardAlt2>
        <TeamCardAlt3>
          <PhotoWrapper>
            <Photo src={muniraImage} alt="Munira M. Patel - Team member" />
          </PhotoWrapper>

          <ContentWrapper>
            <NameText>
            Munira M. Patel – Software Engineer
            </NameText>
            <BodyText>
            Munira M. Patel, serving as a Software Engineer, excels in designing, developing, and optimizing advanced software solutions tailored to organizational needs. Her strong command of coding practices and analytical thinking contributes to building systems that are both technically sound and highly adaptable.
            </BodyText> 
            <BodyText>
            Her work focuses on creating robust, scalable applications that align with business objectives while maintaining performance and reliability. Through meticulous attention to detail and a deep understanding of user requirements, she ensures that every solution delivers a seamless and efficient user experience.
            </BodyText>
            <BodyText>
            Committed to upholding industry standards and best practices, she consistently enhances software quality, operational efficiency, and long-term maintainability, making her a valuable contributor to the organization’s technological growth.
            </BodyText>
          </ContentWrapper>
        </TeamCardAlt3>
        <TeamCard>
          <PhotoWrapper>
            <Photo src={irfanaImage} alt="Irfana Patel - Team member" />
          </PhotoWrapper>

          <ContentWrapper>
            <NameText>
            Irfana Patel - Software Engineer
            </NameText>

            <BodyText>
            Irfana Patel, serving as a Software Engineer at Vaani Foundation, plays a key role in leading the organization’s technical initiatives. She brings strong expertise in designing and developing innovative, scalable software solutions that support the foundation’s operational and developmental goals. With a meticulous, technology-driven approach, she ensures that every digital system is efficient, user-focused and aligned with organizational needs.
            </BodyText>
            <BodyText>
            Her ability to analyze complex problems and craft practical, effective solutions makes her an essential contributor to the foundation’s technology-driven growth. She consistently applies best practices, modern development standards and proactive planning to ensure reliability, performance and long-term sustainability across all technical projects.
            </BodyText>
            <BodyText>
            Through her leadership in technical operations and her commitment to excellence, she strengthens Vaani Foundation’s digital capabilities, enabling smoother workflows, improved project execution, and impactful results that support the foundation’s mission.
            </BodyText>
          </ContentWrapper>
        </TeamCard>
        <TeamCardAlt2>
          <PhotoWrapper>
            <Photo src={pratikImage} alt="Adnan Patel - Team member" />
          </PhotoWrapper>

          <ContentWrapper>
            <NameText>
            Pratik Patel – B.E. Computer Science & Engineering
            </NameText>

            <BodyText>
            Pratik Patel, a Computer Science and Engineering graduate, brings a strong technical foundation and a passion for innovation to the advisory support he provides to VAANI Foundation. With growing expertise in web development and modern software practices, he offers valuable insights that enhance the foundation's technological direction.
            </BodyText>
            <BodyText>
            His analytical thinking, problem-solving abilities, and adaptability enable him to contribute meaningful guidance on improving digital workflows and implementing efficient solutions. By sharing his knowledge and fresh perspectives, he helps the foundation strengthen the quality and effectiveness of its technical initiatives.
            </BodyText>
            <BodyText>
            With a collaborative approach and dedication to continuous learning, he supports the foundation's mission by offering thoughtful, reliable, and constructive advice. His contributions play a positive role in shaping well-informed, technology-focused decisions.
            </BodyText>
          </ContentWrapper>
        </TeamCardAlt2>
        <TeamCardAlt3>
          <PhotoWrapper>
            <Photo src={meetImage} alt="Munira M. Patel - Team member" />
          </PhotoWrapper>

          <ContentWrapper>
            <NameText>
            Meet Patel –  Lead of Global R&D
            </NameText>
            <BodyText>
            Meet Patel, serving as the Lead of Global R&D with a specialization in advanced joining technologies, has built a career around innovation, precision, and high-impact engineering solutions. His work involves leading-edge research, global collaboration, and the development of technologies that drive industry-wide progress.
            </BodyText>
            <BodyText>
            Beyond his professional achievements, he is deeply committed to social responsibility and believes strongly in contributing to the welfare of communities. His passion for helping others motivates him to support charitable initiatives and participate in meaningful efforts that create long-term positive change.
            </BodyText>
            <BodyText>
            Although not a member of VAANI Foundation, he offers his guidance, support, and insight to strengthen its mission. With his forward-thinking approach and dedication to community upliftment, he aims to contribute in any capacity that helps the foundation deliver impactful and sustainable outcomes.
            </BodyText>
          </ContentWrapper>
        </TeamCardAlt3>
      </Container>
    </PageContainer>
  );
};

export default OurTeam;