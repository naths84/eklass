import React from 'react';

import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className={'page-container'}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>{t('team')}</h1>
      <h5>
        We are team of mathematicians and web developers, teachers and students:
      </h5>
      <ul style={{ textAlign: 'left' }}>
        <li>Cedric Jud is a self-taught web developer based in Oslo.</li>
        <li>
          Claude Marion got a PhD in Mathematics from Imperial College and has
          been teaching at universities in UK, Switzerland, Israel, Italy and
          Portugal. He inclusively designed with Prof. Testerman the three EPFL
          MOOC courses on linear algebra.
        </li>
        <li>
          Nathan Scheinmann has a PhD in Mathematics from EPFL. He is currently
          teaching mathematics at CO des Coudriers in Geneva.
        </li>
        <li>
          Peter Simko has a Masters degree in Mathematics from EPFL and
          currently teaches at Gymnase de Renens. He likes to read, write and
          code in his free time.
        </li>
        <li>
          Clément Petit is currently a 3rd year student in Bachelor of Computer
          Science at EPFL.
        </li>
        <li>
          Elia Saquand is a 3rd year student in Bachelor of Communication
          Systems at EPFL.
        </li>
        <li>
          Pierre Motard is a 3rd year student in Bachelor of Communication
          Systems at EPFL.
        </li>
        <li>
          Yanis Berkani is a 3rd year student in Bachelor of Computer Science at
          EPFL.
        </li>
      </ul>
    </div>
  );
};

export default About;
