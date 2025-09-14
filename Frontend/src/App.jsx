
import './App.css';
import { ThemeProvider, useTheme } from './compenents/ThemeContext';
import Header from './compenents/Header';
import Accueil from './compenents/Accueil';
import Programme from './compenents/Programme';
import Propos from './compenents/Propos';
import Contact from './compenents/Contact';
import FormulaireInscription from './compenents/FormulaireInscription';
import FormulaireContact from './compenents/Contact';
import Footer from './compenents/Footer';
import { useState, useRef } from 'react';

function MainApp() {
    const { theme, toggleTheme } = useTheme();
    const menuItems = ["Accueil","Programme", "À propos", "Contact"];
    const [showInscription, setShowInscription] = useState(false);
    // refs pour chaque section
    const accueilRef = useRef(null);
    const programmeRef = useRef(null);
    const proposRef = useRef(null);
    const contactRef = useRef(null);

    // Scroll vers la section demandée
    const handleMenuClick = (item) => {
        let ref = null;
        if (item === "Accueil") ref = accueilRef;
        else if (item === "Programme") ref = programmeRef;
        else if (item === "À propos") ref = proposRef;
        else if (item === "Contact") ref = contactRef;
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div style={{maxWidth:"100vw", minHeight: '100vh', background: theme === 'dark' ? '#181c20' : '#f7f7f7' }}>
            <Header
                title="Voyage"
                onThemeToggle={toggleTheme}
                theme={theme}
                menuItems={menuItems}
                onMenuClick={handleMenuClick}
                onInscriptionClick={() => setShowInscription(true)}
            />
            <div ref={accueilRef} id="accueil">
                <Accueil
                    title="As salamu anleykum wa rahmatullah"
                    description="Bienvenue ! Le Voyage de Touba devient plus accessible grâce à cette application. Consultez le programme, inscrivez-vous en ligne ."
                    theme={theme}
                />
            </div>
            <div ref={programmeRef} id="programme">
                <Programme theme={theme} />
            </div>
            <div ref={proposRef} id="propos">
                <Propos theme={theme} />
            </div>
            <div ref={contactRef} id="contact">
                <Contact theme={theme} />
            </div>
            {showInscription && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    background: "rgba(0,0,0,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1000
                }}>
                    <div style={{ position: "relative", zIndex: 1001 }}>
                        <FormulaireInscription theme={theme} onSubmit={() => setShowInscription(false)} />
                        <button onClick={() => setShowInscription(false)} style={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            background: "#B88A2A",
                            color: "#fff",
                            border: "none",
                            borderRadius: "50%",
                            width: 32 ,
                            height: 32,
                            fontSize: 18,
                            cursor: "pointer"
                        }}>×</button>
                    </div>
                </div>
            )}
            <Footer theme={theme} />
        </div>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <MainApp />
        </ThemeProvider>
    );
}
