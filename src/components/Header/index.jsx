import { HeaderContainer, HeaderLogo, HeaderNav } from "./styles";

import { useLocation } from "react-router-dom";

import 'boxicons';


const Header = () => {

    const location = useLocation();

    return(
      <>
        <HeaderContainer>
            <HeaderLogo>
                LOGO
            </HeaderLogo>
            <HeaderNav>
                <ul>
                    <li>
                        <a 
                        href="/" 
                        className={ location.pathname ==='/' ? 'active' : '' }>
                            <box-icon name="home" color={ location.pathname ==='/' ? 'blueviolet' : 'white' }></box-icon> Home
                        </a>
                    </li>
                    
                    <li>
                        <a href="/salas" 
                        className={ location.pathname ==='/salas' ? 'active' : '' }>
                            <box-icon name='door-open' color={ location.pathname ==='/salas' ? 'blueviolet' : 'white' } ></box-icon> Salas
                        </a>
                    </li>
                    
                    <li>
                        <a href="/responsaveis" 
                        className={ location.pathname ==='/responsaveis' ? 'active' : '' }>
                            <box-icon name='user'color={ location.pathname ==='/responsaveis' ? 'blueviolet' : 'white' } ></box-icon> Responsáveis
                        </a>
                    </li>
                    
                    <li>
                        <a href="/eventos" 
                        className={ location.pathname ==='/eventos' ? 'active' : '' }>
                            <box-icon name='calendar-event' color={ location.pathname ==='/eventos' ? 'blueviolet' : 'white' } ></box-icon> Eventos
                        </a>
                    </li>
                </ul>
            </HeaderNav>
        </HeaderContainer>
      </>
    );
  }
  
export default Header;