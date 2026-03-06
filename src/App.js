
// 1. IMPORTING STUFF (like borrowing tools)
import React, { useState, useEffect } from 'react';  // React tools we need
import './App.css';  // Our styles (we'll add this next)
import MusicPlayer from './MusicPlayer'; 
// 2. MAIN COMPONENT - The boss of everything
function App() {
    // STATE - Like little memory boxes that remember things
    // [variable, functionToChangeVariable] = useState(initialValue)
    const [unlocked, setUnlocked] = useState(false);  // Is birthday unlocked? Starts as false
    const [ageInput, setAgeInput] = useState('');      // What she types in the box
    const [wrongAge, setWrongAge] = useState(false);   // Did she type wrong age?
    
    // HER DETAILS - YOU MUST CHANGE THESE!
    const herAge = 21;           // ← CHANGE THIS to her new age
    const herName = "viva 4";      // ← CHANGE THIS to her name
    const herFavoriteLyrics = " ❤️ mariye ye marishet mar ❤️";  // ← CHANGE THIS
    
    // FUNCTION that runs when she clicks the button
    const handleUnlock = (e) => {
        e.preventDefault();  // Stops the page from refreshing
        
        // Check if what she typed matches her age
        if (parseInt(ageInput) === herAge) {  // parseInt turns text into number
            setUnlocked(true);     // Unlock the surprise!
            setWrongAge(false);    // No error message
        } else {
            setWrongAge(true);     // Show error message
            // Make error message disappear after 2 seconds
            setTimeout(() => setWrongAge(false), 2000);
        }
    };
    
    // IF/ELSE in React: Show different things based on 'unlocked'
    if (!unlocked) {
        // Show LOCK SCREEN
        return (
            <div className="lock-screen">
                <div className="lock-container">
                    {/* Gift box emoji */}
                    <div className="gift-box">🎁</div>
                    
                    {/* Title - using her name */}
                    <h1 className="lock-title">
                        A Birthday Surprise for {herName}!
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="lock-subtitle">
                        Enter the magic number to unlock
                    </p>
                    
                    {/* FORM where she types age */}
                    <form onSubmit={handleUnlock} className="lock-form">
                        <input
                            type="number"
                            value={ageInput}
                            onChange={(e) => setAgeInput(e.target.value)}
                            placeholder="Enter her new age..."
                            className={`lock-input ${wrongAge ? 'shake' : ''}`}
                            autoFocus
                        />
                        <button type="submit" className="unlock-btn">
                            Unlock Surprise ✨
                        </button>
                    </form>
                    
                    {/* Show error message if wrong age */}
                    {wrongAge && (
                        <p className="error-message">
                            🙅‍♀️ Nope! That's not ur age... try again!
                        </p>
                    )}
                    
                    {/* Hint */}
                    <p className="hint">
                        💡 Hint: It's the age u turning this year!
                    </p>
                </div>
            </div>
        );
    } else {
        // Show BIRTHDAY SURPRISE
        return (
            <div className="surprise-container">
                {/* Simple confetti effect */}
                <SimpleConfetti />
                
                {/* Header with her name and age */}
                <header className="birthday-header">
                    <h1 className="birthday-title">
                        🎉 HAPPY {herAge}th BIRTHDAY {herName}! 🎉
                    </h1>
                </header>
                
                {/* Main content area */}
                <div className="content-wrapper">
                    {/* PHOTO GALLERY SECTION */}
                    <section className="photo-gallery">
                        <h2 className="section-title">Our Memories 📸</h2>
                       <div className="gallery-grid">
    {/* PHOTO 1 */}
    <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her1.jpg" 
            alt="Memory 1"
            className="gallery-image"
        />
        <p className="photo-caption">my favorite pic 💕</p>
    </div>
    
    {/* PHOTO 2 */}
    <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her20.jpg" 
            alt="Memory 2"
            className="gallery-image"
        />
        <p className="photo-caption">ye selom lidet😅 🎉</p>
    </div>
    
    {/* PHOTO 3 */}
    <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her3.jpg" 
            alt="Memory 3"
            className="gallery-image"
        />
        <p className="photo-caption">Besties forever 👯‍♀️</p>
    </div>
    
    {/* PHOTO 4 */}
    <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her13.jpg" 
            alt="Memory 4"
            className="gallery-image"
        />
        <p className="photo-caption">haile birr likolin burger linbela weten keza demo desert 🍰 linbela abet guddd 😂</p>
    </div>
    
    {/* PHOTO 5 */}
    <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her21.jpg" 
            alt="Memory 5"
            className="gallery-image"
        />
        <p className="photo-caption">I did ur first nail 💖</p>
    </div>
    
    {/* PHOTO 6 */}
    <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her6.jpg" 
            alt="Memory 6"
            className="gallery-image"
        />
        <p className="photo-caption">yesew serg tihejaleshi atagbi mesloshal 🤣 🌟</p>
    </div>
    
    {/* PHOTO 7 */}
    <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her7.jpg" 
            alt="Memory 7"
            className="gallery-image"
        />
        <p className="photo-caption">Sister from another mesi 👯‍♀️</p>
    </div>
    
    {/* PHOTO 8 */}
    <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her8.jpg" 
            alt="Memory 8"
            className="gallery-image"
        />
        <p className="photo-caption">ur birthday idk which bd of u but I guess it is 17 right ??? ✨</p>
    </div>
    
    {/* PHOTO 9 */}
    <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her9.jpg" 
            alt="Memory 9"
            className="gallery-image"
        />
        <p className="photo-caption">My ride or die 🚗</p>
    </div>
    
    {/* PHOTO 10 */}
    <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her10.jpg" 
            alt="Memory 10"
            className="gallery-image"
        />
        <p className="photo-caption">yead lounge 📸</p>
    </div>
    
    {/* PHOTO 11 */}
    <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her11.jpg" 
            alt="Memory 11"
            className="gallery-image"
        />
        <p className="photo-caption">Love you bestie! 🤣 💕</p>
    </div>
    
    {/* PHOTO 12 - herpic1.jpg */}
    <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her18.jpg" 
            alt="Special Memory"
            className="gallery-image"
        />
        <p className="photo-caption">Timket </p>
    </div>
 <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her19.jpg" 
            alt="Special Memory"
            className="gallery-image"
        />
        <p className="photo-caption">my bd day abet bulanet </p>
    </div>
 <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her17.jpg" 
            alt="Special Memory"
            className="gallery-image"
        />
        <p className="photo-caption">LeTimket tseguran sirign bilesh metiche yemigerm siret neber gn fetashiw 😢😭  </p>
    </div>
 <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her30.jpg" 
            alt="Special Memory"
            className="gallery-image"
        />
        <p className="photo-caption">sitamriii ❤️💋</p>
    </div>   
 <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her31.jpg" 
            alt="Special Memory"
            className="gallery-image"
        />
        <p className="photo-caption"> ❤️ meskel 2018 ❤️ </p>
    </div>
 <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her32.jpg" 
            alt="Special Memory"
            className="gallery-image"
        />
        <p className="photo-caption">that was ma bd of 20th endatireshiw 🤣 </p>
    </div>  
 <div className="photo-card">
        <img 
            src="/my-bestie-BD-gift/images/her35.jpg" 
            alt="Special Memory"
            className="gallery-image"
        />
        <p className="photo-caption"> 🌟 u r ma sunshine 🤣❤️ 🌟</p>
    </div>                   
</div>
                    </section>
                    
                    {/* LYRICS SECTION */}
                   {/* LYRICS SECTION WITH MUSIC PLAYER INSIDE */}
<section className="lyrics-section">
    <h2 className="section-title">Your Song 🎵</h2>
    <div className="lyrics-card">
        {/* Taylor Swift - You Belong With Me lyrics box */}
        <div className="lyrics-content">
            <p className="lyrics-text">
                "mariye 🥰" 🎤
            </p>
            <p className="lyrics-message">
                This song always reminds me of the first time we went to a concert together with our family! 💕
            </p>
            
            {/* MUSIC PLAYER INSIDE THE LYRICS BOX */}
            <div className="lyrics-music-player-container">
                <MusicPlayer autoPlay={true} />
            </div>
        </div>
    </div>
</section>
                    
                    {/* MESSAGE SECTION */}
               <section className="message-section">
                        <div className="message-card">
                            <h3>To my favorite person,</h3>
                            <p>
                                Happy Birthday my bestie! I can't believe you're {herAge} already!
                                We've shared so many amazing memories together and I'm so grateful
                                to have you in my life. You make every day better just by being you.
                            </p>
                            <p>
                                Remember all those crazy moments like Jerika shiten ye abat teskar lay siyasferaran zebegnaw 🤣 , the tears actually we are not that much alkash togather gn yaw gn u were so akurafiii 🤣 and agabashibgnn ena ene baskuuu , and what i dont forget is like be block yetetalanew bicha u are the one belong with me always 
                                Those are the moments I'll cherish forever. You're not just my best friend,
                                you're my sister from another mesii🤣.
                            </p>
                            <p>
                                I hope your {herAge}th year brings you everything you've been dreaming of
                                and more. You deserve all the happiness in the world!
                            </p>
                            <p className="signature">
                                Love always,<br />
                                Your Bestie 💕
                            </p>
                        </div>
                    </section>
                </div> 
                </div>
        );
    }
} 
// SIMPLE CONFETTI COMPONENT - ADD THIS AT THE BOTTOM!
function SimpleConfetti() {
    useEffect(() => {
        // Create confetti effect
        const style = document.createElement('style');
        style.textContent = `
            .confetti-piece {
                position: fixed;
                top: -10px;
                width: 10px;
                height: 10px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                animation: fall linear forwards;
                z-index: 9999;
            }
            
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(720deg);
                }
            }
        `;
        document.head.appendChild(style);
        
        // Create confetti pieces
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = confetti.style.width;
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
        
        // Cleanup
        return () => {
            document.querySelectorAll('.confetti-piece').forEach(el => el.remove());
        };
    }, []);
    
    return null;
}


export default App;  // This makes App available to other files
