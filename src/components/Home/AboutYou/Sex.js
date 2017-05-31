import React from 'react';
import Ui from '../../../ui';

const Sexe = () => (
  <div>
    <Ui.SelectBox name="sexe" select={['Male', 'Female']} />
    <Ui.SelectBox name="orientation" select={['Bisexual', 'Homosexual', 'Heterosexual']} />
  </div>
);

export default Sexe;
