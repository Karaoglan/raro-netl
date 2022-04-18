import "./assets/css/plugins/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "./assets/scss/style.scss";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import Router from "./Router/routes";
function App() {
    const getLibrary = (provider) => {
        const library = new Web3Provider(provider, "any");
        library.pollingInterval = 15000;
        return library;
    };

    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <div className="App overflow-hidden">
                <Router />
            </div>
        </Web3ReactProvider>
    );
}

export default App;
