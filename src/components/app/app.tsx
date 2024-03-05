//import MainEmpty from "../../pages/main/main_empty";
import Main from "../../pages/main/main";
import Header from "../header";
import Footer from "../footer";

type AppScreenProps = {
    count_places: number;
    
    cities: string[];
    active_city_id: number;

    is_main: boolean;
    was_login: -1|0|1; //'-1' - не зашел, '0' - заходит, '1' - зашел 
    email?: string;
    favorite?: number;

    is_needing_footer: boolean;
}

function App(appScreenProps: AppScreenProps): JSX.Element {
    return (
        <div>
            <Header 
                is_main={appScreenProps.is_main} 
                was_login={appScreenProps.was_login} 
                email={appScreenProps.email}
                favorite={appScreenProps.favorite}
            />

            <Main
                count_places={appScreenProps.count_places}
                cities={appScreenProps.cities} 
                active_city_id={appScreenProps.active_city_id}
            />

            {appScreenProps.is_needing_footer && <Footer />}          
        </div>        
    );
}

export default App;