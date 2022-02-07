import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center >
       Welcome to <br/> my personal portfolio
     </SectionTitle>
     <SectionText>
       this is my explanation text like lorem ipsom
     </SectionText>
     <Button>Read more</Button>
   </LeftSection>
 </Section>
);

export default Hero;