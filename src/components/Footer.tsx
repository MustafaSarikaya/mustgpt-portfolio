import React from 'react';
import { Link } from 'react-router-dom';
import { getText } from '../utils/dictionary';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyright = getText('footer.copyright').replace('{currentYear}', currentYear.toString());

  return (
    <footer className="bg-primary border-t border-gray-200 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-600">
            {copyright}
          </div>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {getText('footer.links.privacy')}
            </Link>
            <Link
              to="/terms"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {getText('footer.links.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
