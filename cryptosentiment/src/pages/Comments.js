import React from 'react';
import { useHistory } from 'react-router-dom';

function Comments() {
    return (
        <>
        <body>
            <h1>Comments</h1>
            <h3>Bitcoin</h3>
            <p>See where we got our info from directly!</p>
            <div>
                <div id="user">
                    <div id="theuser">
                        <img src="../usericon.webp"></img>
                        <h5>Daren1</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsam sit quod fugit debitis, ut pariatur sunt rem praesentium culpa quibusdam nisi soluta maxime asperiores numquam. Earum totam inventore similique.</p>
                </div>
                <div id="user">
                    <div id="theuser">
                    <img src="../usericon.webp"></img>
                    <h5>Harold541</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsam sit quod fugit debitis, ut pariatur sunt rem praesentium culpa quibusdam nisi soluta maxime asperiores numquam. Earum totam inventore similique.</p>
                </div>
                <div id="user">
                    <div id="theuser">
                    <img src="../usericon.webp"></img>
                    <h5>Karen</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsam sit quod fugit debitis, ut pariatur sunt rem praesentium culpa quibusdam nisi soluta maxime asperiores numquam. Earum totam inventore similique.</p>
                </div>
                <div id="user">
                    <div id="theuser">
                    <img src="../usericon.webp"></img>
                    <h5>Narcos911</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsam sit quod fugit debitis, ut pariatur sunt rem praesentium culpa quibusdam nisi soluta maxime asperiores numquam. Earum totam inventore similique.</p>
                </div>
            </div>
            <form action="../index.html">
                <button type="submit">Back to Home</button>
            </form>
        </body>
        
        </>
    )
}


export default Comments;