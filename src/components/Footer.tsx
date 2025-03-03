import React from 'react';
import { Link } from 'react-router-dom';
import { getText } from '../utils/dictionary';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyright = getText('footer.copyright').replace('{currentYear}', currentYear.toString());

  return (
    <footer className="bg-primary-dark py-5 px-3">
      <div className="flex flex-col items-center space-y-3 px-4">
        <div className="text-gray-400 text-sm text-center">
          <p>{copyright}</p>
          <p>{getText('footer.allRightsReserved')}</p>
        </div>
        <div className="flex flex-col space-y-2 text-center">
          <Link
            to="/privacy"
            className="text-gray-400 hover:text-accent text-sm transition-colors"
          >
            {getText('footer.links.privacy')}
          </Link>
          <Link
            to="/terms"
            className="text-gray-400 hover:text-accent text-sm transition-colors"
          >
            {getText('footer.links.terms')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
