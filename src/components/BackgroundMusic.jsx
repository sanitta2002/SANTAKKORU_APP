import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        // Attempt to play on mount (might fail due to autoplay policy)
        if (audioRef.current) {
            audioRef.current.volume = 0.3; // Low background volume
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
            }
        }
    }, []);

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !muted;
            setMuted(!muted);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <audio 
                ref={audioRef} 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Jingle_Bells_-_Kevin_MacLeod.ogg" 
                loop 
            />
            <button 
                onClick={toggleMute}
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md border border-white/20 transition-all text-white"
            >
                {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
        </div>
    );
};

export default BackgroundMusic;
