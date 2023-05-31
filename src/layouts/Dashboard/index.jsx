import { Outlet } from "react-router-dom";
import { Container, Main } from "./styles";
import Header from "../../components/Header";


const Dashboard = () => {
    return(
        <>
            <Container>
               <Header />
               <Main>
                   <Outlet />
               </Main>
            </Container>
        </>
    );
}

export default Dashboard;