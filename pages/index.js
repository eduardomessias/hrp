import Action from '../components/action'
import Timeline from '../components/timeline'

import Layout from '../components/structure/layout'
import Container from '../components/structure/container'
import Header from '../components/structure/header'
import Left from '../components/structure/left'
import Right from '../components/structure/right'
import Main from '../components/structure/main'
import Footer from '../components/structure/footer'

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
