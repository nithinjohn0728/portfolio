import React from 'react';
import { DiFirebase, DiGit, DiJavascript, DiJavascript1, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id = "tech">
   <SectionDivider/>
     <SectionTitle>Technologies</SectionTitle>
     <SectionText>lorem ipsuim</SectionText>
     <List>
      <ListItem>
        <DiReact size = "3 rem"/>
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>
             Experience with React JS
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJavascript1 size = "3 rem"/>
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>
             Experience with Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiGit size = "3 rem"/>
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>
             Experience with Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
     </List>
 </Section>
);

export default Technologies;
