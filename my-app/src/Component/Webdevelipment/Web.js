import React from 'react';
import './web.css'; // Import the CSS file
import h1 from '../assets/H1.webp'
import r1 from '../assets/R1.webp'
import f1 from '../assets/F1.jpg'
import e1 from '../assets/E1.jpg'
import ecomm from '../assets/e-comm.avif'
import t1 from '../assets/T1.jpg'
import t2 from '../assets/T2.jpg'
import b1 from '../assets/B1.jpg'
import webdesign from '../assets/webdesign.avif'

const Web = () => {
    const items = [
        {
            icon: '🚀',
            title: 'Complexity Of The Website:',
            description: 'Simple, static websites typically cost less than complex, dynamic websites with advanced features and functionalities.',
        },
        {
            icon: '🎨',
            title: 'Design Requirements:',
            description: 'The intricacy of the design, the requirement for custom graphics, and the overall aesthetic appeal all impact the total cost when considering website development near me.',
        },
        {
            icon: '⚙️',
            title: 'Functionality And Features:',
            description: 'Websites with advanced features such as e-commerce capabilities, content management systems (CMS), user authentication, and third-party integrations may incur higher development costs when working with website development agencies.',
        },
        {
            icon: '📱',
            title: 'Responsive Design:',
            description: 'Incorporates applications accessible through mobile web browsers into the web development process. Offers a responsive design for optimal viewing on various screen sizes.',
        },
        {
            icon: '📝',
            title: 'Content Management System (CMS):',
            description: 'The choice of CMS, if applicable, can influence development costs. Custom CMS solutions may have higher upfront costs compared to popular open-source CMS platforms.',
        },
        {
            icon: '🔍',
            title: 'Testing And Quality Assurance:',
            description: 'Thorough testing and quality assurance processes are crucial for delivering a reliable website, and the level of testing can impact the overall cost. Timeline: The urgency of the project may affect the development timeline and potentially impact costs.',
        },
    ];


const industries = [
    { id: 1, imgSrc: h1, description: 'Healthcare' },
    { id: 2, imgSrc: e1, description: 'Education' },
    { id: 3, imgSrc: f1, description: 'Food & Beverage' },
    { id: 4, imgSrc: ecomm , description: 'E-commerce' },
    { id: 5, imgSrc: t1, description: 'Travel & Tourism' },
    { id: 6, imgSrc: t2, description: 'Technology' },
    { id: 7, imgSrc: r1, description: 'Real Estate' },
    { id: 8, imgSrc: b1, description: 'Banking' },
   
  ];
  const offeringsData = [
    {
        title: 'Custom Website Development:',
        content: 'Our mobile app development process typically integrates several key phases into the Custom Web Development Process: consultation and planning, UI/UX design, development, testing, deployment, and ongoing support. We maintain close collaboration with clients throughout each stage to ensure alignment with their goals and expectations.'
    },
    {
        title: 'E-Commerce Development:',
        content: 'Advanced data analytics, with the assistance of dedicated web developers, can be used for predictive modeling, helping businesses anticipate customer behavior and preferences. This foresight enables proactive marketing strategies and more effective resource allocation.'
    },
    {
        title: 'Responsive Web Design:',
        content: 'In the age of diverse devices and screen sizes, having a responsive website is non-negotiable. Our responsive web design ensures that your site looks and functions flawlessly on desktops, tablets, and smartphones, providing an optimal user experience across all platforms.'
    },
    {
        title: 'Web Application Development:',
        content: 'Bring your ideas to life with our web application development services. Whether you\'re looking to streamline internal processes or create an interactive customer portal, our team is well-versed in the latest technologies to build robust and scalable web applications.'
    },
    {
        title: 'Website Maintenance And Support:',
        content: 'Your website is a dynamic asset that requires regular upkeep. Our maintenance and support services ensure that your website remains secure, up-to-date, and aligned with the latest industry standards. From routine updates to troubleshooting, we\'ve got you covered.'
    },
    {
        title: 'SEO-Friendly Development:',
        content: 'Boost your online visibility with our SEO-friendly website development. We implement best practices from the ground up, ensuring that your website is optimized for search engines, driving organic traffic, and enhancing your digital presence.'
    }
];

    return (<>
        <div className="website-development">
            <div className="content">
                <h1>Website Development</h1>
                <p>
                    Crafting compelling websites tailored to your needs on our website development site. 
                    Our expert team ensures a seamless, user-friendly experience. Elevate your brand online with us.
                </p>
                <button>Contact Us</button>
            </div>
        </div>
        <div className="website-development-container">
            <div className="text-content">
                <h1><span className="highlight">Website Development</span> Service For Your Business.</h1>
                <p>
                    Welcome to [Ashish Choudhary], where we, as a website development services company, transform your digital aspirations into captivating and functional online experiences. In an era where your website is often the initial interaction customers have with your brand, it's imperative to ensure it is not only visually appealing but also seamlessly functional.
                </p>
                <p>
                    Our comprehensive website development services ensure that your online presence is a true reflection of your brand identity and effectively engages your target audience.
                </p>
            </div>
            <div className="image-content">
                <img src={webdesign} alt="Web Development" />
            </div>
        </div>
        <div className="cost-of-website-development-container">
            <h2>Cost Of Website Development Services.</h2>
            <p>
                The cost of website development can vary based on several factors, each contributing to the overall investment required. At Global RNS, we consider the following elements when determining the cost of our website development services:
            </p>
            <div className="grid-container">
                {items.map((item, index) => (
                    <div key={index} className="card">
                        <div className="icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="offerings-grid">
            <h2>Our Website Development Offerings</h2>
            <div className="offerings-container">
                {offeringsData.map((offering, index) => (
                      <div  key={index} className="offering-card">
                      <h3>{offering.title}</h3>
                      <p>{offering.content}</p>
                  </div>
                ))}
            </div>
            </div>
        <div className="hading-App">
      <h1>Industries We Serve</h1>
      <p>This list can be tailored to fit the specific industries your business or project serves. Would you like a customized version of this for a specific project or company?</p>
        <div className="industries-grid">
      {industries.map((industry) => (
        <div key={industry.id} className="industry-item">
          <img src={industry.imgSrc} alt={industry.description} />
          <div className="description">{industry.description}</div>
        </div>
      ))}
    </div>
    </div>

        </>
    );
}

export default Web
