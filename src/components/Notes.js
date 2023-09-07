import { Link } from 'react-router-dom'
import './Notes.css'
export default function Notes() {

    return (
        <div className="section">
            <div className="section-note">
                <div className='header-section'>
                    <div className="title-notes">Notes</div>
                    <div className="btn-new"><span class="material-symbols-outlined">add</span><Link to="/new-notes" style={{textDecoration:'none',color:'white',margin:"0px",padding:"0px", textAlign:'center'}}>  New</Link></div>
                </div>
                <div className="notes-card">
                    <div className="notes-title">My workout routine certificateMy workout ...</div>
                    <div className="notes-sub-title">I need to do multiple round of chest workout and legs workout for tom..</div>
                    <div className="notes-date">22:24 PM 22 jun</div>
                </div>
                <div className="notes-card">
                    <div className="notes-title">My workout routine certificateMy workout ...</div>
                    <div className="notes-sub-title">I need to do multiple round of chest workout and legs workout for tom..</div>
                    <div className="notes-date">22:24 PM 22 jun</div>
                </div>
                <div className="notes-card">
                    <div className="notes-title">My workout routine certificateMy workout ...</div>
                    <div className="notes-sub-title">I need to do multiple round of chest workout and legs workout for tom..</div>
                    <div className="notes-date">22:24 PM 22 jun</div>
                </div>
                <div className="notes-card">
                    <div className="notes-title">My workout routine certificateMy workout ...</div>
                    <div className="notes-sub-title">I need to do multiple round of chest workout and legs workout for tom..</div>
                    <div className="notes-date">22:24 PM 22 jun</div>
                </div>
                <div className="notes-card">
                    <div className="notes-title">My workout routine certificateMy workout ...</div>
                    <div className="notes-sub-title">I need to do multiple round of chest workout and legs workout for tom..</div>
                    <div className="notes-date">22:24 PM 22 jun</div>
                </div>
            </div>
        </div>
    )
}