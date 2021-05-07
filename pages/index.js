import Action from '../components/action'
import Timeline from '../components/timeline'
import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'
import Left from '../components/left'
import Right from '../components/right'
import Main from '../components/main'
import Footer from '../components/footer'

export default function Home() {
    return (
        <Layout>
            <Container>
                <Header>
                    Header
                </Header>
                <Left>
                    Left
                </Left>
                <Main>
                    <Action component="person" route="people" type="create" />
                </Main>
                <Right>
                    <Timeline />
                </Right>
                <Footer>
                    Footer
                </Footer>
            </Container>
        </Layout>
    )
}
