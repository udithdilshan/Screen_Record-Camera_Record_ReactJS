import React, {useEffect, useRef} from 'react';
import {ReactMediaRecorder, useReactMediaRecorder} from "react-media-recorder";

const RecordView = ({start}) =>{
    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl
    } = useReactMediaRecorder({ screen:true});
    return (
        <div>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <video src={mediaBlobUrl} controls autoplay loop />
        </div>
      );
    };

    class RecordCam extends React.Component {
        render() {
            return (
                <div>
                        <RecordView />
                </div>
            );
        }
    }

export default RecordCam;