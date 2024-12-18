import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './style'


import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'

export function Home(){
    return (
        <Container>
          
            <Brand>
            <h1>RocketNotes</h1>
            </Brand>

            <Header>

            </Header>

            <Menu>
            <li><ButtonText title="Todos"/></li>
            <li><ButtonText title="React" $isactive/></li>
            <li><ButtonText title="NodeJs"/></li>
            </Menu>

            <Search>
    
            <Input placeholder="Pesquisar pelo titulo" icon={FiSearch}/>
            
            </Search>

            <Content>

            <Section title="Minhas notas">
            <Note data={{
                title: 'React', 
                tags: [
                    {id: '1', name:'React'},
                    {id: '2', name: 'NextJs'},
                ]
                    }}
                    />
            </Section>
            </Content>

            <NewNote>
            <FiPlus/>
            Criar nota
            </NewNote>

        </Container>
    )
}