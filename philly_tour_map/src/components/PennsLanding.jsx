import React from "react";

function PennsLanding() {
    function openLink(){
        window.open('"https://en.wikipedia.org/wiki/Penn%27s_Landing"','blank');
    }
    return (
            <button className="Button" onClick={openLink}>
                Penn's Landing
            </button>
    );
}

export default PennsLanding;