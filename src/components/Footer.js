import React from 'react';
import './Header.css';

function Footer(){
    return (
        <footer className="App-footer">
            <h2 style={
                {
                    color: "#fff", 
                    backgroundColor: "#8b3238",
                    minHeight: 30,
                    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                    fontSize: 14,
                    padding: 10             
                }
            }>
            Copyright &#169; 2019
            </h2>
        </footer>
    )
}

export default Footer;