import { Background, Container, Form } from "./style";

import { FiMail, FiLock, FiUser } from "react-icons/fi"; 

import { Input } from "../../components/Input";

import { Button } from "../../components/button"

import { Link } from "react-router-dom";

export function SignUp(){


    return (
        <Container>
             <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Crie sua conta</h2>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="Password"
                    icon={FiLock}
                />

                <Link to="/">
                <Button title="Cadastrar"></Button>
                </Link>

                <Link className="Quit" to="/">Voltar para o login</Link>
            </Form>
        </Container>
    )
};

