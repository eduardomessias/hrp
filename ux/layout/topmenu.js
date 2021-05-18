// ux/components/layout/topmenu.js

import NavBar from '../components/navbar/nav.js'
import Container from '../components/navbar/container.js'
import NonCollapsable from '../components/navbar/noncollapsable.js'
import Collapsable from '../components/navbar/collapsable.js'
import Hamburger from '../components/navbar/hamburger.js'
import Brand from '../components/navbar/brand.js'
import Menu from '../components/navbar/menu.js'
import MenuItem from '../components/navbar/menuitem.js'
import Anchor from '../components/navbar/anchor.js'


const TopMenu = ({transparent}) =>
    <NavBar transparent={transparent}>
        <Container>
            <NonCollapsable>
                <Brand name="Home resources planning" transparent={transparent} />
                <Hamburger transparent={transparent} />                    
            </NonCollapsable>
            <Collapsable>
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
                            {" "}
                            <span>Download</span>
                        </button>
                    </MenuItem>
                </Menu>
            </Collapsable>
        </Container>
    </NavBar>

export default TopMenu
