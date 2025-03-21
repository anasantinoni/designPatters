interface Media {
    play(): void;
    stop(): void;
}

class AudioMedia implements Media {
    play(): void {
        console.log('Reproduzindo áudio...');
    }
    stop(): void {
        console.log('Áudio pausado.');
    }
}

class VideoMedia implements Media {
    play(): void {
        console.log('Reproduzindo vídeo...');
    }
    stop(): void {
        console.log('Vídeo pausado.');
    }
}

class PodcastMedia implements Media {
    play(): void {
        console.log('Reproduzindo podcast...');
    }
    stop(): void {
        console.log('Podcast pausado.');
    }
}

class MediaFactory {
    static createMedia(type: string): Media {
        if (type === 'audio') {
            return new AudioMedia();
        } else if (type === 'video') {
            return new VideoMedia();
        } else if (type === 'podcast') {
            return new PodcastMedia();
        } else {
            throw new Error('Tipo de mídia não suportado.');
        }
    }
}

const mediaType = 'video'; 
const media = MediaFactory.createMedia(mediaType);
media.play();
media.stop();
