import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FooterWrap,
  FooterContainer,
  FooterGrid,
  FooterCol,
  Newsletter,
  FooterBottom,
  Social,
} from './LoginForm.style';

function Footer() {
  const { t } = useTranslation();

  return (
    <FooterWrap>
      <FooterContainer>
        <FooterGrid>
          <FooterCol>
            <h3>{t('contactDetail')}</h3>
            <p>
              123 Business Street, Suite 100,
              <br />
              New York, NY 10001
            </p>
            <p>Phone: +1 234 567 8900</p>
            <p>Email: info@dkust.com</p>
          </FooterCol>

          <FooterCol>
            <h3>{t('quickLinks')}</h3>
            <ul>
              <li><a href="/about">{t('aboutUs')}</a></li>
              <li><a href="/services">{t('servicesLink')}</a></li>
              <li><a href="/portfolio">{t('portfolioLink')}</a></li>
              <li><a href="/blog">{t('blogLink')}</a></li>
              <li><a href="/contact">{t('contactUs')}</a></li>
            </ul>
          </FooterCol>

          <FooterCol>
            <h3>{t('ourServices')}</h3>
            <ul>
              <li><a href="/services">{t('webDevelopment')}</a></li>
              <li><a href="/services">{t('machineLearning')}</a></li>
              <li><a href="/services">{t('roboticsService')}</a></li>
              <li><a href="/services">{t('industrialConsulting')}</a></li>
              <li><a href="/services">{t('dataAnalytics')}</a></li>
            </ul>
          </FooterCol>

          <FooterCol>
            <h3>{t('subscribeNewsletter')}</h3>
            <p>{t('newsletterText')}</p>
            <Newsletter>
              <input type="email" placeholder={t('emailPlaceholder')} />
              <button type="button" aria-label="Subscribe">
                ➤
              </button>
            </Newsletter>
          </FooterCol>
        </FooterGrid>

        <FooterBottom>
          <p>{t('copyright')}</p>
          <Social>
            <a href="https://facebook.com" aria-label="Facebook">f</a>
            <a href="https://x.com" aria-label="X">𝕏</a>
            <a href="https://linkedin.com" aria-label="LinkedIn">in</a>
            <a href="https://instagram.com" aria-label="Instagram">📷</a>
          </Social>
        </FooterBottom>
      </FooterContainer>
    </FooterWrap>
  );
}

export default Footer;