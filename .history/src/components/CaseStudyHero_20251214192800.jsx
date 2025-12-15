import React, { useState, useEffect, useRef } from 'react';

const CaseStudyHero = ({ slug }) => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  const heroData = {
    'personalization-engine-transforms-user-experience': {
      category: 'Case Study',
      titleLine1: 'PERSONALIZATION ENGINE',
      titleLine2: 'USER EXPERIENCE',
      titleHighlight: '37% CONVERSION RATE',
      subtitle: 'See how our data-driven, psychology-powered CRO process transformed user behavior and business performance.',
      metrics: [
        { value: '+37%', label: 'CVR Increase' },
        { value: '+156%', label: 'Revenue Growth' },
        { value: '2.3x', label: 'User Engagement' }
      ]
    },
    'e-commerce-revenue-uplift-through-testing': {
      category: 'Case Study',
      titleLine1: 'URBANCART',
      titleLine2: 'E-COMMERCE',
      titleHighlight: '28% REVENUE UPLIFT',
      subtitle: 'See how our data-driven, psychology-powered CRO process transformed user behavior and business performance.',
      metrics: [
        { value: '+28%', label: 'Revenue Growth' },
        { value: '+156%', label: 'Sales Increase' },
        { value: '3.2x', label: 'ROI Growth' }
      ]
    },
    'saas-lead-generation-conversion-breakthrough': {
      category: 'Case Study',
      titleLine1: 'SAAS LEAD',
      titleLine2: 'GENERATION',
      titleHighlight: '3X CONVERSION BREAKTHROUGH',
      subtitle: 'See how our data-driven, psychology-powered CRO process transformed user behavior and business performance.',
      metrics: [
        { value: '3x', label: 'Lead Generation' },
        { value: '+214%', label: 'Form Conversion' },
        { value: '-47%', label: 'Cost Per Lead' }
      ]
    },
    'fashion-retailer-cart-abandonment-solution': {
      category: 'Case Study',
      titleLine1: 'FASHION',
      titleLine2: 'RETAILER',
      titleHighlight: 'CART ABANDONMENT SOLUTION',
      subtitle: 'See how our data-driven, psychology-powered CRO process transformed user behavior and business performance.',
      metrics: [
        { value: '-68%', label: 'Cart Abandonment' },
        { value: '+42%', label: 'Checkout Complete' },
        { value: '$2.3M', label: 'Revenue Recovered' }
      ]
    },
    'mobile-app-engagement-revolution': {
      category: 'Case Study',
      titleLine1: 'MOBILE',
      titleLine2: 'APP',
      titleHighlight: 'ENGAGEMENT REVOLUTION',
      subtitle: 'See how our data-driven, psychology-powered CRO process transformed user behavior and business performance.',
      metrics: [
        { value: '2.3x', label: 'User Retention' },
        { value: '+128%', label: '30-Day Retention' },
        { value: '+141%', label: 'Daily Active Users' }
      ]
    },
    'enterprise-pipeline-growth-strategy': {
      category: 'Case Study',
      titleLine1: 'ENTERPRISE',
      titleLine2: 'PIPELINE',
      titleHighlight: '+179% GROWTH STRATEGY',
      subtitle: 'See how our data-driven, psychology-powered CRO process transformed user behavior and business performance.',
      metrics: [
        { value: '+179%', label: 'Pipeline Growth' },
        { value: '-25%', label: 'Sales Cycle' },
        { value: '+35%', label: 'Close Rate' }
      ]
    }
  };

  const data = heroData[slug] || heroData['e-commerce-revenue-uplift-through-testing'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

const getResponsiveStyles = () => {
    const width = window.innerWidth;
    
    if (width <= 400) {
      return {
        minHeight: '85vh',
        padding: '60px 16px 30px 16px'
      };
    } else if (width <= 768) {
      return {
        minHeight: '70vh',
        padding: '50px 20px 30px 20px'
      };
    } else if (width <= 1024) {
      return {
        minHeight: '80vh',
        padding: '80px 40px 30px 40px'
      };
    } else {
      return {
        minHeight: '85vh',
        padding: '60px 40px 30px 40px'
      };
    }
  };

  const responsiveStyles = getResponsiveStyles();

  const containerStyle = {
    position: 'relative',
    width: '100%',
    minHeight: responsiveStyles.minHeight,
    background: 'linear-gradient(180deg, #04091D 16.18%, #0D98BA 219.08%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: responsiveStyles.padding,
    overflow: 'hidden',
    boxSizing: 'border-box'
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: window.innerWidth <= 400 ? '16px' : '23px',
    maxWidth: '862px',
    width: '100%',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    boxSizing: 'border-box'
  };

  const badgeStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: window.innerWidth <= 768 ? '8px 20px' : '10px 24px',
    background: 'linear-gradient(90deg, #FFFFFF 0%, #85CCDD 52.41%, #0D98BA 81.55%, #0B829F 95.26%)',
    border: '1px solid #0D94BB',
    boxShadow: '0px 0px 12px 2px rgba(13, 148, 187, 0.7)',
    borderRadius: '25px',
    cursor: 'default',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.8s ease-out 0.2s',
    boxSizing: 'border-box'
  };

  const badgeTextStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontSize: window.innerWidth <= 768 ? '14px' : 'clamp(14px, 2vw, 16px)',
    lineHeight: '24px',
    letterSpacing: '0.02em',
    color: '#04091D',
    margin: 0
  };

  const titleContainerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0px',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.8s ease-out 0.3s'
  };

  const titleLine1Style = {
    width: '100%',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: 'clamp(24px, 5vw, 50px)',
    lineHeight: '1.2',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    margin: 0
  };

  const titleLine2Style = {
    width: '100%',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: 'clamp(24px, 5vw, 50px)',
    lineHeight: '1.2',
    textAlign: 'center',
    textTransform: 'uppercase',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0
  };

  const subtitleStyle = {
    width: '100%',
    maxWidth: '862px',
    fontFamily: "'Lato', sans-serif",
    fontWeight: 600,
    fontSize: 'clamp(14px, 2vw, 16px)',
    lineHeight: '1.4',
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 0,
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.8s ease-out 0.4s'
  };

  const dividerStyle = {
    width: '100%',
    maxWidth: '654px',
    height: '1px',
    background: '#0D98BA',
    borderRadius: '10px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
    transition: 'all 0.8s ease-out 0.5s'
  };

  const metricsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: window.innerWidth <= 400 ? '8px' : window.innerWidth <= 768 ? '10px' : '23px',
    width: '100%',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.8s ease-out 0.6s'
  };

  const getMetricCardStyle = (index) => ({
    display: 'flex',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: window.innerWidth <= 400 ? '12px 10px' : window.innerWidth <= 768 ? '10px 8px' : '15px 20px',
    gap: window.innerWidth <= 768 ? '5px' : '10px',
    width: window.innerWidth <= 400 ? 'calc(50% - 4px)' : window.innerWidth <= 768 ? 'calc(33.333% - 7px)' : 'auto',
    minWidth: window.innerWidth <= 400 ? '140px' : window.innerWidth <= 768 ? '90px' : 'auto',
    background: 'rgba(4, 9, 29, 0.4)',
    boxShadow: '0px 0px 12px 2px rgba(13, 148, 187, 0.7)',
    borderRadius: '10px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.8s ease-out ${0.7 + index * 0.1}s, transform 0.8s ease-out ${0.7 + index * 0.1}s`,
    boxSizing: 'border-box'
  });

  const metricValueStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontSize: window.innerWidth <= 400 ? '18px' : window.innerWidth <= 768 ? '16px' : 'clamp(16px, 2vw, 19px)',
    lineHeight: window.innerWidth <= 400 ? '24px' : window.innerWidth <= 768 ? '22px' : '28px',
    letterSpacing: '0.02em',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    whiteSpace: 'nowrap',
    margin: 0
  };

  const metricLabelStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    fontSize: window.innerWidth <= 400 ? '13px' : window.innerWidth <= 768 ? '12px' : 'clamp(12px, 1.5vw, 16px)',
    lineHeight: window.innerWidth <= 400 ? '18px' : window.innerWidth <= 768 ? '16px' : '24px',
    textAlign: 'center',
    letterSpacing: '0.02em',
    color: '#FFFFFF',
    whiteSpace: window.innerWidth <= 768 ? 'normal' : 'nowrap',
    margin: 0
  };

  const buttonStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 24px',
    gap: '10px',
    width: window.innerWidth <= 400 ? '100%' : window.innerWidth <= 768 ? '180px' : '200px',
    maxWidth: window.innerWidth <= 400 ? '280px' : 'none',
    height: '48px',
    background: '#0D98BA',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box'
  };

  const buttonTextStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    fontSize: 'clamp(14px, 2vw, 16px)',
    lineHeight: '24px',
    letterSpacing: '0.02em',
    color: '#000000',
    margin: 0
  };

  const handleButtonHover = (e, isHovering) => {
    if (isHovering) {
      e.currentTarget.style.background = '#0B7A94';
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0px 6px 8px rgba(0, 0, 0, 0.3)';
    } else {
      e.currentTarget.style.background = '#0D98BA';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
    }
  };

  return (
    <div ref={heroRef} style={containerStyle}>
      <div style={contentContainerStyle}>
        <div style={badgeStyle}>
          <span style={badgeTextStyle}>{data.category}</span>
        </div>

        <div style={titleContainerStyle}>
          <h1 style={titleLine1Style}>
            {data.titleLine1} {data.titleLine2}
          </h1>
          <h2 style={titleLine2Style}>
            {data.titleHighlight}
          </h2>
        </div>

        <p style={subtitleStyle}>
          {data.subtitle}
        </p>

        <div style={dividerStyle}></div>

        <div style={metricsContainerStyle}>
          {data.metrics.map((metric, index) => (
            <div key={index} style={getMetricCardStyle(index)}>
              <span style={metricValueStyle}>{metric.value}</span>
              <span style={metricLabelStyle}>{metric.label}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          style={buttonStyle}
          onMouseEnter={(e) => handleButtonHover(e, true)}
          onMouseLeave={(e) => handleButtonHover(e, false)}
        >
          <span style={buttonTextStyle}>Get Free Audit</span>
        </button>
      </div>
    </div>
  );
};

export default CaseStudyHero;