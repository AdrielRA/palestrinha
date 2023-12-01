import { List } from "../components";
import {
  Container,
  Header,
  Logo,
  Subtitle,
  ThemeButton,
  Title,
} from "./Home.styles";
import { useHome } from "./useHome";
import logo from "/logo.svg";

export function Home(): JSX.Element {
  const { theme, toggleTheme } = useHome();

  return (
    <Container $theme={theme}>
      <ThemeButton onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "🌞"}
      </ThemeButton>
      <Header>
        <Logo src={logo} alt="App logo" />
        <Title>Palestrinha</Title>
        <Subtitle>by Adriel Azevedo</Subtitle>
      </Header>

      <List />
    </Container>
  );
}
