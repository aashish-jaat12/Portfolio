import React from 'react'
import './app.css'
import h1 from '../assets/H1.webp'
import r1 from '../assets/R1.webp'
import f1 from '../assets/F1.jpg'
import e1 from '../assets/E1.jpg'
import ecomm from '../assets/e-comm.avif'
import t1 from '../assets/T1.jpg'
import t2 from '../assets/T2.jpg'
import b1 from '../assets/B1.jpg'

function Apps() {
    const cardsData = [
        {
            icon: '🚀',
            title: 'Targeted Advertising:',
            content: 'Leveraging data to identify specific audience segments empowers businesses to craft highly targeted advertising campaigns, with assistance from mobile application development companies. This precision aids in reaching the appropriate audience with the fitting message, thereby enhancing the probability of engagement and conversion.'
        },
        {
            icon: '👤',
            title: 'Personalization:',
            content: 'Data-driven marketing enables personalized communication with customers, with consideration of mobile application development cost. By understanding individual preferences and behaviors, businesses can tailor their messages, offers, and content to resonate with each customer on a more personal level.'
        },
        {
            icon: '👥',
            title: 'Customer Segmentation:',
            content: 'Through data analysis, businesses can segment their customer base into distinct groups based on shared characteristics. This segmentation allows for the creation of targeted marketing strategies that are relevant to each group\'s needs and preferences.'
        },
        {
            icon: '🎯',
            title: 'Optimizing Marketing Channels:',
            content: 'Data-driven insights help businesses understand which marketing channels are most effective for reaching their target audience. This information allows for allocating resources to the most impactful channels, optimizing the overall marketing strategy with the support of Custom Mobile App Development Services.'
        },
        {
            icon: '📊',
            title: 'Measuring And Improving Campaign Performance:',
            content: 'With data-driven marketing, businesses can measure the performance of their campaigns in real time. Analyzing key performance indicators (KPIs) helps in understanding what works and what doesn\'t, enabling continuous improvement and refinement of marketing strategies.'
        },
        {
            icon: '📈',
            title: 'Customer Journey Analysis:',
            content: 'Data-driven marketing services facilitate a comprehensive analysis of the customer journey. By tracking customer interactions across various touchpoints, businesses gain insights into the stages of the buying process, allowing for strategic interventions to enhance the overall customer experience.'
        },
        {
            icon: '🔍',
            title: 'Predictive Analytics:',
            content: 'Advanced data analytics can be utilized for predictive modeling within the mobile app development process, aiding businesses in anticipating customer behavior and preferences. This foresight enables proactive marketing strategies and more effective resource allocation.'
        },
        {
            icon: '🧪',
            title: 'A/B Testing And Experimentation:',
            content: 'Data-driven marketing encourages a culture of experimentation. Businesses can conduct A/B tests to compare different marketing approaches and determine which variations yield the best results. This iterative process leads to data-backed optimization.'
        }
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
     
  return (
    <>
      <div className="app-development">
            <div className="content">
                <h1>Mobile Application Development</h1>
                <p>
                Explore cutting-edge trends and innovations shaping the landscape of mobile application development in our digital era.
                </p>
                <button>Contact Us</button>
            </div>
        </div>
        <div className="app-development-container">
            <div className="text-content">
                <h1>Mobile Applicaiton Development Service for your Business.</h1>
                <p>
                Welcome , your trusted partner in mobile app development services! In this rapidly evolving digital landscape, having a powerful mobile presence is essential for businesses of all sizes.
                </p>
                <p>
                Our expert team at [Your Company Name] is dedicated to transforming your unique ideas into innovative and functional mobile applications that resonate with your target audience.
                </p>
            </div>
            <div className="image-content">
                <img src="https://imgs.search.brave.com/AriLUvntkgd8mEvWzT2UTjAPNuUpDc-v3w6RkiuDPL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/Nzg2OTM0My9waG90/by9kZXZlbG9waW5n/LW1vYmlsZS1hcHBs/aWNhdGlvbi53ZWJw/P2I9MSZzPTE3MDY2/N2Emdz0wJms9MjAm/Yz1obFRWUTQ5bEpG/eTFVVGFJWVA1ZFBU/aWgtQVBoYmNmR0lG/b01xZDhBWVFjPQ" alt="Web Development" />
            </div>
        </div>
        <div className='app-container'>
        <h2>Our Mobile App Development Services.</h2>
        </div>
        <div className="marketing-cards-grid">
            {cardsData.map((card, index) => (
                   <div  key={index} className="marketing-card">
                   <div className="icon">{card.icon}</div>
                   <h3>{card.title}</h3>
                   <p>{card.content}</p>
               </div>
                   
                
            ))}
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
  )
}

export default Apps