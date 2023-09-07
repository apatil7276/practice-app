import { useState } from 'react'
import './NewNotes.css'

export default function NewNotes() {
    const [vid, setVideo] = useState(null)
    const [image, setImage] = useState(null);
    const [audio, setAudio] = useState(null)


    const handleChange = e => {
        console.log(e)
        
            setImage( URL.createObjectURL(e.target.files[0]));
    
    };
    const handleVideoChange = (e) => {
        console.log(e.target.files[0])
        console.log('DEMO,......', URL.createObjectURL(e.target.files[0]))
        setVideo(URL.createObjectURL(e.target.files[0]))
    }
    const handleAudeoChange = (e) => {
        console.log(e.target.files[0])
        console.log('DEMO,......', URL.createObjectURL(e.target.files[0]))
        setAudio(URL.createObjsectURL(e.target.files[0]))
    }
    return (
        <div className="new-section">
            <div className="section-new-note">

                <div className="new-note-header">
                    <span class="material-symbols-outlined">
                        keyboard_backspace
                    </span>
                    <button className='btn-save'>Save</button>
                </div>

                <input type="text" className='input-area' placeholder='Title' />
                <textarea id="w3review" className='input-text-area' name="w3review" cols="50" placeholder='Start typing...'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, rem
                </textarea>
                <div className="d" style={{ display: 'flex', alignItems: 'center', justifyContent: "center",paddingBottom:10}}><audio src={audio} controls style={{width:'100%'}}/></div>
                {
                    image?<div className="d" style={{ display: 'flex', alignItems: 'center', justifyContent: "center",paddingBottom:10,maxWidth:1040 }}>
                    <img src={image} width="100%" height="100%" />
                </div>:""
                }
                {
                    vid?<iframe src={vid} width="100%" height="1000"></iframe>:""
                }
                <div className="d" style={{ display: 'flex', justifyContent: 'space-around', padding:10 }}>
                    <div className="d" style={{ width: 65, height: 38, borderRadius: 8, background: '#E9F1F6', display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                        <label htmlFor="upload-button">
                            <span class="material-symbols-outlined" style={{ color: '#579BC3' }}  >
                                image
                            </span>
                        </label>
                        <input
                            type="file"
                            id="upload-button"
                            style={{ display: "none" }}
                            onChange={handleChange}
                        />

                    </div>
                    <div className="d" style={{ width: 65, height: 38, borderRadius: 8, background: '#E9F1F6', display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                        {/* <label htmlFor="upload-button">
                            <span class="material-symbols-outlined" style={{ color: '#579BC3' }}>
                                videocam
                            </span>
                        </label> */}
                        <input
                            type="file"
                            id="upload-button"
                            // style={{ display: "none" }}
                            onChange={handleVideoChange}
                        />
                    </div>
                    <div className="d" style={{ width: 65, height: 38, borderRadius: 8, background: '#E9F1F6', display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                        <label htmlFor="upload-button">
                            <span class="material-symbols-outlined" style={{ color: '#579BC3' }}>
                                mic
                            </span>
                        </label>
                        <input
                            type="file"
                            // id="upload-button"
                            // style={{ display: "none" }}
                            onChange={handleAudeoChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}