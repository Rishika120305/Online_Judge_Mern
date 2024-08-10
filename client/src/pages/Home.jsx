import React from 'react';
import websitebackgroundImage from '../assets/websitebackground.jpg'; // Import the image

const Home = () => {
    return (
        <div style={{ ...styles.container, backgroundImage: `url(${websitebackgroundImage})` }}>
            <section style={styles.heroSection}>
                <h1 style={styles.title}>Welcome to Code Case</h1>
                <p style={styles.subtitle}>Code, Compile, Conquer – Anywhere, Anytime</p>
            </section>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        backgroundColor: '#1e1e2f',
        backgroundSize: 'cover', // Ensure the background image covers the container
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent repeating of the background image
        color: '#fff', // White text to stand out on dark background
        padding: '20px',
    },
    heroSection: {
        textAlign: 'center',
        border: '2px solid #3e8ef7', // Blue border to make it pop
        borderRadius: '8px',
        padding: '50px',
        maxWidth: '800px',
        backgroundColor: '#2c2c3e',
    },
    title: {
      fontSize: '48px',
      margin: '0',
      paddingBottom: '20px',
      color: 'white',
      fontFamily: 'Arial, sans-serif', // Change the font family
      fontWeight: 'bold', // Make the font bold
      fontStyle: 'italic', // Make the font italic if desired
  },
    subtitle: {
        fontSize: '24px',
        margin: '0',
        color: 'white', // Green accent for emphasis
    },
};

export default Home;

