import React from 'react';
import { Container, Row, Col, ListGroup, Badge } from 'react-bootstrap';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiPostman, SiExpress, SiJira } from 'react-icons/si';
import ReactMultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';  // Import carousel styles
import Styles from '../styles/About.module.css'; // Custom styles

const About = () => {
    const technologies = [
        { icon: <FaReact size={70} color="#61dafb" />, name: 'React.js' },
        { icon: <SiNextdotjs size={70} color="#000000" />, name: 'Next.js' },
        { icon: <FaGithub size={70} color="#000000" />, name: 'GitHub' },
        { icon: <FaNode size={70} color="#3c873a" />, name: 'Node.js' },
        { icon: <SiExpress size={70} color="#000000" />, name: 'Express.js' },
        { icon: <SiMongodb size={70} color="#589636" />, name: 'MongoDB' },
        { icon: <FaJsSquare size={70} color="#f7df1e" />, name: 'JavaScript' },
        { icon: <FaBootstrap size={70} color="#563d7c" />, name: 'Bootstrap' },
        { icon: <FaCss3Alt size={70} color="#1572b6" />, name: 'CSS3' },
        { icon: <FaHtml5 size={70} color="#e44d26" />, name: 'HTML5' },
        { icon: <SiPostman size={70} color="#EF5B25" />, name: 'Postman' },
        { icon: <SiJira size={70} color="#0052CC" />, name: 'Jira' },
    ];

    const responsive = {
        superLargeDesktop: {
            // Specify breakpoints and how many items you want to show at those breakpoints
            breakpoint: { max: 4000, min: 1024 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <section id="about" className={`${Styles.aboutSection} py-5`}>
            <Container>
                <Row>
                    <Col>
                        {/* Introduction Section */}
                        <h3 className={`${Styles.aboutTitle} mb-4`}>About Me</h3>
                        <p className={Styles.aboutText}>
                            I'm a passionate software developer based in Delhi, India, with over 2 years of experience in building
                            scalable and user-centric web applications. I specialize in using modern web technologies like React, Node.js,
                            and Next.js to create dynamic web experiences. I enjoy tackling challenges and finding efficient solutions
                            for users and businesses alike.
                        </p>

                        {/* Skills & Technologies Section */}
                        <h4 className={`${Styles.sectionTitle} mt-4`}>Skills & Technologies</h4>
                        <ReactMultiCarousel
                            responsive={responsive}
                            infinite={true}
                            arrows={false}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                        >
                            {technologies.map((tech, index) => (
                                <div key={index} className="text-center">
                                    <div className="mb-3">
                                        {tech.icon}
                                    </div>
                                    <p>{tech.name}</p>
                                </div>
                            ))}
                        </ReactMultiCarousel>

                        {/* Experience Section */}
                        <h4 className={`${Styles.sectionTitle} mt-4`}>Experience & Achievements</h4>
                        <ListGroup className={Styles.experienceList}>
                            <ListGroup.Item>
                                <h5>Software Developer-I at Decred Digital Services Private Limited </h5>
                                <p>Developed and maintained scalable web applications using React, Node.js, and Express.js. Collaborated with cross-functional teams for feature implementation.</p>
                                <Badge className={Styles.badge}>2024 - Present</Badge>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Software Developer at Sri Aurobindo Society (Rupantar)</h5>
                                <p>Design and developed multiple EdTech projects.</p>
                                <Badge className={Styles.badge}>2022 - 2024</Badge>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Freelance Web Developer</h5>
                                <p>Built multiple websites for small businesses, focusing on responsive design and integrating with third-party APIs for e-commerce solutions.</p>
                                <Badge className={Styles.badge}>2020 - 2022</Badge>
                            </ListGroup.Item>
                        </ListGroup>

                        {/* Certifications Section */}
                        <h4 className={`${Styles.sectionTitle} mt-4`}>Certifications</h4>
                        <ListGroup>
                            <ListGroup.Item>
                                <h5>Website Design and Development - Easy Cad Solutions</h5>
                                <p>Completed: 2019</p>
                            </ListGroup.Item>
                        </ListGroup>

                        {/* Education Section */}
                        <h4 className={`${Styles.sectionTitle} mt-4`}>Education</h4>
                        <ListGroup>
                            <ListGroup.Item>
                                <h5>B.Tech (Information Technology) - Institute of Technology & Management</h5>
                                <p>2018 - 2022</p>
                            </ListGroup.Item>
                        </ListGroup>

                        {/* Soft Skills Section */}
                        <h4 className={`${Styles.sectionTitle} mt-4`}>Soft Skills</h4>
                        <p className='text-center'>
                            I excel at problem-solving, communication, and teamwork. I'm also passionate about continuous learning and staying up-to-date with new technologies.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
