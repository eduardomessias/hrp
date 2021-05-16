import Base from '../ux/layout/base.js'
import NavBar from '../ux/components/navbar/nav.js'
import Container from '../ux/components/navbar/container.js'
import Brand from '../ux/components/navbar/brand.js'
import Menu from '../ux/components/navbar/menu.js'
import MenuItem from '../ux/components/navbar/menuitem.js'
import Anchor from '../ux/components/navbar/anchor.js'

const transparent = true
const Home = () =>
    <Base title="Home resources planning">
        <NavBar transparent={transparent}>
            <Container>
                <Brand name="Home resources planning" transparent={transparent} />
                <div className={"lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none " + (open ? "block rounded shadow-lg" : "hidden")}>
                    <Menu className="mr-auto">
                        <MenuItem>
                            <Anchor icon="far fa-file-alt" caption="Docs" link="#" transparent={transparent}  />
                        </MenuItem>
                    </Menu>
                    <Menu className="lg:ml-auto">
                        <MenuItem>
                            <Anchor icon="fab fa-facebook" caption="Share" link="#" transparent={transparent} smartCaption />
                        </MenuItem>
                        <MenuItem>
                            <Anchor icon="fab fa-twitter" caption="Tweet" link="#" transparent={transparent} smartCaption />
                        </MenuItem>
                        <MenuItem>
                            <Anchor icon="fab fa-github" caption="Star" link="#" transparent={transparent} smartCaption />
                        </MenuItem>
                        <MenuItem>
                            <button className={(transparent ? "bg-white text-gray-800 active:bg-gray-100" : "bg-pink-500 text-white active:bg-pink-600") + " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"} type="button">
                                <i className="fas fa-arrow-alt-circle-down"></i>
                                <span>Download</span>
                            </button>
                        </MenuItem>
                    </Menu>
                </div>
            </Container>

        </NavBar>
        Hello, world!
    </Base>

export default Home
