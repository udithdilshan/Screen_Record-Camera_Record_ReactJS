import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useReactMediaRecorder } from "react-media-recorder";//cam
import useMediaRecorder from '@wmik/use-media-recorder';//screen
function Player({ srcBlob, audio }) {
    if (!srcBlob) {
        return null;
    }

    if (audio) {
        return <audio src={URL.createObjectURL(srcBlob)} controls />;
    }

    return (
        <video
            src={URL.createObjectURL(srcBlob)}//screen
            width={520}
            height={480}
            controls
        />
    );
}

const ScreenRecorder = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        start() {
            startRecording()
        },
        stop() {
            stopRecording()
        },
        save()
        {
           name(mediaBlob)
        }

    }));
    const {
        error,
        status,
        mediaBlob,
        stopRecording,
        getMediaStream,
        startRecording
    } = useMediaRecorder({
        recordScreen: true,
        blobOptions: { type: 'video/mp4' },
        mediaStreamConstraints: { audio: true, video: true }
    });
    return (
        <article>
            <h1>Screen recorder</h1>
            {error ? `${status} ${error.message}` : status}
            {startRecording}
            <section>
                <button
                    type="button"
                    onClick={getMediaStream}
                    disabled={status === 'ready'}
                >
                    Share screen
                </button>
            </section>
            <Player srcBlob={mediaBlob} />
        </article>
    );
});
function name(params) {
    console.log(params);
}
const RecordCam = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        start() {
            startRecording()
        },
        stop() {
            stopRecording()
        },
        save()
        {
          name(mediaBlobUrl)
        }
    }));

    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl
    } = useReactMediaRecorder({ video: true,type: "video/mp4" });
    return (
        <div>
            <h1>Cam recorder</h1>
            <p>{status}</p>
            <video src={mediaBlobUrl} controls />
            {/* cam */}
        </div>
    );
});
const RecordAll = () => {
    const screen = useRef();
    const cam = useRef();
    return <div>
        <button onClick={function (event) { screen.current.start(); cam.current.start() }}>Start Recording</button>
        <button onClick={function (event) { screen.current.stop(); cam.current.stop() }}>Stop Recording</button>
        <button onClick={function (event) { screen.current.save(); cam.current.save() }}>Save Recording</button>
        <RecordCam ref={cam} />
        <ScreenRecorder ref={screen} />
    </div>
}

class RecordAllMedia extends React.Component {
    render() {
        return (
            <RecordAll />
        );
    }
}

export default RecordAllMedia;