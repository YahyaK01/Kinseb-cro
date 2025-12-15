import React, { useState, useEffect, useRef } from 'react';

const WhyChooseUsSection = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [contentKey, setContentKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.01, rootMargin: '100px 0px -100px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (index) => {
    if (index !== activeItem) {
      setContentKey(prev => prev + 1);
      setActiveItem(index);
    }
  };

  const items = [
    {
      number: "01",
      title: "Conversion Rate Optimization",
      description: "Transform your website visitors into paying customers with our data-driven CRO strategies that maximize every click.",
      details: [
        "A/B testing and multivariate testing to identify winning variations",
        "Heatmaps and user behavior analysis for insight-driven decisions",
        "Average 40% increase in conversion rates within 90 days"
      ],
      link: "Learn More About CRO →",
      linkUrl: "/services/conversion-optimization",
      imagePlaceholder: "/images/webp/224.webp"
    },
    {
      number: "02", 
      title: "Landing Page Design",
      description: "High-converting landing pages engineered to turn traffic into revenue with persuasive design and compelling copy.",
      details: [
        "Mobile-first responsive designs optimized for all devices",
        "Strategic CTAs and conversion-focused layouts",
        "Fast-loading pages with seamless user experience"
      ],
      link: "View Landing Page Portfolio →",
      linkUrl: "/portfolio/landing-pages",
      imagePlaceholder: "/images/webp/225.webp"
    },
    {
      number: "03",
      title: "Funnel Optimization", 
      description: "Eliminate drop-offs and boost revenue by optimizing every stage of your customer journey from awareness to purchase.",
      details: [
        "Complete funnel audits to identify conversion bottlenecks",
        "Multi-step funnel design with optimized touchpoints",
        "Proven strategies that reduce cart abandonment by 35%"
      ],
      link: "Explore Funnel Services →",
      linkUrl: "/services/funnel-optimization",
      imagePlaceholder: "/images/webp/226.webp"
    },
    {
      number: "04",
      title: "User Experience Testing",
      description: "Discover exactly what your users want through comprehensive testing that reveals hidden conversion opportunities.",
      details: [
        "Real user testing with detailed session recordings",
        "Usability audits and friction point identification",
        "Data-backed recommendations for immediate improvements"
      ],
      link: "Start UX Testing →",
      linkUrl: "/services/ux-testing",
      imagePlaceholder: "/images/webp/227.webp"
    },
    {
      number: "05",
      title: "Analytics & Reporting",
      description: "Make informed decisions with transparent reporting and actionable insights that demonstrate real ROI and growth.",
      details: [
        "Custom dashboards tracking your key conversion metrics",
        "Weekly performance reports with strategic recommendations",
        "Clear ROI measurement and conversion attribution"
      ],
      link: "View Sample Reports →",
      linkUrl: "/services/analytics",
      imagePlaceholder: "/images/webp/228.webp"
    }
  ];

  const styles = {
    desktopLink: {
      fontFamily: 'Poppins, system-ui, sans-serif',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '21px',
      letterSpacing: '0.02em',
      color: '#98BA0D',
      textDecoration: 'none',
      display: 'inline-block',
      marginTop: '16px',
      transition: 'color 0.3s ease'
    }
  };

  if (isMobile) {
    return (
      <div ref={sectionRef} style={{position: 'relative', width: '100%', background: 'linear-gradient(180deg, #04091D 0%, #061D33 100%)', padding: '60px 20px 80px', opacity: isVisible ? 1 : 0.3, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.6s, transform 0.8s'}}>
        <div style={{textAlign: 'center', marginBottom: '50px'}}>
          <h2 style={{fontFamily: 'Poppins, sans-serif', fontWeight: '700', fontSize: 'clamp(28px, 8vw, 36px)', color: '#FFF', margin: '0 0 16px', lineHeight: '1.2'}}>
            Our Conversion-Focused <span style={{color: '#0D98BA'}}>Services</span>
          </h2>
          <p style={{fontFamily: 'Lato, sans-serif', fontSize: '15px', lineHeight: '1.6', color: 'rgba(255,255,255,0.85)', margin: '0 auto', maxWidth: '500px'}}>
            Each service is designed to solve a specific growth bottleneck — from first click to repeat purchase
          </p>
        </div>
        
        <div style={{display: 'grid', gap: '24px'}}>
          {items.map((item, idx) => (
            <div key={idx} style={{
              background: 'linear-gradient(135deg, rgba(6,29,51,0.8) 0%, rgba(4,18,39,0.9) 100%)',
              border: '1px solid rgba(13,152,186,0.25)',
              borderRadius: '16px',
              padding: '24px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: activeItem === idx ? '0 8px 24px rgba(13,152,186,0.3)' : '0 2px 8px rgba(0,0,0,0.2)',
              transform: activeItem === idx ? 'scale(1.02)' : 'scale(1)'
            }}
            onClick={() => handleTabChange(idx)}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '16px'}}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  background: activeItem === idx ? 'linear-gradient(135deg, #0D98BA 0%, #0D7A9A 100%)' : 'rgba(13,152,186,0.15)',
                  border: activeItem === idx ? '2px solid #0D98BA' : '2px solid rgba(13,152,186,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '16px',
                  transition: 'all 0.3s'
                }}>
                  <span style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '700',
                    fontSize: '20px',
                    color: activeItem === idx ? '#FFF' : '#0D98BA'
                  }}>{item.number}</span>
                </div>
                
                <div style={{flex: 1}}>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '600',
                    fontSize: '18px',
                    color: activeItem === idx ? '#0D98BA' : '#FFF',
                    margin: 0,
                    lineHeight: '1.3'
                  }}>{item.title}</h3>
                </div>
              </div>
              
              <p style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '14px',
                lineHeight: '1.6',
                color: 'rgba(255,255,255,0.8)',
                margin: '0 0 16px'
              }}>{item.description}</p>
              
              <div style={{
                borderTop: '1px solid rgba(13,152,186,0.2)',
                paddingTop: '16px',
                display: activeItem === idx ? 'block' : 'none'
              }}>
                {item.details.map((detail, dIdx) => (
                  <div key={dIdx} style={{display: 'flex', alignItems: 'flex-start', marginBottom: '10px'}}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#0D98BA',
                      marginRight: '10px',
                      marginTop: '6px',
                      flexShrink: 0
                    }} />
                    <span style={{
                      fontFamily: 'Lato, sans-serif',
                      fontSize: '13px',
                      lineHeight: '1.5',
                      color: 'rgba(255,255,255,0.85)',
                      flex: 1
                    }}>{detail}</span>
                  </div>
                ))}
                <a href={item.linkUrl} style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '600',
                  fontSize: '14px',
                  color: '#0D98BA',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  marginTop: '12px',
                  transition: 'all 0.3s'
                }}>
                  {item.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={sectionRef} style={{position: 'relative', width: '100%', height: '731px', background: 'linear-gradient(0deg, #04091D -2.74%, #0D98BA 450.34%)', overflow: 'hidden', opacity: isVisible ? 1 : 0.2, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.6s, transform 0.8s'}}>
      <h2 style={{position: 'absolute', width: 'min(851px, calc(100% - 40px))', left: '50%', transform: 'translateX(-50%)', top: '73px', fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: '64px', textAlign: 'center', color: '#FFF', margin: 0}}>
        Our Conversion-Focused Services
      </h2>

      <p style={{position: 'absolute', width: 'min(869px, calc(100% - 40px))', left: '50%', transform: 'translateX(-50%)', top: '137px', fontFamily: 'Lato, sans-serif', fontWeight: '600', fontSize: '14px', lineHeight: '150%', textAlign: 'center', color: '#FFF', margin: 0}}>
        Each service is designed to solve a specific growth bottleneck — from first click to repeat purchase. You can engage one service or layer multiple for compounding impact.
      </p>

      <div style={{position: 'absolute', left: '0', top: '220px', width: 'min(460px, 32%)', height: '400px'}}>
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <div onClick={() => handleTabChange(idx)} style={{width: '100%', height: '80px', background: activeItem === idx ? '#041227' : (idx % 2 === 0 ? '#041227' : '#061D33'), borderRadius: idx === 0 ? '10px 0 0 0' : (idx === items.length - 1 ? '0 10px 0 0' : '0'), cursor: 'pointer', position: 'relative', transition: 'all 0.4s', transform: activeItem === idx ? 'translateX(5px)' : 'translateX(0)', boxShadow: activeItem === idx ? '0 4px 20px rgba(13,152,186,0.3)' : 'none'}}>
              <span style={{position: 'absolute', left: 'clamp(20px, 15%, 70px)', top: '28px', fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '16px', color: activeItem === idx ? '#0D94BB' : 'white'}}>{item.number}</span>
              <span style={{position: 'absolute', left: 'clamp(90px, 34%, 155px)', top: '28px', fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: '16px', color: activeItem === idx ? '#0D94BB' : 'white'}}>{item.title}</span>
            </div>
            {idx < items.length - 1 && <div style={{width: '100%', height: '1px', border: '1px solid #7D818D'}} />}
          </React.Fragment>
        ))}
      </div>

      <div style={{position: 'absolute', width: 'calc(100% - min(460px, 32%) - 20px)', height: '402px', right: '0', bottom: '105px'}}>
        <div style={{position: 'absolute', width: '100%', height: '402px', right: '0', bottom: '0', background: '#061D33', border: '1px solid #7D818D', borderRadius: '10px'}} />
        
        <div key={contentKey} style={{position: 'absolute', width: '100%', height: '100%', padding: '40px', boxSizing: 'border-box'}}>
          <div style={{width: '60px', height: '60px', borderRadius: '8px', marginBottom: '20px', overflow: 'hidden'}}>
            <img src={items[activeItem].imagePlaceholder} alt={items[activeItem].title} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
          </div>

          <h3 style={{fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '24px', lineHeight: '32px', color: '#DDE4E3', margin: '0 0 16px'}}>{items[activeItem].title}</h3>
          <p style={{fontFamily: 'Lato, sans-serif', fontSize: '14px', lineHeight: '150%', color: '#FFF', margin: '0 0 24px', opacity: 0.9}}>{items[activeItem].description}</p>

          <div style={{marginTop: '24px'}}>
            {items[activeItem].details.map((detail, idx) => (
              <div key={idx} style={{display: 'flex', alignItems: 'flex-start', marginBottom: '12px'}}>
                <div style={{width: '20px', height: '20px', borderRadius: '50%', background: '#0D98BA', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px', marginTop: '2px', flexShrink: 0}}>
                  <div style={{width: '8px', height: '5px', border: '2px solid #FFF', borderTop: 'none', borderRight: 'none', transform: 'rotate(-45deg)', marginTop: '-1px'}} />
                </div>
                <span style={{fontFamily: 'Lato, sans-serif', fontWeight: '500', fontSize: '14px', lineHeight: '20px', color: '#FFF', flex: 1}}>{detail}</span>
              </div>
            ))}
          </div>

          <a href={items[activeItem].linkUrl} style={styles.desktopLink} onMouseEnter={(e) => e.target.style.color = '#b4d615'} onMouseLeave={(e) => e.target.style.color = '#98BA0D'}>
            {items[activeItem].link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;