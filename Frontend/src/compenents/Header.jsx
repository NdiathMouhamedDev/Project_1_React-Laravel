import Button from "./Button";
import Menu from "./Menu";

export default function Header({ title, onThemeToggle, theme, menuItems, onMenuClick, onInscriptionClick, children }) {
    const style = {
        display: "flex",
        position:"fixed",
        margin:"1rem 3rem",
        width:"90vw",
        justifyContent: "space-around",
        padding: "1rem 1rem",
        background: theme === "dark" ? "#181818" : "#fafafa",
        color: theme === "dark" ? "#fff" : "#181818",
        borderRadius:"2rem"
    };

    return (
        <header style={style}>
            <h1 style={{ margin: 0, fontSize: "1.5rem" }}>{title}</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                <Menu items={menuItems} theme={theme} onItemClick={onMenuClick} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                {children}
                <div>
                    <Button onClick={onInscriptionClick}>
                        S'inscrire
                    </Button>
                    <Button theme={theme} onClick={onThemeToggle}>
                        {theme === "dark" ? "☀️" : "🌑"}
                    </Button>
                </div>
            </div>
        </header>
    );
}