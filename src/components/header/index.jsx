import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style";


export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img
                    src="https://github.com/Guilherme1Souza.png"
                    alt="Foto do usuário"
                />

                <div>
                    <span>Bem vindo</span>
                    <strong>Guilherme Souza</strong>
                </div>
            </Profile>
            <Logout>
                <a href="/signUp">
                <RiShutDownLine />
                </a>
            </Logout>
        </Container>
    );
}
