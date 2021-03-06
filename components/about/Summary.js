/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next-translate/Link';
import useTranslation from 'next-translate/useTranslation';

import screenLogo from '../../public/svgs/screen-logo.svg';
import styles from '../../styles/About.module.css';

export default function Summary() {
  const { t } = useTranslation();
  return (
    <section id="summary" className="container py-5">
      <div className="row py-4">
        <div className="col-md-6 d-flex align-items-center justify-content-center justify-content-md-end">
          <div className="pb-4 pb-mb-0 pr-md-5 pr-0 text-center">
            <img className="img-fluid mb-3" src={screenLogo} alt="Armory des buissons logo" width="350" height="350" />
            <a className="btn btn-accent mr-2 my-1" href="steam://run/107410//-connect=164.132.203.207%20-port=2302">
              <i className="fas fa-gamepad mr-2" />
              {t('about:summary.btnConnect')}
            </a>
            <Link href="/#tp-into-fight">
              <a className="btn btn-primary my-1">
                <i className="fas fa-star mr-2" />
                {t('about:summary.btnFeatures')}
              </a>
            </Link>
          </div>
        </div>
        <div className="col-md-6 d-flex">
          <div>
            <h1 className="text-center text-md-left">{t('about:summary.title')}</h1>
            <p>{t('about:summary.p1')}</p>
            <ol>
              <li><a className={styles['link-effect']} href="#rules">{t('about:rules.title')}</a></li>
              <li><a className={styles['link-effect']} href="#team">{t('about:team.title')}</a></li>
              <li><a className={styles['link-effect']} href="#contact">{t('about:contact.title')}</a></li>
              <li><a className={styles['link-effect']} href="#rank">{t('about:rank.title')}</a></li>
              <li><a className={styles['link-effect']} href="#vip">{t('about:vip.title')}</a></li>
              <li><a className={styles['link-effect']} href="#shortcuts">{t('about:shortcut.title')}</a></li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
