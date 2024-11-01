import { Routes } from "@generouted/react-router";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.tsx";

createRoot(document.getElementById("root")!).render(
    <Provider>
        <Routes />
    </Provider>,
);
