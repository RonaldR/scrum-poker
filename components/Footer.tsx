import { ReactElement } from 'react';
import Link from 'next/link';

const Footer = (): ReactElement => (
  <footer className="footer">
    <Link href="/">
      <a className="footer__link">Standard</a>
    </Link>
    <Link href="/types/fibonacci">
      <a className="footer__link">Fibonacci</a>
    </Link>
    <Link href="/types/tshirt">
      <a className="footer__link">T-Shirt</a>
    </Link>
    <Link href="/about">
      <a className="footer__link">About</a>
    </Link>

    <style jsx>
      {`
      .footer {
        padding: 12px 0;
        border-top: 1px solid #f1f1f1;
        margin: auto auto 0 auto;
        width: 100%;
      }

      .footer__link {
        text-decoration: none;
        margin-right: 24px;
        border-bottom: 1px solid transparent;
        transition: .2s;
        color: #0000ff;
      }

      .footer__link:hover {
        border-bottom: 1px solid #32CD32;
      }
    `}
    </style>
  </footer>
);

export default Footer;
