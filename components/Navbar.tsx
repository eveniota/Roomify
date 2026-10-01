import React from 'react'
import {Box} from "lucide-react";
import Button from "./Button";
import {useOutletContext} from "react-router";

const Navbar = () => {
    const {isSignedIn, userName, signIn, signOut} = useOutletContext<AuthContext>();

    const handleAuthClick = async () => {
        if (isSignedIn) {
            try {
                await signOut();
            } catch (error) {
                console.log(`Puter sign out failuer: ${error}`);
            }
            return;
        }
        try {
            await signIn();
        } catch (error) {
            console.log(`Puter sign in unsuccessful: ${error}`);
        }
    };

    return (
        <header className="navbar">
            <nav className="inner">
                <div className="left">
                    <div className="brand">
                        <Box className="logo" />

                        <span className="name">
                            Roomify
                        </span>
                    </div>
                    <ul className="links">
                        <a href="#">Home</a>
                        <a href="#">Pricing</a>
                        <a href="#">Community</a>
                        <a href="#">Enterprise</a>
                    </ul>
                </div>
                <div className="actions">
                    {isSignedIn ? (
                        <>
                            <span className="greeting">Welcome, {userName}</span>
                            <Button size="sm" onClick={handleAuthClick} className="btn" variant="ghost">
                                Log Out
                            </Button>
                        </>
                    ) : (
                        <>
                        <button
                            onClick={handleAuthClick}
                            className="login">
                            Log In
                        </button>
                        </>
                    )}
                    <a href="#upload"
                       className="cta">Get Started</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;